import React from 'react';

const Burger = (props) => {
const cls = ['disable', 'Burger'];

  props.isOpen && (cls.length = 0 && cls.push('open'))
  return (
    <button className={cls.join(' ')} onClick={props.onToggle}>
      <div
        className={
          props.isOpen
            ? ['Burger', 'menuBurger', 'show'].join(' ')
            : ['Burger', 'menuBurger'].join(' ')
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default Burger;
