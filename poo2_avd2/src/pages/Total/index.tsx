import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Container, Form } from './styles'
import imagemPrincipal from './imagens/principal.png'
import api from '../../services/api'

interface EventosParametros {
  id: string;
}

interface Cadastro {
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
}

const Total: React.FC = () => {
  const { params } = useRouteMatch<EventosParametros>()
  console.log(params)

 const [eventos, setEventos] = useState<Cadastro[]>([])

 useEffect(() => {
  api.get('/events').then(response => setEventos(response.data))
 }, [])

  console.log(eventos)

  return (
    <>
<div className="conteudo">
<a href="../"><img alt="Principal" className="iconePrincipal" src={imagemPrincipal}/></a>
    <h1>POO2 - AVD2</h1>
  Total:
  </div>
</>


  )
}

export default Total;
