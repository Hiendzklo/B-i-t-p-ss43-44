import React from 'react';
import './loginpage.scss';

const LoginPage = () => {
    return (
        <div className="login-page">
            <img src="https://images.hdqwalls.com/wallpapers/ahri-league-of-legends-4k-game-2020-kv.jpg" alt="Background" className="background-image" />
            <div className="login-form">
                <h1>Login</h1>
                <form>
                    <div className="input-group">
                        <h3>Email</h3>
                        <input type="email" id="email" placeholder="E-mail" />
                    </div>
                    <div className="input-group">
                        <h3 className='h3-passs'>Password</h3>
                        <input type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="links">
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <button type="submit" className="login-button">Login</button><br/><br/>
                        <button type="submit" className="register-button">Register Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
