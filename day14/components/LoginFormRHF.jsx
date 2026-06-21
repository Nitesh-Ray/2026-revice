import { useForm } from 'react-hook-form';

function LoginFormRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,      // ← ADD THIS
    reset,      // ← ADD THIS
  } = useForm();

  const password = watch('password'); // ← watch password live

  const onSubmit = (data) => {
    console.log('Form data:', data);
    alert(`Welcome, ${data.email}!`);
    reset(); // ← clear form after submit
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold">Login</h2>

      {/* Email field */}
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email format',
            },
          })}
          className="w-full border p-2 rounded mt-1 dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password field */}
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum 6 characters' },
          })}
          className="w-full border p-2 rounded mt-1 dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* ← ADD Confirm Password field here */}
      <div>
        <label className="block text-sm font-medium">Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === password || 'Passwords do not match',
          })}
          className="w-full border p-2 rounded mt-1 dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-bold"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginFormRHF;