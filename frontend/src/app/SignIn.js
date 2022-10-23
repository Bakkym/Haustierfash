import { useRef, useState, useEffect } from 'react';




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
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
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
                        <input type="text" ref={userRef} id="email" autoComplete='off' onChange={(e) => setUser(e.target.value)}
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
