import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProjectFormFields = () => {
  return (
    <Formik
      initialValues={{
        companyId: "",
        projectName: "",
        contract: "",
        email: "",
        contactName: "",
        contactCompanyName: "",
        contactNumber: "",
        startDate: "",
        deadLine: "",
        notes: "",
        description: "",
        state: "",
        city: "",
        address: "",
        zipCode: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        handleSubmit,
        errors,
        touched,
        values,
        setFieldValue,
        handleChange
      }) => (
        <Form className="u-margin-top-big" onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Company Name</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="contactCompanyName"
                value={values.contactCompanyName}
                onChange={handleChange}
                isValid={
                  touched.contactCompanyName && !errors.contactCompanyName
                }
              />
              {errors.contactCompanyName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.contactCompanyName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Project Name</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="projectName"
                value={values.projectName}
                onChange={handleChange}
                isValid={touched.projectName && !errors.projectName}
              />
              {errors.projectName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.projectName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Contact Number</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="firstName"
                placeholder="(111) 222-3344"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              {errors.firstName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.firstName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Email Address</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="email"
                placeholder="joe@culina.com"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              {errors.email ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.email}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="startDate">
              <div className="date--picker">
                <Form.Label className="font__size-2">
                  Project Start Date{" "}
                </Form.Label>

                <DatePicker
                  selected={values.startDate}
                  dateFormat="MMMM d, yyyy"
                  className="form-control font__size-2"
                  name="startDate"
                  onChange={(date) => setFieldValue("startDate", date)}
                />
              </div>
              {errors.startDate ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.startDate}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="deadLine">
              <div className="date--picker">
                <Form.Label className="font__size-2">
                  Project Deadline{" "}
                </Form.Label>

                <DatePicker
                  selected={values.deadLine}
                  dateFormat="MMMM d, yyyy"
                  className="form-control font__size-2"
                  name="deadLine"
                  onChange={(date) => setFieldValue("deadLine", date)}
                />
              </div>
              {errors.deadLine ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.deadLine}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="address">
              <Form.Label className="font__size-2">Address</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
              />
              {errors.address ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.address}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="city">
              <Form.Label className="font__size-2">City</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                isValid={touched.city && !errors.city}
              />
              {errors.city ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.city}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>{" "}
            <Form.Group as={Col} md="2" controlId="state">
              <Form.Label className="font__size-2">State</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="state"
                value={values.state}
                onChange={handleChange}
                isValid={touched.state && !errors.state}
              />
              {errors.state ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.state}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="zipCode">
              <Form.Label className="font__size-2">Zip Code</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="zipCode"
                value={values.zipCode}
                onChange={handleChange}
                isValid={touched.zipCode && !errors.zipCode}
              />
              {errors.zipCode ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.zipCode}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectFormFields;
