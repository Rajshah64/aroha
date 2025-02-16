// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/"], // Landing page is public
//   ignoredRoutes: ["/api(.*)"], // Ignore API routes
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)"], // Apply middleware to all routes except static files and Next.js internals
// };

// import { withClerkMiddleware } from "@clerk/nextjs";
// import { NextResponse } from "next/server";

// export default withClerkMiddleware(() => {
//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)"], // Apply middleware to all routes except static files and Next.js internals
// };

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default clerkMiddleware(() => {
//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/dashboard"],
// };

// import { clerkMiddleware } from "@clerk/nextjs/server"

// export default clerkMiddleware({
//   publicRoutes: ["/"], // Allow landing page to be accessible
//   afterAuth(auth, req, evt) {
//     if (!auth.userId && req.nextUrl.pathname !== "/") {
//       return Response.redirect(new URL("/", req.url)) // Redirect unauthenticated users to home
//     }
//   }
// })

// // Ensure Clerk middleware runs for all routes
// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"], // Apply middleware to all pages except Next.js internals
// }

// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware()

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)'], // Run middleware on API routes
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(["/"]); // Only the landing page is public

// export default clerkMiddleware((auth, req) => {
//   const { userId } = auth(); // ✅ Correct way to get user details
//   const url = req.nextUrl; // ✅ Correct way to get pathname

//   if (!userId && !isPublicRoute(req)) {
//     // ❌ Unauthenticated user trying to access a private page -> Redirect to "/"
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (userId && url.pathname === "/") {
//     // ✅ Authenticated user on home page -> Redirect to "/dashboard"
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next(); // Continue normally
// });

// // Apply middleware to all routes except Next.js internals
// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };






import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]); // Define public routes

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // ✅ Await the promise

  const url = req.nextUrl;

  if (!userId && !isPublicRoute(req)) {
    // ❌ Unauthenticated user trying to access a private page -> Redirect to "/"
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (userId && url.pathname === "/") {
    // ✅ Authenticated user on home page -> Redirect to "/dashboard"
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next(); // Continue processing
});

// Apply middleware to all routes except Next.js internals
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
