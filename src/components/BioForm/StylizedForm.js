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
                    <td className="app">affiliation</td>
                </tr>
                <tr>
                    <td className="app">sexuality </td>
                    <td className="app">occupation</td>
                </tr>
            </tbody>
        </table> 
        <div className="cat2">APPEARANCE • 
            <div className="cat3">FACECLAIM: CHARACTER, SERIES </div>
        </div>
        <table className="traits">
            <tbody>
                <tr>
                    <td className="header">pictures </td>
                    <td className="list">
                        <a href="LINK FOR PIC #1">one</a>
                        <a href="LINK FOR PIC #2">two</a>
                        <a href="LINK FOR PIC #3">three</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <p> text </p>
        <div className="cat4">• PERSONALITY </div>
        <table className="traits">
            <tbody>
                <tr>
                    <td className="header">positive </td>
                    <td className="list"> positive trait 1, positive 2, positive 3, positive 4, positive 5</td>
                </tr>
                <tr>
                    <td className="header">negative <br /></td>
                    <td className="list">negative trait 1, negative 2, negative 3, negative 4, negative 5</td>
                </tr>
            </tbody>
        </table> 
        <p>text</p>
        <div className="cat2">HISTORY •  </div>
         <table className="traits">
             <tbody>
                 <tr>
                     <td className="header">hometown </td>
                     <td className="list"> <i>town,</i> region  </td>
                 </tr>
             </tbody>
         </table>
         <p>text</p>
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
            <b>alias:</b> name you go by<br />
            <b>gender:</b> your gender, as well as your preferred pronouns <br />
            <b>age:</b> in years <br />
            <b>character number:</b> is this your first character? your second? <br />
            <b>where did you find us?:</b> was it an ad, affiliate, word of mouth?<br />
        </div>
    </div>
);

StylizedForm.defaultProps = {
    data: {
        tclass: 'TRAINER CLASS',
        icon: 'http://i.imgur.com/5Rcbl.png',
        age: 'age',
        bday: 'birthday',
        gender: 'gender'
    }
}

export default StylizedForm;
