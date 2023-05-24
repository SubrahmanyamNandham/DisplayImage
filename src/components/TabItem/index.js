import './index.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const TabItem = props => {
  const {userDetails, clickTabItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = userDetails

  const ClickGetImage = () => {
    clickTabItem(id)
  }

  const thumbnailClassName = isActive ? `thumbnail-active` : `thumbnail`
  
  return (
   
    <li className='thumbnail-list-item'>
       
      <div >
     <Swiper  effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
          <SwiperSlide>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={ClickGetImage}
          className={thumbnailClassName}
        />
        </SwiperSlide>
         </Swiper>
      </div>
      
      </li>
    
  )
}
export default TabItem
