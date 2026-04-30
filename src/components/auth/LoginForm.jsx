"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {
      email: true,
      password: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };
    setErrors(newErrors);

    // Check if form is valid
    const isValid = !Object.values(newErrors).some((error) => error);

    if (isValid) {
      console.log("Login Form Data:", formData);
    }
  };

  const getFieldState = (fieldName) => {
    if (!touched[fieldName]) return "default";
    return errors[fieldName] ? "invalid" : "valid";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          <p className="text-sm text-danger font-body flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.email}
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
            placeholder="Enter your password"
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
          <p className="text-sm text-danger font-body flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.password}
          </p>
        )}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                rememberMe: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-2 border-border text-accent 
                       focus:ring-2 focus:ring-accent/20 cursor-pointer
                       transition-all duration-200"
          />
          <span className="text-sm text-body font-body group-hover:text-primary transition-colors duration-200">
            Remember me
          </span>
        </label>

        <a
          href="/forgot-password"
          className="text-sm text-accent hover:text-accent-hover hover:underline font-body font-medium transition-colors duration-200"
        >
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full px-6 py-3.5 sm:py-4 text-sm sm:text-base
                   bg-gradient-accent text-primary rounded-lg font-bold font-body
                   shadow-md hover:shadow-xl
                   hover:brightness-110 hover:saturate-125
                   hover:-translate-y-0.5 hover:scale-[1.02]
                   transition-all duration-200 active:scale-95"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
