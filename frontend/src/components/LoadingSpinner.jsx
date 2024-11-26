import React from 'react';
    import { Loader2 } from 'lucide-react';

    // Reusable LoadingSpinner component
    const LoadingSpinner = () => (
      <div className="flex items-center justify-center">
        <Loader2 className="animate-spin mr-2" />
        Loading...
      </div>
    );

    export default LoadingSpinner;
