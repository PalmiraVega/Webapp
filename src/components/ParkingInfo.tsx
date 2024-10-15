import React from 'react';

interface ParkingInfoProps {
  name: string;
  isOffline: boolean;
  onChangeParking: (name: string) => void;
}

const ParkingInfo: React.FC<ParkingInfoProps> = ({ name, isOffline, onChangeParking }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{name}</h2>
        <button 
          onClick={() => onChangeParking('Otro Estacionamiento')} 
          className="text-sm text-teal-600"
        >
          Cambiar estacionamiento
        </button>
      </div>
      {isOffline && (
        <p className="text-red-500 text-sm mt-1">
          El estacionamiento no tiene conexión.
        </p>
      )}
    </div>
  );
};

export default ParkingInfo;