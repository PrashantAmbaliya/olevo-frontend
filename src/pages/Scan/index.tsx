import { FC, useState } from 'react';
import { IoCameraOutline } from "react-icons/io5";
import Camera from '../../components/Camera';

const Scan: FC = () => {
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestCameraPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setHasPermission(true);
      setIsCameraOpen(true);
    } catch {
      setHasPermission(false);
      setIsCameraOpen(true);
    }
  };

  const handleTryAgain = () => {
    window.location.reload();
  };
  return <>
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        {isCameraOpen === false ? (

          <div className='flex gap-4 justify-center items-center flex-col'>
            <p className="mt-4 text-sm text-gray-600">Camera Permission Required</p>
            <button
              onClick={requestCameraPermission}
              className="flex items-center justify-center space-x-2 gap-2 px-10 py-3 bg-[#7E4DF6] text-white font-semibold rounded-lg shadow-md hover:bg-[#9d78f9] transition-all duration-300"
            >
              <IoCameraOutline className="text-2xl" />
              Allow Camera Access 
            </button>
          </div>
        ) : hasPermission ? (

          <Camera isCameraOpen={isCameraOpen} />

        ) : (

          <div>
            <p className="text-red-500 font-semibold">
              Permission to access camera is denied.
            </p>
            <p className="mt-2 text-gray-600">Please enable camera access in your browser settings.</p>
            <button
              onClick={handleTryAgain}
              className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
          
        )}
      </div>
    </div>
  </>;
};

export default Scan;
