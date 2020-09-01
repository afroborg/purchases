import { Router } from 'express';
import {
  deletePurcase,
  getPurchases,
  setPurchase,
} from '../helpers/purchases-helpers';

export const purchases = Router();

purchases.get('/', (_req, res) => {
  getPurchases()
    .then((c) => res.send(c))
    .catch((e) => {
      console.log(e);
      res.status(400).send(e);
    });
});

purchases.post('/', (req, res) => {
  setPurchase(req.body)
    .then((p) => res.send(p))
    .catch((e) => res.status(400).send(e));
});

purchases.delete('/:id', (req, res) => {
  deletePurcase(req.params.id)
    .then(() => res.status(204).send())
    .catch((e) => res.status(400).send(e));
});
