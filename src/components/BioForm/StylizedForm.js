import React from 'react';

const StylizedForm = ({ data }) => (
    <div className="appbox">
        <img src={data.icon} className="apppic" />
        <div className="cat0">{data.tclass}</div>
        <div className="cat1">FIRST LAST</div>
        <table className="app">
            <tbody>
                <tr>
                    <td className="app">{data.age}</td>
                    <td className="app">{data.bday}</td>
                </tr>
                <tr>
                    <td className="app">{data.gender}</td>
                    <td className="app">{data.aff}</td>
                </tr>
                <tr>
                    <td className="app">{data.sexuality} </td>
                    <td className="app">{data.occupation}</td>
                </tr>
            </tbody>
        </table> 
        <div className="cat2">APPEARANCE • 
            <div className="cat3">FACECLAIM: {data.faceclaim} </div>
        </div>
        <table className="traits">
            <tbody>
                <tr>
                    <td className="header">pictures </td>
                    <td className="list">
                        <a href={data['image one']}>one</a> { ' ' }
                        <a href={data['image two']}>two</a> { ' ' }
                        <a href={data['image three']}>three</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>{data.appearance}</p>
        <div className="cat4">• PERSONALITY </div>
        <table className="traits">
            <tbody>
                <tr>
                    <td className="header">positive </td>
                    <td className="list"> 
                        {data['positive trait 1']} { ' ' }
                        {data['positive trait 2']} { ' ' }
                        {data['positive trait 3']} { ' ' }
                        {data['positive trait 4']} { ' ' }
                        {data['positive trait 5']} { ' ' }
                    </td>
                </tr>
                <tr>
                    <td className="header">negative <br /></td>
                    <td className="list">
                        {data['negative trait 1']} { ' ' }
                        {data['negative trait 2']} { ' ' }
                        {data['negative trait 3']} { ' ' }
                        {data['negative trait 4']} { ' ' }
                        {data['negative trait 5']} { ' ' }
                    </td>
                </tr>
            </tbody>
        </table> 
        <p>{data.personality}</p>
        <div className="cat2">HISTORY •  </div>
         <table className="traits">
             <tbody>
                 <tr>
                     <td className="header">hometown </td>
                     <td className="list"> <i>{data.hometown}</i> </td>
                 </tr>
             </tbody>
         </table>
         <p>{data.history}</p>
        <div className="cat4">• POKEMON </div>
        <div className="pokemon">characters may start with 3 pokemon up to level 30. these pokemon cannot be bred, traded, or sold. if your character has a pokemon over level 20, they cannot get a starter from one of the labs.
            <br /><br />
            <b>NICKNAME:</b> name your pokemon goes by<br /> 
            <b>SPECIES:</b> species of your pokemon <br />
            <b>GENDER:</b> gender of your pokemon <br />
            <b>PERSONALITY:</b> a full-length description of how they act. please use full sentences.<br />
            <b>LEVEL:</b> up to level 30<br />
            <b>ATTACKS:</b> up to 6 moves <br />
        </div>
        <div className="rpbox"> <div className="rptext">ABOUT THE RPER</div> 
            <b>alias:</b> {data.alias}<br />
            <b>gender:</b> {data['gender/Pronouns']}<br />
            <b>age:</b> {data['your age']} <br />
            <b>character number:</b> {data['character number']}<br />
            <b>where did you find us?:</b> {data['where did you find us?']}<br />
        </div>
    </div>
);

StylizedForm.defaultProps = {
    data: {
        tclass: 'TRAINER CLASS',
        icon: 'http://i.imgur.com/5Rcbl.png',
        age: 'age',
        bday: 'birthday',
        gender: 'gender',
        [`gender/Pronouns`]: 'your gender, as well as your preferred pronouns'
    }
}

export default StylizedForm;
