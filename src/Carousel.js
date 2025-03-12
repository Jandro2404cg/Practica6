const Carousel= ()=> {
  return(
      <Swiper modules = {[Navigation, Pagination, Autoplay]} spaceBetween={50} sLidesPerView={1} navigation
              pagination={{clickable_true}}
              autoplay={delay:3000}>

              <SwiperSlide>
                <img src="public/Auto1.jpg" alt="Slide1" className="Slide"/>
                  <img src="public/Auto2.jpg" alt="Slide1" className="Slide"/>
                  <img src="public/Auto2.jpg" alt="Slide1"  className="Slide"/>

              </SwiperSlide>
          </Swiper>
  )


};



export default Carousel;