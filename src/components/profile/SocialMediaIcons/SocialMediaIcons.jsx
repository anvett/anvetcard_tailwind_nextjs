import React from 'react';
import Image from 'next/image';

const SocialMediaIcons = ({ socialLinks }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-spacing-4">
      {socialLinks.map((link) => (
        <a key={link.type} href={link.url} className="btn btn-circle bg-transparent border-none " target="_blank" rel="noopener noreferrer">
          <div className="relative w-spacing-4 h-spacing-4 flex items-center justify-center overflow-hidden">
            <Image
              src={`/assets/icons/${link.icon}`} // Asegura que el path es correcto
              alt={`${link.type} icon`}
              fill
              className="object-contain"
            />
          </div>
        </a>
        
      ))}
    </div>
  );
};

export default SocialMediaIcons;
