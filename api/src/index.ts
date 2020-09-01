import * as cors from 'cors';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { categories } from './routes/categories';
import { purchases } from './routes/purchases';
import { suppliers } from './routes/suppliers';

const app = express();

const router = express.Router();

app.use(cors());
app.use('/api', router);

router.get('/', (_req, res) => res.send('hi'));
router.get('/echo', (_req, res) =>
  res.send({
    success: true,
    message: `Hello, the time is ${new Date()} and this API is online.`,
  })
);

router.use('/purchases', purchases);
router.use('/categories', categories);
router.use('/suppliers', suppliers);

export const api = functions.https.onRequest(app);
