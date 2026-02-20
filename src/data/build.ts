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
    name: 'Build vs. Buy',
    description: 'A calculator for the SaaS build-or-keep decision.',
    url: '#', // replace with live URL
  },
];
