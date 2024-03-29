import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente")
    }
  };


  return(
    <div className="new-incident-container">
      <div className="content">
        <section>
        <img src={logoImg} alt="Be The Hero" />
        <h1>Cadastrar novo caso</h1>
        <p>Ddescreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={18} color="#E02041"/> 
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição do caso"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

        <button className="button" type="submmit">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}