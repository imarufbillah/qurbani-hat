"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import BookingForm from "./BookingForm";
import { toast } from "sonner";

const BookingSection = ({ isLoggedIn }) => {
  const handleBookingSuccess = () => {
    toast.success("Booking request submitted successfully!", {
      description: "We'll contact you soon to confirm your booking.",
      duration: 5000,
    });
  };

  if (isLoggedIn) {
    return (
      <div className="bg-surface border-2 border-border rounded-xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-heading">
          Place Your Booking
        </h2>

        <BookingForm onSuccess={handleBookingSuccess} />
      </div>
    );
  }

  return (
    <div className="bg-surface border-2 border-accent/40 rounded-xl p-6 sm:p-8 text-center space-y-6">
      {/* Lock Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-accent-soft flex items-center justify-center">
          <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
        </div>
      </div>

      {/* Heading */}
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-heading">
          Login to Place Booking
        </h2>
        <p className="text-sm sm:text-base text-muted font-body">
          You need to be logged in to book an animal.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <Link
          href="/login"
          className="block w-full px-6 py-3 sm:py-3.5 text-sm sm:text-base 
                     bg-primary text-background rounded-lg font-semibold font-body
                     hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5
                     transition-all duration-200 active:scale-95"
        >
          Login Now
        </Link>

        <p className="text-sm text-muted font-body">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-accent font-semibold hover:text-accent-hover hover:underline transition-colors duration-200"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BookingSection;
