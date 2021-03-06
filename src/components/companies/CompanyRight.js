import React from "react";
import { Link } from "react-router-dom";
import Slider from "components/layout/Slider";
import CompanyUserCard from "./companyUsers/CompanyUserCard";
import { Button } from "react-bootstrap";
import AllUsersModal from "./companyUsers/AllUsersModal";
import ProjectsTable from "./project/ProjectsTable";
import PropTypes from "prop-types";

const CompanyRight = ({ company, id, show, handleClose, handleShow }) => {
  return (
    <>
      <div className="slider_company">
        <h2 className="slider_company__header">
          {company.name} - Employee List
        </h2>
        {company.users.length ? (
          <Slider
            companyId={company._id}
            component={CompanyUserCard}
            info={company.users}
          />
        ) : (
          <h2 className="text-center u-margin-top-3">
            {
              <Link
                to={{
                  pathname: `/companies/${id}/newuser`,
                  state: { companyName: company.name }
                }}
              >
                Add
              </Link>
            }{" "}
            users to this company
          </h2>
        )}
      </div>
      <div className="view-all u-margin-top-3">
        {company.users.length ? (
          <Button size="lg" variant="link" onClick={handleShow}>
            View All
          </Button>
        ) : (
          ""
        )}
        <AllUsersModal
          show={show}
          handleClose={handleClose}
          info={company.users}
          companyId={company._id}
        />
      </div>

      <div className="u-margin-top-3 slider_company__header">
        <h2>{company.name} Projects</h2>

        {company.projects.length ? (
          <>
            <div className="table__status">
              <p className="table__status-label font__size-2">
                Completed &nbsp;
                <span className="table__status-box background-completed"></span>
              </p>{" "}
              <p className="table__status-label font__size-2">
                In Progress &nbsp;
                <span className="table__status-box background-inProgress"></span>
              </p>{" "}
              <p className="table__status-label font__size-2">
                Not Sarted &nbsp;
                <span className="table__status-box background-notStarted"></span>
              </p>{" "}
            </div>
            <ProjectsTable
              companyId={company._id}
              projects={company.projects}
            />
          </>
        ) : (
          <h2 className="u-margin-top-3">
            {
              <Link
                to={{
                  pathname: `/companies/${id}/newproject`,
                  state: { companyName: company.name }
                }}
              >
                Add
              </Link>
            }{" "}
            projects to this company
          </h2>
        )}
      </div>
    </>
  );
};

CompanyRight.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyRight;
