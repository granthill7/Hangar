import { Router } from 'express';
import { QueueStatus, QueueUser } from '../entities/QueueUser';
import { populateUser } from '../middleware/populateUser';
import logger from '../logger';

export const user = Router();
user.use(populateUser());

user.get('/queue', async (req, res) => {
  try {
    const queueUser = await req.entityManager.findOne(QueueUser, {
      user: req.userEntity,
      status: QueueStatus.InProgress,
    });

    if (!queueUser) {
      res.sendStatus(404);
      return;
    }

    res.send(queueUser.toSafeJSON(req));
  } catch (error) {
    logger.error('There was an issue getting the queue for the current user', error);
    res.status(500).send('There was an issue getting the queue for the current user');
  }
});

user.get('/delete', async (req, res) => {
  try {
    const queueUser = await req.entityManager.findOne(QueueUser, { user: req.userEntity });

    if (!queueUser) {
      res.sendStatus(404);
      return;
    }

    res.send(queueUser.toSafeJSON(req));
  } catch (error) {
    logger.error('There was an issue getting the queue for the current user', error);
    res.status(500).send('There was an issue getting the queue for the current user');
  }
});
