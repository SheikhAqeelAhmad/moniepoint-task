import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
export function SingleSlide() {
  return (
    <motion.div
      initial={{ scaleY: 0, scaleX: 0 }}
      whileInView={{
        scaleY: 1,
        scaleX: 1,
      }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      class="flex items-center justify-center bg-[#0C1D31] rounded-[130px] gap-16 pl-[3.2rem] py-[4.2rem] pr-[8rem] origin-bottom-right"
    >
      <img
        class="bg-center bg-cover w-[312px] h-[525px] rounded-[160px] object-cover"
        src="./assets/img/aena-khan.jpg"
        alt=""
      />
      <div class="flex flex-col gap-6 justify-between place-items-start h-full">
        <div>
          <span class="text-white text-4xl font-bold">Emiko Sato</span>
          <p class="text-[#394A68]">Insurance appraiser</p>
          <p class="text-white text-lg font-light pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fringilla erat et aliquam feugiat. Nam lacus metus, ornare
            pellentesque elit nec, bibendum vestibulum lorem. Mauris varius
            venenatis vulputate. Phasellus fermentum tincidunt dolor. Integer
            suscipit nibh eu nisi porta, at ultricies quam molestie. Nunc ut
            metus sapien. Vestibulum ac efficitur eros. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Donec aliquet dignissim eros nec lobortis.
          </p>
        </div>
        <a
          class="bg-purple-300 hover:bg-zinc-800 hover:text-white text-black rounded-full px-4 py-4 hover:bg-[#0D0F17] hover:text-white w-full text-center"
          href="#"
        >
          Get a consultation
        </a>
      </div>
    </motion.div>
  );
}

export default function Testimonial() {
  return (
    <div class="flex flex-row py-[4rem]">
      <div class="w-3/5">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-w-7xl !overflow-hidden"
        >
          {new Array(5).fill(0).map((_, i) => (
            <SwiperSlide key={i}>
              <SingleSlide />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div
        initial={{ x: 300 }}
        whileInView={{
          x: 0,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        class="flex items-center justify-center w-2/5 relative origin-bottom-right"
      >
        <div class="star-icon absolute top-[20%] left-[22%]">
          <img src="./assets/img/star.svg" alt="" />
        </div>
        <div>
          <p class="text-8xl text-white font-bold tracking-[-7px]">Our</p>
          <p class="text-8xl text-white font-bold tracking-[-7px]">expert</p>
          <p class="text-8xl text-white font-bold tracking-[-7px]">says</p>
        </div>
      </motion.div>
    </div>
  );
}
