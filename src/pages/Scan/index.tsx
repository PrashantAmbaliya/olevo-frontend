import { FC, useState } from "react"
import { IoCameraOutline } from "react-icons/io5"
import Camera from "../../components/Camera"
import CameraImg from "../../assets/camera-img.svg"

const Scan: FC = () => {
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)

  const requestCameraPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true })
      setHasPermission(true)
      setIsCameraOpen(true)
    } catch {
      setHasPermission(false)
      setIsCameraOpen(true)
    }
  }

  const handleTryAgain = () => {
    window.location.reload()
  }
  return (
    <>
      <div className="flex items-center justify-center md:h-[calc(100dvh-130px)] h-[calc(100dvh-100px)]">
        <div className="container mx-auto px-5 text-center">
          {isCameraOpen === false ? (
            <div className="w-[100%] md:w-[50%] lg:w-[40%] mx-auto">
              <span className="mx-auto rounded-full border border-border w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center bg-primaryGreenLight mb-[20px] lg:mb-[30px]">
                <img src={CameraImg} alt="camera" className="h-[34px] lg:h-[40px]" />
              </span>
              <h6 className="sub-title mb-[10px]">Camera Permission Required</h6>
              <p className="content m-0">To scan olive oil product, we need access to your camera. Please grant access by clicking the button below.</p>
              <button
                onClick={requestCameraPermission}
                className="bg-primaryGreen text-white rounded-full inline-flex items-center
              justify-center text-[14px] lg:text-[16px] gap-[10px] hover:bg-[#3e5e20] w-auto font-semibold py-[7px] px-[14px] md:py-[8px] md:px-[15px]  hover:bg-primaryGreenDark transition-all duration-300 mt-[20px] lg:mt-[30px]"
              >
                <IoCameraOutline className="text-2xl" />
                Allow Camera Access
              </button>
            </div>
          ) : hasPermission ? (
            <Camera isCameraOpen={isCameraOpen} />
          ) : (
            <div>
              <span className="mx-auto rounded-full border border-border w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center bg-primaryGreenLight mb-[20px] lg:mb-[30px]">
                <img src={CameraImg} alt="camera" className="h-[34px] lg:h-[40px]" />
              </span>
              <p className="text-red-500 sub-title mb-[10px]">Permission to access camera is denied.</p>
              <p className="content m-0">Please enable camera access in your browser settings.</p>
              <button
                onClick={handleTryAgain}
                className="bg-primaryGreen text-white rounded-full inline-flex items-center
              justify-center text-[14px] lg:text-[16px] gap-[10px] hover:bg-[#3e5e20] w-auto font-semibold py-[7px] px-[14px] md:py-[8px] md:px-[15px]  hover:bg-primaryGreenDark transition-all duration-300 mt-[20px] lg:mt-[30px]"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Scan
