import { addDays } from 'date-fns';

const today = new Date();

export const weekCardMock: CardModel[] = [
  {
    id: '1',
    date: today,
    items: [
      {
        label: 'sleep',
        value: true,
        type: 'checkbox',
      },
      {
        label: 'meditation',
        value: true,
        type: 'checkbox',
      },
      {
        label: 'exercise',
        value: false,
        type: 'checkbox',
      },
      {
        label: 'walk',
        value: true,
        type: 'checkbox',
      },
      {
        label: 'read',
        value: false,
        type: 'checkbox',
      },
      {
        label: 'water',
        value: 3,
        type: 'dropdown',
      },
      {
        label: 'feeling',
        value: 1,
        type: 'radio',
      },
    ],
    // sleep: true,
    // meditation: true,
    // exercise: false,
    // walk: true,
    // read: true,
    // water: '2lt',
    // feeling: 4,
  },
];

export const allCardMock: CardModel[] = [];
