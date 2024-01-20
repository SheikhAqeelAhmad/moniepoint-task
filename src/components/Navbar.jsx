import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between py-6">
      <motion.img
        initial={{ opacity: 0, y: 10, rotate: 0 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-12 h-12"
        src="./assets/img/rudder-logo.png"
        alt=""
      />
      <div className="flex md:hidden">
        <button id="hamburger">
          <motion.img
            className="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
            alt="menu"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 1,
            }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
          <motion.img
            className="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
            alt="cross menu"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 1,
            }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <motion.a
          href="#"
          className="block font-semibold md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Home
        </motion.a>
        <motion.div
          className="flex px-3 py-3 items-center gap-1"
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <a
            href="#"
            className="block font-semibold md:inline-block text-white hover:text-blue-500 border-b-2 border-blue-900 md:border-none"
          >
            Services
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          href="#"
          className="block font-semibold md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          About us
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          href="#"
          className="block font-semibold md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Blog
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          href="#"
          className="block font-semibold md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Career
        </motion.a>
      </div>
      <div className="flex items-center gap-3">
        <motion.a
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          href="#"
          className="toggle hidden md:flex w-full md:w-auto px-8 py-2 text-right bg-[#85D7E9] hover:bg-zinc-800 hover:text-white font-semibold text-black rounded-full"
        >
          Contact us
        </motion.a>
        <motion.div
          className="flex px-3 py-3 items-center gap-1"
          initial={{ opacity: 0, y: 10, rotate: 0 }}
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
            className="w-4 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L11 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            />
          </svg>

          <a
            href="#"
            className="block font-semibold md:inline-block text-white hover:text-blue-500 border-b-2 border-blue-900 md:border-none"
          >
            Login
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
