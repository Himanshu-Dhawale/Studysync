// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// export const runtime = "nodejs";

// const isProtectedRoute = createRouteMatcher([
//   '/login(.*)',
//   '/sign-up(.*)',
//   '/',
// ]);

// export default clerkMiddleware((auth, request) => {
//   if (isProtectedRoute(request)) {
//      auth.protect();
//   }
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
  
// };


// middleware.ts or src/middleware.ts (depending on your project structure)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Define which routes require authentication
const isProtectedRoute = createRouteMatcher([
  '/onboarding(.*)',
  '/dashboard(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // If accessing a protected route while not signed in → redirect to login
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  // For logged-in users or non-protected routes, allow access
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Apply middleware to all routes except Next.js internals and static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
