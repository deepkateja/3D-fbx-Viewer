import React, { Component } from 'react';

import ReactThreeFbxViewer from 'react-three-fbx-viewer';
let selected;
let fbxUrl = require('./asd.fbx');
let check = false;
let labranth = 'https://firebasestorage.googleapis.com/v0/b/viga-6c3dd.appspot.com/o/cottage_obj.obj?alt=media&token=ec5c3f8f-2d43-449e-bd33-b529b5c0dfa8';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  file:null
		};
		this.refreshPage = this.refreshPage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		console.log("constructor is working");
		console.log(localStorage.getItem('3dmodel'));
		if(localStorage.getItem('3dmodel')!== null){
			console.log("hoho");
			selected=localStorage.getItem('3dmodel');
		}

	  }
	  
	onLoad(e) {
		console.log(e);
	}

	onError(e) {
		console.log(e);
	}
	 refreshPage() {
		 //console.log("hello")
		window.location.reload(false);
	  }
	
	handleChange = (e) => {
   
	// 	selected = e.target.files[0];
	  
	//    if (selected ) {
	//    console.log(selected);
	//    check = true;
	//    this.setState({file: selected});
	//    }
	   const reader = new FileReader();
	   reader.onload = () => {
		   //console.log("HI");
		   if(reader.readyState===2){
			  // this.setState({file: reader.result})
			   selected = reader.result;
			   let tp = selected;
			   localStorage.setItem('3dmodel',tp);
			   console.log("ITem set " + localStorage.getItem('3dmodel'));
			   console.log(selected);
			   this.refreshPage();
		   }
	   }
	   //console.log("HI2");
	   reader.readAsDataURL(e.target.files[0]);
	    
	   
	 }
	render () {
		const {file} = this.state;
		let cameraPosition = {
			x:150,
			y:300,
			z:350
		}
		return (
			<div>
				<div><input type="file" name="file" placeholder="Uplaod Image or 3D Model" onChange={this.handleChange}></input></div>
				
					{console.log("HI" + selected)}
					<ReactThreeFbxViewer cameraPosition={cameraPosition} url={selected} onLoading={this.onLoad} onError={this.onError}/>)
				
					
			</div>
		);
	}
}
