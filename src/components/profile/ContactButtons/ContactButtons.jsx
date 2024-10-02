// import React from 'react';

// const ContactButtons = ({ contacts }) => {
//   return (
//     <div className="flex flex-wrap justify-center gap-spacing-1 mx-spacing-1 mb-spacing-2">
//       {contacts.map((contact) => (
//         <a key={contact.type} href={contact.action} className="contact-button flex items-center justify-center gap-2 p-2 flex-auto min-w-0">
//           <img src={contact.icon} alt={`${contact.type} icon`} className="w-6 h-6" />
//           <span>{contact.text}</span>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default ContactButtons;

import React, { useState } from 'react';

const ContactButtons = ({ contacts }) => {
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
    <div className="flex flex-wrap justify-center gap-spacing-1 mx-spacing-1 mb-spacing-2">
      {contacts.map((contact) => (
        <button
          key={contact.type}
          onClick={() => handleContactClick(contact)}
          className="contact-button flex items-center justify-center gap-2 p-2 flex-auto min-w-0"
        >
          <img src={contact.icon} alt={`${contact.type} icon`} className="w-6 h-6" />
          <span>{contact.text}</span>
        </button>
      ))}

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box bg-gradient-primary">
            <h3 className="text-size-2 font-bold text-center text-light">Dirección y Horarios</h3>
            <p className='text-center pb-spacing-2 text-light'>{modalContent.address}</p>
            <p className='text-center pb-spacing-2 text-light'>{modalContent.hours}</p>
            <div className="modal-action">
              <a href={modalContent.googleMapsLink} className="btn contact-button" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
              <a href="#" className="btn contact-button" onClick={() => setShowModal(false)}>Cerrar</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButtons;

