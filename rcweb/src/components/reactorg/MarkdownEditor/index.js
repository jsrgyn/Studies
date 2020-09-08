import React from 'react';
import Remarkable from 'remarkable';

import './styles.css';

/**
 * Um componente que usa plug-ins externos
O React permite que você interaja com outras bibliotecas e 
estruturas. Este exemplo usa notável , uma biblioteca Markdown externa "remarkable-react", 
para converter o <textarea>valor de em tempo real.

yarn add remarkable-react
 */
class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, **world**!'};
    }

    handleChange(e) {
        this.setState({ value: e.target.value});
    }

    getRawMarkup() {
        return {__html: this.md.render(this.state.value)};
    }

    render() {
        return (
            <div className="CardMark">
            <div className="Title"> 
            MArdkown Editor 
            </div>
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">
                    Enter some markdown
                </label>
                <textarea
                  id="markdown-content"
                  onChange={this.handleChange}
                  defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div
                  className="content"
                  dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
            </div>
        );
    }
}

export default MarkdownEditor;