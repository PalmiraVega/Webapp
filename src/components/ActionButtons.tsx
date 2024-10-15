import React from 'react';
import { QrCode, Keyboard } from 'lucide-react';

interface ActionButtonsProps {
  parkingType: 'hybrid' | 'scan' | 'manual';
  isOffline: boolean;
  onTutorialOpen: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ parkingType, isOffline, onTutorialOpen }) => {
  const handleAction = (action: string) => {
    if (isOffline) {
      alert('El estacionamiento está fuera de línea. No se pueden realizar pagos en este momento.');
    } else {
      console.log(`Acción: ${action}`);
    }
  };

  return (
    <div className="space-y-3 mb-4">
      {(parkingType === 'hybrid' || parkingType === 'scan') && (
        <button
          onClick={() => handleAction('Escanear boleto')}
          className="w-full bg-teal-600 text-white py-3 rounded-lg flex items-center justify-center"
        >
          <QrCode className="mr-2" />
          Escanea tu boleto
        </button>
      )}
      {(parkingType === 'hybrid' || parkingType === 'manual') && (
        <button
          onClick={() => handleAction('Captura manual')}
          className="w-full bg-teal-100 text-teal-800 py-3 rounded-lg flex items-center justify-center"
        >
          <Keyboard className="mr-2" />
          Captura manual
        </button>
      )}
      <button 
        onClick={onTutorialOpen}
        className="w-full text-center text-teal-600 text-sm"
      >
        ¿Cómo pago mi boleto?
      </button>
    </div>
  );
};

export default ActionButtons;