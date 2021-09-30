import React,{useContext, useState} from "react";
import { Container, Collapse, Nav,Navbar,NavbarBrand,NavbarToggler,Navbrand,NavItem,NavbarText,Navtitle,NavbarHeader } from "reactstrap";
import {Link, NavLink} from "react-router-dom"
import LOGO from "../images/paw.png"
import { MyContext } from "../Context/MyContext";

const Header = () =>
{

    const [isOpen, setIsOpen] = useState(false);
    const context = useContext(MyContext);

    const toggle = () =>
    {
        setIsOpen(!isOpen);
    }
    return (
        <Navbar color="dark" light expand="md">
        <NavbarBrand className="text-white">
        <img style={{ marginLeft: '.5rem' }} width="30px" height="20px" className="img-responsive" src={LOGO} alt="paw"/>
        &nbsp; PAWSOME
        </NavbarBrand>
        <NavbarText className="text-white">
        {context.user?.email?context.user.email:""}
        </NavbarText>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
        {context.user?(
         <>   
        <NavItem className="text-white"  style={{ marginLeft: ' .85rem' }}>
        <NavLink className ="text-white" tag="link" to="/">HOME</NavLink>
        </NavItem>
        <NavItem className="text-white" style={{ marginLeft: ' .85rem' }}>
        <NavLink className ="text-white"  tag="link" to="/cart">CART</NavLink>
        </NavItem>
        <NavItem className="text-white" style={{ marginLeft: '.85rem' , marginRight: '.5rem'}}>
        <NavLink onClick={()=>{context.setUser(null)}
        } className="text-white" to="/signin" >LOGOUT</NavLink>
        </NavItem>
        </>
        ):( <>
            <NavItem style={{ marginLeft: '.85rem' , marginRight: '.5rem'}}>
        <NavLink tag={Link} to="/signup" className="text-white">
            Signup
        </NavLink>
        </NavItem>
        <NavItem style={{ marginLeft: '.85rem' , marginRight: '.5rem'}}>
        <NavLink tag={Link} to="/signin" className="text-white">
            Signin
        </NavLink>
        </NavItem>
        </>
        )}
        </Nav>
        </Collapse>
  
</Navbar>

    );
}

export default Header;