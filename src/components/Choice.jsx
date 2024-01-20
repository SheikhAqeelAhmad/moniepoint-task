import { motion } from "framer-motion";

export default function Choice() {
  return (
    <motion.div
      className="grid grid-cols-6 py-[4rem] grid-rows-2 gap-3"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: false }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        initial={{ scaleY: 0, scaleX: 0 }}
        whileInView={{
          scaleY: 1,
          scaleX: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="col-span-3 rounded-[50px] p-[3.2rem] h-[35rem] bg-center bg-cover object-cover origin-bottom"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          backgroundImage: "url('assets/img/interior-home.jpg')",
        }}
      >
        <div className="flex place-items-end h-full">
          <a
            className="bg-[#0D0F17] rounded-full px-7 py-4 text-white hover:bg-[#FE6475] hover:text-black"
            href="#"
          >
            Home insurance
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{
          scaleY: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="col-span-1 rounded-[130px] p-5 h-[35rem] bg-center bg-cover object-cover origin-bottom"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          backgroundImage: "url('assets/img/animals-sitting.jpg')",
        }}
      ></motion.div>
      <motion.div
        initial={{ scaleY: 0, scaleX: 0 }}
        whileInView={{
          scaleX: 1,
          scaleY: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
        className="col-span-2 bg-[#0C1D30] rounded-[50px] p-[3.2rem] origin-bottom"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        }}
      >
        <div className="flex flex-col gap-3 justify-between place-items-start h-full">
          <div>
            <span className="text-white text-[4rem]">Best Choice</span>
            <p className="text-white text-lg font-light pt-2">
              Not all insurance are the same. That's why agency knows that your
              insurace should be customized to fit your situation.
            </p>
          </div>
          <a
            className="bg-[#FE6475] text-black rounded-full px-4 py-4 hover:bg-[#0D0F17] hover:text-white w-full text-center"
            href="#"
          >
            View all services
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0, scaleX: 0 }}
        whileInView={{
          scaleX: 1,
          scaleY: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="col-span-2 p-5 rounded-[50px] h-96 bg-center bg-cover object-cover"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          backgroundImage: "url('assets/img/bmw-m5.jpg')",
        }}
      >
        <div className="flex place-items-end h-full">
          <a
            className="bg-[#0D0F17] rounded-full px-7 py-4 text-white hover:bg-[#FE6475] hover:text-black"
            href="#"
          >
            Vehicle damage
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0, scaleX: 0 }}
        whileInView={{
          scaleX: 1,
          scaleY: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="col-span-2 p-5 rounded-[50px] h-96 bg-center bg-cover object-cover"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          backgroundImage: "url('assets/img/house-on-hill.jpg')",
        }}
      >
        <div className="flex place-items-end h-full">
          <a
            className="bg-[#0D0F17] rounded-full px-7 py-4 text-white hover:bg-[#FE6475] hover:text-black"
            href="#"
          >
            Mortgage insurance
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0, scaleX: 0 }}
        whileInView={{
          scaleX: 1,
          scaleY: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="col-span-2 p-5 rounded-[50px] h-96 bg-center bg-cover object-cover"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          backgroundImage: "url('assets/img/pills.jpg')",
        }}
      >
        <div className="flex place-items-end h-full">
          <a
            className="bg-[#0D0F17] rounded-full px-7 py-4 text-white hover:bg-[#FE6475] hover:text-black"
            href="#"
          >
            Medical expenses
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
