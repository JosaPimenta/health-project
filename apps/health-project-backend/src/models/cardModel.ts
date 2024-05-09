export interface CardModel {
  date: Date;
  items: ItemModel[];
}

export interface ItemModel {
  order: number;
  label: string;
  value: boolean | number;
  type: 'checkbox' | 'dropdown' | 'radio';
}

export const defaultCard: CardModel = {
  date: new Date(),
  items: [
    { order: 1, label: 'sleep', value: false, type: 'checkbox' },
    { order: 2, label: 'meditate', value: false, type: 'checkbox' },
  ],
};
