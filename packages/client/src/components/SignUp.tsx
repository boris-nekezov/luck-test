import { Form, Input, Button } from '@luck-test/ui-kit';

interface SignUpProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: { target: HTMLInputElement }) => void;
}

const SignUp = ({
  handleSubmit,
  handleChange,
}: SignUpProps) => {

  return (
    <Form handleSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <Input
        type="email"
        name="emailSignUp"
        label="Email"
        placeholder="Enter you email!"
        handleChange={handleChange}
      />
      <Input
        type="password"
        name="passwordSignUp"
        label="Password"
        placeholder="Enter you password!"
        handleChange={handleChange}
      />
      <Button type='submit'>Register</Button>
    </Form>
  )
};
export default SignUp;