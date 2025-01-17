import React, { useRef, useState } from "react"
import Webcam from "react-webcam"
import AnalyzeImage from "../AnalyzeImage"
import { TbCapture } from "react-icons/tb"
import "./Camera.css"
import CameraIcon from "../../assets/camera-icon.svg"

const videoConstraints = {
  height: 720,
  width: 1280,
  facingMode: "environment" as const,
}

interface CameraProps {
  isCameraOpen: boolean
}

const Camera: React.FC<CameraProps> = ({ isCameraOpen }) => {
  const webcamRef = useRef<Webcam | null>(null)
  const [url, setUrl] = useState<string | null | undefined>(null)

  const onUserMedia = (e: MediaStream) => {
    console.log(e)
  }

  const HandleCaptureAndUpload = async () => {
    let ImageData
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot()
      console.log("capturePhoto ~ imageSrc:", imageSrc)
      ImageData = imageSrc
      setUrl(imageSrc || null)
    }
  }

  return (
    <>
      {isCameraOpen && !url ? (
        <>
          <div className="relative w-auto md:w-[600px] h-auto mx-auto">
            <Webcam
              ref={webcamRef}
              audio={true}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
              className="max-w-full mx-auto h-auto 
            "
            />

            <div className="absolute top-[-10px] left-[-10px] z-[-1] w-[50px] h-[50px] bg-white border border-primaryGreen border-t-[3px] border-l-[3px] border-b-0 border-r-0 "></div>

            <div className="absolute top-[-10px] right-[-10px] z-[-1] w-[50px] h-[50px] bg-white border border-primaryGreen border-t-[3px] border-r-[3px] border-b-0 border-l-0"></div>

            <div className="absolute bottom-[-10px] right-[-10px] z-[-1] w-[50px] h-[50px] bg-white border border-primaryGreen border-t-0 border-r-[3px] border-b-[3px] border-l-0"></div>

            <div className="absolute bottom-[-10px] left-[-10px] w-[50px] z-[-1] h-[50px] bg-white border border-primaryGreen border-t-0 border-r-0 border-b-[3px] border-l-[3px]"></div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={HandleCaptureAndUpload}
              className="bg-primaryGreen text-white rounded-full inline-flex items-center
              justify-center text-[14px] lg:text-[16px] gap-[10px] hover:bg-[#3e5e20] w-auto font-semibold py-[7px] px-[14px] md:py-[8px] md:px-[15px]  hover:bg-primaryGreenDark transition-all duration-300 mt-[20px] lg:mt-[30px]"
            >
              <img src={CameraIcon} alt="camera" />
              <span>Capture and Upload</span>
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <AnalyzeImage imageUrl={url || ""} />
        </div>
      )}
    </>
  )
}

export default Camera
