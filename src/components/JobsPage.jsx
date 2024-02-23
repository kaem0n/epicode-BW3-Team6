import JobsSidebar from './jobs_components/JobsSidebar';
import { Col, Container, Row } from 'react-bootstrap';
import SearchJobs from './jobs_components/SearchJobs';

import Jobs from './jobs_components/Jobs';
import { myProfile } from '../redux/actions/ProfileSection';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomeFooter from './HomeFooter';

const JobsPage = () => {
  const dispatch = useDispatch();
  const API_KEY = localStorage.getItem('api-key');

  useEffect(() => {
    dispatch(myProfile(API_KEY));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row className="mb-3 justify-content-end">
          <Col xs={12} md={4} lg={3}>
            <JobsSidebar />
          </Col>
          <Col xs={12} md={8} lg={5} xl={6}>
            <SearchJobs />
          </Col>
          <Col xs={12} md={8} lg={4} xl={3}>
            <HomeFooter />
          </Col>
        </Row>
        <Jobs />
      </Container>
    </>
  );
};

export default JobsPage;
