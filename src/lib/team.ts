export type Member = {
  name: string;
  role: string;
  /** Short line shown on the team page. */
  bio: string;
  /** Leadership members surface on the homepage preview. */
  leadership: boolean;
  image?: string;
  imagePosition?: string;
  imageScale?: string;
};

/**
 * The brief lists four leadership names; the live site lists six people.
 * Both sets are included — trim or extend as HealthCast prefers.
 */
export const team: Member[] = [
  {
    name: "Kafeel ur Rehman",
    role: "Founder",
    bio: "Set HealthCast up around a simple idea: healthcare organisations deserve the same standard of communication and technology as any other sector.",
    leadership: true,
    image: "/assets/Kafeel ur Rehman.png",
    imagePosition: "object-[center_15%]",
  },
  {
    name: "Laeeq Ahmed",
    role: "Chief Executive Officer",
    bio: "Leads the practice day to day, holding research, creative and engineering to one shared standard of delivery.",
    leadership: true,
    image: "/assets/Laeeq Ahmed.png",
    imagePosition: "object-[center_15%]",
  },
  {
    name: "Abdullah Yasir",
    role: "Manager",
    bio: "Heads engineering — websites, platforms and the accessibility and security standards they are built to.",
    leadership: true,
    image: "/assets/Abdullah Yasir.png",
    imagePosition: "object-[center_15%]",
  },
  {
    name: "Hassaan Shahid",
    role: "Tech Team Head",
    bio: "Keeps delivery running: environments, releases, uptime and the support desk behind every live project.",
    leadership: true,
    image: "/assets/Hassaan.png",
    imagePosition: "object-[center_15%]",
  },
  {
    name: "Dabeer ul Hassan",
    role: "Videographer",
    bio: "Captures healthcare stories, campaign shoots, interviews, and event coverage while maintaining consistent visual quality.",
    leadership: false,
    image: "/assets/Dabeer.png",
  },
  {
    name: "Ali Islam",
    role: "Video Editor",
    bio: "Edits marketing videos, reels, and healthcare content into polished, engaging visual experiences.",
    leadership: false,
    image: "/assets/Ali.png",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Rahiba Shakeel",
    role: "Video Editor",
    bio: "Produces clean, engaging edits for educational content, promotional campaigns, and social media videos.",
    leadership: false,
  },
  {
    name: "Haroon Khan",
    role: "Video Editor",
    bio: "Transforms raw footage into compelling healthcare stories with smooth pacing and professional finishing.",
    leadership: false,
    image: "/assets/Haroon.png",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Muhammad Umer Rafiq",
    role: "Junior Web Developer",
    bio: "Builds and maintains responsive website components while supporting front end development and continuous improvements.",
    leadership: false,
    image: "/assets/Umer.png",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Mahnoor Hameed",
    role: "UI/UX, Graphic Designer",
    bio: "Designs intuitive user experiences, brand visuals, marketing creatives, and digital assets across HealthCast platforms.",
    leadership: false,
  },
];

export const initials = (name: string) =>
  name
    .split(" ")
    .filter((part) => part.length > 2 || /^[A-Z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
