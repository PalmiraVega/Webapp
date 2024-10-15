import React, { useState } from 'react';
import { MapPin, Menu, HelpCircle, QrCode, Keyboard, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Footer from './components/Footer';
import DownloadBanner from './components/DownloadBanner';
import ParkingInfo from './components/ParkingInfo';
import ActionButtons from './components/ActionButtons';
import Tutorial from './components/Tutorial';
import KnowParcoMenu from './components/KnowParcoMenu';
import ErrorModal from './components/ErrorModal';
import { logSelectParking, logErrorLoadingPage } from './firebase';

function App() {
  const [selectedParking, setSelectedParking] = useState('Parco Plaza');
  const [isOffline, setIsOffline] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleParkingChange = (parkingName: string) => {
    setSelectedParking(parkingName);
    logSelectParking('123', parkingName);
  };

  const handleMapClick = () => {
    // Mostrar snackbar
    alert('El mapa no está disponible para elegir el estacionamiento');
  };

  const handleTutorialOpen = () => {
    setShowTutorial(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar onMenuClick={() => setShowMenu(true)} />
      
      <DownloadBanner />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Map onClick={handleMapClick} />
        <ParkingInfo 
          name={selectedParking} 
          isOffline={isOffline} 
          onChangeParking={handleParkingChange}
        />
        <ActionButtons 
          parkingType="hybrid" 
          isOffline={isOffline} 
          onTutorialOpen={handleTutorialOpen}
        />
      </main>
      
      <Footer />
      
      {showMenu && <KnowParcoMenu onClose={() => setShowMenu(false)} />}
      {showError && <ErrorModal onClose={() => setShowError(false)} />}
      {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}
    </div>
  );
}

export default App;