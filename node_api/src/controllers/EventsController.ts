import { Request, Response } from 'express'
import { EventsServices } from '../services/EventsServices'

class EventsController {

  async create(request: Request, response: Response) {
    const { nomeevento, local, diasemana, horario } = request.body

    const eventsServices = new EventsServices()

    try {
      const events = await eventsServices.create({ nomeevento, local, diasemana, horario })
      return response.json(events)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const eventsServices = new EventsServices()

    try {
      const events = await eventsServices.index()
      return response.json(events)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const eventsServices = new EventsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const events = await eventsServices.show({ id })
      return response.json(events)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const eventsServices = new EventsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const events = await eventsServices.delete({ id })
      return response.json({ message: 'Event id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async like(request: Request, response: Response) {
    const eventsServices = new EventsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const events = await eventsServices.like({ id })
      return response.json(events)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async dislike(request: Request, response: Response) {
    const eventsServices = new EventsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const events = await eventsServices.dislike({ id })
      return response.json(events)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { EventsController }

