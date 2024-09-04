import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = ()=>{
        const navigate = useNavigate()
        const auth = localStorage.getItem('user');
        const logout = () =>{
            localStorage.clear('user')
            navigate('/signup')
        }
    return(
        <>
        <div>
            <ul className="nav-ul">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>products</Link></li>
                <li><Link to='/add'>Add product</Link></li>
                <li><Link to='/search'>search</Link></li>
                <li>{auth?<Link to='/profile'>Profile</Link>:<Link to='/login'>login</Link>}</li>
                <li>{ auth ? <Link onClick={logout} to='/signup'>Logout</Link>:<Link to='/signup'>sign-up</Link>}</li>
            </ul>
        </div>
        </>
    )
}

export default Nav;