import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import OutputDisplay from './OutputDisplay';

const levels = Array.from(new Array(99), (v, i) => ({ value: (i + 1), label: (i + 1) }));

const levelToXPNeeded = level => 25 * (level + 3);

const calculate = (xpToAdd, currentLevel, luckyEgg, xpShare) => {
    let sharedXP = 0;
    if (xpShare) sharedXP = xpToAdd / 2;
    if (luckyEgg) xpToAdd = xpToAdd * 1.5;
    const xpToNextLevel = levelToXPNeeded(currentLevel);
    if (xpToAdd < xpToNextLevel) {
        return { nextLevel: currentLevel, remainingXP: xpToAdd, sharedXP };
    } else if (xpToAdd === xpToNextLevel) {
        return { nextLevel: currentLevel + 1, remainingXP: 0, sharedXP };
    }
    let remainingXP = xpToAdd - xpToNextLevel; // 50
    if (remainingXP < xpToNextLevel) {
        return { nextLevel: currentLevel + 1, remainingXP, sharedXP };
    } else {
        return calculate(remainingXP, currentLevel + 1);
    }
}

class Calculator extends React.Component {
    constructor() {
        super();
        console.log();
        this.state = {
            level: '',
            newXP: '',
            output: {
                remainingXP: '',
                nextLevel: ''
            },
            luckyEgg: false,
            xpShare: false
        }
    }
    updateLevel = (e) => {
        if (e === null) {
            this.setState({ level: '', output: { nextLevel: null }});
            return;
        }
        this.setState({ level: e.value, output: calculate(this.state.newXP, e.value, this.state.luckyEgg, this.state.xpShare) });
    }
    updateNewXP = (e) => {
        const newXP = parseInt(e.target.value, 10);
        if (isNaN(newXP)) {
            this.setState({ newXP: 0, output: calculate(0, this.state.level, this.state.luckyEgg, this.state.xpShare) });
            return;
        }
        this.setState({ newXP, output: calculate(newXP, this.state.level, this.state.luckyEgg, this.state.xpShare) });
    }
    updateLuckyEgg = (e) => {
        this.setState({ luckyEgg: e.target.checked, output: calculate(this.state.newXP, this.state.level, e.target.checked, this.state.xpShare) });
    }
    updateXPShare = (e) => {
        this.setState({ xpShare: e.target.checked, output: calculate(this.state.newXP, this.state.level, this.state.luckyEgg, e.target.checked) });
    }
    render() {
        return (
            <div className='calculator-container'>
                <div className='field'>
                    <label className='label'>Current Level</label>
                    <div className='control'>
                        <VirtualizedSelect
                            multi={false}
                            value={this.state.level}
                            options={levels}
                            onChange={this.updateLevel}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>New Experience</label>
                    <div className='control'>
                        <input className='input' type='text' value={this.state.newXP} onChange={this.updateNewXP} placeholder='Any whole number zero or above...' />
                    </div>
                </div>
                <div className='field'>
                    <div className='control'>
                        <label className='label'>
                            <input className='checkbox xpCheckbox' type='checkbox' value={this.state.luckyEgg} onChange={this.updateLuckyEgg} />
                            Lucky Egg
                        </label>
                    </div>
                </div>
                <div className='field'>
                    <div className='control'>
                        <label className='label'>
                            <input className='checkbox xpCheckbox' type='checkbox' value={this.state.xpShare} onChange={this.updateXPShare} />
                            Experience Share
                        </label>
                    </div>
                </div>
                <br /><br />
                <OutputDisplay nextLevel={this.state.output.nextLevel} remainingXP={this.state.output.remainingXP} xpNeeded={levelToXPNeeded(this.state.output.nextLevel)} sharedXP={this.state.output.sharedXP}/>
            </div>
        )
    }
}


export default Calculator;
