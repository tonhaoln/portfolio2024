export interface BuildItem {
  name: string;
  description: string;
  url: string;
}

export const build: BuildItem[] = [
  {
    name: 'AI Patterns',
    description: 'A pattern catalogue for working with AI.',
    url: 'https://ai-patterns.antoniodesign.work/',
  },
  {
    name: 'aweekend',
    description: 'A quick estimate for the SaaS build-or-replace decision.',
    url: 'https://aweekend.antoniodesign.work/',
  },
];
