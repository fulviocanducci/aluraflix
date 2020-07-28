import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">Cadastro de Categoria</Link>{' '}
      <Link to="/">Home</Link>{' '}
    </PageDefault>
  );
}

export default CadastroVideo;
