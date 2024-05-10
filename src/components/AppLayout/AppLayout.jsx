import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
     <>      
      <main>     
        <Suspense fallback={<div />}>
          <Outlet />
        </Suspense> 
      </main>
        <Toaster position="top-right" reverseOrder={false}/>     
    </>
  );
};
