import React from "react"
import Open from "../../assets/open.svg"
import Slider from "../../assets/slider.jpg"
import HomeIcon from "../../assets/home-icon.svg"
import LocationIcon from "../../assets/location-icon.svg"
import DateIcon from "../../assets/date-icon.svg"
// import Close from "../../assets/close.svg"

function index() {
  return (
    <>
      <div className="py-[50px]">
        <div className="container px-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="slider">
              <div className="slider-image border border-border rounded-[20px]">
                <img src={Slider} alt="slider" className="border border-border rounded-[20px] w-full" />
              </div>
            </div>
            <div className="details">
              <div className="mb-[20px] py-[5px] pl-[5px] pr-[15px] inline-flex items-center border rounded-[35px] border-border p-1 gap-2 bg-success">
                <img src={Open} alt="open" />
                {/* <img src={Close} alt="open" /> */}
                <h6 className="small-title">This Oil is Extra Virgin.</h6>
              </div>
              <h6 className="text-primaryGreen small-title mb-[10px]">Filippo Berio</h6>
              <h1 className="title mb-[15px]">Extra Virgin Olive Oil</h1>
              <p className="content mb-[15px] last-of-type:mb-0">
                Filippo Berio's Extra Virgin Olive Oil is a premium-quality olive oil renowned for its rich, robust flavor and exceptional versatility. Carefully crafted from the finest olives, this oil is cold-pressed to preserve its natural taste, aroma, and nutritional properties.
              </p>
              <h6 className="sub-title !text-textmute mt-[15px]">Key features include:</h6>
              <ul className="my-[15px] list-disc pl-[20px] marker:text-textmute">
                <li className="mb-[10px]">
                  <p className="content">A well-balanced flavor profile with fruity notes and a hint of peppery finish.</p>
                </li>
                <li className="mb-[10px]">
                  <p className="content">Ideal for drizzling over salads, pasta, grilled vegetables, and bread, or as a base for dressings and marinades.</p>
                </li>
                <li className="mb-[10px]">
                  <p className="content">Naturally rich in healthy monounsaturated fats and antioxidants, supporting a heart-healthy diet.</p>
                </li>
                <li className="mb-[10px]">
                  <p className="content">Non-GMO and gluten-free, making it a wholesome choice for a variety of dietary needs.</p>
                </li>
              </ul>
              <p className="content">Filippo Berio Extra Virgin Olive Oil is a trusted kitchen staple, celebrated by home cooks and professional chefs worldwide for its authenticity and quality.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 mt-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px]">
            <div className="detail-block flex items-center gap-[15px] bg-primaryGreenLight border border-border rounded-[20px] p-[15px]">
              <span className="w-[50px] h-[50px] bg-white flex items-center justify-center border border-border rounded-[12px]">
                <img src={HomeIcon} alt="home" />
              </span>
              <div className="content">
                <span className="small-title text-textmute font-normal">Producer</span>
                <h6 className="small-title">SALOV S.p.A.</h6>
              </div>
            </div>

            <div className="detail-block flex items-center gap-[15px] bg-primaryGreenLight border border-border rounded-[20px] p-[15px]">
              <span className="w-[50px] h-[50px] bg-white flex items-center justify-center border border-border rounded-[12px]">
                <img src={LocationIcon} alt="location" />
              </span>
              <div className="content">
                <span className="small-title text-textmute font-normal">Origin</span>
                <h6 className="small-title">Italy</h6>
              </div>
            </div>

            <div className="detail-block flex items-center gap-[15px] bg-primaryGreenLight border border-border rounded-[20px] p-[15px]">
              <span className="w-[50px] h-[50px] bg-white flex items-center justify-center border border-border rounded-[12px]">
                <img src={DateIcon} alt="date" />
              </span>
              <div className="content">
                <span className="small-title text-textmute font-normal">Harvest Date</span>
                <h6 className="small-title">12 Dec 2024</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 mt-[50px]">
          <ul>
            <li>
              <a href="">Nutrition Facts</a>
            </li>
            <li>
              <a href="">Olive Grove</a>
            </li>
            <li>
              <a href="">Production Method</a>
            </li>
            <li>
              <a href="">Awards or Certifications</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default index
