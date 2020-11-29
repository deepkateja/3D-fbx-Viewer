import React, { Component } from 'react';

import {HashRouter} from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
	Form, FormGroup, Input, Label } from 'reactstrap';
	import { NavLink } from 'react-router-dom';



 class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false
		};
		
		this.toggleNav = this.toggleNav.bind(this);
	  }
	  toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

	 
	render () {
		
		return (
			<div>
					<Navbar dark expand="md" style={{background:"purple"}}>
                    <div className="container" style={{paddingTop:"20px",paddingBottom:"20px"}}>
                        
                        <NavbarBrand className="mr-auto" href="/home" ><span  style={{color:"white",marginLeft:"10px",fontWeight:"bold"}}>3D-Model Viewer</span></NavbarBrand> <span style={{color:"white"}}> | </span> 
                        <NavbarBrand className="mr-auto" href="/home" className="ml-auto"><span style={{color:"white",marginLeft:"10px",fontWeight:"bold"}}>Home</span></NavbarBrand> <span style={{color:"white"}}> | </span>
                        <NavbarBrand className="mr-auto" href="#/gallery" className="ml-auto"><span style={{color:"white",marginLeft:"10px",fontWeight:"bold"}}>Gallery</span></NavbarBrand>
                    </div>
                </Navbar>
						
			</div>
		);
	}
}

export default Header;