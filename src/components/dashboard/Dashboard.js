import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import PropTypes from "prop-types";

const Dashboard = ({ isAuthenticated }) => {
  return (
    <>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapStateToProps)(Dashboard);
