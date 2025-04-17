import React, { useState } from 'react';
import '../Styles/Login.css';

const Login = () => {
    const [formdata, setformdata] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch("https://shop999backend.vercel.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formdata)
            })
            const result = await response.json()
            if (response.ok && result.success) {
                const user = result.user || (result.users ? result.users.find(user => user.email === formdata.email) : null);
                if (user) {
                    if (user.role === "user") {
                        alert("Login successful! Redirecting to home...");
                        window.location.href = "/";
                     } else {
                        window.location.href = "/dashboard";
                    }
                } else {
                    alert("Invalid credentials. Please try again.");
                 }
            } else {
                alert(result.message || "Login failed. Please try again.");
        }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={HandleSubmit}>
                <h2> Hey Deepak  Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        id="username"
                        name='email'
                        value={formdata.email}
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        name='password'
                        value={formdata.password}
                        placeholder="Enter password"
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="login-button"
                    disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;
