import React, { useState } from 'react';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login attempt with:', credentials);
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="admin_username">Username:</label>
                    <input
                        type="text"
                        id="admin_username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="admin_password">Password:</label>
                    <input
                        type="password"
                        id="admin_password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>

            <style jsx>{`
                .login-container {
                    max-width: 400px;
                    margin: 2rem auto;
                    padding: 2rem;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }

                h2 {
                    text-align: center;
                    color: #2c3e50;
                    margin-bottom: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: #4a5568;
                    font-weight: 500;
                }

                input {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 4px;
                    font-size: 1rem;
                    transition: border-color 0.2s;
                }

                input:focus {
                    outline: none;
                    border-color: #4299e1;
                    box-shadow: 0 0 0 2px rgba(66,153,225,0.1);
                }

                .login-button {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: #4299e1;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .login-button:hover {
                    background-color: #3182ce;
                }
            `}</style>
        </div>
    );
};

export default AdminLogin;