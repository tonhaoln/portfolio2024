export interface BuildItem {
  name: string;
  description: string;
  url: string;
}

export const build: BuildItem[] = [
  {
    name: 'AI Patterns',
    description: 'A catalogue of 16 named AI design patterns and 8 laws.',
    url: 'https://ai-patterns.antoniodesign.work/',
  },
  {
    name: 'aweekend',
    description: 'A quick estimate for the SaaS build-or-replace decision.',
    url: 'https://aweekend.antoniodesign.work/',
  },
];
