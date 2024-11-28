// app/loading.js
export default function Loading() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-24 h-24 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    );
  }
  