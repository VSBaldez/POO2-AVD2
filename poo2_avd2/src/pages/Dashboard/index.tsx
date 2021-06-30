import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Container, Form } from './styles'
import imagemDeletar from './imagens/deletar.png'
import imagemPrincipal from './imagens/principal.png'
import imagemAtualizar from './imagens/atualizar.png'
import imagemLike from './imagens/like.png'
import imagemDislike from './imagens/unlike.png'
import imagemTotal from './imagens/filtro.png'

interface IListagem {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
}

interface Cadastro {
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
}

const Dashboard: React.FC = () => {

  async function like(id: string){
    setShowLike(true)
    setShowDislike(false)
    const dados = await api.post(`/events/like/${id}`).then(response => response.data)
      console.log('Dados: ', dados)
      if(dados){
        setLike(dados.like)
        setEventoSelecionado(dados.nomeevento)

      } else {
        setLike("")

      }
  }

  async function dislike(id: string){
    setShowLike(false)
    setShowDislike(true)
    const dados = await api.post(`/events/dislike/${id}`).then(response => response.data)
      console.log('Dados: ', dados)
      if(dados){
        setDislike(dados.dislike)
        setEventoSelecionado(dados.nomeevento)

      } else {
        setLike("")

      }
  }

  async function alrerarDados(id: string){
    getTitulo()
    const dados = await api.get(`/events/${id}`).then(response => response.data)
      console.log('Dados: ', dados)
      if(dados){
        setId(dados.id)
        setEvento(dados.evento)
        setLocal(dados.local)
        setDiaSemana(dados.dia_semana)
        setHorario(dados.horario)

      } else {
        setEventos([])

      }

  }

  const [eventos, setEventos] = useState<Cadastro[]>([])
  const [eventos1, setEventos1] = useState<IListagem[]>([])
  const [titulo, setTitulo] = useState("Cadastro");
  const [eventoSelecionado, setEventoSelecionado] = useState("Nenhum");
  const [like1, setLike] = useState("0");
  const [dislike1, setDislike] = useState("0");
  const [showLike, setShowLike] = useState(false);
  const [showDislike, setShowDislike] = useState(false);

  const getTitulo = () => {
    //setTitulo("Editar");
  }

  const [id, setId] = useState('')
  const [evento, setEvento] = useState('')
  const [local, setLocal] = useState('')
  const [dia_semana, setDiaSemana] = useState('')
  const [horario, setHorario] = useState('')

  useEffect(() => {
    api.get('/events').then(response => setEventos1(response.data))
   }, [])
   console.log("Eventos: "+eventos1)

  async function handleDelete(id: string){
    await api.delete(`/events/${id}`)
    setEventos1(eventos1.filter(even => even.id !== id))
  }


  async function handleAddClientes(event: any) {
    event.preventDefault()
    const { target: form } = event;
    const novoCadastro = {
      nomeevento: form.evento.value,
      local: form.local.value,
      diasemana: form.dia_semana.value,
      horario: form.horario.value,
    }
    console.log(novoCadastro);
    if(id){
      await api.put(`/events/${id}`, novoCadastro)
      //alert('Dados alterados com sucesso.')
      api.get('/events').then(response => setEventos1(response.data))
      setId("")
      setTitulo("Cadastro");
    } else {
      await api.post('/events', novoCadastro)
      api.get('/events').then(response => setEventos1(response.data))
      //alert('Cadastro realizado com sucesso.')
    }

    setEvento('')
    setLocal('')
    setDiaSemana('')
    setHorario('')

    setEventos([...eventos, novoCadastro])
    form.reset()

  }
  return (
    <>
    <div className="conteudo">
    <a href="../"><img alt="Principal" className="iconePrincipal" src={imagemPrincipal}/></a>
    <h1>POO2 - AVD2</h1>
    <div id="cadastro">
    <h2 id="titulo">{titulo}</h2>
    <Form onSubmit={handleAddClientes}>

      <input type='text' autoComplete="off" autoFocus name='evento' value={evento} onChange={e => setEvento(e.target.value)} placeholder='Nome do Evento' />
      <input type='text' autoComplete="off" name='local' value={local} onChange={e => setLocal(e.target.value)} placeholder='Local' />
      <input type='text' autoComplete="off" name='dia_semana' value={dia_semana} onChange={e => setDiaSemana(e.target.value)} placeholder='Dia de Semana' />
      <input type='text' autoComplete="off" name='horario' value={horario} onChange={e => setHorario(e.target.value)} placeholder='Horário' />
      <button type='submit'>ENVIAR</button>

    </Form>
    </div>

    <div id="lista">
    <h2>Lista de Eventos</h2>
    <a href="../"><img alt="Principal" className="iconeAtualizar" src={imagemAtualizar}/></a>
     Evento selecionado: {eventoSelecionado}.
    <br></br><br></br>
    <div style={{ display: showLike ? "block" : "none" }} id="textoLike">Like: {like1}</div>
    <div style={{ display: showDislike ? "block" : "none" }} id="textoDislike">Disklike: {dislike1}</div>
    <Container>

      <table className="table table-hover">
        <tr>
          <th>EVENTO</th>
          <th>LOCAL</th>
          <th>DIA DA SEMANA</th>
          <th>HORÁRIO</th>
          <th>OPÇÕES</th>
        </tr>
        {eventos1.map((even, indice) =>
        <tr key={indice}>
         <td >{even.nomeevento}</td>
         <td>{even.local}</td>
         <td>{even.diasemana}</td>
         <td>{even.horario}</td>
         <td className="opcoes" >
           <button type="button" onClick={() => handleDelete(even.id)}><img alt="Deletar" className="icone" src={imagemDeletar}/></button>
                <button type="button" onClick={() => like(even.id)}><img alt="Like" className="icone1" src={imagemLike}/></button>     
           <button type="button" onClick={() => dislike(even.id)}><img alt="Dislike" className="icone1" src={imagemDislike}/></button>
                <Link to={`/total/${even.id}`}><button type="button"><img alt="Total" className="icone" src={imagemTotal}/></button></Link>
          </td>
        </tr>
        ).reverse()}

      </table>
    </Container>
    </div>
    </div>
</>


  )
}

export default Dashboard;
