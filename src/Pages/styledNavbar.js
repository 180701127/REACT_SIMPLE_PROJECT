import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from '../Shopping_Cart/ContextApi';

const StyleNavbar=()=> {
    const {cart, setcart} = useContext(Container);
    return (
<nav>
    <NavLink to='/MyPages/home' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go To Home Page </NavLink> <br/>
    <NavLink to='/MyPages/about' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to about Page </NavLink> <br/>
    
    
    <NavLink to='/MyPages/login_1' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Login_1 Page </NavLink> <br/>
    <NavLink to='/MyPages/allProducts' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to All products Page </NavLink><br/>
    <NavLink to='/MyPages/cart' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Cart Page {cart.length} </NavLink>
    <br/>
    
    <NavLink to='/MyPages/counter' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Counter Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/reduxcounter' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to ReduxCounter Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/booklist' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Booklist Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/books' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Books Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/book' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Book Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/ContextAPI' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to ContextAPI Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/controlledforms' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to controlledforms Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/github' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Github Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/login' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Login Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/usestatebasics' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to useStatebasics Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/userrefbasics' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to UserRefbasics Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/ternary' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to ternary Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/shortcircuit' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to shortcircuit Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/showandhide' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to ShowAndHideComponent Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/singleperson' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to SinglePerson Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/propdrilling' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to PropDrilling Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/personinfo' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to PersonInfo Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/multiplereturns' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to MultipleReturns Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/protectedroute' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to ProtectedRoute Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/singleproduct' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to SingleProduct Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/multipleforms' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to multipleforms Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/product' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to product Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/products' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Products Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/fromcontroller' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to FromController Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/list' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to List Page  </NavLink>
    <br/>
    <NavLink to='/MyPages/error' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to Error Page </NavLink>
    <br/>
    <NavLink to='/MyPages/nestedcomponent' style={(({isActive})=>{
        return {
            color:isActive?'yellow':'yellow'
        }
    })}> Go to NestedComponent Page </NavLink>
    <br/>
   


</nav>
    )
}

export default StyleNavbar;
