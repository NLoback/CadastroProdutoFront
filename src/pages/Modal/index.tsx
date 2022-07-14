import { Field, Formik } from 'formik';
import * as S from './styles';
import * as Yup from 'yup';
import api from '../../services/api';
import { ITableData } from '../Table';

interface IProduct {
  produto?: string;
  perecivel?: boolean;
  fabricacao?: Date | undefined;
  validade?: Date | undefined;
  preco?: number;
}

//define as propriedades que modal vai receber
interface IProps {
  shouldShow: boolean;
  onClose: () => void;
  title: string;
  typeOfSubmit: 'create' | 'edit';
  product?: ITableData;
}

const schema = Yup.object().shape({
  produto: Yup.string()
    .required('Produto é obrigatório'),

  fabricacao: Yup.date()
    .required('Data de Fabricação é obrigatória'),

  preco: Yup.number()
    .required('Preço é obrigatório'),

  perecivel: Yup.boolean(),
  validade: Yup.date()
    .when('perecivel', {
      is: true,
      then: Yup.date()
        .required('Data de Validade é obrigatória'),
    })
})

export const Modal = ({
  shouldShow,
  onClose,
  title,
  typeOfSubmit,
  product
}: IProps) => {
  const handleOnSubmit = async (values: IProduct) => {
    await api.post('/product', values);
    onClose();
  }

  const handleOnEdit = async (values: IProduct) => {
    await api.put(`/product/${product?.id}`, values);
    onClose();
  }

  return shouldShow === true ?
    (
      <S.Modal>
        <S.ModalContainer>
          <S.ContentWrapper>
            <S.Title>{title}</S.Title>

            <Formik
              validationSchema={typeOfSubmit === 'create' ? schema : null}
              initialValues={{
                produto: typeOfSubmit === 'create' ? '' : product?.produto,
                perecivel: typeOfSubmit === 'create' ? false : product?.perecivel,
                fabricacao: undefined,
                validade: undefined,
                preco: typeOfSubmit === 'create' ? 0 : product?.preco,
              }}
              onSubmit={typeOfSubmit === 'create' ? handleOnSubmit : handleOnEdit}
            >


              {({
                errors,
                handleChange,
                values,
                handleSubmit,
                touched,
                isSubmitting,
                isValid,
                dirty,

              }) => (


                <S.Form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="produto">Produto</label>
                    <input
                      id="produto"
                      name="produto"
                      type="text"
                      onChange={handleChange('produto')}
                      value={values.produto}
                    />
                    <p className='errors'>{touched.produto && errors.produto && errors.produto}</p>
                  </div>

                  <div>
                    <label htmlFor="perecivel" id='perecivel'>Produto Perecível?</label>
                    <Field
                      type="checkbox"
                      name="perecivel"
                      value={product?.perecivel}
                    />
                    <span className='perecivel'>{`${values.perecivel ? 'Sim' : 'Não'}`}</span>
                  </div>

                  <div>
                    <label htmlFor="fabricacao">Data de Fabricação</label>
                    <input
                      id="fabricacao"
                      name="fabricacao"
                      type="date"
                      onChange={handleChange('fabricacao')}
                    />
                    <p className='errors'>{touched.fabricacao && errors.fabricacao && errors.fabricacao}</p>
                  </div>

                  <div>
                    <label htmlFor="validade">Data de Validade</label>
                    <input
                      id="validade"
                      name="validade"
                      type="date"
                      onChange={handleChange('validade')}
                      disabled={values.perecivel ? false : true}
                    />
                    <p className='errors'>{touched.validade && errors.validade && errors.validade}</p>
                  </div>

                  <div>
                    <label htmlFor="preco">Preço</label>
                    <input
                      id="preco"
                      name="preco"
                      type="number"
                      onChange={handleChange('preco')}
                      placeholder="R$"
                      value={values.preco}
                    />
                    <p className='errors'>{touched.preco && errors.preco && errors.preco}</p>
                  </div>
                  <S.Buttons>
                    <S.ButtonClose onClick={onClose}>Cancelar</S.ButtonClose>
                    <S.buttonSave
                      type="submit"
                      disabled={isSubmitting || !(isValid && dirty) && typeOfSubmit === 'create'}
                    >
                      Salvar
                    </S.buttonSave>
                  </S.Buttons>
                </S.Form>
              )}
            </Formik>

          </S.ContentWrapper>
        </S.ModalContainer>
      </S.Modal >

    )
    : null;
}

export default Modal;
