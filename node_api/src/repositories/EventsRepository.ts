import { Repository, EntityRepository } from 'typeorm'
import { Event } from '../entities/Event'

@EntityRepository(Event)
class EventsRepository extends Repository<Event> {

}

export { EventsRepository }

