import React, { useState } from "react";
import { FilePlus, FileText, Layout, Server } from "react-feather";
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
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={Server}
          content="Admin Users"
          to="/adminusers"
        />
      </ul>
    </div>
  );
};

export default SideNav;
