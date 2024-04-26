import Form from 'react-bootstrap/Form';

function FormText() {
  return (
    <>
      <Form.Label htmlFor="url">Введите Хеш</Form.Label>
      <Form.Control
        type="text"
        id="url"
        aria-describedby="urlHelpBlock"
      />
      <Form.Text id="urlHelpBlock" muted>
        Хеш - уникальный набор символов, переданного сообщения.
      </Form.Text>
    </>
  );
}

export default FormText;