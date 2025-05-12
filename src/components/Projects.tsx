import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

function Projects() {
  const projects = [
    {
      title: "My Pacific Crest Trail Experience",
      image: "/fullSiteScreenshots/pct_site_cropped.jpg",
      description:
        "An app I built to display my favorite photos from a 6-month solo journey along the Pacific Crest Trail.",
      link: "/pct",
      github: "https://github.com/willbee28/willdotcom",
    },
    {
      title: "150th Anniversary",
      image: "/fullSiteScreenshots/lighthouse_site.jpg",
      description:
        "A website I made for a client who needed a site to celebrate the 150th anniversary of a lighthouse, with event information and tickets.",
      link: "https://thomaspoint150th.com/",
      github: "https://github.com/willbee28/lighthouse-anniversary",
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-[#DDA15E]">
      <div className="mx-auto md:max-w-6xl max-w-sm px-4 md:py-52 py-24">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center md:text-left text-4xl font-bold text-[#283618] md:ml-24 mb-24">
            My Projects
          </h2>
        </motion.section>

        <div className="grid gap-8 md:grid-cols-2 grid-cols-1">
          {projects.map((project, index) => {
            const image = (
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover image-color-scroll"
              />
            );
            const link = // if route start with "/" this is a local route, otherwise it's an external link
              project.link[0] === "/" ? (
                <Link to={project.link} key={index}>
                  {image}
                </Link>
              ) : (
                <a
                  href={project.link}
                  key={index}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {image}
                </a>
              );
            return (
              <div className="bg-[#343634] rounded-md p-5" key={project.link}>
                <div className="text-[#fefae0] mb-1">
                  <div className="">{project.description}</div>
                  <a
                    href="https://github.com/willbee28"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex justify-end mr-2"
                  >
                    <FaGithub
                      size={20}
                      className=" hover:scale-130 duration-300 mb-1"
                    />
                  </a>
                </div>
                <div className="h-72 overflow-hidden rounded-sm border-[#fefae0] border-1">
                  {link}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
