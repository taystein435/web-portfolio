import image from "../assets/image.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 2,
      title: "CatPals",
      image: image3,
      demoLink: "https://cat-pals.vercel.app/",
      githubLink: "https://github.com/taystein435",
    },

    {
      id: 4,
      title: "EventFinder",
      image: image,
      demoLink: "https://event-finder-zeta.vercel.app/",
      githubLink: "https://github.com/taystein435",
    },
    {
      id: 5,
      title: "Airline App",
      image: image4,
      demoLink:
        "https://airline-app-nextjs-shadcn-type-script-tailwind-postgress.vercel.app/",
      githubLink:
        "https://github.com/taystein435/Airline-App-Nextjs-Shadcn-TypeScript-Tailwind-Postgress-",
    },
    {
      id: 6,
      title: "Play Event",
      image: image5,
      demoLink: "https://playevents.netlify.app/",
      githubLink:
        "https://github.com/taystein435/playevents?tab=readme-ov-file",
    },
    {
      id: 7,
      title: "DevHub",
      image: image6,
      demoLink: "https://developers-and-designers-marketplace.vercel.app/",
      githubLink:
        "https://github.com/taystein435/Developers-and-Designers-Marketplace",
    },
  ];

  return (
    <>
      <div className="bg-white m-10 max-w-full" id="projects">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl mt-10 font-bold text-gray-800">
            Some Of My Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-md mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden md:max-w-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out"
            >
              <div className="md:flex">
                <div className="p-8">
                  <div className="md:shrink-0 p-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-semibold text-blue-600 hover:text-blue-400 transition-colors duration-200"
                    >
                      {project.title}
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-4xl text-gray-800 hover:text-gray-600 mt-2 inline-block transition-colors duration-200"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
