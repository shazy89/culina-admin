import React from 'react';
import { Card } from 'react-bootstrap';

const UserAdress = ({
  profileInfo: { address, city, country, state, birthday },
}) => {
  return (
    <Card className="user__personal user__shadow u-margin-top-small">
      <Card.Header className="font__size-3">Adress</Card.Header>
      <Card.Body className="font__size-3 u-center-text">
        <Card.Text>{`${address}/${city}`} </Card.Text>
        <Card.Text>{`${state}-${country}`} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserAdress;
