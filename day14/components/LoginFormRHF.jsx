import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1️⃣ SCHEMA – place it here, outside the component
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Minimum 6 characters'),
});

function LoginFormRHF() {
  // 2️⃣ ADD zodResolver HERE
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('Submitted:', data);
    alert(`Welcome, ${data.email}!`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold">Login</h2>

      {/* 3️⃣ register() calls are now CLEAN – no inline rules */}
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email')}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password')}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded font-bold"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginFormRHF;