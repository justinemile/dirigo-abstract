import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/property(.*)",
  "/reports(.*)",
  "/search(.*)",
  "/settings(.*)",
  "/upload(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|cur|heic|heif|mp4)(?:$|[?#])|[^?]*\\.(?:json)(?:$|[?#])).*)",
    "/(api|trpc)(.*)",
  ],
};
