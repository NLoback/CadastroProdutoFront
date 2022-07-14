import { useState } from "react";
import api from "../services/api";
import * as S from "./styles";



interface IProps {
  shouldShow: boolean;
  onClose: () => void;
  title: string;
  id: string;
}

const ConfirmationModal = ({
  shouldShow,
  onClose,
  title,
  id,
}: IProps) => {


  const handleDelete = async () => {
    await api.delete(`/product/${id}`);
    onClose();
  }


  return shouldShow === true ?
    (
      <S.Modal>
        <S.ModalContainer>
          <S.ContentWrapper>



            <h1 className="Title">{title}</h1>
            <div className="buttons">
              <button className="ConfirmButton" onClick={handleDelete}>
                Sim
              </button>

              <button className="CancelButton" onClick={onClose}>
                Não
              </button>
            </div>
          </S.ContentWrapper>
        </S.ModalContainer>
      </S.Modal>
    ) : null;

}


export default ConfirmationModal
