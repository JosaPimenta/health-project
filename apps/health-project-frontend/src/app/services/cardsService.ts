import { weekCardMock } from './mock';

// get week card from backend
export const getWeekCards = () => {
  // TODO fetch from backend later: await fetch("");
  return new Promise<CardModel[]>((resolve, _reject) => {
    resolve(weekCardMock);
  });
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
