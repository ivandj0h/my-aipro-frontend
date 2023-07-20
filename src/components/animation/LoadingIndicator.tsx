import React, { JSX  } from "react";


const LoadingIndicator: React.FC = () : JSX.Element => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
    )
}

export default LoadingIndicator;
