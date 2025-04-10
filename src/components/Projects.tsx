function Projects() {
  const projects = [
    {
      title: "Cool App",
      image: "/fullSiteScreenshots/pct_site_cropped.png",
      description: "A really cool app I built to solve X problem.",
      link: "https://wborwegen.com/pct",
    },
    {
      title: "Design Tool",
      image: "/fullSiteScreenshots/lighthouse_site.png",
      description: "A design tool made with love and React.",
      link: "https://thomaspoint150th.com/",
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-[#DDA15E]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl font-bold text-[#283618] ml-24 mb-16">
          My Projects
        </h2>
        <div className="grid gap-8 grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#343634] rounded-md p-5">
              <div className="h-72 overflow-hidden rounded-sm">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover image-animated"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
