import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/mockdata";
import Header from "./components/Header";
import Bodylayout from "./components/BodyLayout";




const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Bodylayout />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);