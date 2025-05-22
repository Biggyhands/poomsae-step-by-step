import React from "react";
import HistoryPage from "@/components/historytkd/HistoryPage";
import MainNav from "@/components/navbar/MainNav";
import Footer from "@/components/navbar/Footer";

function page() {
  return (
    <>
      <MainNav />
      <HistoryPage />
      <Footer />
    </>
  );
}

export default page;
