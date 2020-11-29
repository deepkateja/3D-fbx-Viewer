import React, { Component } from 'react';

import ReactThreeFbxViewer from 'react-three-fbx-viewer';

let fbxUrl = require('./56-fbx (1)/fbx/Lowpoly_Notebook_2.fbx');

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
				<ReactThreeFbxViewer cameraPosition={cameraPosition} url={fbxUrl} onLoading={this.onLoad} onError={this.onError}/>
			</div>
		);
	}
}