import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import axios from '../api/axios'

const login_url = 'api/auth/signin'


export const Login = () => {

    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();

    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(JSON.stringify({
                "email":user,
                "password":pwd
            }))
            const response = await axios.post(login_url, JSON.stringify({
                email:user,
                password:pwd
            }),{
                headers: {'Content-Type': 'application/json'}
            }
            );
            
            console.log(JSON.stringify({user,pwd}))

            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));

            const accessToken = response?.data.accessToken;
            const roles = response?.data?.roles;

            
            setUser('');
            setPwd('');
            setSuccess(true);

        } catch (error) {
            if(!error?.response) {
                setErrMsg("No server response");
            }else if(error.response?.status == 400){
                setErrMsg("Missing Email or Password");
            }else if(error.response?.status == 401){
                setErrMsg("Unauthorized");
            } else{
                setErrMsg("Login Failed");
            }
            errRef.current.focus();

        }

    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are already logged in</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>

            ) : (



                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={userRef} id="email" autoComplete='off' onChange={(e) => setUser(e.target.value)}
                            value={user}
                            requiered />

                        <label htmlFor="password">Password</label>
                        <input type="password" ref={userRef} id="password" autoComplete='off' onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            requiered />
                        <button>Sing In</button>
                    </form>
                    <p>Need an Account? <br />
                        <span className="line">
                            <a href="#">Sign Up</a>
                        </span>


                    </p>
                </section>

            )}
        </>
    )


}
