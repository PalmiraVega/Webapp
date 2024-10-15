import React from 'react';

interface ErrorModalProps {
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4">Error</h3>
        <p className="mb-4">Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta de nuevo más tarde.</p>
        <button
          onClick={onClose}
          className="w-full bg-teal-600 text-white py-2 rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;