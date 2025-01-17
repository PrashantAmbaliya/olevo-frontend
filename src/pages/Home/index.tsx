import { Link } from "react-router-dom"
import GreaterThanIcon from "../../assets/GreaterThan.svg"

function Index() {
  return (
    <div className="welcome-height flex items-center justify-center md:h-[calc(100dvh-130px)] h-[calc(100dvh-100px)]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-12 items-center justify-between">
          <div className="title-block col-span-12 lg:col-span-7">
            <div>
              <h1 className="text-[30px] leading-[36px] sm:text-[36px] sm:leading-[42px] lg:text[42px] lg:leading-[48px] xl:text[48px] xl:leading-[54px] 2xl:text[60px] 2xl:leading-[66px] font-semibold text-primaryBlack">
                Welcome to
                <span className="!text-primaryGreen text-inherit"> Ölevo</span>
              </h1>

              <p className="content mt-[15px] mb-[20px] md:mb[30px]">Ölevo connects olive oil lovers with detailed profiles, tasting notes, and personalized recommendations. Discover, track, and explore oils and pairings in one place.</p>

              <Link
                to="/scan"
                className="bg-primaryGreen text-white rounded-full inline-flex items-center
              justify-center text-[14px] lg:text-[16px] gap-[10px] hover:bg-[#3e5e20] w-auto font-semibold py-[7px] px-[14px] md:py-[8px] md:px-[15px]  hover:bg-primaryGreenDark transition-all duration-300"
              >
                <span>Get Started</span>
                <img src={GreaterThanIcon} alt="Greater Than Icon" />
              </Link>
            </div>
          </div>

          <div className="bg-primaryGreenLight lg:mt-0 mt-[30px] p-[20px] md:p-[30px] border border-border rounded-[20px] col-span-12 lg:col-span-4 lg:col-start-9">
            <h6 className="mb-[16px] md:mb-[20px] sub-title">How It Works:</h6>

            <div className="works-step">
              <div className="work-step-block flex items-start gap-[8px]">
                <span className="text-primaryGreen small-title">1.</span>
                <div>
                  <h6 className="small-title">Scan Labels</h6>
                  <p className="content">Use your camera to scan olive oil bottles and get instant recognition.</p>
                </div>
              </div>

              <div className="work-step-block flex items-start gap-[8px] my-[16px] md:my-[20px]">
                <span className="text-primaryGreen small-title">2.</span>
                <div>
                  <h6 className="small-title">Explore Profiles</h6>
                  <p className="content">Access detailed information about each oil, including tasting notes and producer details.</p>
                </div>
              </div>

              <div className="work-step-block flex items-start gap-[8px]">
                <span className="text-primaryGreen small-title">3.</span>
                <div>
                  <h6 className="small-title">Get Recommendations</h6>
                  <p className="content">Receive personalized olive oil suggestions based on your preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
