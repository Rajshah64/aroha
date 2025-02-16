// import "./globals.css"
// import { Inter } from "next/font/google"
// import type React from "react" // Import React

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Modern Landing Page",
//   description: "A fresh and innovative landing page",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

// import './globals.css'

// import "./globals.css";
// import { Inter } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Modern Landing Page",
//   description: "A fresh and innovative landing page",
//   generator: "v0.dev",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en" className="scroll-smooth">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }

// import "./globals.css";
// import { Inter } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Modern Landing Page",
//   description: "A fresh and innovative landing page",
//   generator: "v0.dev",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en" className="scroll-smooth">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }

// import { ClerkProvider } from "@clerk/nextjs";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }

import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "अroha",
  description: "A fresh and innovative landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
