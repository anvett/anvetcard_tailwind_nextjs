import React, { useState } from "react";
import Image from "next/image";

const GalleryWithModal = ({ items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer">
            <div onClick={() => openModal(item)} className="shadow-lg">
              <Image
                src={item.type === 'video' ? item.thumbnail : item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <h3 className="gallery-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center flex flex-col">
              {/* Conditional rendering for video or image */}
              {selectedItem.type === "video" ? (
                <video controls width="500">
                  <source src={selectedItem.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={500}
                  height={300}
                  className="object-cover"
                />
              )}
              <h3 className="text-primary section-h4 pt-spacing-1">{selectedItem.title}</h3>

              <ul className="text-left list-disc list-inside text-primary">
                {selectedItem.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <p className="modal-highlight">{selectedItem.highlight}</p>
              <div className="flex gap-spacing-1 pt-spacing-2">
                <a
                  href={`https://wa.me/yournumber?text=Desearía%20saber%20más%20sobre%20${encodeURIComponent(
                    selectedItem.title
                  )}`}
                  className="main-button text-sm"
                >
                  Contactar por WhatsApp
                </a>
                <button onClick={closeModal} className="main-button text-sm  ">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWithModal;
