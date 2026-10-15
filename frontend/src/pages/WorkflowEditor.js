import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Workflow, Play, Edit, Trash2, Plus, X, Save } from 'lucide-react';

const WorkflowEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [triggers, setTriggers] = useState('');
    const [conditions, setConditions] = useState('');
    const [actions, setActions] = useState('');
    const [aiConfig, setAiConfig] = useState('');
    const [status, setStatus] = useState('active');
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        // API call to backend would go here
        const newWorkflow = { name, description, triggers, conditions, actions, aiConfig, status };
        console.log('Workflow:', newWorkflow);
        setSaving(false);
        navigate('/workflows');
    };

    return (
        <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <button onClick={() => navigate('/workflows')} style={{
                    padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0',
                    background: 'white', color: '#6b7280', cursor: 'pointer', fontSize: '0.9rem',
                    display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                    <Link to="/workflows"><Workflow size={16} /> Workflows</Link>
                </button>

                <div style={{ marginTop: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '2rem' }}>
                    <h1 style={{ color: '#1a1a2e', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                        {id ? 'Edit Workflow' : 'New Workflow'}
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                Workflow Name *
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g., Invoice Automation"
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe what this workflow does..."
                                rows={3}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                Triggers (comma-separated)
                            </label>
                            <input
                                type="text"
                                value={triggers}
                                onChange={(e) => setTriggers(e.target.value)}
                                placeholder="webhook, schedule, manual"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                            />
                            <p style={{ color: '#999', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                e.g., webhook, schedule, manual
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                Conditions (optional)
                            </label>
                            <input
                                type="text"
                                value={conditions}
                                onChange={(e) => setConditions(e.target.value)}
                                placeholder="if input.value === 'invoice'"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                Actions (comma-separated)
                            </label>
                            <input
                                type="text"
                                value={actions}
                                onChange={(e) => setActions(e.target.value)}
                                placeholder="ai: summarize, save: to database, send: email"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                            />
                            <p style={{ color: '#999', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                e.g., ai: summarize document, save: to database
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                AI Configuration (optional)
                            </label>
                            <input
                                type="text"
                                value={aiConfig}
                                onChange={(e) => setAiConfig(e.target.value)}
                                placeholder="model: gpt-4o-mini, temperature: 0.7"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                            />
                            <p style={{ color: '#999', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                OpenAI model configuration
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                Status
                            </label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                            >
                                <option value="active">Active</option>
                                <option value="paused">Paused</option>
                                <option value="deleted">Deleted</option>
                            </select>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                            <button
                                type="button"
                                onClick={() => navigate('/workflows')}
                                style={{
                                    padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0',
                                    background: 'white', color: '#6b7280', cursor: 'pointer', fontSize: '0.95rem',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem'
                                }}
                            >
                                <X size={18} /> Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                style={{
                                    padding: '0.75rem 1.5rem', borderRadius: '8px', background: '#6366f1',
                                    color: 'white', border: 'none', cursor: 'pointer', fontSize: '0.95rem',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500'
                                }}
                            >
                                {saving ? (
                                    <>
                                        <div style={{ width: '16px', height: '16px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save size={18} /> Save
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WorkflowEditor;
