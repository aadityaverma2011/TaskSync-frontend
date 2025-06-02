import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      navigate('/login');
    } else {
      setError(data.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-4 bg-zinc-900 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-white text-center">Register</h2>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input name="email" value={form.email} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" value={form.password} onChange={handleChange} />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button className="w-full" onClick={handleSubmit}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
