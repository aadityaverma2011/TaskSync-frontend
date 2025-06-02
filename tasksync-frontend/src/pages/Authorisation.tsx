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
            navigate('/tasks');
        }
        } else {
        setError(data.message || 'Auth failed');
        }
    };

    return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-zinc-950 px-4">
        <div className="w-full max-w-md md:max-w-lg bg-zinc-900 p-6 md:p-10 rounded-2xl shadow-2xl border border-zinc-800 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
            {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
        </h2>

        <div className="space-y-4">
            <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input name="email" value={form.email} onChange={handleChange} />
            </div>

            <div className="space-y-2">
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

            <p className="text-sm text-center text-zinc-400">
            {mode === 'login' ? (
                <>
                Don’t have an account?{' '}
                <span
                    className="underline cursor-pointer text-zinc-200"
                    onClick={() => setMode('register')}
                >
                    Register
                </span>
                </>
            ) : (
                <>
                Already have an account?{' '}
                <span
                    className="underline cursor-pointer text-zinc-200"
                    onClick={() => setMode('login')}
                >
                    Login
                </span>
                </>
            )}
            </p>
        </div>
        </div>
    </div>
    );


    };

    export default Authorization;
