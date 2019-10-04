interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Processus Comptable'
  },
  {
    name: 'Consultations',
    url: 'formulaire',
    icon: 'icon-note',
    children: [
      {
        name: 'Nouvelle Consultations',
        url: 'consultations',
        icon: 'icon-note'
      },
      {
        name: 'Devis reçus ',
        url: 'consultations/devis',
        icon: 'icon-note'
      }
    ]
  },
  {
    name: 'Bon De Commande',
    url: 'bon-de-commande',
    icon: 'icon-note'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Employees',
  },
  {
    name: 'Liste',
    url: 'employees',
    icon: 'icon-people'
  },
  {
    name: 'Gestion ',
    url: 'GestE',
    icon: 'icon-pencil'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Fournisseurs',
  },
  {
    name: 'Liste',
    url: 'fournisseurs',
    icon: 'icon-people'
  },
  {
    name: 'Gestion ',
    url: 'GestF',
    icon: 'icon-pencil'
  }
];
