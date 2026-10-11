export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

export const CAREER_PERKS = [
  {
    title: "Continuous Learning",
    description:
      "Access to courses, technical workshops, and mentorship to grow your skillset.",
    iconName: "BookOpen",
  },
  {
    title: "Professional Growth",
    description:
      "Clear advancement paths and opportunities to lead client and product projects.",
    iconName: "TrendingUp",
  },
  {
    title: "Real-World Impact",
    description:
      "Work directly on high-impact web apps, AI tools, and production SaaS products.",
    iconName: "Rocket",
  },
  {
    title: "Flexible Work",
    description:
      "Remote-first mindset, flexible work hours, and focus on output rather than hours.",
    iconName: "Clock",
  },
];

export const JOB_POSTINGS: JobPosting[] = [];
