import './input.scss';

export interface InputProps {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  handleChange?: (e: { target: HTMLInputElement }) => void;
  children?: JSX.Element | JSX.Element[],
}

export const Input = (props: InputProps) => {
  const {
    type = 'text',
    name,
    label,
    placeholder,
    handleChange,
    children,
    ...spreadAttributes
  } = props;

  return (
    <div className='input'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        {...spreadAttributes}
      />
      {children}
    </div>
  )
}
