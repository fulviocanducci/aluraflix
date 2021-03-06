import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import { Container, Div } from '../../../components/Utils';

function CadastroCategoria() {
  const initialValue = { nome: '', cor: '#000000', descricao: '' };
  const [categoria, setCategoria] = useState(initialValue);
  const [categorias, setCategorias] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoria({ ...categoria, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, { ...categoria }]);
    setCategoria(initialValue);
  };
  useEffect(() => {
    console.log('init ...');
    return () => {
      console.log('dispose ...');
    };
  }, []);
  return (
    <PageDefault>
      <h1>Cadastro de Categoria{categoria && `: ${categoria.nome}`}</h1>
      <Div>
        <Container>Source</Container>
      </Div>
      <form onSubmit={handleSubmit}>
        <FormField
          name="nome"
          label="Nome"
          type="text"
          value={categoria.nome}
          onChange={handleChange}
        />

        <FormField
          name="descricao"
          label="Descrição"
          type="textarea"
          value={categoria.descricao}
          onChange={handleChange}
        />

        <FormField
          name="cor"
          label="Cor"
          type="color"
          value={categoria.cor}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>
      <div>
        <ul>
          {categorias.map((c, i) => (
            <li key={i}>
              {c.nome} {c.descricao} {c.cor}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
