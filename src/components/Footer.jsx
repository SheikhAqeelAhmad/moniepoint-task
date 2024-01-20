import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row py-[4rem] gap-[9rem]">
        <motion.div
          className="w-3/5 origin-bottom-left"
          initial={{ scaleY: 0, scaleX: 0 }}
          whileInView={{
            scaleY: 1,
            scaleX: 1,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <p className="text-7xl text-white font-bold tracking-[-3px]">
            Need numbers?
          </p>
          <div className="max-w-[534px]">
            <div className="pt-8 flex gap-4">
              <a
                className="bg-white rounded-full text-black py-3 px-5"
                href="#"
              >
                Travel
              </a>
              <a
                className="bg-[#141C27] rounded-full text-white py-3 px-5"
                href="#"
              >
                Health
              </a>
              <a
                className="bg-[#141C27] text-white rounded-full py-3 px-5"
                href="#"
              >
                CASCO
              </a>
              <a
                className="bg-[#141C27] text-white rounded-full py-3 px-5"
                href="#"
              >
                Mortgage
              </a>
              <a
                className="bg-[#141C27] text-white rounded-full py-3 px-5"
                href="#"
              >
                Fire
              </a>
            </div>
            <form action="" className="pt-6">
              <div className="flex items-center w-full gap-3">
                <div className="mb-5 mt-5 w-1/2">
                  <label for="country" className="block mb-2 font-bold text-white"
                    >Enter the country</label
                  >
                  <input
                    type="text"
                    id="adding-left: 9px;"
                    name="country"
                    placeholder="Australia"
                    className="shadow w-full rounded-full bg-[#1F283D] px-6 py-5"
                  />
                </div>

                <div className="mb-5 mt-5 w-1/2">
                  <label
                    for="name"
                    className="block mb-2 font-bold text-white pl-[9px]"
                    >Choose travel dates</label
                  >
                  <div
                    x-data="config()"
                    className="flex flex-col justify-center items-center text-gray-500 space-y-2"
                  >
                    <div className="relative">
                      <input
                        className="shadow w-full rounded-full bg-[#1F283D] px-6 py-5 focus:outline-none"
                        type="text"
                        placeholder="Select Date"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="absolute right-6 top-6 w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="bg-[#FE6475] border border-[#fe6475] text-white rounded-full px-4 py-4 hover:bg-[#0D0F17] hover:text-white w-full mt-6"
              >
                Calculate
              </button>
            </form>
          </div>
        </motion.div>
        <div className="flex flex-col items-center justify-center w-2/5 relative gap-6">
          <div className="w-full">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="text-white pb-4 text-xl w-full h-[44px]"
            >
              Insurance services
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{
                scaleY: 1,
                scaleX: 1,
              }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Medical expenses
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Family health insurnace
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Vehicle damage
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Property loss
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Fire
              </a>
            </motion.div>
          </div>
          <div className="w-full">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="text-white pb-4 text-xl"
            >
              Company
            </motion.p>
            <motion.div
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{
                scaleY: 1,
                scaleX: 1,
              }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="flex flex-wrap gap-6"
            >
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                About us
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Career
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Help
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                FAQ
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Blog
              </a>
            </motion.div>
          </div>
          <div className="w-full">
            <motion.p
              initial={{ x: -130, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="text-white pb-4 text-xl"
            >
              Bonus
            </motion.p>
            <motion.div
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{
                scaleY: 1,
                scaleX: 1,
              }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="flex flex-wrap gap-6"
            >
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Gift certificate
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Affiliate Program
              </a>
              <a className="text-[#61656C] hover:text-white text-lg" href="#">
                Trainigs
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="flex justify-between py-6"
      >
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12"
            src="./assets/img/rudder-logo.png"
            alt=""
          />
          <div className="text-xl text-white font-light">
            Darcy's insurance products
          </div>
        </div>
        <a className="text-[#5895A2] underline" href="#">
          Privacy Policy
        </a>
      </motion.div>
    </footer>
  );
}
