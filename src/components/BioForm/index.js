import React from 'react';

const toOpt = x => <option key={x} value={x}>{x}</option>;
const tclassOptions = () => ['trainer', 'coordinator', 'civilian'].map(toOpt);
const affiliationOptions = () => ['team rocket', 'neutral'].map(toOpt);

class BioForm extends React.Component {
    constructor() {
        super();
        this.state = {
            form: {
                age: '0',
                name: '',
                tclass: ''
            }
        };
    }
    
    toSimpleField = x => (
        <div className='field'>
            <label className='label' style={{ textTransform: 'capitalize' }}>{x}</label>
            <div className='control'>
                <input
                    className='input'
                    type='text'
                    placeholder={x}
                    value={this.state.form[x]}
                    onChange={e => this.inputChanged(e, x)}
                />
            </div>
        </div>
    );

    inputChanged = (e, f) => {
        this.setState({ form: { [f]: e.target.value }});
    };

    render() {
        return (
            <div>
                <div className='columns' style={{ padding: '0 20%' }}>
                    <div className='column' style={{ textAlign: 'left', maxWidth: '30em' }}>
                        { this.toSimpleField('name') }
                        <div className='field'>
                            <label className='label'>Trainer Class</label>
                            <div className='control'>
                                <div className='select'>
                                    <select
                                        value={this.state.form.tclass}
                                        onChange={e => this.inputChanged(e, 'tclass')}
                                    >
                                        { tclassOptions() }
                                    </select>
                                </div>
                            </div>
                        </div>
                        { this.toSimpleField('age') }
                    </div>
                    <div className='column'>
                      Second column
                    </div>
                </div>
            </div>            
        );
    }
}


export default BioForm;
