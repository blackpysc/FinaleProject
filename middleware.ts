import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isLoggedIn = !!token;
      const isOnHomepage = req.nextUrl.pathname.startsWith("/homepage");
      if (isOnHomepage) {
        if (isLoggedIn) return true;
        return false; // redirecting user to login page
      }
      return true;
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};
