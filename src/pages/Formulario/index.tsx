import * as S from './styles';

const Formulario = () => {
  return (
    <S.Form>
      <label>
        Produto:
        <input type="text" name="name" />
      </label>
      <label>
        Preço:
        <input type="text" name="price" />
      </label>
      <label>
        Quantidade:
        <input type="text" name="description" />
      </label>
      <label>
        Categoria:
        <input type="text" name="category" />
      </label>
      <label>
        Compra:
        <input type="text" name="date" />
      </label>
      <label>
        Validade:
        <input type="text" name="validade" />
      </label>
    </S.Form>


  )
}
export default Formulario;