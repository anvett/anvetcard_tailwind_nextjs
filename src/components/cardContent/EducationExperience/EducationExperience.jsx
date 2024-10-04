// import React from "react";
// import Image from "next/image";

// const EducationExperience = ({ entries }) => {
//   return (
//     <div className="container mx-auto p-4">
//       {entries.map((entry, index) => (
//         <div key={index} className="p-2">
//           <div className="collapse collapse-arrow border border-base-300  rounded-box bg-primary">
//             <input type="checkbox" className="peer" id={`toggle-${index}`} hidden />{" "}
//             {/* Agregado id y clase para controlar el estado */}
//             <label
//               htmlFor={`toggle-${index}`}
//               className="collapse-title text-xl font-medium block cursor-pointer accordion-title"
//             >
//               {" "}
//               {/* Etiqueta for apuntando al input */}
//               {entry.title} - <strong>{entry.date}</strong>
//             </label>
//             <div className="collapse-content peer-checked:block hidden bg-light text-primary accordion-detail ">
//               {" "}
//               {/* Utiliza peer-checked para controlar la visibilidad */}
//               <ul className="list-disc pl-5">
//                 {entry.details.map((detail, detailIndex) => (
//                   <li key={detailIndex}>{detail}</li>
//                 ))}
//               </ul>
//               <div className="flex justify-center">
//                 <Image
//                   src={entry.image}
//                   alt="Certificate"
//                   width={600} // Define un ancho específico
//                   height={400} // Define una altura específica
//                   className="my-spacing-2 max-w-300 h-auto mx-auto sm:my-spacing-3" // Asegura que esté centrado y controla el tamaño máximo
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EducationExperience;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EducationExperience = ({ entries }) => {
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
    }),
  };

  const slideDown = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const zoomOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="container mx-auto p-4">
      {entries.map((entry, index) => (
        <motion.div
          key={index}
          className="p-2"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="collapse collapse-arrow border border-base-300 rounded-box bg-primary"
            variants={zoomOnHover} // Aplicando el zoom en hover
          >
            <input type="checkbox" className="peer" id={`toggle-${index}`} hidden />
            <label
              htmlFor={`toggle-${index}`}
              className="collapse-title text-xl font-medium block cursor-pointer accordion-title whitespace-normal"
            >
              {entry.title} - <strong>{entry.date}</strong>
            </label>

            <AnimatePresence>
              <motion.div
                className="collapse-content peer-checked:block hidden bg-light text-primary accordion-detail"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideDown} // Animación suave para desplegar el accordion
              >
                <ul className="list-disc pl-5">
                  {entry.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>

                {/* Animación de ease-in en la imagen */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeIn" } }}
                >
                  <Image
                    src={entry.image}
                    alt="Certificate"
                    width={600}
                    height={400}
                    className="my-spacing-2 max-w-300 h-auto mx-auto sm:my-spacing-3"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationExperience;
