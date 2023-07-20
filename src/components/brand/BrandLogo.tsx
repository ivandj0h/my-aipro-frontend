"use client"

import React, {JSX} from "react";
import {Constants} from "@/enums/Constants";


const BrandLogo: React.FC = (): JSX.Element => {
    return (
        <div>
            <h2 className="mt-2 text-center text-2xl font-light text-gray-900 app-logo">
                {Constants.APP_NAME}
            </h2>
        </div>
    )
}

export default BrandLogo;
