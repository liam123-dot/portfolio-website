import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import { projects } from '@/projects';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Liam Buchanan - Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Liam Buchanan - Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Liam Buchanan - Portfolio
            </h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Hi there, thank you for looking at my portfolio website. Here I
              show some of the projects I have made that I am proud of. I am
              currently a student at the University of Exeter, set to finish my
              bachelors in July 2025. I am an advanced Python developer, with
              intermediate/advanced skills in Typescript/Javascript, Next.js/React.js,
              and Java. Through my university degree and a lot of self teaching,
              I also have good knowledge of REST APIs, web scraping, Docker, AWS,
              and asynchronous development.
            </p>
          </div>
        </header>

        <section>
          {/* Projects header with CV Button aligned to the right */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Projects
            </h2>
            <div>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-2 py-1 border border-gray-300 text-gray-900 dark:text-white rounded bg-transparent transition-transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <span className="text-sm">CV</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              // <Link key={project.id} href={`/projects/${project.id}`}>
                <ProjectCard project={project} key={project.id}/>
              // </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;