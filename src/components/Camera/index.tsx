import React, { useRef, useState } from "react";
import ReactWebcam from "react-webcam"; // Import react-webcam
import AnalyzeImage from "../AnalyzeImage";
import { TbCapture } from "react-icons/tb";
import "./Camera.css";

interface CameraProps {
  isCameraOpen: boolean;
}

const Camera: React.FC<CameraProps> = ({ isCameraOpen }) => {
  const webcamRef = useRef<ReactWebcam | null>(null); 
  const [url, setUrl] = useState<string | null>(null);

  const HandleCaptureAndUpload = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
  
      const img = new Image();
      img.src = imageSrc!;
  
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        if (ctx) {
          canvas.width = 600;
          canvas.height = 600;
  
          ctx.drawImage(
            img,
            0, 0,
            img.width, img.height,
            0, 0,
            600, 600
          );
  
          const croppedImageSrc = canvas.toDataURL("image/png");
  
          setUrl(croppedImageSrc);
        }
      };
    }
  };
  

  return (
    <>
      {isCameraOpen && !url ? (
        <>
          <ReactWebcam
            ref={webcamRef}
            videoConstraints={{ facingMode: "environment", width: 600, height: 600 }}
            width="600px"
            height="600px"
            className="aspect-[1/1] max-w-[500px] rounded-lg border-2 border-gray-300 object-cover"
            screenshotFormat="image/png"
          />

          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={HandleCaptureAndUpload}
              className="mt-4 px-6 py-2 bg-[#00A1F2] text-white font-semibold rounded-lg shadow-md hover:bg-[#1f92cc] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <TbCapture className="text-2xl" />
              <span>Capture and Upload</span>
            </button>
          </div>
        </>
      ) : (
        <AnalyzeImage imageUrl={url || ""} />
      )}
    </>
  );
};

export default Camera;
