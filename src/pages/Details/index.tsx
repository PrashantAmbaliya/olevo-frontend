import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/swiper-bundle.css"
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
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="slider-wrapper relative w-[90%] xl:w-full md:w-[50%] mx-auto">
              <div className="slider">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".slide-prev", // Selector for the custom prev button
                    nextEl: ".slide-next", // Selector for the custom next button
                  }}
                  pagination={{ clickable: true, enabled: false }}
                  autoplay={{ delay: 300000 }}
                  loop={false} // Enable infinite loop
                  centeredSlides={false} // Enable center mode
                >
                  <SwiperSlide>
                    <div className="slider-image border border-border rounded-[20px]">
                      <img src={Slider} alt="slider" className="border border-border rounded-[20px] w-full" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-image border border-border rounded-[20px]">
                      <img src={Slider} alt="slider" className="border border-border rounded-[20px] w-full" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-image border border-border rounded-[20px]">
                      <img src={Slider} alt="slider" className="border border-border rounded-[20px] w-full" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slider-nav">
                <button className="slide-prev">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.99502 1.70783e-05C7.19348 -0.0011378 7.38778 0.0568675 7.55317 0.166636C7.71855 0.276405 7.84752 0.432964 7.92362 0.616354C7.99972 0.799745 8.01952 1.00166 7.98048 1.19635C7.94144 1.39104 7.84534 1.56968 7.70443 1.70951L2.4088 6.99796L7.70443 12.2864C7.89258 12.4747 7.99828 12.73 7.99828 12.9962C7.99828 13.2624 7.89258 13.5177 7.70443 13.706C7.51628 13.8942 7.2611 14 6.99501 14C6.72893 14 6.47375 13.8942 6.2856 13.706L0.290553 7.70775C0.104456 7.52045 5.88611e-07 7.26707 6.11701e-07 7.00296C6.3479e-07 6.73885 0.104456 6.48548 0.290553 6.29817L6.2856 0.299929C6.37814 0.205468 6.48849 0.130321 6.61027 0.0788401C6.73204 0.0273579 6.86282 0.000566383 6.99502 1.70783e-05Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="slide-next">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.00499 14C0.806525 14.0011 0.612216 13.9431 0.446833 13.8334C0.28145 13.7236 0.152486 13.567 0.0763818 13.3836C0.000277886 13.2003 -0.0195173 12.9983 0.0195202 12.8037C0.0585576 12.609 0.154659 12.4303 0.295572 12.2905L5.5912 7.00204L0.295572 1.71359C0.107423 1.52534 0.0017226 1.27002 0.00172261 1.0038C0.00172261 0.737574 0.107423 0.482254 0.295572 0.294005C0.48372 0.105757 0.738904 1.98352e-09 1.00499 0C1.27107 -1.98352e-09 1.52625 0.105757 1.7144 0.294005L7.70945 6.29225C7.89555 6.47955 8 6.73293 8 6.99704C8 7.26115 7.89555 7.51452 7.70945 7.70183L1.7144 13.7001C1.62186 13.7945 1.51151 13.8697 1.38973 13.9212C1.26796 13.9726 1.13718 13.9994 1.00499 14Z"
                      fill="white"
                    />
                  </svg>
                </button>
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
              <div className="content-area h-full xl:h-[415px] overflow-y-auto 2xl:h-full md:pr-[16px] pr-[0]">
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
                <p className="content mb-[15px] last-of-type:mb-0">Filippo Berio Extra Virgin Olive Oil is a trusted kitchen staple, celebrated by home cooks and professional chefs worldwide for its authenticity and quality.</p>

                <p className="content mb-[15px] last-of-type:mb-0">
                  Filippo Berio Olive Oil is a versatile, high-quality oil crafted to elevate everyday cooking. It is known for its smooth texture, well-balanced flavor, and golden hue. Whether for sautéing, grilling, frying, or as a base for marinades and sauces, Filippo Berio Olive Oil delivers
                  consistent performance and enhances the natural flavors of your dishes.
                </p>

                <p className="content mb-[15px] last-of-type:mb-0">
                  This oil is made from a blend of premium olives sourced from trusted Mediterranean growers, ensuring authenticity and exceptional taste. Perfect for both home cooks and professional chefs, Filippo Berio Olive Oil is a reliable kitchen staple that brings tradition and excellence to
                  every meal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 md:mt-[30px] mt-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px]">
            <div className="detail-block flex items-center gap-[15px] bg-primaryGreenLight border border-border rounded-[20px] p-[15px]">
              <span className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-white flex items-center justify-center border border-border rounded-[12px]">
                <img src={HomeIcon} alt="home" className="h-[18px] md:h-[auto]" />
              </span>
              <div className="content">
                <span className="small-title text-textmute font-normal">Producer</span>
                <h6 className="small-title">SALOV S.p.A.</h6>
              </div>
            </div>

            <div className="detail-block flex items-center gap-[15px] bg-primaryGreenLight border border-border rounded-[20px] p-[15px]">
              <span className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-white flex items-center justify-center border border-border rounded-[12px]">
                <img src={LocationIcon} alt="location" className="h-[18px] md:h-[auto]" />
              </span>
              <div className="content">
                <span className="small-title text-textmute font-normal">Origin</span>
                <h6 className="small-title">Italy</h6>
              </div>
            </div>

            <div className="detail-block flex items-center gap-[15px] bg-primaryGreenLight border border-border rounded-[20px] p-[15px]">
              <span className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-white flex items-center justify-center border border-border rounded-[12px]">
                <img src={DateIcon} alt="date" className="h-[18px] md:h-[auto]" />
              </span>
              <div className="content">
                <span className="small-title text-textmute font-normal">Harvest Date</span>
                <h6 className="small-title">12 Dec 2024</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 mt-[30px] md:mt-[50px]">
          <div className="whitespace-nowrap overflow-auto overflow-y-hidden pb-[10px] md:pb-[0] border-b border-border">
            <ul className="flex md:gap-[30px] gap-[20px]  md:pb-[15px] pb-[5px]">
              <li>
                <a
                  href="javascript:void(0)"
                  className="link-active relative sub-title after:content-[''] after:absolute after:bg-primaryGreen after:w-full after:h-[3px] after:bottom-[-16px] md:after:bottom-[-17px] after:left-0 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 hover:text-primaryGreen"
                >
                  Nutrition Facts
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="relative sub-title after:content-[''] after:absolute after:bg-primaryGreen after:w-full after:h-[3px] after:bottom-[-12px] md:after:bottom-[-16px] after:left-0 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 hover:text-primaryGreen"
                >
                  Olive Grove
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="relative sub-title after:content-[''] after:absolute after:bg-primaryGreen after:w-full after:h-[3px] after:bottom-[-12px] md:after:bottom-[-16px] after:left-0 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 hover:text-primaryGreen"
                >
                  Production Method
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="relative sub-title after:content-[''] after:absolute after:bg-primaryGreen after:w-full after:h-[3px] after:bottom-[-12px] md:after:bottom-[-16px] after:left-0 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 hover:text-primaryGreen"
                >
                  Awards or Certifications
                </a>
              </li>
            </ul>
          </div>

          <div className="my-[20px]">
            <p className="content">SALOV S.p.A. (the producer of Filippo Berio) follows traditional and modern methods to produce high-quality olive oil:</p>
            <div className="works-step my-[20px]">
              <div className="work-step-block flex items-start gap-[8px] last:mb-0 md:mb-[20px] mb-[16px]">
                <span className="text-primaryGreen small-title">1.</span>
                <div>
                  <h6 className="small-title">Cold Pressing</h6>
                  <p className="content">The olives are harvested and immediately cold-pressed to retain the highest possible nutritional value, flavor, and aroma, without the use of heat or chemicals.</p>
                </div>
              </div>

              <div className="work-step-block flex items-start gap-[8px] last:mb-0 md:mb-[20px] mb-[16px]">
                <span className="text-primaryGreen small-title">2.</span>
                <div>
                  <h6 className="small-title">Mechanical Extraction</h6>
                  <p className="content">Modern mechanical extraction processes are used to ensure minimal processing while preserving the natural characteristics of the oil.</p>
                </div>
              </div>

              <div className="work-step-block flex items-start gap-[8px] last:mb-0 md:mb-[20px] mb-[16px]">
                <span className="text-primaryGreen small-title">3.</span>
                <div>
                  <h6 className="small-title">Blending</h6>
                  <p className="content">Filippo Berio blends oils from different olive varieties and harvests to create a consistent flavor profile and ensure optimal quality year-round.</p>
                </div>
              </div>

              <div className="work-step-block flex items-start gap-[8px] last:mb-0 md:mb-[20px] mb-[16px]">
                <span className="text-primaryGreen small-title">4.</span>
                <div>
                  <h6 className="small-title">Filtration</h6>
                  <p className="content">After extraction, the oil is filtered to remove any residual solid particles, ensuring a clear and smooth oil.</p>
                </div>
              </div>

              <div className="work-step-block flex items-start gap-[8px] last:mb-0 md:mb-[20px] mb-[16px]">
                <span className="text-primaryGreen small-title">5.</span>
                <div>
                  <h6 className="small-title">Bottling and Packaging</h6>
                  <p className="content">The oil is carefully bottled in dark glass containers to protect it from light, which can degrade the oil's quality. The packaging ensures that the oil maintains its freshness during transport and storage.</p>
                </div>
              </div>
            </div>
            <p className="content">The production methods balance traditional techniques with modern technology to produce high-quality extra virgin olive oil with a consistent flavor and optimal health benefits.</p>
          </div>

          <div className="my-[20px]">
            <p className="content">
              Filippo Berio's Extra Virgin Olive Oil is sourced from various olive groves, primarily in Italy, Spain, and other Mediterranean regions. The specific olive groves can vary depending on the season and the blend of olives used. However, Filippo Berio emphasizes high-quality olives from
              trusted growers to maintain its premium standard. The company often works with family-owned farms and small producers in these regions.
            </p>
          </div>

          <div className="my-[20px]">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[16px] md:gap-[20px]">
              <div className="nutrition-block">
                <h6 className="small-title font-normal text-textmute">Total Biophenols (HPLC)</h6>
                <span className="small-title">499 mg/kg</span>
              </div>
              <div className="nutrition-block">
                <h6 className="small-title font-normal text-textmute">Oleic Acid</h6>
                <span className="small-title">80%</span>
              </div>
              <div className="nutrition-block">
                <h6 className="small-title font-normal text-textmute">Peroxide</h6>
                <span className="small-title">3.7 meq/kg</span>
              </div>
              <div className="nutrition-block">
                <h6 className="small-title font-normal text-textmute">Sensory Analysis Defects</h6>
                <span className="small-title">0/10</span>
              </div>
              <div className="nutrition-block">
                <h6 className="small-title font-normal text-textmute">Diacylglycerols</h6>
                <span className="small-title">97%</span>
              </div>
              <div className="nutrition-block">
                <h6 className="small-title font-normal text-textmute">Oleic Acid as Free Fatty Acids (FFA)</h6>
                <span className="small-title">0.21%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
