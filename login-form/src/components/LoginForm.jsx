import { useState } from 'react';
import './LoginForm.css'

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }
    return (
        <>
            <div>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    className="login-input"
                    //type="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                />
                <button
                    className="show-btn"
                    onClick={toggleShowPassword}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <button className="login-btn">Login</button>
            <button className="login-btn">Sign Up</button>
        </>
    );
}