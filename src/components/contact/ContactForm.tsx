"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot check — bot hits are silently ignored.
    if (data.website) return;

    // Client-side validation
    const next: Errors = {};
    const name = (data.name ?? "").trim();
    const email = (data.email ?? "").trim();
    const message = (data.message ?? "").trim();

    if (!name) {
      next.name = "Please enter your name.";
    }
    if (!email) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message) {
      next.message = "Please tell us about the project.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6bfb40db-11c8-4d8f-a664-cf8a64da79f0",
          name,
          email,
          organisation: data.organisation?.trim() || "—",
          service: data.service?.trim() || "General Enquiry",
          message,
          subject: `New Enquiry from ${name}${data.organisation ? ` (${data.organisation})` : ""}`,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setStatus("sent");
        form.reset();
        return;
      }

      setStatus("error");
      setNotice("Something went wrong. Please try again in a moment.");
    } catch {
      setStatus("error");
      setNotice("Something went wrong. Please try again in a moment.");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex h-full min-h-96 flex-col items-center justify-center rounded-3xl border border-line bg-surface p-10 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
          <CheckCircle2 className="size-7" strokeWidth={1.8} aria-hidden />
        </span>
        <h3 className="mt-6 text-title font-semibold text-ink">
          Thank you!
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          Your enquiry has been sent successfully. We'll get back to you soon.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-line bg-surface p-7 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          placeholder="Ayesha Khan"
          error={errors.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@organisation.com"
          error={errors.email}
          required
        />
        <Field
          label="Organisation"
          name="organisation"
          placeholder="Hospital, clinic or company"
        />
        <SelectField
          label="What can we help with?"
          name="service"
          options={services.map((service) => service.title)}
        />
      </div>

      <div className="mt-5">
        <Field
          as="textarea"
          label="Tell us about the project"
          name="message"
          placeholder="A short summary of what you are trying to achieve, and any deadlines we should know about."
          error={errors.message}
          required
        />
      </div>

      {/* honeypot — hidden from people, irresistible to bots */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div
              role="alert"
              className="mt-5 flex gap-3 rounded-2xl border border-gold/40 bg-gold-soft/40 p-4 text-sm text-ink"
            >
              <TriangleAlert
                className="mt-0.5 size-4 shrink-0 text-gold-deep"
                strokeWidth={2}
                aria-hidden
              />
              <span>{notice}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" && (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          )}
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          We reply within two working days.
        </p>
      </div>
    </form>
  );
}

/* -------------------------------------------------------------------- */

function buildMailto(data: Record<string, string>) {
  const body = [
    `Name: ${data.name ?? ""}`,
    `Organisation: ${data.organisation || "—"}`,
    `Service: ${data.service || "—"}`,
    "",
    data.message ?? "",
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry from ${data.name ?? "the website"}`,
  )}&body=${encodeURIComponent(body)}`;
}

const fieldBase =
  "w-full rounded-xl border bg-canvas px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/30 " +
  "transition-[border-color,background-color,box-shadow] duration-300 outline-none " +
  "focus:border-gold focus:bg-surface focus:ring-4 focus:ring-gold/15";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  return (
    <div className={as === "textarea" ? "sm:col-span-2" : undefined}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-ink-600"
      >
        {label}
        {required && <span className="ml-1 text-gold-deep">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={cn(
            fieldBase,
            "resize-y",
            error ? "border-red-400/70" : "border-line",
          )}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={cn(fieldBase, error ? "border-red-400/70" : "border-line")}
        />
      )}

      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-ink-600"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className={cn(
          fieldBase,
          "border-line cursor-pointer appearance-none bg-[right_1rem_center] bg-no-repeat pr-11",
          // chevron drawn in, since appearance-none removes the native one
          "bg-[url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235c6f6b%22 stroke-width=%222.2%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')]",
        )}
      >
        <option value="">Not sure yet</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
