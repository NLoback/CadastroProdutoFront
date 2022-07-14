
import * as S from './styles';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { RiEditFill } from 'react-icons/ri';
import Modal from '../../components/ModalConfirmation';

//interface tabela com os dados
export interface ITableData {
  id: string;
  produto: string;
  perecivel: boolean;
  fabricacao: string;
  validade: string;
  preco: number;
}
//propriedade da tabela
interface IProps {
  id: string;
  data: ITableData[];
  onUpdateModalOpen: (isOpen: boolean, product: ITableData) => void;
  modalUpdateIsOpen: boolean;
  onDeleteModalOpen: (isOpen: boolean, id: string) => void;
  modalDeleteIsOpen: boolean;

}


export const Tabela = ({ data, onUpdateModalOpen, modalUpdateIsOpen, onDeleteModalOpen, modalDeleteIsOpen }: IProps) => {
  const [query, setQuery] = useState('');



  return (


    <S.Wrapper>

      <div id="divBusca">
        <input placeholder='Buscar' onChange={event => setQuery(event.target.value)} />
      </div>

      <S.Table>

        <thead>
          <tr>
            <th>Produto</th>
            <th>Produto Perecível</th>
            <th>Data de Fabricação</th>
            <th>Validade</th>
            <th>Preço</th>
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
            }
          }).map((item) => (
            <tr key={item.id}>

              <td>{item.produto}</td>
              <td>{item.perecivel}</td>
              <td>{item.fabricacao}</td>
              <td>{item.validade}</td>
              <td>{item.preco}</td>
              <td className='Buttons'>

                <button className='DeleteButton' onClick={() => onDeleteModalOpen(!modalDeleteIsOpen, item.id)}><BsTrash /></button>

                <button className='EditButton' onClick={() => onUpdateModalOpen(!modalUpdateIsOpen, item)}><RiEditFill /></button>
              </td>
            </tr>

          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  )
}


export default Tabela;