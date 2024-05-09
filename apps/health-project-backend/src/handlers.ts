import { type Express } from 'express';
import { firebaseAdminFirestore } from './util/firebaseAdmin';
import { CardModel, defaultCard } from './models/cardModel';
import { addDays } from 'date-fns';

const name = {
  name: 'josa',
};

export const setupHandlers = (app: Express) => {
  app.get('/week', async (req, res) => {
    const col = firebaseAdminFirestore.collection('/health-project/josa/items');
    const value = await col.get();
    // const data = new Date(data.date.toDate()).toISOString(),
    const cards = value.docs.map((doc) => {
      const data = doc.data();
      // transform firebase date to javascript date
      return { ...data, date: new Date(data.date.toDate()) };
    });

    let day = new Date();
    const finalCard = [];
    for (let i = 0; i < 7; i++) {
      // console.log('date', day, day.getDate());
      //if there is info linked if the date on the db - render from db
      const cardDb = cards.find((card) => {
        // compare two dates
        if (
          card.date.getDate() === day.getDate() &&
          card.date.getMonth() === day.getMonth() &&
          card.date.getFullYear() === day.getFullYear()
        ) {
          // this is the card rendered from db
          return true;
        } else {
          // this when the date is not found on db
          return false;
        }
      });

      if (cardDb) {
        // card exist in db
        finalCard.push(cardDb);
      } else {
        // if not, render a default card
        finalCard.push({ ...defaultCard, date: day });
      }
      // change the current day to the previous day
      // day.setDate(day.getDate() - 1);
      day = addDays(day, -1);
    }
    // console.log('finalCard', finalCard);
    res.json(finalCard);
  });

  app.post('/day', async (req, res) => {
    // console.log(req.body);
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
