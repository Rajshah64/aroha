// import FloatingNavbar from "@/components/FloatingNavbar"
// import HeroSection from "@/components/HeroSection"
// import FeaturesSection from "@/components/FeaturesSection"
// import TestimonialsSection from "@/components/TestimonialsSection"
// import FAQSection from "@/components/FAQSection"
// import FooterSection from "@/components/FooterSection"

// export default function Home() {
//   return (
//     <main className="bg-white text-gray-800 min-h-screen">
//       <FloatingNavbar />
//       <HeroSection />
//       <FeaturesSection />
//       <TestimonialsSection />
//       <FAQSection />
//       <FooterSection />
//     </main>
//   )
// }

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import FloatingNavbar from "@/components/FloatingNavbar";
// import HeroSection from "@/components/HeroSection";
// import FeaturesSection from "@/components/FeaturesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import FAQSection from "@/components/FAQSection";
// import FooterSection from "@/components/FooterSection";

// export default function Home() {
//   return (
//     <main className="bg-white text-gray-800 min-h-screen">
//       {/* <FloatingNavbar /> */}

//       {/* Show SignIn button when signed out */}
//       <SignedOut>
//         <FloatingNavbar />
//         <HeroSection />
//         <FeaturesSection />
//         <TestimonialsSection />
//         <FAQSection />
//         <FooterSection />
//         {/* <div className="flex justify-center mt-10">
//           <SignInButton mode="modal">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
//               Sign In
//             </button>
//           </SignInButton>
//         </div> */}
//       </SignedOut>

//       {/* Show dashboard content when signed in */}
//       <SignedIn>
//         {/* User Profile Button */}
//         {/* <div className="absolute top-5 right-5">
//           <UserButton />
//         </div> */}
//         <UserButton />
//       </SignedIn>
//     </main>
//   );
// }

// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
// import FloatingNavbar from "@/components/FloatingNavbar";
// import HeroSection from "@/components/HeroSection";
// import FeaturesSection from "@/components/FeaturesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import FAQSection from "@/components/FAQSection";
// import FooterSection from "@/components/FooterSection";
// import { redirect } from "next/navigation";

// export default function Home() {
//   return (
//     <main className="bg-white text-gray-800 min-h-screen">
//       <SignedIn>{redirect("/dashboard")}</SignedIn>

//       <SignedOut>
//         <FloatingNavbar />
//         <HeroSection />
//         <FeaturesSection />
//         <TestimonialsSection />
//         <FAQSection />
//         <FooterSection />
//       </SignedOut>
//     </main>
//   );
// }


import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <FloatingNavbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
