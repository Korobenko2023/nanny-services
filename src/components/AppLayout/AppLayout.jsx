import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
     <>      
      <nav/>     
        <Suspense fallback={<div />}>
          <Outlet />
        </Suspense>        
        <Toaster position="top-right" reverseOrder={false}/>     
    </>
  );
};
