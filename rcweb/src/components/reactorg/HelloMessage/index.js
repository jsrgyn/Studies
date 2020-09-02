import React from 'react';

import './styles.css'

/**
 * Um componente simples
Os componentes React implementam um render()método que obtém dados de entrada e 
retorna o que exibir. Este exemplo usa uma sintaxe semelhante a XML chamada JSX. 
Os dados de entrada que são passados ​​para o componente podem ser acessados render()via this.props.

JSX é opcional e não é obrigatório para usar o React. Experimente o Babel REPL 
para ver o código JavaScript bruto produzido pela etapa de compilação JSX. 
 */

class HelloMessage extends React.Component {
    render() {
        return(
            <div className="Card">
            <div className="Title"> 
            Title 
            </div>
                <div className="Result">
                Hello {this.props.name}
                </div>
            </div>
        );
    }

}

export default HelloMessage;