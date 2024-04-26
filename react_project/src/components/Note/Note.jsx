import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import evn from '../../evn.json';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Note() {
  const { noteURL } = useParams();
  const [messageNote, setMessageNote] = useState('');
  const [noteClass, setNoteClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');
  const [smShow, setSmShow] = useState(false);

  useEffect(() => {
    if(noteURL !== undefined){
      fetch(evn.url_backend, {
        method : 'POST',
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({'url': noteURL})
      })
        .then(response => response.json())
        .then(response => {
          if(response.result){
            setMessageNote(response.note);
            setFormClass('hide');
            setNoteClass('');
            setErrorClass('hide');
          }
          else{
            setErrorClass('');
            setFormClass('');
            setNoteClass('hide');
          }
        });
    }
    else {
      setFormClass('');
      setErrorClass('hide');
      setNoteClass('hide');
    }
  },[noteURL]);

  const getNote = (e) => {
    e.preventDefault();
    const value = e.target.elements.url.value.trim();
    if(value !== '') {
      window.location.href = evn.url+value;
    }
    else {
      setSmShow(true);
      setErrorClass('hide');
      setFormClass('');
      setNoteClass('hide');
    }
  };

  const handleDelete = () => {
    if(noteURL !== undefined){
      fetch(evn.url_backend, {
        method : 'POST',
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({'delete': noteURL})
      })
        .then(response => response.json())
        .then(response => {
          if(response.result){
            setFormClass('');
            setNoteClass('');
            setErrorClass('hide');
            window.location.href = evn.url;
          }
        });
    }
    
  };
  const searchNewNote = () => {
    window.location.href = evn.url;
  };

  return (
    <div className='note'>

      



      <div className={noteClass}>
        <Card>
          <Card.Header>Note: <b>{noteURL !== undefined? noteURL: null}</b></Card.Header>
          <Card.Body>
            <Card.Title>Сообщение из Note:</Card.Title>
            <Card.Text className='text-italic'>
              <em>{messageNote}</em>
            </Card.Text>
            <div className='row'>
              <div className='col-6'><Button onClick={searchNewNote} variant="outline-info col-12">Смотреть ещё один Note</Button></div>
              <div className='col-6'>{noteURL?<Button onClick={handleDelete} variant="outline-danger col-12">Удалить</Button>: null}</div>
            </div>
          </Card.Body>
        </Card>
        {/* 

        <p>{messageNote}</p>
        {noteURL?<button onClick={handleDelete}>Удалить</button>: null}
        <button onClick={searchNewNote}>Смотреть ещё один Note</button> */}
      </div>



      <div className={errorClass}>
        <h3>Заметка не найдена попробуйте снова</h3>
      </div>
      <form onSubmit={getNote} className={formClass + ' mt-5'}>
        <Form.Label htmlFor="url">Введите Хеш</Form.Label>
        <Form.Control
          type="text"
          id="url"
          aria-describedby="urlHelpBlock"
        />
        <Form.Text id="urlHelpBlock" muted>
        Хеш - уникальный набор символов, переданного сообщения.
        </Form.Text>
        <div className="mt-3 d-grid gap-2">
          <Button type='submit' variant="outline-info" size="lg">
            Поиск
          </Button>
        </div>
      </form>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Заполните поле
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Ввдите Хеш для поиска Note</Modal.Body>
      </Modal>
    </div>
  );
}

export default Note;