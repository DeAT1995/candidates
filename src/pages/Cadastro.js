import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import ModalDeleteMessage from '../utils/Modal';
import ModalSucessMessage from '../utils/ModalAprovedd';
import { useEffect } from 'react';

import api from '../services/api';
import { Tooltip , OverlayTrigger, Table } from 'react-bootstrap';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [candidato, setCandidato] = useState(null); 
    const [showModal, setShowModal] = useState(false);
    const [candidatosAprovados, setCandidatosAprovados] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [mostrarTabela, setMostrarTabela] = useState(false);

    
    const pegarCandidatosAprovados = () => {
      api
        .get('/approved')
        .then(response => {
          const candidatos = response.data;
          setCandidatosAprovados(candidatos);
          setMostrarTabela(true);
        })
        .catch(error => {
          console.error('Erro ao buscar candidatos aprovados:', error);
        });
    };
  
    useEffect(() => {
      if (mostrarTabela) {
        pegarCandidatosAprovados();
      }
    }, [mostrarTabela]);



    const handleClickFecharTabela = () => {
      setMostrarTabela(false);
    };

    const openModal = () => {
      setShowModal(true);
    };
    
    const closeModal = () => {
      setShowModal(false);
    };
    function novoCandidato(){
      window.location.href = '/Cadastro';

    }

    const exibirModalSucesso = () => {
      setShowSuccessModal(true);
    };

    const desqualificarCandidato = () => {
      api
        .post('/disqualify', { codCandidato: candidato.codCandidato })
        .then(() => {
          console.log('Candidato desqualificado!');
          setCandidato(null);
          closeModal(); 
        })
        .catch(error => {
          console.error('Erro ao desqualificar o candidato:', error);
        });
    };

    const aprovarCandidato = () => {
      api
        .post('/approve', { codCandidato: candidato.codCandidato })
        .then(() => {
          console.log('Candidato aprovado!');
          setCandidato(prevCandidato => ({
            ...prevCandidato,
            status: 'aprovado'
          }));
          exibirModalSucesso();
        })
        .catch(error => {
          console.error('Erro ao aprovar o candidato:', error);
        });
    };

    
    const agendarEntrevista = () =>{
      api.post('/schedule', {codCandidato: candidato.codCandidato}).then(response =>{
        console.log("Entrevista agendada!")
        setCandidato(prevCandidato => ({
          ...prevCandidato,
          status: 'qualificado'
        }));
      }).catch(error =>{
        console.error("Erro ao agendar!", error);
      })
    }

    const onSubmit = () => {
        api.post('/start', { nome })
          .then(response => {
            const candidato = response.data;
       setCandidato(candidato);
        console.log('Cadastro feito');
          })
          .catch(error => {
            console.error('Erro ao cadastrar:', error);
          });
      };

      const simTooltip = (
        <Tooltip id="sim-tooltip">Clique para agendar!</Tooltip>
      );

    return( 
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      
    <div style={{ width: '500px', padding: '20px' }}>
      <Card>
        <Card.Header as="h5" className="text-center" style={{ color: 'blue' }}>
          {!candidato ? 'CADASTRO CANDIDATOS' : 'CANDIDATO'}
        </Card.Header>
        {!candidato ? (
          <Card.Body className="d-flex flex-column">
            <Card.Title>Nome</Card.Title>
            <Form.Control size="lg" type="text" placeholder="Insira um nome" onChange={e => setNome(e.target.value)} />
            <Button style={{ marginTop: '30px' }} variant="primary" onClick={onSubmit}>
              Enviar
            </Button>
          </Card.Body>
        ) : (
          <Card.Body>
            <p>Nome: {candidato.nome}</p>
            <p>Status: {candidato.status}</p>
            {candidato.status !== 'aprovado' && (
              <p>
                Agendar entrevista?
                <OverlayTrigger placement="top" overlay={simTooltip}>
                <Button
                  variant={candidato.status === 'Recebido' ? 'outline-primary' : 'text'}
                  onClick={agendarEntrevista}
                  disabled={candidato.status === 'qualificado' || candidato.status === 'aprovado'}
                >
                  <span style={{ color: candidato.status === 'qualificado' ? 'green' : 'inherit', marginLeft: '2px' }}>
                    {candidato.status === 'qualificado' ? 'Agendado' : 'Sim'}
                  </span>
                </Button>
                </OverlayTrigger>

              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Button variant="success" onClick={aprovarCandidato} disabled={candidato.status === 'aprovado'}>
                Aprovar Candidato
              </Button>

              <Button variant="danger" onClick={openModal}>
                Desqualificar Candidato
              </Button>
            </div>
          </Card.Body>
        )}
      </Card>


      <div className="d-flex justify-content-between" style={{ padding: '1rem', marginTop: '20px' }}>
        <Button variant="primary" onClick={()=>{
          if(!mostrarTabela){
          pegarCandidatosAprovados()
        }else{
            handleClickFecharTabela()
        }
      }
    }>
        {mostrarTabela ? 'Fechar Tabela' : 'Candidatos Aprovados'}
        </Button>
        {candidato && (
          <Button variant="primary" onClick={novoCandidato}>
            Novo Candidato
          </Button>
        )}
      </div>
      
       
      {mostrarTabela && (
      
      <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Nome</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {candidatosAprovados.map(candidato => (
          <tr key={candidato.id}>
            <td>{candidato.nome}</td>
            <td>Aprovado!</td>
          </tr>
        ))}
      </tbody>
    </Table>)}
            
      <ModalSucessMessage open={showSuccessModal} handleClose={() => setShowSuccessModal(false)} />
      <ModalDeleteMessage open={showModal} closeDelete={closeModal} confirmDelete={desqualificarCandidato} message={'Desqualificar candidato?'} />
    </div>
  </div>
);
};
  
  export default Cadastro;


 


