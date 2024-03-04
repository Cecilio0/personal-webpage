export interface NavBarItem {
  field: string;
  route: string;
}

export const items = [
  {
    // Logo placeholder
    field: "</>",
    route: "/personal-webpage",
  },
  {
    field: "Projects",
    route: "/personal-webpage/projects",
  },
  {
    field: "Contact",
    route: "/personal-webpage/contact",
  },
];
