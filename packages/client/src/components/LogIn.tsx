import { Form, Input, Button } from '@luck-test/ui-kit';

interface LogInProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: { target: HTMLInputElement }) => void;
}

const LogIn = ({
  handleSubmit,
  handleChange,
}: LogInProps) => {

  return (
    <Form handleSubmit={handleSubmit}>
      <h2>Log in</h2>
      <Input
        type="email"
        name="emailLogIn"
        label="Email"
        placeholder="Enter you email!"
        handleChange={handleChange}
      />
      <Input
        type="password"
        name="passwordLogIn"
        label="Password"
        placeholder="Enter you password!"
        handleChange={handleChange}
      />
      <Button type='submit'>Log in</Button>
    </Form>
  )
};
export default LogIn;