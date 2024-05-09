import { type Express } from 'express';
import { firebaseAdminFirestore } from './util/firebaseAdmin';

const name = {
  name: 'josa',
};

export const setupHandlers = (app: Express) => {
  app.get('/week', async (req, res) => {
    const col = firebaseAdminFirestore.collection('/health-project/josa/items');
    const value = await col.get();
    // const data = new Date(data.date.toDate()).toISOString(),
    res.json(
      value.docs.map((doc) => {
        const data = doc.data();
        return { ...data, date: new Date(data.date.toDate()) };
      })
    );
  });

  app.post('/day', async (req, res) => {
    console.log(req.body);
    res.json();
  });

  // app.get('/', (req, res) => {
  //   res.json({ test: '123' });
  // });

  // app.get('/escreve', (req, res) => {
  //   const doc = firebaseAdminFirestore.doc('/health-project/josa');
  //   doc.create({
  //     josa: 1,
  //     luiz: 'test',
  //     andre: true,
  //   });
  //   res.json({ test: '321' });
  // });

  // app.get('/le', async (req, res) => {
  //   console.log('le');
  //   const doc = firebaseAdminFirestore.doc('/health-project/josa');

  //   console.log('doc', doc);
  //   const value = await doc.get();
  //   console.log('value', value);
  //   const data = value.data();
  //   console.log('data', data);
  //   res.json(data);
  // });

  // app.get('/le2', async (req, res) => {
  //   console.log('le2');
  //   const col = firebaseAdminFirestore.collection('/health-project/josa/items');

  //   console.log('col', col);
  //   const value = await col.get();
  //   console.log('value', value);
  //   res.json(value.docs.map((doc) => doc.data()));
  // });
};
