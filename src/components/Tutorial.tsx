import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TutorialStep {
  title: string;
  content: string;
  image: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    title: 'Escanea tu boleto',
    content: 'Escanea el código de tu boleto o ingresa el número manualmente.',
    image: '/tutorial-step1.png'
  },
  {
    title: 'Ingresa tu correo electrónico',
    content: 'Ahí te enviaremos tu recibo de pago cuando termines.',
    image: '/tutorial-step2.png'
  },
  {
    title: 'Paga tu boleto',
    content: 'Utiliza ApplePay o PayPal para pagar tu estancia. ¡Listo! Así de fácil es usar Parco.',
    image: '/tutorial-step3.png'
  }
];

interface TutorialProps {
  onClose: () => void;
}

const Tutorial: React.FC<TutorialProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Tutorial</h3>
          <button onClick={onClose} className="text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-6">
          <img 
            src={tutorialSteps[currentStep].image} 
            alt={`Paso ${currentStep + 1}`} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-semibold mb-2">{tutorialSteps[currentStep].title}</h4>
          <p>{tutorialSteps[currentStep].content}</p>
        </div>
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg disabled:opacity-50"
          >
            Anterior
          </button>
          <div className="flex space-x-2">
            {tutorialSteps.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentStep ? 'bg-teal-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg"
          >
            {currentStep === tutorialSteps.length - 1 ? 'Finalizar' : 'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;