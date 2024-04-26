import { Alert, Container, Row, Col, Button } from 'react-bootstrap';


function Error() {
 

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>

            <Alert variant="danger" >
              <Alert.Heading>Ошибка 404</Alert.Heading>
              <p>Извините, страница, которую вы ищете, не найдена.</p>
            </Alert>
            <div className="d-grid gap-2">
              <Button href="/" variant="outline-info">Вернуться на главную</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Error;