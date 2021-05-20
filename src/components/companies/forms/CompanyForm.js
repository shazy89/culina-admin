import React, { useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import FormInput from "./FormInput";

import { Button } from "react-bootstrap";
import { createOrUpdate } from "../../../actions/companies";
import Alert from "../../layout/Alerts";

const initialState = {
  name: "",
  email: "",
  adress: "",
  phone: "",
  timeZone: "",
  logo: ""
};

const CompanyForm = ({ history, alerts, createOrUpdate }) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createOrUpdate(formData, false, history);
  };

  return (
    <>
      <h1>New Company</h1>
      <Container>
        {alerts && <Alert />}
        <form onSubmit={onSubmit} className="newCompany">
          <FormInput onChange={onChange} />
          <div className="button-box">
            <Button
              type="submit"
              variant="success"
              className="u-margin-top-small button-btn"
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps, { createOrUpdate })(CompanyForm);
