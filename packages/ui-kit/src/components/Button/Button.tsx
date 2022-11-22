import './button.scss';

export interface ButtonProps {
  type?: 'button' | 'submit';
  handleClick?: () => void;
  children?: React.ReactNode,
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    handleClick,
    children,
    ...spreadAttributes
  } = props;

  return (
    <button
      type={type}
      className='button'
      onClick={handleClick}
      {...spreadAttributes}
    >
      {children}
    </button>
  )
}
