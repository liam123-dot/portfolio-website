// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { projects } from '@/projects';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Liam Buchanan - Portfolio</title>
        <meta name="description" content="Portfolio website of Liam Buchanan - Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Liam Buchanan - Porfolio</h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Hi there, thank you for looking at my portfolio website. Here I show some of the projects I have made that I am proud of.
            I am currently a student at the University of Exeter, set to finish my bachelors in July 2025. I am an advanced Python developer,
            with intermediate/advanced skills in the following: Typescript/Javascript, Next.js/React.js, and Java. Through my university degree
            and a lot of self teaching, I also have good knowledge of rest APIs, web scraping, docker, AWS and asynchronous development. 
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                
                  <ProjectCard project={project} />
                
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;