import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { ChevronDown } from "react-feather";

const ProjectAbout = ({ projectInfo: { description, notes } }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle
            className="font__size-3 culina--btn"
            as={Button}
            variant="link"
            eventKey="0"
          >
            Content <ChevronDown />
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="font__size-2">{description}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle
            className="font__size-3 culina--btn"
            as={Button}
            variant="link"
            eventKey="1"
          >
            Notes <ChevronDown />
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="font__size-2">{notes}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ProjectAbout;
