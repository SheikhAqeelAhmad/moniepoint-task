import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="grid grid-cols-3 py-[4rem] place-items-center">
      <motion.div
        initial={{ opacity: 0, x: -70, rotate: 0 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
        className="main-heading text-white text-[6rem] font-salsa"
      >
        Darcy's insurance products
      </motion.div>
      <div className="flex flex-col justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: 0 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="star-icon">
            <img src="./assets/img/star.svg" alt="" />
          </div>
          <div className="mt-3">
            <p className="text-white py-1">
              Our&nbsp;
              <a className="text-[#5895A2] underline" href="#">
                plans
              </a>
              &nbsp;are saving
            </p>
            <p className="text-white py-1">policyholders 30% - 60%</p>
            <p className="text-white py-1">on premiums</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: 0 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="star-icon">
            <img src="./assets/img/star.svg" alt="" />
          </div>
          <div className="mt-3">
            <p className="text-white py-1">Our plans are saving</p>
            <p className="text-white py-1">policyholders 30% - 60%</p>
            <p className="text-white py-1">on premiums</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-[4rem] h-[10rem] text-white bg-red-500 rounded-b-full"
            style={{
              background:
                "linear-gradient(0deg,rgb(34 42 64) 5%,rgb(16 28 43 / 62%) 85%)",
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
            />
          </svg>
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ scaleY: 0, rotate: 0 }}
          animate={{
            scaleY: 1,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="bg-center bg-cover rounded-[160px] object-cover h-[36rem] w-3/4 max-w-full origin-bottom"
          src="./assets/img/hot_air_balloons.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
