import React from 'react';

class ExperienceFields extends React.Component {
    constructor() {
        super();
        this.state = {
            totalXP: 0,
            inputs: {
                0: 0
            }
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.totalXP !== prevState.totalXP) {
            this.props.updateNewXP(this.state.totalXP);
        }
    }
    update = (e, i) => {
        const newXP = parseInt(e.target.value, 10);
        const oldInputs = this.state.inputs;
        if (isNaN(newXP)) {
            const newInputs = Object.assign({}, oldInputs, { [i]: 0 });
            this.setState({ 
                inputs: newInputs,
                totalXP: Object.values(newInputs).reduce((a, c) => a + c, 0)
            });
            return;
        }
        const newInputs = Object.assign({}, oldInputs, { [i]: newXP });
        const totalXP = Object.values(newInputs).reduce((a, c) => a + c, 0);
        this.setState({
            inputs: newInputs,
            totalXP
        });
    }
    addField = e => {
        this.setState({ inputs: Object.assign({}, this.state.inputs, { [Object.keys(this.state.inputs).length]: 0 }) })
    }
    render() {
        return [
            <div className='control' key='control-input-fields'>
                {
                    Object.keys(this.state.inputs).map(i => (
                        <input key={`input-${i}`} className='input' type='text' value={this.state.inputs[i]} onChange={e => this.update(e, i)} placeholder='Any whole number zero or above...' />
                    ))
                }
                { Object.keys(this.state.inputs).length > 1 && <p className='total-counter'>total xp: {this.state.totalXP}</p> }
            </div>,
            <div onClick={this.addField} key='control-plus-sign' className='plus-sign'>+ click here if you need to add more xp +</div>
        ]
    }
}

export default ExperienceFields;
