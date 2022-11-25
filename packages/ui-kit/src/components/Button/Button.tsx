import './button.scss';

export interface ButtonProps {
  type?: 'button' | 'submit';
  handleClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode,
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    handleClick,
    disabled,
    children,
    ...spreadAttributes
  } = props;

  return (
    <button
      type={type}
      className='button'
      onClick={handleClick}
      disabled={disabled}
      {...spreadAttributes}
    >
      {children}
    </button>
  )
}
