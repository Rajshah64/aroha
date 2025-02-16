// import Link from "next/link"
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// const FooterSection = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-600 py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold text-teal-600 mb-4">Logo</h3>
//             <p>Empowering developers with innovative tools and solutions.</p>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className="hover:text-teal-600 transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-teal-600 transition-colors">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-teal-600 transition-colors">
//                   Pricing
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-teal-600 transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold text-gray-800 mb-4">Legal</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className="hover:text-teal-600 transition-colors">
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-teal-600 transition-colors">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-teal-600 transition-colors">
//                   Cookie Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
//                 <Facebook size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
//                 <Twitter size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
//                 <Instagram size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
//                 <Linkedin size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-200 text-center">
//           <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default FooterSection

// FooterSection.tsx
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "./image/logo2.jpg";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src={logo}
              alt="logo"
              className="text-2xl font-bold text-teal-400 mb-4 rounded-xl"
            />
            {/* <h3 className="text-2xl font-bold text-teal-400 mb-4">Logo</h3> */}
            <p>Empowering developers with innovative tools and solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} अroha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
