import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "My Pacific Crest Trail Experience",
      image: "/fullSiteScreenshots/pct_site_cropped.png",
      description:
        "A small app I built to display my favorite photos from a 6-month solo journey along the Pacific Crest Trail.",
      link: "https://wborwegen.com/pct",
      github: "https://github.com/willbee28/willdotcom",
    },
    {
      title: "150th Anniversary",
      image: "/fullSiteScreenshots/lighthouse_site.png",
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
          {projects.map((project, index) => (
            <a
              href={project.link}
              className=""
              key={index}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div
                key={index}
                className="bg-[#343634] rounded-md p-5 hover:scale-101 duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all ease-in "
              >
                <div className="text-[#fefae0] mb-1">
                  <div className="">{project.description}</div>
                  <a
                    href="https://github.com/willbee28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-end mr-2"
                  >
                    <FaGithub
                      size={20}
                      className=" hover:scale-140 duration-300 mb-1"
                    />
                  </a>
                </div>
                <div className="h-72 overflow-hidden rounded-sm border-[#fefae0] border-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover image-animated"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
