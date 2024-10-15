import React from 'react';
import { Download } from 'lucide-react';

const DownloadBanner: React.FC = () => {
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
    <div className="bg-teal-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="font-semibold">¡Crea tu cuenta!</h3>
          <p className="text-sm">Descarga y descubre todos los beneficios.</p>
        </div>
        <button
          onClick={handleDownload}
          className="bg-white text-teal-600 px-4 py-2 rounded-full flex items-center"
        >
          <Download className="mr-2 h-4 w-4" />
          Descarga
        </button>
      </div>
    </div>
  );
};

export default DownloadBanner;