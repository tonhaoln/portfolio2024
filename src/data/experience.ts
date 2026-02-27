export interface ExperienceItem {
  dates: string;
  position: string;
  workplace: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    dates: '2024 – Now',
    position: 'Lead Designer & Developer',
    workplace: 'Emptyhead Digital',
    description:
      'End-to-end delivery for organisations including OzHarvest, Australian Youth Orchestra, and MJ: The Musical.',
  },
  {
    dates: '2021 – 2023',
    position: 'Senior UX Designer',
    workplace: 'WORK180',
    description:
      'Platform features and design system. 275% organic traffic increase across 100+ employer profiles.',
  },
  {
    dates: '2014 – 2021',
    position: 'Lead Digital Designer & Frontend Developer',
    workplace: 'ACMN',
    description:
      'Large-scale live event brands across Australia and New Zealand, including The Book of Mormon Musical, CATS, and Sydney Festival.',
  },
  {
    dates: '2013 – 2014',
    position: 'Digital Designer',
    workplace: 'Fairfax Media',
    description:
      'National campaigns for The Sydney Morning Herald, The Age, and the Australian Financial Review.',
  },
];
