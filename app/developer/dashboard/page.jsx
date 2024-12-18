import React from "react";
import Home from "@/app/view/Home/page";
import Playground from "./playground/page";
import Documentation from "./docs/page";
import Settings from "./settings/page";

const page = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return <Home />;
      case "Playground":
        return <Playground />;
      case "Assets":
        return <Assets />;
      case "Documentation":
        return <Documentation />;
      case "Settings":
        return <Settings />;
      default:
        return <Playground />;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{activeSection}</h1>
      {renderContent()}
    </div>
  );
};

export default page;
