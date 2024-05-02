import { EventHandler, FormEvent } from 'react';
import { ItemList } from './ItemList';
import styles from './card.module.css';
import { isYesterday, isToday, format } from 'date-fns';

export interface CardProps {
  card: CardModel;
}

export function Card(props: CardProps) {
  console.log('Card', {
    props,
    isToday: isToday(props.card.date),
    isYesterday: isYesterday(props.card.date),
  });
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  const showDateTitle = () => {
    if (isToday(props.card.date)) {
      return 'Today';
    } else if (isYesterday(props.card.date)) {
      return 'Yesterday';
    }

    return format(props.card.date, 'EEEE');
  };

  // const handleForm = (event: FormEvent<HTMLFormElement>) => {
  //   console.log(event);
  // };

  console.log('render card', props.card);

  return (
    <div className={styles.trackingBox}>
      <h2 className={styles.boxTitle}>{showDateTitle()}</h2>

      <ItemList id={props.card.id} items={props.card.items} />
    </div>
  );
}

export default Card;
