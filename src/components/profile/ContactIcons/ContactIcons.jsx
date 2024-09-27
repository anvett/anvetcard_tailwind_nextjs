import React, { useState } from 'react';

const ContactIcons = ({ contacts }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleContactClick = (contact) => {
    if (contact.type === 'location') {
      setModalContent(contact);
      setShowModal(true);
    } else {
      window.location.href = contact.action;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-spacing-1">
      {contacts.map((contact) => (
        <button key={contact.type} onClick={() => handleContactClick(contact)} className="btn btn-circle btn-accent">
          <img src={contact.icon} alt={`${contact.type} icon`} className="w-full h-full object-cover"/> {/* Usando imágenes PNG como iconos */}
        </button>
      ))}

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box bg-gradient-primary">
            <h3 className="text-size-2 font-bold text-center text-light">Dirección y Horarios</h3>
            <p className='text-center pb-spacing-2 text-light'>{modalContent.address}</p>
            <p className='text-center pb-spacing-2 text-light'>{modalContent.hours}</p>
            <div className="modal-action">
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(modalContent.address)}`} className="btn contact-button">Ver en Google Maps</a>
              <a href="#" className="btn contact-button" onClick={() => setShowModal(false)}>Cerrar</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactIcons;

