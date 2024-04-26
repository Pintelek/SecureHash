

import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import  './Main.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function Main() {

  const [compliment, setCompliment] = useState('');

  const handClick = () => {
    fetch('https://tools-api.robolatoriya.com/compliment?type=1')
      .then(res => res.json())
      .then(res => {
        setCompliment(res.text);
      });

  };
 
  return (
    <div className=' mt-auto mb-auto d-grid gap-2'>
      
      <NavLink size="lg" to='/create'><Button variant="outline-info" className='col-12'>Создать новый Note</Button></NavLink>
      <NavLink size="lg" to='/note'><Button variant="outline-info" className='col-12'>Посмотреть Note</Button></NavLink>
      <Button onClick={handClick} variant="outline-info" size="lg">
        Получить комплимент
      </Button>
      {compliment? <Alert variant='success'>
        {compliment}
      </Alert> : null}
      <ul >
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Main;