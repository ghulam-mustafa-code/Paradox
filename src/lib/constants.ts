export const SITE_NAME = "ZERO-PARADOX";
export const TAGLINE = "Logic Meets Imagination.";
export const SUPPORTING_TEXT =
  "ZERO-PARADOX is a Pakistan-based software house building custom software, AI solutions, web applications, SaaS platforms and digital products for businesses and startups.";

export const DOMAIN = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://zeroparadox.com"
).replace(/\/$/, "");

export const CONTACT_INFO = {
  email: "hello@zeroparadox.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Technologies", href: "/technologies" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
