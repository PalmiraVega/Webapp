import React from 'react';

interface KnowParcoMenuProps {
  onClose: () => void;
}

const KnowParcoMenu: React.FC<KnowParcoMenuProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-64 h-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Conoce Parco</h3>
          <button onClick={onClose} className="text-gray-500">&times;</button>
        </div>
        <ul className="space-y-2">
          <li><a href="#" className="text-teal-600">Acerca de Parco</a></li>
          <li><a href="#" className="text-teal-600">Cómo funciona</a></li>
          <li><a href="#" className="text-teal-600">Preguntas frecuentes</a></li>
          <li><a href="#" className="text-teal-600">Contacto</a></li>
        </ul>
      </div>
    </div>
  );
};

export default KnowParcoMenu;