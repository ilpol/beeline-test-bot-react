import './App.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    // метод сообщает, что приложение полностью
    // проинициализировалось, и его можно отрисосывать
    tg.ready();
  }, [])
  const onClose = () => {
    tg.close();
  }
  return (
    <div className="App">
     Приложение
     window.location.href = {window.location.href}
     <button onClick={onClose}>Закрыть</button>
     <div className='info'>
       tg = {tg}
     </div>
    </div>
  );
}

export default App;
