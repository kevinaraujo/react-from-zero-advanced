import React, { Component } from 'react';
import Items from './../Items';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);
    }

    addItem(e) {

        var state = this.state;

        if (this._taskInput.value !== '') {
            let newItem = {
                text: this._taskInput.value,
                key: Date.now()
            };

            this.setState({task: '', items: [...state.items, newItem]});
        }
        e.preventDefault();
    }

    delete(key) {
        let items = this.state.items.filter((item, index) => {
            return item.key !== key;
        });

        this.setState({ items: items});
    }

    render() {
        
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" name="task" placeholder="New task"
                        value={this.state.task}
                        ref={ (e) => this._taskInput = e }
                        onChange={(e) => this.setState({ task: e.target.value })}/>

                    <button type="submit">
                        Adicionar
                    </button>
                </form>
                <Items items={this.state.items} delete={this.delete} />
            </div>
        );
    }
}

export default TodoList;