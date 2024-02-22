import JobsSidebar from './jobs_components/JobsSidebar';
import { Col, Container, Row } from 'react-bootstrap';
import SearchJobs from './jobs_components/SearchJobs';

import HomeFooter from './HomeFooter';

const JobsPage = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-end">
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
      </Container>
    </>
  );
};

export default JobsPage;
