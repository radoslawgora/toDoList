import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import Header from "./Header/Header";

class ToDo extends React.Component {
    state = {
        elements: [
            { id: '1', isCompleted: false, title: 'Wstawić pranie'},
            { id: '2', isCompleted: true, title: 'Zrobić zakupy'}
        ],
        inputValue: ''
    }

    markCompleted(id) {
        const index = this.state.elements.findIndex(x => x.id == id);
        const newElements = this.state.elements;
        newElements[index].isCompleted = true;

        this.setState({ elements: newElements });
    }

    addItem() {
        
        if(this.state.inputValue.length > 0) {
        const item = {
            id: Math.random(),
            title: this.state.inputValue
        }

        const newElements = [item, ...this.state.elements];
        this.setState({ elements: newElements });
        this.setState({ inputValue: ''})
        }
    }

    inputHandler(event) {
        const newValue = event.target.value; 
        this.setState({ inputValue: newValue })
    }
    render() {

        const elements = this.state.elements.map(e => {
            return <ToDoItem element={e} markClicked={this.markCompleted.bind(this)} />
        });

        return (
            <div className="wrapper">
                <div className="header">
                    <Header />
                    <div className="add_wrapper">
                        <input type="text" value={this.state.inputValue} maxLength={33} onChange={this.inputHandler.bind(this)} />
                        <button onClick={this.addItem.bind(this )}>Add</button>
                    </div>
                </div>
                <div className="elementsList">
                    {elements}
                </div>
            </div>
 
        );
      }
}

export default ToDo;

//W inpucie ustaw limit do