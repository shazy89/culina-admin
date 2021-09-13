import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export const TableRow = ({
  project: {
    inProgress,
    projectId,
    completed,
    contactCompanyName,
    projectName,
    email,
  },
  companyId,
  index,
}) => {
  const id = uuidv4();
  console.log('ROW');
  return (
    <tr
      key={id}
      className={
        inProgress
          ? 'background-inProgress'
          : completed
          ? 'background-completed'
          : 'background-notStarted'
      }
    >
      <th>{index + 1}</th>
      <th>{contactCompanyName}</th>
      <th>{projectName}</th>
      <th>
        <a className="font-size-normal culina--link" href={`mailto:${email}`}>
          {email}
        </a>
      </th>
      <th>
        <Link
          className="culina--link font-size-1 text__color-blue"
          to={{
            pathname: `/companies/${companyId}/project/${projectName}`,
            state: { companyId, projectId: projectId },
          }}
          variant="link"
        >
          View{' '}
        </Link>
      </th>
    </tr>
  );
};
