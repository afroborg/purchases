import { Router } from 'express';
import {
  deleteCategory,
  getCategories,
  setCategory,
} from '../helpers/categories-helpers';

export const categories = Router();

categories.get('/', (req, res) => {
  getCategories()
    .then((c) => res.send(c))
    .catch((e) => res.status(400).send(e));
});

categories.post('/', (req, res) => {
  setCategory(req.body)
    .then(() => res.status(201).send())
    .catch((e) => res.status(400).send(e));
});

categories.delete('/:id', (req, res) => {
  deleteCategory(req.params.id)
    .then(() => res.status(204).send())
    .catch((e) => res.status(400).send(e));
});
