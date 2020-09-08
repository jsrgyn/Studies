import React from 'react';

import "./styles.css";
/**
 * Uma aplicação
Usando propse state, podemos montar um pequeno aplicativo Todo. 
Este exemplo usa statepara rastrear a lista atual de itens, bem como o texto que o usuário inseriu. 
Embora os manipuladores de eventos pareçam ser processados ​​sequencialmente, eles serão coletados 
e implementados usando a delegação de eventos. 
 */
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
            <div className="CardTodo">
            <div className="Title"> 
            TODO 
            </div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                      id="new-todo"
                      onChange={this.handleChange}
                      value={this.state.text} 
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item =>
                    (<li key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        );
    }
}

export default TodoApp;