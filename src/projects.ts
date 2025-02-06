// projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'biziscan',
    title: 'Biziscan',
    description:
      'I developed Biziscan over a couple of weeks in summer after I was given the long task of extracting details from hundreds of business cards sent into a Whatsapp group chat at the company.',
    detailedDescription: `
      This website is a production ready website, with live capabilities for users to sign up, create organisations, pay for the service and start uploading business cards.
      The website itself contains a basic CRUD interface for the contacts that have been uploaded. I used a Whatsapp api provider to allow the 
      users to add a contact to their group chats, or message directly and it extracts any contact information from the image and save to the sites
      database. Additionally, I made a Zapier integration that allows users to further connect any CRM software they use. This project is my largest
      by far and taught me lots about error handling, effective database design and API best practises. I also learned about server side rendering,
      as is used in Next.js and other frontend design principles.
    `,
    gallery: [
      { type: 'image', src: '/hero-image.png', alt: 'Biziscan screenshot' },
      { type: 'video', src: 'https://vzodkrjyv6t05evx.public.blob.vercel-storage.com/biziscan-demo-l9BnOon7zsUz3EevJ93PndeqmDjb8y', alt: 'Biziscan demo video' },
    ],
    links: {
      github: 'https://github.com/yourusername/project1',
      demo: 'https://www.biziscan.com',
      // other: 'https://project1.com',
    },
    keySkills: ['OCR', 'Data Extraction', 'React', 'Next.js', 'MongoDB', 'Stripe', 'Whapi (Whatsapp API provider)', 'Webhooks', 'User Authentication (Google, User/Password)'],
  },
  {
    id: 'ticketstar',
    title: 'Ticket marketplace app',
    description: 'An IOS and Android app that allowed users to resell event tickets at my University',
    detailedDescription: '',
    gallery: [],
    links: {
      github: '',
    },
    keySkills: ['React Native', 'AWS', 'Microservice (Serverless) Architecture', 'Python backend', 'Stripe', 'Authentication']
  }
];