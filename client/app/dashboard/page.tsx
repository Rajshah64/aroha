// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// export default async function Dashboard() {
//   const { userId } = await auth();

//   if (!userId) {
//     redirect("/");
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
//     </div>
//   );
// }

// import { currentUser } from "@clerk/nextjs/server"
// import { redirect } from "next/navigation"

// export default async function Dashboard() {
//   const user = await currentUser()

//   if (!user) {
//     redirect("/") // Only redirect unauthenticated users to the landing page
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold">Welcome, {user.firstName}!</h1>
//     </div>
//   )
// }

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs";

// // Define public routes
// const isPublicRoute = createRouteMatcher(["/"]);

// export default clerkMiddleware((req) => {
//   const { userId } = auth(); // Get user authentication status
//   const url = req.nextUrl; // Use Next.js `nextUrl` instead of `req.url`

//   if (!userId && !isPublicRoute(req)) {
//     // If user is NOT logged in and tries to access a private page, redirect to "/"
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (userId && url.pathname === "/") {
//     // If the user is logged in and still on "/", redirect them to "/dashboard"
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next(); // Continue normally
// });

// // Apply the middleware to all routes except Next.js internals
// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };

// import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
// import { UserButton } from "@clerk/nextjs";

// export default function Dashboard() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <SignedIn>
//         <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
//         <UserButton />
//       </SignedIn>

//       <SignedOut>
//         <p className="text-xl">You need to sign in to access the dashboard.</p>
//         <SignInButton />
//       </SignedOut>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import TrafficMap from "./components/traffic-analysis";
import { EnergyConsumption } from "./components/energy-consumption";
import RadarGraphs from "./components/RadarGraphs";
import { UserNav } from "./components/user-nav";
import { MobileNav } from "./components/mobile-nav";
import NewsPage from "./components/NewsPage";
import DemographicAnalysis from "./components/demographic-analysis";  // Updated import
import Insights from "./components/Ai_insights";
import Feedback from "./components/Feedback";

// Import JSON Data
import demographicData from "../../../server/Backend/population_data.json";

export default function Dashboard() {
  const [selectedFeature, setSelectedFeature] = useState("demographic");

  const renderFeature = () => {
    switch (selectedFeature) {
      case "demographic":
        // Pass JSON data as props to DemographicAnalysis
        return <DemographicAnalysis demographicData={demographicData} />;
      case "traffic":
        return <TrafficMap />;
      case "energy":
        return <EnergyConsumption />;
      case "environmental":
        return <RadarGraphs />;
      case "ai":
        return <Insights />;
      case "news":
        return <NewsPage />;
      case "feedback":
        return <Feedback />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <Sidebar setSelectedFeature={setSelectedFeature} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            अroha
          </h1>
          <div className="flex items-center space-x-4">
            <MobileNav setSelectedFeature={setSelectedFeature} />
            <UserNav />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">{renderFeature()}</main>
      </div>
    </div>
  );
}
