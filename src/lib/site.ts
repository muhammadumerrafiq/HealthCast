export const site = {
  name: "HealthCast",
  legalName: "HEALTH CAST SMC PVT LTD.",
  tagline: "The growth partner for modern healthcare.",
  description:
    "HealthCast unites medical research, digital marketing, media production and engineering — helping healthcare organisations communicate with clarity, prove impact with evidence, and grow with confidence.",
  url: "https://www.healthcast.com.pk",
  email: "healthcastpk1@gmail.com",
  phone: "+92 328 8637836",
  phoneHref: "+923288637836",
  whatsapp: "923288637836",
  address: {
    line1: "CMA Hospital Pearl Arcade, F-block",
    line2: "Kohistan Enclave, Wah Cantt",
    country: "Pakistan",
  },
} as const;

export type NavItem = { label: string; href: string; hasMenu?: boolean };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/healthcast_podcast?igsh=MjN6NWFlZmZyOHJq",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@healthcast_podcast?_r=1&_t=ZS-98SeehdXsoO",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@healthcast-podcast?si=cO_0hJijenMPNzNm",
  },
] as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi HealthCast — I'd like to talk about a project.",
)}`;

/**
 * Client logos lifted from the design brief. Names are unknown, so each entry
 * carries a neutral alt string — swap in real client names when available.
 */
export const clientLogos = [
  { src: "/clients/client-1.jpeg", alt: "Client logo" },
  { src: "/clients/client-2.png", alt: "Client logo" },
  { src: "/clients/client-3.jpeg", alt: "Client logo" },
  { src: "/clients/client-4.jpeg", alt: "Client logo" },
  { src: "/clients/client-5.jpeg", alt: "Client logo" },
  { src: "/clients/client-6.jpeg", alt: "Client logo" },
  { src: "/clients/client-7.jpeg", alt: "Client logo" },
  { src: "/clients/client-8.jpeg", alt: "Client logo" },
  { src: "/clients/client-9.jpeg", alt: "Client logo" },
  { src: "/clients/client-10.jpeg", alt: "Client logo" },
  { src: "/clients/client-11.jpeg", alt: "Client logo" },
  { src: "/clients/client-12.jpeg", alt: "Client logo" },
];

/**
 * PLACEHOLDER FIGURES — the brief contained no metrics.
 * "12 organisations" is the only grounded number (12 client logos supplied).
 * Confirm the rest with HealthCast before launch.
 */
export const stats = [
  { value: 12, suffix: "+", label: "Healthcare organisations served" },
  { value: 40, suffix: "+", label: "Campaigns & projects delivered" },
  { value: 4, suffix: "", label: "Disciplines under one roof" },
  { value: 98, suffix: "%", label: "Client retention rate" },
];
