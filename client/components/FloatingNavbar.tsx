/*"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-full shadow-lg py-3 px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-teal-600">
            Logo
          </Link>
          <div className="space-x-6">
            <Link href="#hero" className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-teal-600 transition-colors">
              FAQ
            </Link>
          </div>
          <div className="space-x-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition-colors">
              Sign In
            </button>
            <button className="bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-full transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default FloatingNavbar*/

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// import {
//   ClerkProvider,
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// const FloatingNavbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       // Get all sections
//       const sections = ["hero", "features", "testimonials", "faq"];

//       // Find the current section
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80; // Adjust this value based on your navbar height
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "py-2" : "py-4"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120, damping: 20 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-full shadow-lg py-3 px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <Link href="/" className="text-2xl font-bold text-teal-600">
//               Logo
//             </Link>

//             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//               {["hero", "features", "testimonials", "faq"].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`text-gray-700 hover:text-teal-600 transition-colors capitalize
//                     ${
//                       activeSection === section
//                         ? "text-teal-600 font-semibold"
//                         : ""
//                     }`}
//                 >
//                   {section === "hero" ? "Home" : section}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-4">
//               {/* <SignInButton> */}
//                 <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition-colors">
//                   Sign In
//                 </button>
//               {/* </SignInButton>
//               <SignUpButton> */}
//                 <button className="bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-full transition-colors">
//                   Sign Up
//                 </button>
//               {/* </SignUpButton> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default FloatingNavbar;

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// const FloatingNavbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//       const sections = ["hero", "features", "testimonials", "faq"];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "py-2" : "py-4"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120, damping: 20 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-full shadow-lg py-3 px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <Link href="/" className="text-2xl font-bold text-teal-600">
//               Logo
//             </Link>

//             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//               {["hero", "features", "testimonials", "faq"].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`text-gray-700 hover:text-teal-600 transition-colors capitalize
//                     ${
//                       activeSection === section
//                         ? "text-teal-600 font-semibold"
//                         : ""
//                     }`}
//                 >
//                   {section === "hero" ? "Home" : section}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-4">
//               {/* Show Sign In/Sign Up when signed out */}
//               <SignedOut>
//                 <SignInButton mode="modal">
//                   <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition-colors">
//                     Sign In
//                   </button>
//                 </SignInButton>
//                 <SignUpButton mode="modal">
//                   <button className="bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-full transition-colors">
//                     Sign Up
//                   </button>
//                 </SignUpButton>
//               </SignedOut>

//               {/* Show user profile when signed in */}
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default FloatingNavbar;

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";
// import logo2 from "./image/logo2.jpg";

// const FloatingNavbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       const sections = ["hero", "features", "testimonials", "faq"];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "py-2" : "py-4"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120, damping: 20 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-full shadow-lg py-3 px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <Link
//               href="/"
//               className="text-2xl font-bold text-teal-600 relative w-12 h-12 overflow-hidden rounded-full"
//             >
//               <Image src={logo2} alt="LOGO" fill className="object-contain" />
//             </Link>

//             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//               {["hero", "features", "testimonials", "faq"].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`text-gray-700 hover:text-teal-600 transition-colors capitalize
//                     ${
//                       activeSection === section
//                         ? "text-teal-600 font-semibold"
//                         : ""
//                     }`}
//                 >
//                   {section === "hero" ? "Home" : section}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-4">
//               <SignedOut>
//                 <SignInButton mode="modal">
//                   <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition-colors">
//                     Sign In
//                   </button>
//                 </SignInButton>

//                 <SignUpButton mode="modal">
//                   <button className="bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-full transition-colors">
//                     Sign Up
//                   </button>
//                 </SignUpButton>
//               </SignedOut>

//               <SignedIn>
//                 <UserButton afterSignOutUrl="/" />
//               </SignedIn>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default FloatingNavbar;

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";
// import logo2 from "./image/logo2.jpg";

// const FloatingNavbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       const sections = ["hero", "features", "testimonials", "faq"];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "py-2" : "py-4"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120, damping: 20 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-full shadow-lg py-3 px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <Link
//               href="/"
//               className="text-2xl font-bold text-teal-400 relative w-12 h-12 overflow-hidden rounded-full"
//             >
//               <Image src={logo2} alt="LOGO" fill className="object-contain" />
//             </Link>

//             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//               {["hero", "features", "testimonials", "faq"].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`text-gray-300 hover:text-teal-400 transition-colors capitalize
//                     ${
//                       activeSection === section
//                         ? "text-teal-400 font-semibold"
//                         : ""
//                     }`}
//                 >
//                   {section === "hero" ? "Home" : section}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-4">
//               <SignedOut>
//                 <SignInButton mode="modal">
//                   <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-full transition-colors">
//                     Sign In
//                   </button>
//                 </SignInButton>

