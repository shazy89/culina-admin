import React, { useState } from 'react';
import { FilePlus, FileText, Layout, Server } from 'react-feather';
import SideNavItem from './SideNavItem';

const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <SideNavItem icon={Layout} content="Dashboard" to="/dashboard" />
        <SideNavItem icon={FileText} content="Clients" to="/companies" />
        <SideNavItem
          icon={FilePlus}
          content="Add New Clients"
          to="/company/new"
        />
        <SideNavItem icon={Server} content="Admin Users" to="/adminusers" />
      </ul>
    </div>
  );
};

export default SideNav;
