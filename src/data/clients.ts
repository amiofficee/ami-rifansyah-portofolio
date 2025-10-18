export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  href?: string | null;
};

export const clientLogos: ClientLogo[] = [
  {
    id: 'c1',
    name: 'PT. IKAKA TRI MANUNGGAL',
    src: '/images/logo/ikakav2.png', // letakkan logo1.jpg di folder public root atau sesuaikan path-nya
    href: 'https://www.ikakatrimanunggal.com/',
  },
  {
    id: 'c2',
    name: 'Indojaya Soes',
    src: '/images/logo/indojaya.png', // letakkan logo2.jpg di folder public root atau sesuaikan path-nya
    href: 'https://www.indojayasoes.com/',
  },
];


