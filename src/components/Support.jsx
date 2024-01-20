import { motion } from "framer-motion";

export default function Support() {
  return (
    <div className="grid grid-cols-3 py-[4rem] place-items-center">
      <div className="text-white text-[7rem] leading-relaxed">
        <div>
          <motion.p
            initial={{ x: -400 }}
            whileInView={{
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-8xl text-white font-bold tracking-[-7px]"
          >
            Support
          </motion.p>
          <motion.p
            initial={{ x: -400 }}
            whileInView={{
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-8xl text-white font-bold tracking-[-7px]"
          >
            at every
          </motion.p>
          <motion.p
            initial={{ x: -400 }}
            whileInView={{
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.75 }}
            className="text-[10rem] text-white font-bold tracking-[-7px] leading-[8rem]"
          >
            Step
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6">
        <motion.div
          initial={{ scaleX: 0, scaleY: 0 }}
          whileInView={{
            scaleX: 1,
            scaleY: 1,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="origin-bottom-left"
        >
          <div className="star-icon">
            <img src="./assets/img/star.svg" alt="" />
          </div>
          <div className="mt-3">
            <p className="text-white py-1">
              Participate in the
              <a
                className="text-[#5895A2] border-b border-b-[#5895a2]"
                href="#"
              >
                loyalty program
              </a>
              . Pay for the
            </p>
            <p className="text-white py-1">
              service online to get bonuses for our other
            </p>
            <p className="text-white py-1">
              services. We have a lot of bonuses!
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0 }}
          whileInView={{
            scaleX: 1,
            scaleY: 1,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="origin-bottom-left"
        >
          <div className="star-icon">
            <img src="./assets/img/star.svg" alt="" />
          </div>
          <div className="mt-3">
            <p className="text-white py-1">
              You can help other people: choose a donation
            </p>
            <p className="text-white py-1">
              fund and share the link with your friends!
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0 }}
          whileInView={{
            scaleX: 1,
            scaleY: 1,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="w-full flex justify-center origin-top"
        >
          <a
            className="text-[#FE6475] border border-[#fe6475] rounded-full px-4 py-4 hover:bg-[#0D0F17] hover:text-white text-center w-full"
            href="#"
          >
            Choose a fund
          </a>
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <motion.img
        initial={{ scaleY: 0 }}
        whileInView={{
            scaleY: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
          className="bg-center bg-cover rounded-[160px] object-cover h-[36rem] max-w-full w-3/4 origin-bottom"
          src="./assets/img/balloon.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
