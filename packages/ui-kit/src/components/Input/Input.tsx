import React from 'react';
import cn from 'classnames';

import './input.scss';

export interface InputProps {
  label: string;
  name: string;
  handleChange: (e: { target: HTMLInputElement }) => void;
  children?: JSX.Element | JSX.Element[],
}

export const Input = (props: InputProps) => {
  const {
    label,
    name,
    handleChange,
    children,
    ...spreadAttributes
  } = props;

  return (
    <div className='input'>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        onChange={handleChange}
        {...spreadAttributes}
      />
      {children}
    </div>
  )
}
