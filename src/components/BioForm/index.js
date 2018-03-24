import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const toOpt = x => <option key={x} value={x}>{x}</option>;
const tclassOptions = () => ['trainer', 'coordinator', 'civilian'].map(toOpt);
const affiliationOptions = () => ['neutral', 'team rocket'].map(toOpt);

class BioForm extends React.Component {
    constructor() {
        super();
        this.state = {
            form: {
                age: '',
                name: '',
                tclass: '',
                birthday: '',
                aff: '',
                gender: '',
                sexuality: '',
                occupation: '',
                rank: ''
            },
            counts: {}
        };
    }
    
    toSimpleField = (x, y) => (
        <div className='field'>
            <label className='label' style={{ textTransform: 'capitalize' }}>{x}</label>
            <div className='control'>
                <input
                    className='input'
                    type='text'
                    placeholder={y ? y : x}
                    value={this.state.form[x]}
                    onChange={e => this.inputChanged(e, x)}
                />
            </div>
        </div>
    );

    toLargeField = (x, y) => (
        <div className='field'>
            <label className='label' style={{ textTransform: 'capitalize' }}>
                {x}
                {
                    this.state.counts[x] ?
                        <span style={{ float: 'right' }}>
                            ~{this.state.counts[x]} words
                        </span> :
                        null
                }
            </label>
            <div className='control'>
                <textarea
                    className='textarea'
                    type='textarea'
                    placeholder={y ? y : x}
                    value={this.state.form[x]}
                    onChange={e => this.largeInputChanged(e, x)}
                />
            </div>
        </div>
    )

    inputChanged = (e, f) => {
        this.setState({ form: { [f]: e.target.value }});
    };

    largeInputChanged = (e, f) => {
        const wcount = e.target.value.split(' ').length;
        this.setState({ counts: { [f]: wcount }});
        this.inputChanged(e, f);
    }

    dayChanged = bday => {
        console.log(`${bday.getMonth() + 1}/${bday.getDate()}`);
        this.setState({ form: { bday: `${bday.getMonth() + 1}/${bday.getDate()}` }});
    }

    render() {
        return (
            <div>
                <div className='columns' style={{ padding: '0 20%' }}>
                    <div className='column' style={{ textAlign: 'left', maxWidth: '30em' }}>
                        <h1 style={{ textAlign: 'right' }}>Basic Info</h1>
                        <hr />
                        { this.toSimpleField('name', 'first last') }
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
                        { this.toSimpleField('birthday') }
                        { this.toSimpleField('gender') }
                        { this.toSimpleField('sexuality') }
                        { this.toSimpleField('occupation') }
                        <div className='field'>
                            <label className='label'>Affiliation</label>
                            <div className='control'>
                                <div className='select'>
                                    <select
                                        value={this.state.form.tclass}
                                        onChange={e => this.inputChanged(e, 'aff')}
                                    >
                                        { affiliationOptions() }
                                    </select>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.form.aff === 'team rocket' ?
                                this.toSimpleField('rank') :
                                null
                        }
{/*                        <div className='field'>
                            <label className='label'>Birthday</label>
                            <div className='control'>
                                <DayPickerInput 
                                    component={
                                        <input
                                            className='input'
                                            type='text'
                                            placeholder={'Birthday'}
                                            value={this.state.form['bday']}
                                            onChange={e => this.inputChanged(e, 'bday')}
                                        />
                                    } 
                                    onDayChange={this.dayChanged} 
                                />
                            </div>
                        </div>*/}
                        { /* page 2? */ }
                        <h1 style={{ textAlign: 'right' }}>Appearance</h1>
                        <hr />

                        { this.toSimpleField('faceclaim', 'character, series') }

                        { this.toSimpleField('image one', 'try and include at least one full body picture') }
                        { this.toSimpleField('image two', 'non imgur links please') }
                        { this.toSimpleField('image three', 'with three pictures, no extra appearance info needed') }
                        { this.toLargeField('appearance', 'if you do not have a faceclaim or do not have three photos, write at least 300 words.')}

                        <h1 style={{ textAlign: 'right' }}>Personality</h1>
                        <hr />
                        { this.toSimpleField('positive trait 1') }
                        { this.toSimpleField('positive trait 2') }
                        { this.toSimpleField('positive trait 3') }
                        { this.toSimpleField('positive trait 4') }
                        { this.toSimpleField('positive trait 5') }
                        { this.toSimpleField('negative trait 1') }
                        { this.toSimpleField('negative trait 2') }
                        { this.toSimpleField('negative trait 3') }
                        { this.toSimpleField('negative trait 4') }
                        { this.toSimpleField('negative trait 5') }
                        { this.toLargeField('personality', 'elaborate on each trait here.  for more depth, you could expand your likes and dislikes, goals, relationships, etc.')}

                        <h1 style={{ textAlign: 'right' }}>History</h1>
                        <hr />
                        { this.toSimpleField('hometown', 'town, region') }
                        { this.toLargeField('history', 'information ranging from original region/hometown, from their birth to the present with all events that shaped their backstory and personality') }

                        <h1 style={{ textAlign: 'right' }}>Team</h1>
                        <hr />

                        <h1 style={{ textAlign: 'right' }}>About You</h1>
                        <hr />
                        { this.toSimpleField('alias', 'the name you go by') }
                        { this.toSimpleField('gender/Pronouns') }
                        { this.toSimpleField('your age', 'in years') }
                        { this.toSimpleField('character number', 'is this your first character? second? etc') }
                        { this.toSimpleField('where did you find us?', 'ad, affiliate, word of mouth?') }
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
