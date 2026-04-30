"use client";

import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = () => {
  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign-in clicked");
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="w-full flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4
                 bg-surface border-2 border-border rounded-lg
                 text-body font-body font-semibold text-sm sm:text-base
                 hover:border-accent hover:bg-gradient-accent-soft hover:shadow-md
                 transition-all duration-200 active:scale-95"
    >
      <FcGoogle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleSignInButton;
