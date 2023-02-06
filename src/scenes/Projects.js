// import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../img/project-1.png";
import Project2 from "../img/project-2.png";
import Project3 from "../img/project-3.png";
import Project4 from "../img/project-4.png";
import Project5 from "../img/project-5.png";
import Project6 from "../img/project-6.png";



const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};



const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">

          </div>
        </div>
        <p className="mt-10 mb-10">

        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <div>
            <a 
              href="https://adelinadev.github.io/Alivio/" 
              target="_blank" 
              rel="noreferrer"
              className="hover01"  
            >
              <img src={Project1} alt='Project1'/>
            </a>  
          </div>


          {/* ROW 2 */}
          <div>
            <a 
                href="https://adelinadev.github.io/Beauty-Clinic-project/" 
                target="_blank" 
                rel="noreferrer"
                className="hover01"  
              >
                <img src={Project4} alt='Project4'/> 
            </a>         
          </div>
          
          <div>
            <a 
                href="https://adelinadev.github.io/Snake-Game/" 
                target="_blank" 
                rel="noreferrer"
                className="hover01"  
              >
              <img src={Project5} alt='Project5'/>
            </a>
          </div>
          <div>
          <a 
              href="https://adelinadev.github.io/travel-landing-page-V2/" 
              target="_blank" 
              rel="noreferrer"
              className="hover01"  
            >
            <img src={Project3} alt='Project3'/></a>
          </div>


          {/* ROW 3 */}
          <div>
          <a 
              href="https://adelinadev.github.io/preview-img/" 
              target="_blank" 
              rel="noreferrer"
              className="hover01"  
            >
            <img src={Project6} alt='Project6'/>
          </a>
          </div>
          <div>
          <a 
              href="https://adelinadev.github.io/age-calculator/" 
              target="_blank" 
              rel="noreferrer"
              className="hover01"  
            >
            <img src={Project2} alt='Project2'/></a>
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
