import { Router } from 'express'

import { EventsController } from './controllers/EventsController'

const routes = Router();

const eventsController = new EventsController()

routes.post('/events', eventsController.create)
routes.get('/events', eventsController.index)
routes.get('/events/:id', eventsController.show)
routes.delete('/events/:id', eventsController.delete)
routes.post('/events/like/:id', eventsController.like)
routes.post('/events/dislike/:id', eventsController.dislike)

export { routes }

