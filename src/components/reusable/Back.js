import React from 'react';
import { Button } from 'react-bootstrap';

const Back = ({ history, position = 'start' }) => {
  return (
    <div className={`navigate__back position_${position}`}>
      <Button
        className="btn-features navigate__back-btn"
        variant="light"
        onClick={history.goBack}
      >
        <span>&lt;&lt;</span> Back
      </Button>
    </div>
  );
};

export default Back;
