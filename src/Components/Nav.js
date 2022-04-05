import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return(
   <div>
 
 <Navbar classname="color-nav" variant="light">
  
 
    <Navbar.Brand href="#home" style={{ width: "35px" , margin: "14px" }}>YOUR ORDERS</Navbar.Brand>
    <Navbar.Toggle />
    <span className="me-5" style={{paddingRight:300}}></span>
    <Form className="d-flex" style={{width:500}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark" style={{width:200}}>Search Orders</Button>
      </Form>

    <Navbar.Collapse className="justify-content-end">
     
    </Navbar.Collapse>

</Navbar>
  </div>)
};

export default Nav;
