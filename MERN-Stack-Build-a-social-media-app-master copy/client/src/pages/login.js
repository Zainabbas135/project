import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'

const handleGoogleLogin =  () => {
    window.location = "http://localhost:5000/api/google";
}
const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <>
        <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm-6 col-4'>
          <div class="backgroundimg"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"style={{height:"28rem"}}><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg></div>
    </div>
    <div className='col-lg-6 col-md-6 col-5'>
    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-k200y r-1cvl2hr r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr mt-3"style={{ height: "2rem", fill: " #007fed" }}
><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        <div className="auth_page">
            <form onSubmit={handleSubmit}style={{"border":"none"}}>
                
                {/* <div class="backgroundimg"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg></div> */}
                {/* <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-cross-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" /> */}
                {/* <h3 className="text-center mb-4">Twitter</h3> */}
                <h1 className="text-center mb-4"style={{"margin-top":"-20px"}}><b>Happening Now </b></h1>
                <br/>
                <h2><b>Join Twitter Today</b></h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"style={{"border-radius":"25px","background":"transparent"}} id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                    
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="form-control" id="exampleInputPassword1"style={{"border-radius":"25px"}}
                        onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                   
                </div>
            {/* <button className="btn btn-dark w-100" style={{ "border-radius": "25px", background: " #007fed", color:"rgb(255,255,255)","margin-top":"12px",height:"50px"}}>
                   <b> Sign in with Google</b>
                </button> */}

                <button type="submit" className="btn btn-dark w-100"style={{ "border-radius": "25px", background: " #007fed", color:"rgb(255,255,255)","margin-top":"12px",height:"50px"}}
                disabled={email && password ? false : true}>
                    Login
                </button>

                <h5 className="my-2">
                   <b> You don't have an account?</b> 
                   </h5>
                   <Link to="/register">Register Now
                   <div style={{border:"1px", "border-radius": "25px"}}>
                       
                   </div>
                   
                   
                   </Link>
                
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-dark w-100" style={{ "border-radius": "25px", background: " #007fed", color:"rgb(255,255,255)","margin-top":"12px",height:"50px"}}>
                   <b> Sign in with Google</b>
            </button>
        </div>

        </div>
        </div>
        </>
    )
}

export default Login
