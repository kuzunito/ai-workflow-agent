import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Workflow, List, Settings } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();
    return (
        <nav style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1rem 2rem', background: '#1a1a2e', color: 'white', gap: '1rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="6" fill="#6366f1"/>
                    <path d="M10 15h12v2H10v-2zm0 4h12v2H10v-2zm0-8h12v2H10v-2z" fill="white"/>
                    <circle cx="22" cy="10" r="2" fill="#6366f1"/>
                    <circle cx="22" cy="16" r="2" fill="#6366f1"/>
                    <circle cx="22" cy="22" r="2" fill="#6366f1"/>
                </svg>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AI Workflow Agent</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'right', maxWidth: '200px' }}>
                    <div style={{ fontWeight: '500', fontSize: '0.9rem' }}>{user.firstName} {user.lastName}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{user.email}</div>
                </div>
                <button onClick={onLogout} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem', background: 'white', color: '#1a1a2e',
                    border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer'
                }}>
                    <LogOut size={18} />
                    <span style={{ fontSize: '0.9rem' }}>Logout</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
