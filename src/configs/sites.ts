export interface ISite {
  id: string;
  label: string;
  thumbnailUrl: string;
  description?: string;
}

const sites: ISite[] = [
  {
    id: "jwd-001",
    label: "Versus",
    thumbnailUrl: "/images/versus.png",
    description: "",
  },
  {
    id: "jwd-002",
    label: "Apprentice",
    thumbnailUrl: "/images/apprentice.png",
    description: "",
  },
  {
    id: "jwd-003",
    label: "Hamro IPO",
    thumbnailUrl: "/images/hamro-ipo.png",
    description: "",
  },
];

export default sites;
