import React, { Component } from 'react';
import ReactThreeFbxViewer from 'react-three-fbx-viewer';

let selected;
let fbxUrl = require('./asd.fbx');
let check = false;
let labranth = 'https://firebasestorage.googleapis.com/v0/b/viga-6c3dd.appspot.com/o/Dragon%202.5_fbx.fbx?alt=media&token=29b08274-aa13-4e0e-b1a9-4778cf12d8c1';



export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  file:null
		};
		this.refreshPage = this.refreshPage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
		console.log("constructor is working");
		//console.log(sessionStorage.getItem('3dmodel'));
		if(sessionStorage.getItem('3dmodel')!== null){
			//console.log("hoho");
			selected=sessionStorage.getItem('3dmodel');
		}else{
			selected= fbxUrl;
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
			   sessionStorage.setItem('3dmodel',tp);
			   console.log("ITem set " + sessionStorage.getItem('3dmodel'));
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
				
				<br />
				<br />
				<div>
					<input type="file" name="file" className="uploadbox" placeholder="Uplaod Image or 3D Model" onChange={this.handleChange}></input>
					
					</div>
				
					<br /> <br />
					<ReactThreeFbxViewer cameraPosition={cameraPosition} url={selected} onLoading={this.onLoad} onError={this.onError}/>)
				
					
			</div>
		);
	}
}
