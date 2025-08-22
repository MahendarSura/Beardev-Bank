
const Login = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Login</h2>
      <form className="flex flex-col gap-4 max-w-sm">
        <input type="email" placeholder="Email" className="input input-bordered" />
        <input type="password" placeholder="Password" className="input input-bordered" />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
