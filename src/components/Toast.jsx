import { useEffect } from "react";

export default function Toast({
  message,
  isVisible,
  onClose,
  duration = 5000,
}) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-20 left-1/2 z-50 -translate-x-1/2 transform"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div 
        className="animate-bounce rounded-lg bg-green-500 px-8 py-4 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl" aria-hidden="true">🎉</span>
          <span className="text-xl font-bold" id="toast-message">{message}</span>
          <span className="text-2xl" aria-hidden="true">🎉</span>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-sm underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
          aria-label="Close notification"
        >
          Close
        </button>
      </div>
    </div>
  );
}
