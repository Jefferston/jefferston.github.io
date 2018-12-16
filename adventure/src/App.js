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
				<Container id={1}  className={"container first"} text={"Jake"} avatar={java} color={'yellow'}/>
				<Container id={2}  className={"container chat"} text={"Princesssssss"} avatar={bava} color={'pink'}/>
				<Container id={3}  className={"container last"} text={"Finn"} avatar={fava} color={'aqua'}/>
			</main>
		);
	}
}
 
export default DragDropContext(HTML5Backend)(App);