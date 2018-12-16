import React, { Component } from 'react';
import Card from './Card';
import { DropTarget } from 'react-dnd';
const update = require('immutability-helper');
 
class Container extends Component {
 
	constructor(props) {
		super(props);		
		this.state = { 
            cards: ['Just drag us'],
            inputValue: '',
            empty: true
        };
	}
 
	pushCard(card) {
		this.setState(update(this.state, {
			cards: {
				$push: [ card ]
			}
		}));
	}
 
	removeCard(index) {	
		this.setState(update(this.state, {
			cards: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}
 
	moveCard(dragIndex, hoverIndex) {
		const { cards } = this.state;		
		const dragCard = cards[dragIndex];
 
		this.setState(update(this.state, {
			cards: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard]
				]
			}
		}));
    }

    changeValue(value) {
        if (value !== '') {
            this.setState({
            inputValue: value,
            empty: false
            })
        } else {
        this.setState({
            inputValue: value,
            empty: true
        })
        }
    }

    addTask(task) {
        let taskArr = this.state.cards;

        taskArr.push(task);

        this.setState({
            cards: taskArr,
            inputValue: '',
            empty: true
        })
    }

    removeTask(task) {
        task.style.display = 'none';
    }
    
    render() {
		const { cards } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
 
		return connectDropTarget(
			<div className={this.props.className}>
                <img src={this.props.avatar}/>
                <h2>{this.props.text}</h2>
                <ul>
                    {cards.map((card, i) => {
                        return (
                            <Card 
                                key={card}
                                index={i}
                                listId={this.props.id}
                                card={card}														
                                removeCard={this.removeCard.bind(this)}
                                moveCard={this.moveCard.bind(this)} 
                                avatar={this.props.avatar}
                                color={this.props.color}
                                removeTask={this.removeTask} />
                        );
                    })}
                </ul>
                <form>
                <input 
                    type='text'
                    value={this.state.inputValue}
                    onChange={e => this.changeValue(e.target.value)}
                />
                <button disabled={this.state.empty} 
                        className="add-button" 
                        onClick={() => this.addTask(this.state.inputValue)}> Add </button>
                </form>
			</div>
		);
  }
}

const cardTarget = {
	drop(props, monitor, component ) {
		const { id } = props;
		const sourceObj = monitor.getItem();		
		if ( id !== sourceObj.listId ) component.pushCard(sourceObj.card);
		return {
			listId: id
		};
	}
}

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);