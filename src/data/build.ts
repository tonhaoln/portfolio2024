export interface BuildItem {
  name: string;
  description: string;
  url: string;
}

export const build: BuildItem[] = [
  {
    name: 'February',
    description: 'A writing surface for your AI context. Local files, silent Git, any model.', 
    url: 'https://github.com/tonhaoln/february-os',
  },
  {
    name: 'AI Patterns',
    description: 'Sixteen named patterns for working with AI.', 
    url: 'https://ai-patterns.antoniodesign.work/',
  },
  {
    name: 'A Weekend',
    description: 'A calculator for the build-vs-buy question. Is it worth a weekend?',
    url: 'https://aweekend.antoniodesign.work/',
  },
];
