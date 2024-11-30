'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HelpModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle modal visibility
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" h-[70vh] flex justify-center items-center">
            <div className="flex justify-center items-center h-screen">
                {/* Help Button */}
                <button
                    onClick={toggleModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                >
                    Help
                </button>

                {/* Modal */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                            onClick={toggleModal} // Close modal when clicking on overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="bg-background w-11/12 sm:w-96 rounded-lg shadow-lg p-6"
                                onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside modal
                                initial={{ scale: 0.75, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.75, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-semibold">How can we help you?</h2>
                                    <button
                                        onClick={toggleModal}
                                        className="text-gray-500 hover:text-gray-700 text-xl"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    If you have any questions, feel free to ask. We're here to assist you!
                                </p>
                                <textarea
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    rows={4}
                                    placeholder="Describe your issue here..."
                                />
                                <div className="mt-4 flex justify-end">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                        Submit
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>

    );
};

export default HelpModal;
