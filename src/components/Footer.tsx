import React from 'react';
import { Download } from 'lucide-react';

const Footer: React.FC = () => {
  const handleDownload = () => {
    // Lógica para redirigir a la tienda de aplicaciones correspondiente
    const userAgent = navigator.userAgent.toLowerCase();
    let storeUrl = '';

    if (/iphone|ipad|ipod/.test(userAgent)) {
      storeUrl = 'https://apps.apple.com/app/parco';
    } else if (/android/.test(userAgent)) {
      storeUrl = 'https://play.google.com/store/apps/details?id=com.parco';
    } else {
      storeUrl = 'https://appgallery.huawei.com/app/C123456789';
    }

    window.location.href = storeUrl;
  };

  return (
    <footer className="bg-teal-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">¡Vive Parco sin límites!</p>
        <button
          onClick={handleDownload}
          className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm flex items-center"
        >
          <Download className="mr-2 h-4 w-4" />
          Descarga
        </button>
      </div>
    </footer>
  );
};

export default Footer;