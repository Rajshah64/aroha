// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronDown, ChevronUp } from "lucide-react"

// const faqs = [
//   {
//     question: "What makes this platform unique?",
//     answer:
//       "Our platform combines cutting-edge technology with an intuitive user interface, providing a seamless development experience that's unmatched in the industry.",
//   },
//   {
//     question: "Is there a free trial available?",
//     answer:
//       "Yes, we offer a 14-day free trial for all new users. You can explore all features during this period with no commitment.",
//   },
//   {
//     question: "How does the pricing work?",
//     answer:
//       "We have flexible pricing plans tailored to different needs. Our plans are based on the number of users and projects, with options for both small teams and large enterprises.",
//   },
//   {
//     question: "What kind of support do you offer?",
//     answer:
//       "We provide 24/7 customer support through chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues.",
//   },
// ]

// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <div className="border-b border-gray-200 py-4">
//       <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
//         <span className="text-lg font-semibold text-gray-800">{question}</span>
//         {isOpen ? <ChevronUp className="text-teal-600" /> : <ChevronDown className="text-teal-600" />}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="mt-2 text-gray-600"
//           >
//             {answer}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// const FAQSection = () => {
//   return (
//     <section id="faq" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
//         <div className="max-w-3xl mx-auto">
//           {faqs.map((faq, index) => (
//             <FAQItem key={index} question={faq.question} answer={faq.answer} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FAQSection

// FAQSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What makes this platform unique?",
    answer:
      "Our platform combines cutting-edge technology with an intuitive user interface, providing a seamless development experience that's unmatched in the industry.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial for all new users. You can explore all features during this period with no commitment.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We have flexible pricing plans tailored to different needs. Our plans are based on the number of users and projects, with options for both small teams and large enterprises.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support through chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-100">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-teal-400" />
        ) : (
          <ChevronDown className="text-teal-400" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
