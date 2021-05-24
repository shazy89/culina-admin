import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Route, Switch } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import CompanyForm from "../companies/forms/CompanyForm";
import AllCompanies from "../companies/AllCompanies";
import Company from "../companies/Company";
import Navbar from "../layout/NavBar";
import SideNav from "../layout/sidebar/SideNav";
import NotFound from "../NotFound";
import AddUser from "../companies/forms/AddUser";
import UserProfile from "components/companies/companyUsers/UserProfile";
import EditUser from "components/companies/companyUsers/EditUser";
import AddProject from "../companies/forms/AddProject";
import CompanyProject from "components/companies/project/CompanyProject";
import EditProject from "components/companies/project/EditProject";
import AdminUsers from "components/admins/AdminUsers";

const Routes = () => {
  return (
    <div className="culina__container">
      <Navbar />
      <div className="culina__content">
        <SideNav />
        <main className="main">
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/company/new" component={CompanyForm} />
            <PrivateRoute exact path="/companies" component={AllCompanies} />
            <PrivateRoute exact path="/adminusers" component={AdminUsers} />
            <PrivateRoute
              exact
              path="/companies/:id/user/:userId"
              component={UserProfile}
            />
            <PrivateRoute
              exact
              path="/companies/:id/user/:userId/edit"
              component={EditUser}
            />
            <PrivateRoute
              exact
              path="/companies/:id/newuser"
              component={AddUser}
            />
            <PrivateRoute
              exact
              path="/companies/:id/project/:projectName"
              component={CompanyProject}
            />
            <PrivateRoute
              exact
              path="/companies/:id/project/:projectName/edit"
              component={EditProject}
            />
            <PrivateRoute
              exact
              path="/companies/:id/newproject"
              component={AddProject}
            />
            <PrivateRoute exact path="/companies/:id" component={Company} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Routes;
