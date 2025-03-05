import { motion } from "framer-motion";
import { Link } from "react-router";

function LandingText() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="flex-grow flex items-center">
      <div className="flex flex-col sm:w-3/5 w-4/5 mx-auto text-[#283618]">
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <div className="text-5xl pb-16">Hi there</div>
          </motion.div>
          <div className="lg:pl-8">
            <motion.div variants={itemVariants}>
              <p className="text-3xl sm:text-5xl">
                I'm
                <span className="text-5xl sm:text-7xl"> Will Borwegen</span> and
                I work in UI/UX development
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-3xl pt-16">
                {" "}
                You can check out some of my latest travels{" "}
                <Link
                  to="/pct"
                  className="hover:cursor-pointer hover:underline text-blue-700"
                >
                  here &rarr;
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.header>
      </div>
    </div>
  );
}

export default LandingText;
