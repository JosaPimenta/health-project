import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import { getWeekCards } from '../../services/cardsService';
import { weekCardMock } from '../../services/mock';

export const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [cards, setCards] = useState<CardModel[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getWeekCards()
      .then((value) => {
        setCards(value);
      })
      .catch((err) => {
        setError('Something went wrong. Try again later!');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [weekCardMock, getWeekCards]);

  return (
    <>
      {/* 🚧 HOME
      <br></br> */}

      <div className={styles.header}>
        <Link className="btn" to="/edit">
          see the full month.
        </Link>
        <div className={styles.container}>
          <h1>Hello Josa,</h1>
          <h2>This is your tracking for this week:</h2>

          {error && <>{error}</>}
          {loading && <>Loading...</>}
          <div className={styles.cardsContainer}>
            {!loading &&
              cards.map((card, index) => {
                return (
                  <div key={index}>
                    <Card card={card} />
                  </div>
                );
              })}
          </div>
          <br />
        </div>
      </div>
    </>
  );
};
