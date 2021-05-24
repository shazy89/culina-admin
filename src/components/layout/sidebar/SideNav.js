import React, { useState } from "react";
import { FilePlus, FileText, Layout } from "react-feather";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={Layout}
          content="Dashboard"
          to="/dashboard"
        />
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={FileText}
          content="Clients"
          to="/companies"
        />
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={FilePlus}
          content="New Clients"
          to="/company/new"
        />
      </ul>
    </div>
  );
};

export default SideNav;
