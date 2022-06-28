import Formulario from '../Formulario';
import * as S from './styles';

interface IProps {
  shouldShow: boolean;
  onClose: () => void;
  title: string;


}


export const Modal = ({
  shouldShow,
  onClose,
  title,

}: IProps) => {
  return shouldShow === true ?
    (
      <S.Modal>

        <S.ModalContainer>
          <S.ContentWrapper>
            <S.Title>{title}</S.Title>
            <Formulario />

          </S.ContentWrapper>

          <S.Buttons>
            <S.ButtonClose onClick={onClose}>Cancelar</S.ButtonClose>
            <S.buttonSave>Salvar</S.buttonSave>
          </S.Buttons>
        </S.ModalContainer>
      </S.Modal>

    )
    : null;
}

export default Modal;
