import React, { useState } from 'react';
import ToastComponent from '../components/ToastComponent';

export const ToastContext = React.createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, variant) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, message, variant };

    setToasts([...toasts, newToast]);
    
    // Remove the toast after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container position-fixed bottom-0 end-0 me-2 mb-2">
        {toasts.map((toast) => (
          <ToastComponent
            key={toast.id}
            show={true}
            message={toast.message}
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
