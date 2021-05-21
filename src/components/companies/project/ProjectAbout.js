import React from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";

const ProjectAbout = ({ projectInfo: { description, notes } }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle
            className="font__size-2"
            as={Button}
            variant="link"
            eventKey="0"
          >
            Content
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{description}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle
            className="font__size-2"
            as={Button}
            variant="link"
            eventKey="1"
          >
            Notes
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>{notes}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

ProjectAbout.propTypes = {
  projectInfo: PropTypes.object.isRequired
};

export default ProjectAbout;
