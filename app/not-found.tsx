// app/not-found.js
export default function NotFound() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold animate-pulse">404 - Page Not Found</h1>
        <p className="mt-4 text-xl">Sorry, the page you're looking for doesn't exist.</p>
      </div>
    );
  }
  