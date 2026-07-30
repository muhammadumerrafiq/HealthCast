import type { LucideIcon } from "lucide-react";
import { Activity, Film, Megaphone, MonitorSmartphone } from "lucide-react";

export type Service = {
  slug: string;
  index: string;
  title: string;
  icon: LucideIcon;
  /** Four or five words, for the header dropdown. */
  tagline: string;
  /** One line for cards. */
  summary: string;
  /** Two or three sentences for the detail page hero. */
  intro: string;
  /** Capabilities, verbatim from the design brief. */
  capabilities: string[];
  /** What the client actually walks away with. */
  deliverables: string[];
  /** Why HealthCast, for this discipline. */
  outcomes: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "digital-marketing",
    index: "01",
    title: "Digital Marketing",
    icon: Megaphone,
    tagline: "Campaigns, SEO, PPC and analytics",
    summary:
      "Targeted campaigns, audience research and analytics that turn reach into measurable patient and partner growth.",
    intro:
      "Healthcare marketing carries a burden other sectors do not: every claim has to hold up. We build campaigns on real audience research and defensible messaging, then measure them against outcomes that matter — enquiries, enrolments, referrals — not vanity impressions.",
    capabilities: [
      "Targeted healthcare marketing campaigns",
      "Audience research and personas",
      "Content planning",
      "Performance analytics and ROI",
      "Social media management",
      "Healthcare SEO",
      "PPC campaigns",
      "Email marketing automation",
    ],
    deliverables: [
      "Audience and persona research pack",
      "Quarterly content and channel calendar",
      "Campaign creative, copy and landing pages",
      "Live performance dashboard with monthly readout",
    ],
    outcomes: [
      {
        title: "Built on evidence, not guesswork",
        body: "Persona work and search demand analysis come before a single ad runs, so budget follows genuine intent.",
      },
      {
        title: "Compliant by construction",
        body: "Clinical claims are reviewed against source material before publication, keeping campaigns defensible.",
      },
      {
        title: "Attribution you can defend",
        body: "Every channel reports into one dashboard, so you always know what produced the enquiry.",
      },
    ],
  },
  {
    slug: "medical-research",
    index: "02",
    title: "Medical Research",
    icon: Activity,
    tagline: "Study design, analysis and writing",
    summary:
      "Study design, statistical analysis and scientific writing — from protocol through to publication-ready manuscript.",
    intro:
      "Our research team supports the full arc of a study: framing the question, designing a protocol that will survive review, analysing the data honestly, and writing it up for the audience that needs to act on it — regulators, funders, clinicians or the public.",
    capabilities: [
      "Clinical study design",
      "Observational studies",
      "Literature reviews",
      "Statistical analysis",
      "Scientific writing",
      "Regulatory & ethical support",
      "Grant proposals",
      "Stakeholder communication",
    ],
    deliverables: [
      "Protocol and statistical analysis plan",
      "Systematic or narrative literature review",
      "Reproducible analysis with figures and tables",
      "Manuscript, grant proposal or regulatory dossier",
    ],
    outcomes: [
      {
        title: "Methodologically sound",
        body: "Sample size, endpoints and analysis plan are fixed before data collection, not fitted afterwards.",
      },
      {
        title: "Ethics and regulatory ready",
        body: "Submissions are prepared to the format each committee expects, cutting revision cycles.",
      },
      {
        title: "Written for its reader",
        body: "The same evidence, translated for a journal, a funder, a ministry or a patient audience.",
      },
    ],
  },
  {
    slug: "it-solutions",
    index: "03",
    title: "IT Solutions",
    icon: MonitorSmartphone,
    tagline: "Websites, platforms and accessibility",
    summary:
      "Accessible, secure websites and platforms — built to healthcare standards from the first commit.",
    intro:
      "We design and build the digital infrastructure healthcare organisations run on: websites, portals and internal platforms. Accessibility and data protection are treated as requirements at the start of a project, which is considerably cheaper than treating them as a fix at the end.",
    capabilities: [
      "Responsive web design",
      "Cloud Hosting & Deployment",
      "API Integration & Automation",
      "Custom websites & platforms",
      "Healthcare UI/UX",
      "CMS integration",
      "Healthcare SEO",
      "Maintenance & support",
    ],
    deliverables: [
      "UX architecture, wireframes and design system",
      "Production build with CMS for your team",
      "Accessibility and security review before launch",
      "Ongoing maintenance, monitoring and support",
    ],
    outcomes: [
      {
        title: "Accessible to every patient",
        body: "Built to WCAG guidance — keyboard navigable, screen-reader tested, legible at any zoom level.",
      },
      {
        title: "Security taken seriously",
        body: "Data handling designed around HIPAA-aligned practice, with least-privilege access throughout.",
      },
      {
        title: "Yours to run",
        body: "A CMS your own team can edit confidently, with documentation and handover training included.",
      },
    ],
  },
  {
    slug: "production",
    index: "04",
    title: "Production",
    icon: Film,
    tagline: "Film, photography, motion and audio",
    summary:
      "End-to-end media production — scripting, filming, post and motion graphics for health communication.",
    intro:
      "From a single explainer to a full campaign, we handle production end to end. Clinical accuracy sits alongside craft: scripts are checked against source material, and the finished piece is cut for the platform it will actually live on.",
    capabilities: [
      "End-to-end media production",
      "Videography & photography",
      "Scriptwriting",
      "Post production",
      "Motion graphics",
      "Voice-over",
      "Live streaming",
      "Health communication content",
    ],
    deliverables: [
      "Concept, script and storyboard",
      "Studio or on-location shoot",
      "Edit, grade, sound mix and motion graphics",
      "Platform-ready cuts, captions and stills",
    ],
    outcomes: [
      {
        title: "Clinically checked",
        body: "Scripts are reviewed against source material before the camera is switched on.",
      },
      {
        title: "Cut for the platform",
        body: "One shoot, delivered as vertical, square and landscape edits with burned-in captions.",
      },
      {
        title: "Filmed with care",
        body: "Crews experienced in clinical environments — patient dignity and consent handled properly.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

export const process = [
  {
    step: "01",
    title: "Listen",
    body: "We start with your clinicians, your data and your audience — not with a template. Discovery ends in a written brief you sign off.",
  },
  {
    step: "02",
    title: "Design",
    body: "Strategy, protocol or prototype, depending on the discipline. Everything is reviewed before a single deliverable is produced.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "One accountable team across research, creative and engineering, working to agreed milestones and a fixed scope.",
  },
  {
    step: "04",
    title: "Measure",
    body: "Results reported against the outcomes we agreed at the start, then fed back into the next cycle of work.",
  },
];
