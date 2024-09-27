import React from 'react';

const ContactButtons = ({ contacts }) => {
  return (
    <div className="flex flex-wrap justify-center gap-spacing-1 mx-spacing-1 mb-spacing-2">
      {contacts.map((contact) => (
        <a key={contact.type} href={contact.action} className="contact-button flex items-center justify-center gap-2 p-2 flex-auto min-w-0">
          <img src={contact.icon} alt={`${contact.type} icon`} className="w-6 h-6" />
          <span>{contact.text}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactButtons;
