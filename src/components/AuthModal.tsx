import React, { FC } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Get Started</h2>
        <p className="mb-6 text-center text-gray-600">
          Sign in to access the Stellar Dashboard.
        </p>
        <div className="flex flex-col gap-4">
          <button className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign in with Google
          </button>
          <button className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900">
            Sign in with Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
