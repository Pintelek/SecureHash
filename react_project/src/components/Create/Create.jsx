import { useState } from 'react';
import evn from '../../evn.json';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';


function Create() {
 
  const [url, setUrl] = useState('');
  const [hashNote, setHashNote] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');
  const [smShow, setSmShow] = useState(false);

  const sendData = (obj) => {
    fetch(evn.url_backend, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        if(response.result){
          setUrl(evn.url+response.url);
          setHashNote(response.url);
          setLineClass('');
          setFormClass('hide');
        }
      });

  };

  const loadDataFromForm = (event) => {
    event.preventDefault();
    const note = event.target.elements.note.value.trim();

    if(note === ''){
      setSmShow(true);
      return false;
    }
    else {
      sendData({'note' : note});
    }
  };

  return (
    <div className='create justify-content-center d-flex flex-column'>
      <div className="create-block">
        <form className={formClass} onSubmit={loadDataFromForm}>
          <Form.Label htmlFor="note">Введите новое сообщение</Form.Label>
          <Form.Control
            as="textarea" aria-label="With textarea"
            type="text"
            id="note"
            aria-describedby="textHelpBlock"
            name='note'
          />
          <Form.Text id="textHelpBlock" muted>
            Ваше сообщение будет зашифровано.
          </Form.Text>
          <div  className="mt-3 d-grid gap-2">
            <Button type='submit' variant="outline-info" size="lg">
              Создать
            </Button>
          </div>
        </form>
        <div className={lineClass}>
          <Alert  variant='light'>
          Хеш вашего Note: <span className='text-black fw-bolder'>{hashNote}</span>. Вы можете открыть свой
            <Alert.Link href={url}> Note</Alert.Link>.
          </Alert>
          
          <div  className="mt-3 d-grid gap-2">
            <Button onClick={() => {window.location.reload();}} variant="outline-info" size="lg">
              Создать новый Note
            </Button>
          </div>
        </div>
      </div>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Заполните поле
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Ввдите Ваше сообщение которое хотите зашифровать</Modal.Body>
      </Modal>
    </div>
  );
}

export default Create;