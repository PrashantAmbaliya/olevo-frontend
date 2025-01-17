import React, { useRef, useState } from "react";
import { useNavigate, NavigateFunction } from 'react-router-dom';
import ReactWebcam from "react-webcam";
import AnalyzeImage from "../AnalyzeImage";
import CameraIcon from "../../assets/camera-icon.svg"
import "./Camera.css";
import axios from "axios";

interface CameraProps {
  isCameraOpen: boolean;
}

const Camera: React.FC<CameraProps> = ({ isCameraOpen }) => {
  const webcamRef = useRef<ReactWebcam | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [analyzeError, setAnalyzeError] = useState<boolean>(false);

  const navigate: NavigateFunction = useNavigate()


  const HandleCaptureAndUpload = async () => {
    setLoading(true);
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      const img = new Image();
      img.src = imageSrc!;

      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (ctx) {
          canvas.width = 600;
          canvas.height = 600;

          ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 600, 600);

          const croppedImageSrc = canvas.toDataURL("image/png");
          setUrl(croppedImageSrc);

          try {
            const response = await axios.post("http://localhost:8001/api/ai/analyzeImage", {
              imageData: croppedImageSrc
            });

            if (response.data.success) {
              navigate("/details", { state: response.data });
            } else {
              setLoading(false);
              setAnalyzeError(true);
            }
          } catch (error: any) {
            setAnalyzeError(true);
            console.error(error);
          } finally {
            setLoading(false);
          }
        }
      };
    }
  };


  return (
    <>
      {!url ? (
        <>
          <div className="flex gap-4 justify-center flex-col items-center">
            <div className="relative w-[100%] h-[100%] md:w-[600px] md:h-[600px]">
              <ReactWebcam
                ref={webcamRef}
                videoConstraints={{ facingMode: "environment", width: 600, height: 600 }}
                width="100%"
                height="100%"
                className="aspect-[1/1] border-gray-300 object-cover"
                screenshotFormat="image/png"
              />
              <div className="absolute top-[-12px] left-[-12px] w-14 h-14 border-t-4 border-l-4 border-primaryGreen"></div>
              <div className="absolute top-[-12px] right-[-12px] w-14 h-14 border-t-4 border-r-4 border-primaryGreen"></div>
              <div className="absolute bottom-[-12px] left-[-12px] w-14 h-14 border-b-4 border-l-4 border-primaryGreen"></div>
              <div className="absolute bottom-[-12px] right-[-12px] w-14 h-14 border-b-4 border-r-4 border-primaryGreen"></div>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <button
                onClick={HandleCaptureAndUpload}
                className="bg-primaryGreen text-white rounded-full inline-flex items-center
justify-center text-[14px] lg:text-[16px] gap-[10px] hover:bg-[#3e5e20] w-auto font-semibold py-[7px] px-[14px] md:py-[8px] md:px-[15px] hover:bg-primaryGreenDark transition-all duration-300 mt-[20px] lg:mt-[30px]"
              >
                <img src={CameraIcon} alt="camera" />
                <span>Capture and Upload</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <AnalyzeImage imageUrl={url || ""} isLoading={isLoading} analyzeError={analyzeError} />
        </div>
      )
      }
    </>
  );
};

export default Camera;
