'use client'

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

// ** Import Components
import NoInterNet from "./NoInterNet";
const CheckConnection = ({children}) => {
    
    const [status, setStatus] = useState(true);

    useEffect(() => {

        function changeStatus() {
            setStatus(navigator.onLine);
        }

        window.addEventListener("online", changeStatus);
        window.addEventListener("offline", changeStatus);
        return () => {
            window.removeEventListener("online", changeStatus);
            window.removeEventListener("offline", changeStatus);
        };
    }, []);

    return (
        <>
            {status ? children : <NoInterNet/>}

        </>
    )
}

export default CheckConnection;