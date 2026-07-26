import React from 'react';

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Successful!");
    };

    return (
        <div className="container">

            <h2>Student Login</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Email / Roll Number:</label>
                    <input type="text" placeholder="Enter email or roll number" required />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>

                <button type="submit">Login</button>

            </form>

        </div>
    );
}

export default Login;