import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GALLERY } from "../constants/gallery";
import { Autoplay } from "swiper/modules";

// export const GallerySlide = () => {
export const GallerySlide = forwardRef<HTMLDivElement>((_, ref) => (
  <div className="py-40 bg-dark flex items-center justify-center" ref={ref}>
    <div className="w-full space-y-10 xs2:space-y-12 lg:space-y-16 2xl:space-y-20">
      {GALLERY.map((gallery, index) => (
        <Swiper
          key={index}
          speed={4000}
          slidesPerView={1.4}
          spaceBetween={20}
          dir={index % 2 === 0 ? "rtl" : "ltr"}
          autoplay={{
            // delay: index % 2 === 0 ? 2200 : 2600,
            delay: 1,
            disableOnInteraction: false,
          }}
          centeredSlides={index % 2 === 0 ? true : false}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            450: {
              slidesPerView: 1.6,
            },
            580: {
              slidesPerView: 1.8,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.7,
            },
            1024: {
              slidesPerView: 3.4,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 4.4,
              spaceBetween: 50,
            },
          }}
        >
          {gallery.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden w-60 sm:w-64 xl:w-72 2xl:w-80 aspect-square">
                <img
                  src={image.image}
                  alt={image.description}
                  className="w-full h-full object-cover bg-gray-500"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  </div>
));
