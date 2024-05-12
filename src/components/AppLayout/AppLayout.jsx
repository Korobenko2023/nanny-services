import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { AppLayoutDiv } from "./AppLayout.styled";
import { Header } from "../Header/Header";

export const AppLayout = () => {
  return (
    <AppLayoutDiv>   
      <Header />
      <main>     
        <Suspense fallback={<div />}>
          <Outlet />
        </Suspense> 
      </main>
        <Toaster position="top-right" reverseOrder={false}/>     
    </AppLayoutDiv>
  );
};
