import { getCustomRepository } from 'typeorm'
import { EventsRepository } from '../repositories/EventsRepository'

interface IEventsCreate {
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
}

interface IEventsShow {
  id: string
}


class EventsServices {

  async create({ nomeevento, local, diasemana, horario }: IEventsCreate) {

    const eventsRepository = getCustomRepository(EventsRepository)

    const events = eventsRepository.create({
      nomeevento,
      local,
      diasemana,
      horario
    })

    await eventsRepository.save(events)

    return events
  }

  async index() {
    const eventsRepository = getCustomRepository(EventsRepository)

    const events = await eventsRepository.find()

    return events;
  }

  async show({ id }: IEventsShow) {
    const eventsRepository = getCustomRepository(EventsRepository)

    const events = await eventsRepository.findOne({ id })

    if (!events) {
      throw new Error('Event id not found!!')
    }

    return events;
  }

  async delete({ id }: IEventsShow) {
    const eventsRepository = getCustomRepository(EventsRepository)

    const events = await eventsRepository.findOne({ id })

    if (!events) {
      throw new Error('Event id not found!!')
    }

    return await eventsRepository.delete({ id })
  }

  async like({ id }: IEventsShow) {
    const eventsRepository = getCustomRepository(EventsRepository)

    const events = await eventsRepository.findOne({ id })

    if (!events) {
      throw new Error('Event id not found!!')
    }

    events.like ++

    return await eventsRepository.save(events)
  }

  async dislike({ id }: IEventsShow) {
    const eventsRepository = getCustomRepository(EventsRepository)

    const events = await eventsRepository.findOne({ id })

    if (!events) {
      throw new Error('Event id not found!!')
    }

    events.dislike ++

    return await eventsRepository.save(events)
  }

}

export { EventsServices }