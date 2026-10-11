export interface TeamMember {
  id: string;
  roleTitle: string;
  placeholderName: string;
  specialization?: string;
  bio?: string;
  initials: string;
  avatarColor: string;
  image?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "ceo",
    roleTitle: "Founder / CEO",
    placeholderName: "Muhammad Hammad ul Hassan",
    specialization: "Executive Leadership & Strategy",
    bio: "Drives product strategy, enterprise partnerships, and overall vision for ZeroParadox.",
    initials: "FC",
    avatarColor: "from-blue-600 to-indigo-600",
    image: "/CEO.png",
  },
  {
    id: "cto",
    roleTitle: "Chief Technology Officer",
    placeholderName: "Muhammad Saqib Javed",
    specialization: "System Architecture & Engineering",
    bio: "Leads engineering teams, cloud infrastructure design, and core tech stack decisions.",
    initials: "CT",
    avatarColor: "from-violet-600 to-purple-600",
  },
  {
    id: "ghulam-mustafa",
    roleTitle: "ML / AI Engineer",
    placeholderName: "Ghulam Mustafa",
    specialization: "Applied Machine Learning",
    bio: "Builds and trains the model pipelines that power product features end to end.",
    initials: "GM",
    avatarColor: "from-blue-600 to-indigo-600",
    image: "/ML.png",
  },
];
