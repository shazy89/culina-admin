import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";

const ProjectsTable = ({ projects, companyId }) => {
  const table = projects.map((project, index) => {
    return (
      <tr
        key={index}
        className={
          project.inProgress
            ? "background-inProgress"
            : project.completed
            ? "background-completed"
            : "background-notStarted"
        }
      >
        <th>{index + 1}</th>
        <th>{project.contactCompanyName}</th>
        <th>{project.projectName}</th>
        <th>
          <a
            className="font-size-normal culina--link"
            href={`mailto:${project.email}`}
          >
            {project.email}
          </a>
        </th>
        <th>
          <Link
            className="culina--link font-size-1 text__color-blue"
            to={{
              pathname: `/companies/${companyId}/project/${project.projectName}`,
              state: { companyId, projectId: project.projectId }
            }}
            variant="link"
          >
            View{" "}
          </Link>
        </th>
      </tr>
    );
  });
  return (
    <div className="projects__table">
      <Table bordered hover size="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>Client</th>
            <th>Project</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="font-size-normal">{table}</tbody>
      </Table>
    </div>
  );
};
ProjectsTable.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectsTable;
