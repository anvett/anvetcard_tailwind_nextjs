import React, { useState } from 'react';
import Image from 'next/image';

const BankInfo = ({ banks }) => {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleShow = (bank) => setSelectedBank(bank);
  const handleClose = () => setSelectedBank(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Información copiada: ${text}`);
    } catch (error) {
      console.error("Error al copiar al portapapeles: ", error);
      alert("Error al copiar la información");
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {banks.map((bank, index) => (
        <div key={index} className="p-4" onClick={() => handleShow(bank)}>
          <Image src={`/assets/images/payment/${bank.logo}`} alt={bank.name} width={80} height={80} className="cursor-pointer rounded-xl" />
        </div>
      ))}

      {selectedBank && (
        <div className="modal modal-open ">
          <div className="modal-box bg-gradient-primary">
            <h3 className="text-size-2 font-bold text-center text-light">{selectedBank.name}</h3>
            <p className='text-center pb-spacing-2 text-light'>{selectedBank.instructions}</p>
            {selectedBank.details.map((detail, idx) => (
              <div key={idx} className="flex justify-between items-center my-2">
                <span className='text-size-1 text-light'>{detail.label}: <span className='font-semibold text-light font-size-3' > {detail.value}</span></span>
                <button
                  className="btn contact-button"
                  onClick={() => copyToClipboard(detail.value)}
                >
                  Copiar
                </button>
              </div>
            ))}
            <div className="modal-action">
              <button className="btn contact-button" onClick={handleClose}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankInfo;

