import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Workflows from './pages/Workflows';
import WorkflowEditor from './pages/WorkflowEditor';
import Executions from './pages/Executions';
import Webhooks from './pages/Webhooks';

function PrivateRoute({ children }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ id: 1, email: 'demo@aiworkflow.com', role: 'user', firstName: 'Jofer', lastName: 'Fernandez' });
        }
        setLoading(false);
    }, []);
    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
    return user ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/workflows" element={<PrivateRoute><Workflows /></PrivateRoute>} />
                <Route path="/workflows/new" element={<PrivateRoute><WorkflowEditor /></PrivateRoute>} />
                <Route path="/workflows/:id" element={<PrivateRoute><WorkflowEditor /></PrivateRoute>} />
                <Route path="/executions" element={<PrivateRoute><Executions /></PrivateRoute>} />
                <Route path="/webhooks" element={<PrivateRoute><Webhooks /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
