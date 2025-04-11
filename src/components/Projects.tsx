import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "My Pacific Crest Trail Experience",
      image: "/fullSiteScreenshots/pct_site_cropped.png",
      description:
        "A small app I built to display my favorite photos from a 6-month solo journey along the Pacific Crest Trail.",
      link: "https://wborwegen.com/pct",
    },
    {
      title: "150th Anniversary",
      image: "/fullSiteScreenshots/lighthouse_site.png",
      description:
        "A website I made for a client who needed a site to celebrate the 150th anniversary of a lighthouse, with event information and tickets.",
      link: "https://thomaspoint150th.com/",
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-[#DDA15E]">
      <div className="mx-auto max-w-6xl px-4 py-52">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#283618] ml-24 mb-24">
            My Projects
          </h2>
        </motion.section>

        <div className="grid gap-8 grid-cols-2">
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
                <div className="text-[#fefae0] h-24">
                  {/* <div className="text-xl ">{project.title}</div> */}
                  <div className="">{project.description}</div>
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
