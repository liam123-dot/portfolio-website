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
      as is used in Next.js and other frontend design principles. As I made this with a specific customer in mind, it taught me
      how to effectively collect information about requirements, and make these come into reality.
    `,
    gallery: [
      { type: 'image', src: '/hero-image.png', alt: 'Biziscan screenshot' },
      { 
        type: 'video', 
        src: 'https://vzodkrjyv6t05evx.public.blob.vercel-storage.com/biziscan-demo-l9BnOon7zsUz3EevJ93PndeqmDjb8y', 
        alt: 'Biziscan demo video' 
      },
    ],
    links: {
      github: [
        // { url: 'https://github.com/yourusername/project1', label: 'GitHub Repository' }
      ],
      demo: [
        { url: 'https://www.biziscan.com', label: 'Website' }
      ],
      // Uncomment and update if you have an "other" link:
      // other: [
      //   { url: 'https://project1.com', label: 'Other' }
      // ]
    },
    keySkills: [
      'OCR',
      'Data Extraction',
      'React',
      'Next.js',
      'MongoDB',
      'Stripe',
      'Whapi (Whatsapp API provider)',
      'Webhooks',
      'User Authentication (Google, User/Password)'
    ],
  },
  {
    id: 'ticketstar',
    title: 'Ticket marketplace app',
    description: 'An IOS and Android app that allowed users to resell event tickets at my university',
    detailedDescription: 'I built this app due to the large number of scams that take place at my university due to people buying and selling tickets directly through a facebook group. I was able to get several hundred sign ups and faciliate a few transactions before having to shut down due to the reselling policies of the events. Despite this, this project was my first where I learned and implemented a client/server architecture with an effective backend and secure user authentication.',
    technicalDescription: 'The app was made with React Native and Typescript. For the backend I used Python with AWS Lambda, Cognito and S3, utilising the AWS SAM (Serverless Application Model), as well as a serverless MySQL database provided by Planetscale. It also integrated with Stripe to accept payments and payout to sellers, utilising webhooks for payment confirmation and notifications.',
    gallery: [
      {
        type: 'image',
        src: '/ticketstar-demo-1.png',
        alt: 'Ticketstar Demo 1'
      },
      {
        type: 'image',
        src: '/ticketstar-demo-2.png',
        alt: 'Ticketstar Demo 2'
      },
      { 
        type: 'video',
        src: 'https://vzodkrjyv6t05evx.public.blob.vercel-storage.com/ticketstar-demo-o6DMeqog2G5NWRTWaBGvBGCk9neufX',
        alt: 'Ticketstar demo video'
      }
    ],
    links: {
      github: [
        { url: 'https://github.com/liam123-dot/Ticketstar-app', label: 'App Github' },
        { url: 'https://github.com/liam123-dot/Ticketstar-api', label: 'API Github' }
      ],
    },
    keySkills: [
      'React Native',
      'AWS',
      'Microservice (Serverless) Architecture',
      'Python backend',
      'Stripe',
      'User Authentication'
    ]
  },
  {
    id: 'ticket-bot',
    title: 'Ticketing Bot',
    description: 'Using Python, I built a bot that allowed me to buy event tickets that were incredibly difficult to get due to high demand and an app that would crash due to the demand; and a website that allowed me to sell these.',
    detailedDescription: 'This was my first project that served a real useful purpose to me, and was my intro into HTTP requests and API design. I reverse engineered the API that the ticketing website used and directly used the Python requsts module to allow me to create accounts and buy tickets. I also made a website to sell these tickets which reached £2000 a month in revenue and served 250+ customers.',
    technicalDescription: 'For this bot I had a simple approach. I created a Python class that represended an account, this would log in and retrieve the correct cookies and tokens to buy tickets. It would then consantly moniter the website for when tickets released and instantly reserve and purchase. Once I got it working, I set up an AWS EC2 instance to host the bot so it was always running and had low latency. To get scale, I implemented multi-threading, so each thread would run one of the account objects and check for ticket drops, and the different threads would safetly communicate between each other to notify others when releases happened. The website I created allowed users to select from the tickets I have and pay for them, I also set up an affiliate system which tracked who brought me customers, and they would receive a share of the profit.',
    links: {
      github: [
        {
          url: 'https://github.com/liam123-dot/TicketWebsite', label: 'Website Github' 
        }
      ]
    },
    keySkills: [
      'HTTP Requests',
      'Reverse Engineered API',
      'Python',
      'Web Scraping',
      'Multi Threading'
    ]
  }
];