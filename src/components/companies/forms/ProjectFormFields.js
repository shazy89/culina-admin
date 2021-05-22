import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { projectSchema } from "./constants";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { newOreditProject } from "actions/projects";

const ProjectFormFields = ({
  id,
  history,
  edit,
  newOreditProject,
  projectInfo
}) => {
  return (
    <Formik
      initialValues={
        edit
          ? {
              companyId: id,
              projectName: projectInfo.projectName,
              contract: projectInfo.contract,
              email: projectInfo.email,
              contactName: projectInfo.contactName,
              contactCompanyName: projectInfo.contactCompanyName,
              contactNumber: projectInfo.contactNumber,
              startDate: new Date(projectInfo.startDate),
              deadLine: new Date(projectInfo.deadLine),
              notes: projectInfo.notes,
              description: projectInfo.description,
              state: projectInfo.state,
              city: projectInfo.city,
              address: projectInfo.address,
              zipCode: projectInfo.zipCode
            }
          : {
              companyId: id,
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
            }
      }
      validationSchema={projectSchema}
      onSubmit={(values, actions) => {
        newOreditProject(values, false, history);
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
        <Form className="u-margin-top-3" onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="contactCompanyName">
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
            <Form.Group as={Col} md="6" controlId="firstName">
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
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="contactName">
              <Form.Label className="font__size-2">Contact Name</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="contactName"
                value={values.contactName}
                onChange={handleChange}
                isValid={touched.contactName && !errors.contactName}
              />
              {errors.contactName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.contactName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="email">
              <Form.Label className="font__size-2">Email Address</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="font__size-2"
                  type="text"
                  name="email"
                  placeholder="joe@culina.com"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />
              </InputGroup>
              {errors.email ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.email}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="contactNumber">
              <Form.Label className="font__size-2">Contact Number</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="contactNumber"
                placeholder="(111) 222-3344"
                value={values.contactNumber}
                onChange={handleChange}
                isValid={touched.contactNumber && !errors.contactNumber}
              />
              {errors.contactNumber ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.contactNumber}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="contract">
              <Form.Label className="font__size-2">Contract</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="font__size-2"
                  type="text"
                  name="contract"
                  value={values.contract}
                  onChange={handleChange}
                  isValid={touched.contract && !errors.contract}
                />
              </InputGroup>
              {errors.contract ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.contract}{" "}
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
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="Description">
              <Form.Label className="font__size-2">Description</Form.Label>
              <Form.Control
                className="font__size-2"
                as="textarea"
                rows={5}
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
              />
              {errors.description ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.description}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="notes">
              <Form.Label className="font__size-2">Notes</Form.Label>
              <Form.Control
                className="font__size-2"
                as="textarea"
                rows={5}
                name="notes"
                value={values.notes}
                onChange={handleChange}
                isValid={touched.notes && !errors.notes}
              />
              {errors.notes ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.notes}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <div className="button-box">
            <Button
              className="u-margin-top-small button-btn font__size-2"
              type="submit"
            >
              Submit form
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { newOreditProject })(ProjectFormFields);
