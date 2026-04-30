"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Image as ImageIcon,
} from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 3)
          return "Name must be at least 3 characters";
        return "";

      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        return "";

      case "image":
        if (!value) return "Photo URL is required";
        if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(value))
          return "Please enter a valid image URL";
        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value))
          return "Must contain uppercase and lowercase letters";
        return "";

      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== formData.password) return "Passwords do not match";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate and update error if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    // Also revalidate confirmPassword if password changes
    if (name === "password" && touched.confirmPassword) {
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword,
      );
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {
      name: true,
      email: true,
      image: true,
      password: true,
      confirmPassword: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      image: validateField("image", formData.image),
      password: validateField("password", formData.password),
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword,
      ),
    };
    setErrors(newErrors);

    // Check if form is valid
    const isValid = !Object.values(newErrors).some((error) => error);

    if (isValid) {
      console.log("Register Form Data:", {
        name: formData.name,
        email: formData.email,
        image: formData.image,
        password: formData.password,
      });
    }
  };

  const getFieldState = (fieldName) => {
    if (!touched[fieldName]) return "default";
    return errors[fieldName] ? "invalid" : "valid";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <User className="w-4 h-4 text-accent" />
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your full name"
          className={`w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base font-body
                     bg-background border-2 rounded-lg
                     text-body placeholder:text-muted
                     focus:outline-none focus:ring-2
                     transition-all duration-200
                     ${
                       getFieldState("name") === "invalid"
                         ? "border-danger focus:border-danger focus:ring-danger/20"
                         : getFieldState("name") === "valid"
                           ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                           : "border-border focus:border-accent focus:ring-accent/20"
                     }`}
        />
        {touched.name && errors.name && (
          <p className="text-sm text-danger font-body animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <Mail className="w-4 h-4 text-accent" />
          Email Address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your email"
          autoComplete="email"
          className={`w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base font-body
                     bg-background border-2 rounded-lg
                     text-body placeholder:text-muted
                     focus:outline-none focus:ring-2
                     transition-all duration-200
                     ${
                       getFieldState("email") === "invalid"
                         ? "border-danger focus:border-danger focus:ring-danger/20"
                         : getFieldState("email") === "valid"
                           ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                           : "border-border focus:border-accent focus:ring-accent/20"
                     }`}
        />
        {touched.email && errors.email && (
          <p className="text-sm text-danger font-body animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.email}
          </p>
        )}
      </div>

      {/* Photo URL Field */}
      <div className="space-y-2">
        <label
          htmlFor="image"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <ImageIcon className="w-4 h-4 text-accent" />
          Photo URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your photo URL"
          className={`w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base font-body
                     bg-background border-2 rounded-lg
                     text-body placeholder:text-muted
                     focus:outline-none focus:ring-2
                     transition-all duration-200
                     ${
                       getFieldState("image") === "invalid"
                         ? "border-danger focus:border-danger focus:ring-danger/20"
                         : getFieldState("image") === "valid"
                           ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                           : "border-border focus:border-accent focus:ring-accent/20"
                     }`}
        />
        {touched.image && errors.image && (
          <p className="text-sm text-danger font-body animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.image}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <Lock className="w-4 h-4 text-accent" />
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Create a password"
            className={`w-full px-4 py-3 sm:py-3.5 pr-12 text-sm sm:text-base font-body
                       bg-background border-2 rounded-lg
                       text-body placeholder:text-muted
                       focus:outline-none focus:ring-2
                       transition-all duration-200
                       ${
                         getFieldState("password") === "invalid"
                           ? "border-danger focus:border-danger focus:ring-danger/20"
                           : getFieldState("password") === "valid"
                             ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                             : "border-border focus:border-accent focus:ring-accent/20"
                       }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-body transition-colors duration-200"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {touched.password && errors.password && (
          <p className="text-sm text-danger font-body animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <Lock className="w-4 h-4 text-accent" />
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm your password"
            className={`w-full px-4 py-3 sm:py-3.5 pr-12 text-sm sm:text-base font-body
                       bg-background border-2 rounded-lg
                       text-body placeholder:text-muted
                       focus:outline-none focus:ring-2
                       transition-all duration-200
                       ${
                         getFieldState("confirmPassword") === "invalid"
                           ? "border-danger focus:border-danger focus:ring-danger/20"
                           : getFieldState("confirmPassword") === "valid"
                             ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                             : "border-border focus:border-accent focus:ring-accent/20"
                       }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-body transition-colors duration-200"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="text-sm text-danger font-body animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="w-full px-6 py-3.5 sm:py-4 text-sm sm:text-base
                   bg-gradient-accent text-primary rounded-lg font-bold font-body
                   shadow-md hover:shadow-xl
                   hover:brightness-110 hover:saturate-125
                   hover:-translate-y-0.5 hover:scale-[1.02]
                   transition-all duration-200 active:scale-95"
      >
        Create Account
      </button>

      {/* Terms & Privacy */}
      <p className="text-xs sm:text-sm text-muted font-body text-center">
        By registering, you agree to our{" "}
        <a
          href="/terms"
          className="text-accent hover:underline transition-colors duration-200"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          className="text-accent hover:underline transition-colors duration-200"
        >
          Privacy Policy
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
