import React, { FC, useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => {
  // State to toggle between sign-in, sign-up, and forgot password
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in or sign up logic here (e.g., API calls)
    console.log(isSignUp ? "Signing up" : "Signing in", { email, password, name, confirmPassword });
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    // Implement Google Sign-In logic here
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up clicked");
    // Implement Google Sign-Up logic here
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request sent for", email);
    // Handle password reset logic here
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-[#4B1975] rounded-lg w-96 p-6 relative transform transition-transform ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-200 hover:text-white"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          {isForgotPassword
            ? "Reset Your Password"
            : isSignUp
            ? "Create an Account"
            : "Sign In"}
        </h2>
        <p className="mb-6 text-center text-gray-200">
          {isForgotPassword
            ? "Enter your email to reset your password."
            : isSignUp
            ? "Sign up to access the Stellar Dashboard."
            : "Sign in to access your account."}
        </p>

        {/* Form */}
        {isForgotPassword ? (
          // Forgot Password Form
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        ) : (
          // Sign In / Sign Up Form
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-200">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => setIsForgotPassword(true)}
                  className="text-sm text-blue-600 hover:text-blue-700 underline"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>
        )}

        {/* Row with Google Sign In/Up button */}
        {!isForgotPassword && (
          <div className="mt-4 flex space-x-2">
            <button
              onClick={isSignUp ? handleGoogleSignUp : handleGoogleSignIn}
              className="w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 flex items-center justify-center space-x-2"
            >
              <img
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt="Google Logo"
                className="h-5 w-5"
              />
              <span>{isSignUp ? "Sign Up with Google" : "Sign In with Google"}</span>
            </button>
          </div>
        )}

        {/* Don't have an account link */}
        {!isForgotPassword && (
          <div className="mt-4 text-center">
            {isSignUp ? (
              <button
                onClick={() => setIsSignUp(false)}
                className="text-sm text-gray-200 hover:text-blue-600 underline"
              >
                Already have an account? Sign in
              </button>
            ) : (
              <button
                onClick={() => setIsSignUp(true)}
                className="text-sm text-gray-200 hover:text-blue-600 underline"
              >
                Don't have an account? Sign up
              </button>
            )}
          </div>
        )}

        {/* Back to Sign In */}
        {isForgotPassword && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsForgotPassword(false)}
              className="text-sm text-gray-200 hover:text-blue-600 underline"
            >
              Back to Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
