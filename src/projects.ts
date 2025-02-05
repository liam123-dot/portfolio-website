// projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'biziscan',
    title: 'Biziscan',
    description:
      'I developed Biziscan over a couple of weeks in summer after I was given the long task of extracting details from hundreds of business cards sent into a Whatsapp group chat at my company.',
    gallery: [
      { type: 'image', src: '/hero-image.png', alt: 'Project 1 screenshot' },
      { type: 'video', src: '/videos/project1-demo.mp4', alt: 'Project 1 demo video' },
    ],
    links: {
      github: 'https://github.com/yourusername/project1',
      demo: 'https://www.biziscan.com',
      // other: 'https://project1.com',
    },
    keySkills: ['OCR', 'Data Extraction', 'React', 'Next.js', 'Stripe', 'Whapi (Whatsapp API provider)', 'Webhooks', 'User Authentication (Google, User/Password)'],
  },
  // {
  //   id: 'project-2',
  //   title: 'Awesome Project 2',
  //   description:
  //     'This is a detailed description of Project 2. It highlights the design process, user feedback, and unique features of the project.',
  //   gallery: [
  //     { type: 'image', src: '/images/project2-1.jpg', alt: 'Project 2 screenshot' },
  //     { type: 'image', src: '/images/project2-2.jpg', alt: 'Project 2 second screenshot' },
  //   ],
  //   links: {
  //     github: 'https://github.com/yourusername/project2',
  //     demo: 'https://project2.demo.com',
  //   },
  //   keySkills: ['UI/UX Design', 'Figma', 'Tailwind CSS'],
  // },
  // Add more projects as needed
];