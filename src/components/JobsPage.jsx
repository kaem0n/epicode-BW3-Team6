import JobsSidebar from './jobs_components/JobsSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import SearchJobs from './jobs_components/SearchJobs'
import OpenJobs from './jobs_components/OpenJobs'
import Jobs from './jobs_components/Jobs'

const JobsPage = () => {
  return (
    <>
      <Container className="mt-5" fluid="xl">
        <Row className="mb-3">
          <Col xs={12} md={2} lg={3}>
            <JobsSidebar />
          </Col>
          <Col xs={12} md={6} lg={5} xl={6}>
            <SearchJobs />
          </Col>
          <Col xs={12} md={4} lg={4} xl={3}>
            <OpenJobs />
          </Col>
        </Row>
        <Jobs />
      </Container>
    </>
  )
}

export default JobsPage
