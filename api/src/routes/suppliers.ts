import { Router } from 'express';
import {
  deleteSupplier,
  getSuppliers,
  setSupplier,
} from '../helpers/suppliers-helpers';

export const suppliers = Router();

suppliers.get('/', (req, res) => {
  getSuppliers()
    .then((c) => res.send(c))
    .catch((e) => res.status(400).send(e));
});

suppliers.post('/', (req, res) => {
  setSupplier(req.body)
    .then(() => res.status(201).send())
    .catch((e) => res.status(400).send(e));
});

suppliers.delete('/:id', (req, res) => {
  deleteSupplier(req.params.id)
    .then(() => res.status(204).send())
    .catch((e) => res.status(400).send(e));
});
