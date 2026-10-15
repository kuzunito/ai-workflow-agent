import React from 'react';

const Login = () => {
    const [email, setEmail] = React.useState('demo@aiworkflow.com');
    const [password, setPassword] = React.useState('demo123');
    const [message, setMessage] = React.useState('');
    const { login } = React.useContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result.success) {
            setMessage('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = '/';
            }, 500);
        } else {
            setMessage('Login failed: ' + result.error);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                        <span style={{ color: 'white', fontSize: '2rem' }}>\u26A1</span>
                    </div>
                    <h1 style={{ color: '#1a1a2e', marginBottom: '0.5rem' }}>AI Workflow Agent</h1>
                    <p style={{ color: '#666' }}>Automate your business workflows with AI</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                        required
                    />
                    <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
                        Login
                    </button>
                </form>

                {message && (
                    <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#e3f2fd', borderRadius: '8px', color: '#1a1a2e' }}>
                        {message}
                    </div>
                )}

                <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#999', fontSize: '0.85rem' }}>
                    Demo: demo@aiworkflow.com / demo123
                </div>
            </div>
        </div>
    );
};

export default Login;