//                 <SignUpButton mode="modal">
//                   <button className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-gray-900 px-4 py-2 rounded-full transition-colors">
//                     Sign Up
//                   </button>
//                 </SignUpButton>
//               </SignedOut>

//               <SignedIn>
//                 <UserButton afterSignOutUrl="/" />
//               </SignedIn>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default FloatingNavbar;

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";
// import logo2 from "./image/logo2.jpg";

// const FloatingNavbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       const sections = ["hero", "features", "testimonials", "faq"];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//       setIsMenuOpen(false); // Close menu after clicking
//     }
//   };

//   const menuVariants = {
//     open: { opacity: 1, height: "auto" },
//     closed: { opacity: 0, height: 0 },
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "py-2" : "py-4"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120, damping: 20 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-full shadow-lg py-3 px-6">
//           <div className="flex justify-between items-center">
//             <Link
//               href="/"
//               className="text-2xl font-bold text-teal-400 relative w-12 h-12 overflow-hidden rounded-full"
//             >
//               <Image src={logo2} alt="LOGO" fill className="object-contain" />
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-6">
//               {["hero", "features", "testimonials", "faq"].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`text-gray-300 hover:text-teal-400 transition-colors capitalize
//                     ${
//                       activeSection === section
//                         ? "text-teal-400 font-semibold"
//                         : ""
//                     }`}
//                 >
//                   {section === "hero" ? "Home" : section}
//                 </button>
//               ))}
//             </div>

//             <div className="hidden md:flex items-center gap-4">
//               <SignedOut>
//                 <SignInButton mode="modal">
//                   <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-full transition-colors">
//                     Sign In
//                   </button>
//                 </SignInButton>

//                 <SignUpButton mode="modal">
//                   <button className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-gray-900 px-4 py-2 rounded-full transition-colors">
//                     Sign Up
//                   </button>
//                 </SignUpButton>
//               </SignedOut>

//               <SignedIn>
//                 <UserButton afterSignOutUrl="/" />
//               </SignedIn>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-teal-400 p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <motion.div
//             initial="closed"
//             animate={isMenuOpen ? "open" : "closed"}
//             variants={menuVariants}
//             transition={{ duration: 0.2 }}
//             className="md:hidden overflow-hidden"
//           >
//             <div className="flex flex-col gap-4 mt-4">
//               {["hero", "features", "testimonials", "faq"].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`text-gray-300 hover:text-teal-400 transition-colors capitalize py-2
//                     ${
//                       activeSection === section
//                         ? "text-teal-400 font-semibold"
//                         : ""
//                     }`}
//                 >
//                   {section === "hero" ? "Home" : section}
//                 </button>
//               ))}

//               <div className="flex flex-col gap-4 pt-4 border-t border-gray-700">
//                 <SignedOut>
//                   <SignInButton mode="modal">
//                     <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-full transition-colors w-full">
//                       Sign In
//                     </button>
//                   </SignInButton>

//                   <SignUpButton mode="modal">
//                     <button className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-gray-900 px-4 py-2 rounded-full transition-colors w-full">
//                       Sign Up
//                     </button>
//                   </SignUpButton>
//                 </SignedOut>

//                 <SignedIn>
//                   <div className="flex justify-center">
//                     <UserButton afterSignOutUrl="/" />
//                   </div>
//                 </SignedIn>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default FloatingNavbar;

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import logo2 from "./image/logo2.jpg";

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "features", "testimonials", "faq"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-opacity-95 backdrop-blur-md rounded-full shadow-lg py-3 px-6 border border-slate-600">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-teal-400 relative w-12 h-12 overflow-hidden rounded-full"
            >
              <Image src={logo2} alt="LOGO" fill className="object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {["hero", "features", "testimonials", "faq"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-200 hover:text-teal-400 transition-colors capitalize
                    ${
                      activeSection === section
                        ? "text-teal-400 font-semibold"
                        : ""
                    }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-full transition-colors">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-gray-900 px-4 py-2 rounded-full transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-teal-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 mt-4">
              {["hero", "features", "testimonials", "faq"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-200 hover:text-teal-400 transition-colors capitalize py-2
                    ${
                      activeSection === section
                        ? "text-teal-400 font-semibold"
                        : ""
                    }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}

              <div className="flex flex-col gap-4 pt-4 border-t border-slate-600">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-full transition-colors w-full">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-gray-900 px-4 py-2 rounded-full transition-colors w-full">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingNavbar;
