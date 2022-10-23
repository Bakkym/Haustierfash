import { useRef, useState, useEffect } from 'react';




const Login = () =>{

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=> {
        userRef.current.focus();
        
    }, [])

    useEffect(()=> {
        setErrMsg('');
    }, [user, pwd])

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" ref={useRef} id="email" autoComplete='off' onChange={(e) => setUser(e.target.value)}
                value={user}
                requiered/>

                <label htmlFor="password">Password</label>
                <input type="password" ref={useRef} id="password" autoComplete='off' onChange={(e) => setUser(e.target.value)}
                value={user}
                requiered/>
                <button>Sing In</button>

                

                
            </form>
        </section>
    )
}

export default Login;

