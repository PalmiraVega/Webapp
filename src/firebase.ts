import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  // Configuración de Firebase (reemplazar con los valores reales)
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logSelectParking = (parkingId: string, parkingName: string) => {
  logEvent(analytics, 'select_parking', {
    parking_id: parkingId,
    parking_name: parkingName
  });
};

export const logErrorLoadingPage = (parkingId?: string) => {
  logEvent(analytics, 'error_loading_page', {
    parking_id: parkingId || null
  });
};