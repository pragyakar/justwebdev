export interface ISite {
  id: string;
  label: string;
  thumbnailUrl: string;
  siteUrl: string;
  repoUrl: string;
  description?: string;
}

const sites: ISite[] = [
  {
    id: "jwd-001",
    label: "Versus",
    thumbnailUrl: "/images/versus.png",
    siteUrl: "https://pragyakar.github.io/versus/",
    repoUrl: "https://github.com/pragyakar/versus",
    description: "",
  },
  {
    id: "jwd-002",
    label: "Apprentice",
    thumbnailUrl: "/images/apprentice.png",
    siteUrl: "https://pragyakar.github.io/Apprentice/",
    repoUrl: "https://github.com/pragyakar/apprentice",
    description: "",
  },
  {
    id: "jwd-003",
    label: "Hamro IPO",
    thumbnailUrl: "/images/hamro-ipo.png",
    siteUrl: "https://hamro-ipo.vercel.app/",
    repoUrl: "https://github.com/pragyakar/hamro-ipo",
    description: "",
  },
];

export default sites;
