import React, { Component } from 'react';

import ReactThreeFbxViewer from 'react-three-fbx-viewer';

let fbxUrl = require('./33-fbx/fbx/Wolf.fbx');

export default class Demo1 extends Component {
	onLoad(e) {
		console.log(e);
	}

	onError(e) {
		console.log(e);
	}
	render () {
		let cameraPosition = {
			x:150,
			y:300,
			z:350
		}
		return (
			<div>
				<ReactThreeFbxViewer style={{width:"300px"}} cameraPosition={cameraPosition} url={fbxUrl} onLoading={this.onLoad} onError={this.onError}/>
			</div>
		);
	}
}