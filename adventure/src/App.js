import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import fava from './images/finn.png';
import bava from './images/buble.png';
import java from './images/jake.png';
import Container from './Container';
 
class App extends Component {
 
	render() {
 
		return (
			<main>
				<Container id={1}  className={"container first"} text={"Jake"} avatar={"https://68.media.tumblr.com/avatar_1f7bdbbeb59c_128.png"} color={'yellow'}/>
				<Container id={2}  className={"container chat"} text={"Princesssssss"} avatar={"https://68.media.tumblr.com/avatar_ec98529441c4_128.png"} color={'pink'}/>
				<Container id={3}  className={"container last"} text={"Finn"} avatar={"https://68.media.tumblr.com/avatar_09404f3287c6_128.png"} color={'aqua'}/>
			</main>
		);
	}
}
 
export default DragDropContext(HTML5Backend)(App);