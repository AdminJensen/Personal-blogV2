import React from 'react';
    import { AlertTriangle } from 'lucide-react';

    // Reusable ErrorBanner component
    const ErrorBanner = ({ message }) => (
      <div className="flex items-center justify-center text-red-500">
        <AlertTriangle className="mr-2" />
        {message}
      </div>
    );

    export default ErrorBanner;
