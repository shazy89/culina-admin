import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompanies } from '../../actions/companies';
import Spinner from '../layout/Spinner';
import CompanyCard from './CompanyInfoCard';
import Alert from '../layout/Alerts';

const AllCompanies = ({ companies, getCompanies, loading, alert }) => {
  const displayCompanies = useMemo(
    () =>
      companies.map((company) => (
        <CompanyCard key={company._id} company={company} />
      )),
    [companies]
  );

  useEffect(() => {
    if (!companies.length) {
      getCompanies();
    }
  }, [companies.length, getCompanies]);

  return (
    <>
      <div className="companies__header">
        <h1>All Companies</h1>
      </div>
      {alert && <Alert />}
      <div className="flex__container">
        {loading && <Spinner />}
        {!loading && displayCompanies}
      </div>
    </>
  );
};

AllCompanies.propTypes = {
  companies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    companies: state.company.companies,
    loading: state.company.loading,
    alert: state.alert,
  };
};

export default connect(mapStateToProps, { getCompanies })(AllCompanies);
