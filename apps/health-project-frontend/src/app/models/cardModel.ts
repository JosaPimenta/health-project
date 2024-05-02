interface CardModel {
  id: string;
  date: Date;
  items: ItemModel[];
  // sleep: boolean;
  // meditation: boolean;
  // exercise: boolean;
  // walk: boolean;
  // read: boolean;
  // water: string;
  // feeling: number;

  // TODO all the remaning fields for card like content
}

interface ItemModel {
  label: string;
  value: boolean | number;
  type: 'checkbox' | 'dropdown' | 'radio';
}

// remeber to add an Id on the ItemModel BD to conect both tables.
