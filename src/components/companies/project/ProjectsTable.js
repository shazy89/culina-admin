import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { TableRow } from './table/table-row';
const ProjectsTable = ({ projects, companyId }) => {
  const table = useMemo(
    () =>
      projects.map((project, index) => (
        <TableRow
          key={index}
          project={project}
          index={index}
          companyId={companyId}
        />
      )),
    [companyId, projects]
  );
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
  projects: PropTypes.array.isRequired,
};

export default ProjectsTable;
