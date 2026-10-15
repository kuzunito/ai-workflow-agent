import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Webhook, Plus, Trash2, Edit } from 'lucide-react';

const Webhooks = () => {
    const [webhooks = []] = useState([
        {
            id: 1,
            name: 'QuickBooks Sync',
            url: 'https://quickbooks.example.com/webhook',
            method: 'POST',
            enabled: true
        },
        {
            id: 2,
            name: 'Slack Notifications',
            url: 'https://hooks.slack.com/services/T123/XYZ',
            method: 'POST',
            enabled: true
        },
        {
            id: 3,
            name: 'Email Formatter',
            url: 'https://api.emailformatter.com/v2/send',
            method: 'POST',
            enabled: false
        }
    ]);

    return (
        <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1 style={{ color: '#1a1a2e', marginBottom: '0.5rem' }}>Webhooks</h1>
                        <p style={{ color: '#666' }}>Connect external services to your workflows</p>
                    </div>
                    <Link to="/workflows/new">
                        <button style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1.5rem', background: '#6366f1', color: 'white',
                            border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem'
                        }}>
                            <Plus size={20} /> New Webhook
                        </button>
                    </Link>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', padding: '0', margin: 0 }}>
                        <thead>
                            <tr style={{ background: '#6366f1', color: 'white', textAlign: 'left', padding: '1rem' }}>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Name</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>URL</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Method</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0' }}>Status</th>
                                <th style={{ padding: '0.75rem', borderBottom: '2px solid #e2e8f0', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {webhooks.map(wh => (
                                <tr key={wh.id} style={{ borderBottom: '1px solid #e2e8f0', hover: true }}>
                                    <td style={{ padding: '1rem', color: '#1a1a2e' }}>{wh.name}</td>
                                    <td style={{ padding: '0.75rem', color: '#666' }}>{wh.url}</td>
                                    <td style={{ padding: '0.75rem', color: '#666' }}>{wh.method}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem', borderRadius: '20px',
                                            background: wh.enabled ? '#dcfce7' : '#f3f4f6',
                                            color: wh.enabled ? '#166534' : '#6b7280',
                                            fontSize: '0.8rem', fontWeight: '500'
                                        }}>
                                            {wh.enabled ? 'Enabled' : 'Disabled'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                                        <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', background: 'white', color: '#6b7280', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <Edit size={16} />
                                        </button>
                                        <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', background: 'white', color: '#6b7280', cursor: 'pointer', fontSize: '0.85rem', marginLeft: '0.5rem' }}>
                                            <Trash2 size={16} />
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

export default Webhooks;
