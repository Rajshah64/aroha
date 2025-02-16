/*import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-teal-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Our <span className="text-teal-600">Innovative</span> Platform
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the future of web development with our cutting-edge tools and services.
        </motion.p>
        <motion.button
          className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-3 rounded-full transition-colors shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection*/
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { SignInButton } from "@clerk/nextjs";
// import hero from "./image/hero.jpg";

// const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-indigo-50 py-20 lg:py-0"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           <motion.div
//             className="flex-1 text-center lg:text-left"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-gray-800"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Welcome to Our <span className="text-teal-600">Innovative</span>{" "}
//               Platform
//             </motion.h1>
//             <motion.p
//               className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Experience the future of City Planning with our cutting-edge tools
//               and services.
//             </motion.p>
//             <SignInButton>
//               <motion.button
//                 className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-3 rounded-full transition-colors shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get Started
//               </motion.button>
//             </SignInButton>
//           </motion.div>

//           <motion.div
//             className="flex-1 relative w-full max-w-lg "
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <div className="relative w-full h-[400px] lg:h-[600px] ">
//               <Image
//                 src={hero}
//                 alt="Hero Image"
//                 fill
//                 className="object-cover rounded-lg shadow-lg w-full h-auto "
//                 priority
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import hero from "./image/hero.webp";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-9xl font-bold mb-6 text-gray-100 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-teal-400">अroha</span>{" "}
            </motion.h1>
            <motion.h6
              className="text-lg md:text-2xl lg:text-5xl mb-8 text-gray-300 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Finding your Horizon.
            </motion.h6>
            {/* <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the future of City Planning with our cutting-edge tools
              and services.
            </motion.p> */}
            <SignInButton>
              <motion.button
                className="bg-teal-500 hover:bg-teal-600 text-gray-900 text-lg px-8 py-3 rounded-full transition-colors shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </SignInButton>
          </motion.div>

          <motion.div
            className="flex-1 relative w-full max-w-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src={hero}
                alt="Hero Image"
                fill
                className="object-cover rounded-xl shadow-lg w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
