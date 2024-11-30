"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Simulating a logout function
const logout = () => {
  console.log("User logged out");
  // You can replace this with actual logout functionality, like clearing cookies, tokens, or redirecting to login page.
};

const LogoutModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the logout confirmation modal
  const openModal = () => setIsOpen(true);

  // Function to close the logout confirmation modal
  const closeModal = () => setIsOpen(false);

  // Handle the logout action
  const handleLogout = () => {
    logout();  // Replace with actual logout logic
    closeModal(); // Close the modal after logout
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      {/* Log Out Button */}
      <button
        onClick={openModal}
        className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
      >
        Log Out
      </button>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closeModal} // Close modal when clicking outside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-background w-11/12 sm:w-96 rounded-lg shadow-lg p-6"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.75, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Log Out</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                Are you sure you want to log out? This action cannot be undone.
              </p>
              <div className="mt-4 flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Confirm Log Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogoutModal;
