import { useState } from 'react';
import Button from '../../components/common/Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');

  return (
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full"
      />
      <Button>Submit</Button>
    </form>
  );
};

export default LoginForm;
