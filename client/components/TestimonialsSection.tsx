// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import female1 from "./image/female1.jpg";
// import female2 from "./image/female2.jpg";
// import male1 from "./image/male1.jpg";
// import male2 from "./image/male2.jpg";
// import male3 from "./image/male3.jpg";

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "CEO, TechCorp",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     avatar: male1,
//   },
//   {
//     name: "Jane Smith",
//     role: "CTO, InnovateCo",
//     content:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//     avatar: female1,
//   },
//   {
//     name: "Mike Johnson",
//     role: "Lead Developer, StartupX",
//     content:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     avatar: male2,
//   },
//   {
//     name: "Emily Brown",
//     role: "Product Manager, TechGiant",
//     content:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     avatar:female2,
//   },
//   {
//     name: "Alex Lee",
//     role: "Freelance Developer",
//     content: "Great Website!!!",
//     avatar: male3,
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <section
//       id="testimonials"
//       className="py-20 bg-gradient-to-br from-teal-50 to-indigo-50"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           What Our Clients Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-4">
//                 <Image
//                   src={testimonial.avatar || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-gray-800">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">{testimonial.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import female1 from "./image/female1.jpg";
// import female2 from "./image/female2.jpg";
// import male1 from "./image/male1.jpg";
// import male2 from "./image/male2.jpg";
// import male3 from "./image/male3.jpg";

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "CEO, TechCorp",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     avatar: male1,
//   },
//   {
//     name: "Jane Smith",
//     role: "CTO, InnovateCo",
//     content:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//     avatar: female1,
//   },
//   {
//     name: "Mike Johnson",
//     role: "Lead Developer, StartupX",
//     content:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     avatar: male2,
//   },
//   {
//     name: "Emily Brown",
//     role: "Product Manager, TechGiant",
//     content:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     avatar: female2,
//   },
//   {
//     name: "Alex Lee",
//     role: "Freelance Developer",
//     content: "Great Website!!!",
//     avatar: male3,
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <section
//       id="testimonials"
//       className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
//           What Our Clients Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-4">
//                 <Image
//                   src={testimonial.avatar || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-gray-100">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm text-gray-400">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-300">{testimonial.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import female1 from "./image/female1.jpg";
import female2 from "./image/female2.jpg";
import male1 from "./image/male1.jpg";
import male2 from "./image/male2.jpg";
import male3 from "./image/male3.jpg";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: male1,
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateCo",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    avatar: female1,
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer, StartupX",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: male2,
  },
  {
    name: "Emily Brown",
    role: "Product Manager, TechGiant",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: female2,
  },
  {
    name: "Alex Lee",
    role: "Freelance Developer",
    content: "Great Website!!!",
    avatar: male3,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/30 group hover:border-teal-500/20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden ring-2 ring-teal-500/20 group-hover:ring-teal-500/40 transition-all duration-300">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-teal-400/80">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300/90 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-teal-500/40 to-transparent rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
