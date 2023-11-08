import {Link} from 'react-router-dom';
const Navbar=()=> {
    return (
    <nav>
        <NavLink to='/' style={(({isActive})=>{
            return {
                color:isActive?'red':'grey'
            
            }
            })}> HOME </NavLink> <br/>
        <NavLink to='/about' style={(({isActive})=>{
            return {
                color:isActive?'red':'grey'
            }
            })}> ABOUT </NavLink> <br/>
        <NavLink to='/products' style={(({isActive})=>{
            return {
                color:isActive?'red':'grey'
            }
            })}> PRODUCTS </NavLink> <br/>
            {/* <NavLink to='/product/1/Logesh' style={(({isActive})=>{
                return {
                    color:isActive?'red':'grey'
                }
                })}> SINGLE PRODUCT </NavLink> */}
    </nav>
    )
}

    

export default Navbar;
