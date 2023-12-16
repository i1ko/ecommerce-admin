import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
    publicRoutes: ["/"],
    afterAuth: (auth) => {
        console.log(auth);
        return auth.isPublicRoute ? NextResponse.next() : undefined;
    }
})

