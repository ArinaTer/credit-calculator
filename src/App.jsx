import {useState} from 'react';

import {Container} from './components/Container/Container';
import {Button} from './components/Button/Button';
import {CalcModal} from './modals/CalcModal/CalcModal';

import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Button type="button" variant="outline" onClick={handleOpenModal}>
        Расчет платежей
      </Button>
      {isModalOpen && (
        <CalcModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </Container>
  );
}

export default App;
