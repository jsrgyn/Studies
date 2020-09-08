import React from 'react';

import './styles.css';

/**
 * Um componente com estado
Além de obter dados de entrada (acessados ​​via this.props), um componente pode manter 
dados de estado interno (acessados ​​via this.state). Quando os dados de estado de um 
componente são alterados, a marcação renderizada será atualizada pela reinicialização render().
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="Card">
            <div className="Title"> 
            Timer 
            </div>
                <div className="Result">
                 Seconds: {this.state.seconds}
                </div>
            </div>
        )
    }
}

export default Timer;