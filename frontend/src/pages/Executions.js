import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Execution, CheckCircle, XCircle, Clock, Download, Trash2 } from 'lucide-react';

const Executions = () => {
    const navigate = useNavigate();
    const [executions = []] = useState([
        {
            id: 1,
            workflowName: 'Invoice Automation',
            status: 'completed',
            output: 'Summary generated successfully',
            startedAt: '2026-10-14 10:30',
            completedAt: '2026-10-14 10:32'
        },
        {
            id: 2,
            workflowName: 'Lead Capture',
            status: 'failed',
            output: 'Connection timed out',
            startedAt: '2026-10-14 09:15',
            completedAt: '2026-10-14 09:15'
        },
        {
            id: 3,
            workflowName: 'Email Summary',
            status: 'completed',
            output: 'Email sent to john@example.com',
            startedAt: '2026-10-13 16:45',
            completedAt: '2026-10-13 16:48'
        },
        {
            id: 4,
            workflowName: 'Data Sync',
            status: 'running',
            output: 'Processing...',
            startedAt: '2026-10-15 08:00',
            completedAt: null
        }
    ]);

    return (
        <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1 style={{ color: '#1a1a2e', marginBottom: '0.5rem' }}>Execution History</h1>
                        <p style={{ color: '#666' }}>Track all your workflow executions</p>
                    </div>
                    <Link to="/workflows">
                        <button style={{
                            padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0',
                            background: 'white', color: '#6b7280', cursor: 'pointer', fontSize: '0.95rem',
                            display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                            <Workflow size={18} /> Back to Workflows
                        </button>
                    </Link>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', padding: '0', margin: 0 }}>
                        <thead>
                            <tr style={{ background: '#6366f1', color: 'white', textAlign: 'left', padding: '1rem' }}>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Workflow</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Status</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Output</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Started</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Completed</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {executions.map(ex => (
                                <tr key={ex.id} style={{ borderBottom: '1px solid #e2e8f0', hover: true }}>
                                    <td style={{ padding: '1rem', color: '#1a1a2e' }}>{ex.workflowName}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem', borderRadius: '20px',
                                            background: ex.status === 'completed' ? '#dcfce7' :
                                                ex.status === 'failed' ? '#fee2e2' :
                                                ex.status === 'running' ? '#e0e7ff' : '#f3f4f6',
                                            color: ex.status === 'completed' ? '#166534' :
                                                ex.status === 'failed' ? '#dc2626' :
                                                ex.status === 'running' ? '#374151' : '#6b7280',
                                            fontSize: '0.8rem', fontWeight: '500'
                                        }}>
                                            {ex.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '0.75rem', color: '#666', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {ex.output}
                                    </td>
                                    <td style={{ padding: '0.75rem', color: '#666' }}>{ex.startedAt}</td>
                                    <td style={{ padding: '0.75rem', color: '#666' }}>{ex.completedAt || 'Running'}</td>
                                    <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                                        <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', background: 'white', color: '#6b7280', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <Download size={16} />
                                        </button>
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

export default Executions;
