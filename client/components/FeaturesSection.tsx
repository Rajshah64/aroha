/* import { motion } from "framer-motion"
import { Code, Zap, Shield, Cloud, Smartphone, Users } from "lucide-react"

const features = [
  {
    icon: <Code size={48} />,
    title: "Clean Code",
    description: "Write beautiful, maintainable code with our intuitive tools.",
  },
  {
    icon: <Zap size={48} />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized platform.",
  },
  {
    icon: <Shield size={48} />,
    title: "Secure by Default",
    description: "Rest easy knowing your data is protected with our advanced security measures.",
  },
  {
    icon: <Cloud size={48} />,
    title: "Cloud Integration",
    description: "Seamlessly integrate with popular cloud services for enhanced flexibility.",
  },
  {
    icon: <Smartphone size={48} />,
    title: "Mobile-First",
    description: "Build responsive applications that work flawlessly on any device.",
  },
  {
    icon: <Users size={48} />,
    title: "Collaboration",
    description: "Foster teamwork with built-in collaboration tools and real-time editing.",
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-teal-600 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
*/

// "use client";

// import { motion } from "framer-motion"
// import { Code, Zap, Shield, Cloud, Smartphone, Users } from "lucide-react"
// import Image from "next/image"
// import ai from "./image/ai.jpg";
// import demo from "./image/demo.jpg";
// import energy from "./image/energy.jpg";
// import env from "./image/env.jpg";
// import news from "./image/news.jpg";
// import traffic from "./image/traffic.jpg"

// const features = [
//   {
//     icon: <Code size={48} />,
//     title: "Demographic Analysis",
//     description: "Write beautiful, maintainable code with our intuitive tools.",
//     image: demo
//   },
//   {
//     icon: <Zap size={48} />,
//     title: "Traffic Optimization",
//     description: "Experience blazing-fast performance with our optimized platform.",
//     image: traffic
//   },
//   {
//     icon: <Shield size={48} />,
//     title: "Energy Consumption Monitoring",
//     description: "Rest easy knowing your data is protected with our advanced security measures.",
//     image: energy
//   },
//   {
//     icon: <Cloud size={48} />,
//     title: "Environment impact assesment",
//     description: "Seamlessly integrate with popular cloud services for enhanced flexibility.",
//     image: env
//   },
//   {
//     icon: <Smartphone size={48} />,
//     title: "AI insights",
//     description: "Build responsive applications that work flawlessly on any device.",
//     image: ai
//   },
//   {
//     icon: <Users size={48} />,
//     title: "News Assistance",
//     description: "Foster teamwork with built-in collaboration tools and real-time editing.",
//     image: news
//   },
// ]

// const FeaturesSection = () => {
//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="text-teal-600 mb-4">{feature.icon}</div>
//               <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FeaturesSection

// FeaturesSection.tsx
// "use client";

// import { motion } from "framer-motion";
// import { Code, Zap, Shield, Cloud, Smartphone, Users } from "lucide-react";
// import Image from "next/image";
// import ai from "./image/ai.jpg";
// import demo from "./image/demo.jpg";
// import energy from "./image/energy.jpg";
// import env from "./image/env.jpg";
// import news from "./image/news.jpg";
// import traffic from "./image/traffic.jpg";

// const features = [
//   {
//     icon: <Code size={48} />,
//     title: "Demographic Analysis",
//     description: "Write beautiful, maintainable code with our intuitive tools.",
//     image: demo,
//   },
//   {
//     icon: <Zap size={48} />,
//     title: "Traffic Optimization",
//     description: "Experience blazing-fast performance with our optimized platform.",
//     image: traffic,
//   },
//   {
//     icon: <Shield size={48} />,
//     title: "Energy Consumption Monitoring",
//     description: "Rest easy knowing your data is protected with our advanced security measures.",
//     image: energy,
//   },
//   {
//     icon: <Cloud size={48} />,
//     title: "Environment impact assesment",
//     description: "Seamlessly integrate with popular cloud services for enhanced flexibility.",
//     image: env,
//   },
//   {
//     icon: <Smartphone size={48} />,
//     title: "AI insights",
//     description: "Build responsive applications that work flawlessly on any device.",
//     image: ai,
//   },
//   {
//     icon: <Users size={48} />,
//     title: "News Assistance",
//     description: "Foster teamwork with built-in collaboration tools and real-time editing.",
//     image: news,
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <section id="features" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
//           Our Features
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="text-teal-400 mb-4">{feature.icon}</div>
//               <h3 className="text-2xl font-semibold mb-2 text-gray-100">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-300">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

"use client";

import { motion } from "framer-motion";
import { Code, Zap, Shield, Cloud, Smartphone, Users } from "lucide-react";
import Image from "next/image";
import ai from "./image/ai.jpg";
import demo from "./image/demo.jpg";
import energy from "./image/energy.jpg";
import env from "./image/env.jpg";
import news from "./image/news.jpg";
import traffic from "./image/traffic.jpg";

const features = [
  {
    icon: <Code size={48} />,
    title: "Demographic Analysis",
    description: "Write beautiful, maintainable code with our intuitive tools.",
    image: demo,
  },
  {
    icon: <Shield size={48} />,
    title: "Traffic Optimization",
    description:
      "Experience blazing-fast performance with our optimized platform.",
    image: traffic,
  },
  {
    icon: <Zap size={48} />,
    title: "Energy Consumption Monitoring",
    description:
      "Rest easy knowing your data is protected with our advanced security measures.",
    image: energy,
  },
  {
    icon: <Cloud size={48} />,
    title: "Environment impact assesment",
    description:
      "Seamlessly integrate with popular cloud services for enhanced flexibility.",
    image: env,
  },
  {
    icon: <Smartphone size={48} />,
    title: "AI insights",
    description:
      "Build responsive applications that work flawlessly on any device.",
    image: ai,
  },
  {
    icon: <Users size={48} />,
    title: "News Assistance",
    description:
      "Foster teamwork with built-in collaboration tools and real-time editing.",
    image: news,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-700/50 flex flex-col hover:border-teal-500/30 group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <motion.div className="text-teal-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-300/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
