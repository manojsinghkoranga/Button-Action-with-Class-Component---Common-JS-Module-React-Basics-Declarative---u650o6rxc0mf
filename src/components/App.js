import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			doRenderPTag: false,
		}
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick () {
		this.setState({doRenderPTag: true});
	}

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.handleClick}>Render P tag</button>
				{this.state.doRenderPTag && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    		</div>
    	);
    }
}

export default App;

