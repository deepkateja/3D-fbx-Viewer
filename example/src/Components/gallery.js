import React, { Component } from 'react';

import {HashRouter} from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
	Form, FormGroup, Input, Label } from 'reactstrap';
	import { NavLink } from 'react-router-dom';

let img = require('./blue.jpg');
let img2 = require('./56-fbx (1)/fbx/laptop.jpg');
let img3 = require('./64-fbx/fbx/spider.jpg');
let img4 = require('./33-fbx/fbx/wolf.jpg');
let img5 = require('./75-fbx/fbx/gun.jpg');
 class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		
		
	  }
	
	render () {
		
		return (
            <div className="contanier">
			<div style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center"
              }} className="row">
				<h3 style={{fontFamily:"cursive",color:"#26241c",fontSize:"200%", display:"block"}}>3D-Models Samples</h3>	
			</div>
            <div className="row" 
              >
                
                 <div className="card col col-12 col-sm-4" style={{width: "18rem" , marginTop:"60px",marginRight:"10px",marginLeft:"10px", display:"inline"}}>
                 <a href="#Demo1" ><img className="card-img-top" src={img} style={{width:"250px",height:"250px",borderRadius:"20px", boxShadow: "5px 5px 10px black"}} alt="Blue Man" /></a> 
                </div>
               
                <div className="card col col-12 col-sm-4" style={{width: "18rem" , marginTop:"60px",marginRight:"10px",marginLeft:"10px", display:"inline"}}>
                 <a href="#Demo2" ><img className="card-img-top" src={img2} style={{width:"250px",height:"250px",borderRadius:"20px", boxShadow: "5px 5px 10px black"}} alt="Blue Man" /></a> 
                </div>

                <div className="card col col-12 col-sm-4" style={{width: "18rem" , marginTop:"60px",marginRight:"10px",marginLeft:"10px", display:"inline"}}>
                 <a href="#Demo3" ><img className="card-img-top" src={img3} style={{width:"250px",height:"250px",borderRadius:"20px", boxShadow: "5px 5px 10px black"}} alt="Blue Man" /></a> 
                </div>

                <div className="card col col-12 col-sm-4" style={{width: "18rem" , marginTop:"60px",marginRight:"10px",marginLeft:"10px", display:"inline"}}>
                 <a href="#Demo4" ><img className="card-img-top" src={img4} style={{width:"250px",height:"250px",borderRadius:"20px", boxShadow: "5px 5px 10px black"}} alt="Blue Man" /></a> 
                </div>

                <div className="card col col-12 col-sm-4" style={{width: "18rem" , marginTop:"60px",marginRight:"10px",marginLeft:"10px", display:"inline"}}>
                 <a href="#Demo5" ><img className="card-img-top" src={img5} style={{width:"250px",height:"250px",borderRadius:"20px", boxShadow: "5px 5px 10px black"}} alt="Blue Man" /></a> 
                </div>

                
                
            </div>
           
            
            </div>

		);
	}
}

export default Gallery;