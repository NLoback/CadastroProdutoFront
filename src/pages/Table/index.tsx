
import * as S from './styles';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { RiEditFill } from 'react-icons/ri';
import Modal from '../Modal';

//interface tabela com os dados
interface ITableData {
  produto: string;
  preco: string;
  quantidade: string;
  categoria: string;
  compra: string;
  validade: string;
}
//interface com os dados do modal
interface IProps {
  data: ITableData[];
  onModalOpen: (isOpen: boolean) => void;
  modalIsOpen: boolean;
}

export const Tabela = ({ data, onModalOpen, modalIsOpen }: IProps) => {
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <S.Wrapper>

      <Modal
        shouldShow={showModal}
        onClose={toggleModal}
        title={"Cadastro de Produtos"}
      />

      <div id="divBusca">
        <input placeholder='Buscar' onChange={event => setQuery(event.target.value)} />
      </div>
      <S.Table>

        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th className='quantidade'>Qtd</th>
            <th>Categoria</th>
            <th>Compra</th>
            <th>Validade</th>
            <th className='cancel'></th>
          </tr>
        </thead>
        <tbody>

          {data.filter(table => {
            if (query === '') {
              return table;
            } else if
              (table.produto.toLowerCase().includes(query.toLowerCase())) {
              return table;
            } else if
              (table.categoria.toLowerCase().includes(query.toLowerCase())) {
              return table;
            }
          }).map((item, index) => (
            <tr key={index}>
              <td>{item.produto}</td>
              <td>{item.preco}</td>
              <td>{item.quantidade}</td>
              <td>{item.categoria}</td>
              <td>{item.compra}</td>
              <td>{item.validade}</td>
              <td className='Buttons'>
                <button className='DeleteButton'><BsTrash /></button>

                <button className='EditButton' onClick={() => onModalOpen(!modalIsOpen)}><RiEditFill /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  )
}


export default Tabela;