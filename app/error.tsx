// app/error.js

"use client"
export default function ErrorPage({ error, reset }:any) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-white">
        <h1 className="text-5xl font-bold">Something Went Wrong</h1>
        <p className="mt-4 text-xl">Oops! There was an error with your request.</p>
        <button 
          onClick={reset} 
          className="mt-6 py-2 px-6 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-200"
        >
          Try Again
        </button>
      </div>
    );
  }
  