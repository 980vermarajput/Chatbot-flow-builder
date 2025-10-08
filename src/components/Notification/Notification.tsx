import React, { useEffect } from "react";
import type { NotificationState } from "../../types/flow.types";

interface NotificationProps {
  notification: NotificationState | null;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  notification,
  onClose,
}) => {
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  if (!notification) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${
          notification.type === "error"
            ? "bg-red-50 border border-red-200"
            : "bg-green-50 border border-green-200"
        }`}
      >
        <span className="text-xl">
          {notification.type === "error" ? "❌" : "✅"}
        </span>
        <span
          className={`text-sm font-medium ${
            notification.type === "error" ? "text-red-800" : "text-green-800"
          }`}
        >
          {notification.message}
        </span>
        <button
          onClick={onClose}
          className={`ml-2 ${
            notification.type === "error"
              ? "text-red-600 hover:text-red-800"
              : "text-green-600 hover:text-green-800"
          }`}
          aria-label="Close notification"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Notification;
