import React from "react"
import CameraIcon from "../../assets/camera-icon.svg"
import GreaterThanGreen from "../../assets/greater-than-green.svg"

interface Props {
  imageUrl: string
}

const analyzeImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <>
      <div className="md:w-[40%] w-auto">
        <div className="relative w-[100px] h-[100px] mx-auto">
          <div className="loader">
            <img src={imageUrl} alt="Product Image" className="w-[100px] h-[100px] border border-border rounded-full mx-auto" />
          </div>
        </div>
        <h6 className="sub-title mb-[10px] mt-[20px] md:mt-[30px]">Loading...</h6>
        <p className="content">Thank you for your patience! We're processing your scan and gathering the product details for you.</p>
      </div>

      {/* <div className="md:w-[40%] w-auto">
        <div className="relative w-[100px] h-[100px] mx-auto">
          <div>
            <img src={imageUrl} alt="Product Image" className="w-[100px] h-[100px] border border-border rounded-full mx-auto" />
          </div>
        </div>
        <h6 className="sub-title mb-[10px] mt-[20px] md:mt-[30px]">Oops! The Oil isn’t EVOO.</h6>
        <p className="content">The scanned image does not belong to olive oil or extra virgin olive oil. Please scan a valid olive oil product to receive accurate information.</p>
        <div className="flex items-center justify-center gap-[20px] mt-[20px] lg:mt-[30px]">
          <button
            className="bg-primaryGreen text-white rounded-full inline-flex items-center
              justify-center text-[14px] lg:text-[16px] gap-[10px] hover:bg-[#3e5e20] w-auto font-semibold py-[7px] px-[14px] md:py-[8px] md:px-[15px]  hover:bg-primaryGreenDark transition-all duration-300"
          >
            <img src={CameraIcon} alt="camera" />
            <span>Re-Capture</span>
          </button>
          <button
            className="bg-primaryGreenLight text-primaryGreen border border-primaryGreen rounded-full inline-flex items-center
              justify-center text-[14px] lg:text-[16px] gap-[10px] hover:bg-[#3e5e20] hover:text-white w-auto font-semibold py-[7px] px-[14px] md:py-[7px] md:px-[15px]  hover:bg-primaryGreenDark transition-all duration-300 group"
          >
            <span>Go to Home</span>
            <img src={GreaterThanGreen} alt="camera" className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </button>
        </div>
      </div> */}
    </>
  )
}

export default analyzeImage
