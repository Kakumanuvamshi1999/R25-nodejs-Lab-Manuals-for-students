import React from 'react';

function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Student Registered Successfully!");
    };

    return (
        <div className="container">

            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Full Name: </label>
                    <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                    <label>Roll Number: </label>
                    <input type="text" placeholder="Enter your roll number" required />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Create a password" required />
                </div>

                <button type="submit">Register</button>

            </form>

        </div>
    );
}

export default Register;