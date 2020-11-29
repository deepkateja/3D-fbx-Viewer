import React, { Component } from 'react';
import Demo1 from './Components/Demo1';
import Demo2 from './Components/Demo2';
import Demo3 from './Components/Demo3';
import Demo4 from './Components/Demo4';
import Demo5 from './Components/Demo5';
import {HashRouter} from 'react-router-dom';
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Gallery from './Components/gallery';
export default class App extends React.Component {
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
				<HashRouter>
					<Header />
					<Switch location={this.props.location}>
					<Route path='/home' component={() => <Home />} />
					<Route path='/Demo1'  component={() => <Demo1 />} />
					<Route path='/Demo2'  component={() => <Demo2 />} />
					<Route path='/Demo3'  component={() => <Demo3 />} />
					<Route path='/Demo4'  component={() => <Demo4 />} />
					<Route path='/Demo5'  component={() => <Demo5 />} />
					<Route path='/gallery' component={() => <Gallery />} />
					<Redirect to="/home" />
					</Switch>
					 
					
					</HashRouter>	
			</div>
		);
	}
}
