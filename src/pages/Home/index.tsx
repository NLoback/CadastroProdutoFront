import * as S from './styles'
import Modal from '../Modal';
import { useCallback, useEffect, useState } from 'react';
import Tabela, { ITableData } from '../Table';
import api from '../../services/api';
import ModalDelete from '../../components/ModalConfirmation'


const Home = () => {
  // crud para exibir os dados do back
  const [produtos, setProdutos] = useState([]);

  async function getProdutos() {
    const response = await api.get('/product');
    setProdutos(response.data);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const toggleCreateModal = () => setShowCreateModal(!showCreateModal);

  const [showEditModal, setShowEditModal] = useState(false);
  const toggleEditModal = () => setShowEditModal(!showEditModal);

  const [product, setProduct] = useState<ITableData>();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // uso funcao useState sempre sera da mesma forma const[<valorinicial>, <setValorInicial>] = useState >set< onde armazena a alteração que ira ocorrer no valor inicial.

  const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
  // toggle recebe função que tem retorno a ação do set do useState

  const [productId, setProductId] = useState('');
  // função que armazena estado solicitado 

  const handleDelete = (isOpen: boolean, id: string) => {
    setShowDeleteModal(isOpen);
    setProductId(id);
  }// funcao para manipular valores dos estados em especifico 

  const handleEdit = (isOpen: boolean, product: ITableData) => {
    setShowEditModal(isOpen);
    setProduct(product);
  }//




  return (
    <S.Container>
      <S.Menu>
        <h2>Controle de Estoque</h2>
        <button onClick={toggleCreateModal}>Novo +</button>
      </S.Menu>
      <Modal
        shouldShow={showCreateModal}
        onClose={toggleCreateModal}
        title={"Cadastro de Produtos"} typeOfSubmit={'create'}
      />
      <Modal
        shouldShow={showEditModal}
        onClose={toggleEditModal}
        title={"Editar um Produto"}
        typeOfSubmit={'edit'}
        product={product}
      />

      <ModalDelete
        shouldShow={showDeleteModal}
        onClose={toggleDeleteModal}
        title={"Editar um Produto"}
        id={productId}
      />

      <Tabela
        data={produtos}
        modalUpdateIsOpen={showEditModal}
        onUpdateModalOpen={(isOpen, product) => handleEdit(isOpen, product)}
        id={''}
        modalDeleteIsOpen={showDeleteModal}
        onDeleteModalOpen={(isOpen, id) => handleDelete(isOpen, id)}
      // serve para identação do codigo evitando o uso da palvra function.









      />
    </S.Container>

  )
}

export default Home;
