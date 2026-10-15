import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Workflow, Play, Edit, Trash2, Plus, Logger, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    const { workflows = [], executions = [] } = React.useState({
        workflows: [
            { id: 1, name: 'Invoice Automation', status: 'active', executionCount: 42, lastExecuted: '2026-10-14' },
            { id: 2, name: 'Lead Capture', status: 'active', executionCount: 28, lastExecuted: '2026-10-14' },
            { id: 3, name: 'Email Summary', status: 'paused', executionCount: 12, lastExecuted: '2026-10-12' },
        ]
    }).value;

    const stats = {
        totalWorkflows: workflows.length,
        activeWorkflows: workflows.filter(w => w.status === 'active').length,
        totalExecutions: executions.reduce((sum, e) => sum + e.count, 0),
        successRate: '94%'
    };

    return (
        <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1 style={{ color: '#1a1a2e', marginBottom: '0.5rem' }}>Dashboard</h1>
                        <p style={{ color: '#666' }}>Welcome back, Jofer! Here's your workflow overview.</p>
                    </div>
                    <Link to="/workflows/new">
                        <button style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1.5rem', background: '#6366f1', color: 'white',
                            border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem'
                        }}>
                            <Plus size={20} /> New Workflow
                        </button>
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <div style={{ color: '#666', fontSize: '0.9rem' }}>Total Workflows</div>
                        <div style={{ color: '#1a1a2e', fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{stats.totalWorkflows}</div>
                    </div>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <div style={{ color: '#666', fontSize: '0.9rem' }}>Active</div>
                        <div style={{ color: '#1a1a2e', fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{stats.activeWorkflows}</div>
                    </div>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <div style={{ color: '#666', fontSize: '0.9rem' }}>Total Executions</div>
                        <div style={{ color: '#1a1a2e', fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{stats.totalExecutions}</div>
                    </div>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <div style={{ color: '#666', fontSize: '0.9rem' }}>Success Rate</div>
                        <div style={{ color: '#1a1a2e', fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{stats.successRate}</div>
                    </div>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', padding: '0', margin: 0 }}>
                        <thead>
                            <tr style={{ background: '#6366f1', color: 'white', textAlign: 'left', padding: '1rem' }}>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Name</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Status</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Executions</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Last Executed</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workflows.map(w => (
                                <tr key={w.id} style={{ borderBottom: '1px solid #e2e8f0', hover: true }}>
                                    <td style={{ padding: '1rem', color: '#1a1a2e' }}>{w.name}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem', borderRadius: '20px',
                                            background: w.status === 'active' ? '#dcfce7' : '#f3f4f6',
                                            color: w.status === 'active' ? '#166534' : '#6b7280',
                                            fontSize: '0.8rem', fontWeight: '500'
                                        }}>
                                            {w.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '0.75rem', color: '#666' }}>{w.executionCount}</td>
                                    <td style={{ padding: '0.75rem', color: '#666' }}>{w.lastExecuted}</td>
                                    <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                                        <Link to={`/workflows/${w.id}`}>
                                            <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', background: 'white', color: '#6b7280', cursor: 'pointer', fontSize: '0.85rem' }}>
                                                <Edit size={16} />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
