import React from "react";
import Image from "next/image";

const EducationExperience = ({ entries }) => {
  return (
    <div className="container mx-auto p-4">
      {entries.map((entry, index) => (
        <div key={index} className="p-2">
          <div className="collapse collapse-arrow border border-base-300  rounded-box bg-primary">
            <input type="checkbox" className="peer" id={`toggle-${index}`} hidden />{" "}
            {/* Agregado id y clase para controlar el estado */}
            <label
              htmlFor={`toggle-${index}`}
              className="collapse-title text-xl font-medium block cursor-pointer accordion-title"
            >
              {" "}
              {/* Etiqueta for apuntando al input */}
              {entry.title} - <strong>{entry.date}</strong>
            </label>
            <div className="collapse-content peer-checked:block hidden bg-light text-primary accordion-detail ">
              {" "}
              {/* Utiliza peer-checked para controlar la visibilidad */}
              <ul className="list-disc pl-5">
                {entry.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Image
                  src={entry.image}
                  alt="Certificate"
                  width={600} // Define un ancho específico
                  height={400} // Define una altura específica
                  className="my-spacing-2 max-w-300 h-auto mx-auto sm:my-spacing-3" // Asegura que esté centrado y controla el tamaño máximo
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationExperience;
