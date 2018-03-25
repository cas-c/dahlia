import React from 'react';
import StylizedForm from './StylizedForm';
import PostTemplate from './PostTemplate';

import 'react-day-picker/lib/style.css';
import './index.css';

const toOpt = x => <option key={x} value={x}>{x}</option>;
const tclassOptions = () => ['trainer', 'coordinator', 'civilian', 'breeder'].map(toOpt);
const affiliationOptions = () => ['neutral', 'team rocket', 'anti-TR'].map(toOpt);

const defaultState = {
    icon: 'http://i.imgur.com/5Rcbl.png',
    tclass: 'trainer class',
    name: 'FIRST LAST',
    age: 'age',
    birthday: 'birthday',
    gender: 'gender',
    aff: 'affiliation',
    rank: 'rank',
    sexuality: 'sexuality',
    occupation: 'occupation',
    faceclaim: 'character, series',
    'image one': 'link for picture 1',
    'image two': 'link for picture 2',
    'image three': 'link for picture 3',
    appearance: "the pictures section is for pictures of your face claim. try to include at least one full body picture for reference. if you have at least three pictures of your face claim, you can skip the rest of the appearance section. if your character doesn't have a face claim, you can leave the pictures section blank.  300 word minimum.",
    'positive trait 1': 'positive trait 1',
    'positive trait 2': 'positive trait 2',
    'positive trait 3': 'positive trait 3',
    'positive trait 4': 'positive trait 4',
    'positive trait 5': 'positive trait 5',
    'negative trait 1': 'negative trait 1',
    'negative trait 2': 'negative trait 2',
    'negative trait 3': 'negative trait 3',
    'negative trait 4': 'negative trait 4',
    'negative trait 5': 'negative trait 5',
    personality: "elaborate on each positive and negative trait here. for even more depth, you could expand on your character's likes and dislikes, goals, interpersonal relationships with other people and pokemon, etc. 300 word minimum.",
    hometown: 'town, region',
    history: " your character can come from a canon pokemon region, a real world location, or they could've been born and raised in jinoa. your character's history should span from birth to the present and should include events that shaped both their backstory and their current personality. 300 word minimum",
    alias: 'name you go by',
    'gender/Pronouns': 'your gender, as well as your preferred pronouns',
    'your age': 'in years ',
    'character number': 'is this your first character? your second? ',
    'where did you find us?': 'was it an ad, affiliate, word of mouth?'
};

const cleanState = {
    icon: '',
    tclass: '',
    name: '',
    age: '',
    birthday: '',
    gender: '',
    aff: '',
    rank: '',
    sexuality: '',
    occupation: '',
    faceclaim: '',
    'image one': '',
    'image two': '',
    'image three': '',
    appearance: "",
    'positive trait 1': '',
    'positive trait 2': '',
    'positive trait 3': '',
    'positive trait 4': '',
    'positive trait 5': '',
    'negative trait 1': '',
    'negative trait 2': '',
    'negative trait 3': '',
    'negative trait 4': '',
    'negative trait 5': '',
    personality: "",
    hometown: '',
    history: "",
    alias: '',
    'gender/Pronouns': '',
    'your age': '',
    'character number': '',
    'where did you find us?': ''
};

const checkForLocalStorage = () => {
    const data = JSON.parse(JSON.stringify(defaultState));
    Object.keys(data).forEach(d => { const ls = localStorage.getItem(d); data[d] = ls !== null ? ls : data[d] });
    return data;
}


class BioForm extends React.Component {
    constructor() {
        super();
        const form = checkForLocalStorage();
        console.log(form);
        this.state = {
            form,
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
                    placeholder={y || x}
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
                    placeholder={y || x}
                    value={this.state.form[x]}
                    onChange={e => this.largeInputChanged(e, x)}
                />
            </div>
        </div>
    )

    inputChanged = (e, f) => {
        const form = Object.assign({}, this.state.form, { [f]: e.target.value });
        this.setState({ form });
        localStorage.setItem(f, e.target.value);
    };

    largeInputChanged = (e, f) => {
        const wcount = e.target.value.split(' ').length;
        this.setState({ counts: { [f]: wcount }});
        this.inputChanged(e, f);
    }

    dayChanged = bday => {
        this.setState({ form: { bday: `${bday.getMonth() + 1}/${bday.getDate()}` }});
    }
    clear = () => {
        this.setState({ form: cleanState });
        Object.keys(cleanState).forEach(key => localStorage.setItem(key, ''));
    };
    reset = () => {
        this.setState({ form: defaultState });
        Object.keys(defaultState).forEach(key => localStorage.setItem(key, defaultState[key]));
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div style={{ padding: '10px' }}>
                    <button onClick={this.clear}>clear</button>
                    { ' ' }
                    <button onClick={this.reset}>reset</button>
                </div>
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
                                        value={this.state.form.aff}
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
                        { this.toSimpleField('icon') }
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
                    <div className="column">
                        <h1 style={{ textAlign: 'right' }}>(Semi Accurate) Preview</h1>
                        <hr />
                        <StylizedForm data={this.state.form}/>
                    </div>
                </div>
                <div>
                    <PostTemplate data={this.state.form}/>
                </div>
            </div>            
        );
    }
}


export default BioForm;
