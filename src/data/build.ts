export interface BuildItem {
  name: string;
  description: string;
  url: string;
}

export const build: BuildItem[] = [
  {
    name: 'AI Patterns',
    description: 'Sixteen named patterns for working with AI.', 
    url: 'https://ai-patterns.antoniodesign.work/',
  },
  {
    name: 'aweekend',
    description: 'A calculator for the build-vs-buy question. Is it worth a weekend?',
    url: 'https://aweekend.antoniodesign.work/',
  },
];
