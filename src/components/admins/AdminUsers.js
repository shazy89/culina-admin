import React, { useState, useCallback, useMemo } from 'react';
import { Button } from 'react-bootstrap';

const AdminUsers = () => {
  const [number, setNumber] = useState(0);

  const increment = useCallback(() => setNumber(number + 1), [number]);
  const calcu = useMemo(() => calcuate(number), [number]);
  //  const calcu = calcuate(number);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <EditBtn increment={increment}>increment</EditBtn>
      Number - {number}
      <br />
      Calculator {calcu}
    </div>
  );
};

export default AdminUsers;

const EditBtn = ({ children, increment }) => {
  return (
    <Button variant="primary" onClick={increment}>
      {children}
    </Button>
  );
};

function calcuate(n) {
  console.log('calculate');
  return n <= 0 ? 1 : n * calcuate(n - 1);
}
