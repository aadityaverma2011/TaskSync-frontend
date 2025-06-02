import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const endpoint =
      mode === 'login' ? '/api/auth/login' : '/api/auth/register';

    const res = await fetch(`http://localhost:4000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      if (mode === 'register') {
        setMode('login');
        setForm({ email: '', password: '' });
        setError('');
      } else {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      }
    } else {
      setError(data.message || 'Auth failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-4 bg-zinc-900 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-white text-center">
          {mode === 'login' ? 'Login' : 'Register'}
        </h2>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input name="email" value={form.email} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button className="w-full" onClick={handleSubmit}>
          {mode === 'login' ? 'Login' : 'Register'}
        </Button>

        <p className="text-sm text-white text-center">
          {mode === 'login' ? (
            <>
              Don’t have an account?{' '}
              <span
                className="underline cursor-pointer"
                onClick={() => setMode('register')}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                className="underline cursor-pointer"
                onClick={() => setMode('login')}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Authorization;
