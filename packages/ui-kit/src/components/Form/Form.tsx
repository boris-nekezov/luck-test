import './form.scss';

export interface FormProps {
  handleSubmit: (e: any) => void;
  children: React.ReactNode,
}

export const Form = (props: FormProps) => {
  const {
    handleSubmit,
    children,
  } = props;

  return (
    <div className='form'>
      <form
        onSubmit={handleSubmit}
        method="post"
      >
        <fieldset>
          <legend>
            {children}
          </legend>
        </fieldset>
      </form>
    </div>
  )
}
