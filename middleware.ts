import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|cur|heic|heif|mp4)(?:$|[?#])|[^?]*\\.(?:json)(?:$|[?#])).*)",
    "/(api|trpc)(.*)",
  ],
};
