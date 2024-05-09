import { Card } from '@mui/material';
import { weekCardMock } from './mock';

// get week card from backend
export const getWeekCards = async () => {
  // TODO fetch from backend later: await fetch("");
  // return new Promise<CardModel[]>((resolve, _reject) => {
  //   resolve(weekCardMock);
  // });
  try {
    const weekResponse = await fetch('http://localhost:3333/week', {
      method: 'GET',
    });
    const weekData = await weekResponse.json();
    // if (weekData && weekData.length > 0) {
    return weekData as CardModel[];
    // .then((x) => x.json())
    // .then((value) => {
    //   console.log('fetch', value);
    //   setData(value);
    // });
  } catch (err) {
    console.error('err');
    throw err;
  }
};

export const setItemValue = (
  id: string,
  label: string,
  value: number | boolean
) => {
  console.log('setItemValue', weekCardMock);
  const card = weekCardMock.find((card) => card.id === id);
  console.log('setItemValue > card', card);
  const item = card.items.find((item) => item.label === label);
  console.log('setItemValue > item', item);
  item.value = value;
  console.log('setItemValue', weekCardMock);
};

// setItemValue("1", "sleep", false);
