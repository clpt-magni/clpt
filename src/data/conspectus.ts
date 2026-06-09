export interface ConspectusPage {
  index: number;
  src: string;
  title: string;
}

export const conspectusPages: ConspectusPage[] = Array.from({ length: 40 }, (_, i) => ({
  index: i + 1,
  src: `/images/conspectus/page${i + 1}.jpg`,
  title: i === 0 ? "Cover" : `Page ${i + 1}`,
}));
