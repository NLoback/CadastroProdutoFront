import * as S from './styles'
import Modal from '../Modal';
import { useState } from 'react';
import Tabela from '../Table';



const TableData = [
  {
    produto: 'Arroz',
    preco: 'R$ 1.00',
    quantidade: '1',
    categoria: 'Grãos',
    compra: '01/01/2020',
    validade: '01/01/2020'
  },
  {
    produto: 'Feijão',
    preco: 'R$ 1.00',
    quantidade: '1',
    categoria: 'Grãos',
    compra: '01/01/2020',
    validade: '01/01/2020'
  },
  {
    produto: 'Leite',
    preco: 'R$ 1.00',
    quantidade: '1',
    categoria: 'Laticínios',
    compra: '01/01/2020',
    validade: '01/01/2020'
  },
  {
    produto: 'Maçã',
    preco: 'R$ 1.00',
    quantidade: '1',
    categoria: 'Frutas',
    compra: '01/01/2020',
    validade: '01/01/2020'
  },
  {
    produto: 'Alcatra',
    preco: 'R$ 1.00',
    quantidade: '1',
    categoria: 'Carnes',
    compra: '01/01/2020',
    validade: '01/01/2020'
  },
  {
    produto: 'Bolo',
    preco: 'R$ 1.00',
    quantidade: '1',
    categoria: 'Padaria e Doces',
    compra: '01/01/2020',
    validade: '01/01/2020'
  },
]


const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const toggleEditModal = () => setShowEditModal(!showEditModal);
  return (
    <S.Container>

      <S.Menu>
        <h2>Controle de Estoque</h2>
        <button onClick={toggleModal}>Novo +</button>
      </S.Menu>
      <Modal
        shouldShow={showModal}
        onClose={toggleModal}
        title={"Cadastro de Produtos"}
      />
      <Modal
        shouldShow={showEditModal}
        onClose={toggleEditModal}
        title={"Editar um Produto"}
      />
      <Tabela data={TableData} modalIsOpen={showEditModal} onModalOpen={(isOpen) => setShowEditModal(isOpen)} />
    </S.Container>
  )
}

export default Home;
