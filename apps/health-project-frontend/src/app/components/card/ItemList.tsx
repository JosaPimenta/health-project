import { memo, useEffect, useState } from 'react';
import styles from './card.module.css';
import { weekCardMock } from '../../services/mock';
import { getWeekCards, setItemValue } from '../../services/cardsService';
import React from 'react';
import { ReactDOM } from 'react';

interface ItemListProp {
  items: ItemModel[];
  id: string;
}

export const ItemList = memo((props: ItemListProp) => {
  console.log('item', props);

  // const renderTitle = (key: string, value: any) => {
  //   if (key === 'id' || key === 'date') {
  //     return null;
  //   } else if (key) {
  //     return (
  //       <label htmlFor={key} className={styles.propertyName}>
  //         {key.charAt(0).toLowerCase() + key.slice(1)}:
  //       </label>
  //     );
  //   }
  // };

  console.log('render item list:', props.items);

  // function RadioButtons(props) {
  //   const [selectedValue, setSelectedValue] = useState('');
  //   const setItemValue = (id, label, value) => {
  //     setSelectedValue(value);
  //   };
  //   const handleChange = (cbItem) => {
  //     setItemValue(props.id, props.label, cbItem.id);
  //   };
  //   console.log(selectedValue);
  // }

  return (
    <div className={styles.row}>
      <ul className={styles.propertyList}>
        {props.items.map((item, index) => {
          return (
            <li key={`${index}_${item.value}`}>
              <label htmlFor={item.label}>{item.label}</label>
              {item.type === 'checkbox' && (
                <input
                  className={styles.checkbox}
                  type={item.type}
                  checked={item.value as boolean}
                  onChange={() =>
                    setItemValue(props.id, item.label, !item.value)
                  }
                />
              )}
              {item.type === 'dropdown' && (
                <select
                  className={styles.dropdown}
                  name={item.label}
                  id={item.label}
                  value={item.value as number}
                  // TODO get/handle the selected
                >
                  <option value={1}>0.5lt</option>
                  <option value={2}>1lt</option>
                  <option value={3}>1.5lt</option>
                  <option value={4}>2lt</option>
                  <option value={5}>{'>2lt'}</option>
                </select>
              )}
              {item.type === 'radio' && (
                <div className={styles.radio}>
                  {/* TODO get handle the selected */}

                  {[
                    { icon: '😡', id: 1 },
                    { icon: '😢', id: 2 },
                    { icon: '🙂', id: 3 },
                    { icon: '😊', id: 4 },
                    { icon: '🤗', id: 5 },
                  ].map((cbItem) => (
                    <>
                      <label htmlFor={`${cbItem.id}`} className={styles.emoji}>
                        <input
                          onChange={(e) =>
                            setItemValue(props.id, item.label, cbItem.id)
                          }
                          type="radio"
                          id={`radio_${cbItem.id}`}
                          name={`radio_${props.id}`}
                          value={cbItem.id}
                          defaultChecked={item.value === cbItem.id}
                        />
                        {cbItem.icon}
                      </label>
                    </>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
