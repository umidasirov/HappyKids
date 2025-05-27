import MainBtn from "./MainBtn";
import SecondaryButton from "./SecondaryButton";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MainContext } from "../context/Context";

export default function Login() {
    const { loginUser, email, setEmail, password, setPassword } = useContext(MainContext);
    const navigate = useNavigate();
    const [isLoading, SetIsLoading] = useState(false)
    const [a, setA] = useState(null)
    const handleSubmit = async (e) => {
        SetIsLoading(true)
        e.preventDefault();
        const success = await loginUser(email, password);
        if (success) {
            navigate('/profile');
        } else {
            setA(<div style={{ color: "red" }}>Xato</div>)
        }
        SetIsLoading(false)
    };

    return (
        <div className='login sh' data-aos="fade-right" style={isLoading ? { opacity: "0.6", zIndex: 1,boxShadow:"2px 4px 10px rgba(0, 0, 0, 0.3)" } : null} data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="login-head">🙂 Xush Kelibsiz!</div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className='main-login-forms'>
                    <div className="first-login">
                        <label htmlFor="floatingInput">Email address</label>
                        <div className="first-form input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@gmail.com"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="second-login">
                        <label htmlFor="floatingInput">Parol</label>
                        <div className="second-form input-group mb-3">
                            <span className='input-group-text' id='basic-addon2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
                                </svg>
                            </span>
                            <input
                                type="password"
                                className="form-control password"
                                placeholder="*******"
                                aria-label="Password"
                                aria-describedby="basic-addon2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkChecked" />
                        <label className="form-check-label" htmlFor="checkChecked">
                            Eslab qolish
                        </label>
                    </div>
                    {isLoading ? <div class="spinner spinner-border text-primary" role="status" >
                        <span class="sr-only">Loading...</span>
                    </div>:null}
                    {a}
                    <div className="button-ofinput">
                        <MainBtn type='submit'>Kirish</MainBtn>
                        <Link to='/register'>
                            <SecondaryButton>Ro'yhatdan o'tish</SecondaryButton>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
