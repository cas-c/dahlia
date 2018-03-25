import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const convert = data => `[dohtml]<div class="appbox"> <img src="${data.icon}" class="apppic">
</*NOTE: below put your character's trainer class, meaning trainer, coordinator, breeder, or civilian*/>
<div class="cat0">${data.tclass}</div>
<div class="cat1">${data.name.toUpperCase()}</div>

<table class="app">
  <tr>
     <td class="app">${data.age}</TD>
     <td class="app">${data.birthday}</TD>
  </tr>
  <tr>
     <td class="app">${data.gender}</TD>
     <td class="app">${data.aff} ${data.rank === 'rank' ? '' : data.rank}</TD>
</*NOTE: affiliation means either anti-TR, neutral or a Team Rocket rank*/>
  </tr>
  <tr>
     <td class="app">${data.sexuality}</TD>
</*NOTE: below put your character's profession if they have one. if non applicable, you may put none or n/a. */>
     <td class="app">${data.occupation === 'occupation' ? 'N/A' : data.occupation}</TD>
  </tr>
</table> 
<div class="cat2">APPEARANCE • <div class="cat3">FACECLAIM: ${data.faceclaim} </div> </div>
${
    data['image one'] !== 'link for picture 1' ?
        `<table class="traits"><tr>
            <td class="header">pictures </TD>
            </*NOTE: At least one full length body picture is preferred, especially if you have a short or no appearance */>
            <td class="list"> <a href="${data['image one']}">one</a> <a href="${data['image two']}">two</a> <a href="${data['image three']}">three</a> </td>
        </tr>
</table> `
        : ''
}  
<p>${data.appearance}</p>
<div class="cat4">• PERSONALITY </div>
<table class="traits">
  <tr>
     <td class="header">positive </TD>
     <td class="list"> ${[data['positive trait 1'], data['positive trait 2'], data['positive trait 3'], data['positive trait 4'], data['positive trait 5']].join(', ')}</td>
  </tr>
  <tr>
     <td class="header">negative <br>
</td>
     <td class="list">${[data['negative trait 1'], data['negative trait 2'], data['negative trait 3'], data['negative trait 4'], data['negative trait 5']].join(', ')}
<br>
</td>
  </tr>
</table> 
<p>${data.personality}</p>


<div class="cat2">HISTORY •  </div>
<table class="traits">
  <tr>
     <td class="header">hometown </TD>
     <td class="list"> [i]${data.hometown}[/i]  </td>
  </tr>
</table> 
<p>${data.history}</p>

<div class="cat4">• POKEMON </div> <div class="pokemon">characters may start with 3 pokemon up to level 30. these pokemon cannot be bred, traded, or sold. if your character has a pokemon over level 20, they cannot get a starter from one of the labs.
<br></br>
[b]NICKNAME:[/b] name your pokemon goes by<br> 
[b]SPECIES:[/b] species of your pokemon <br>
[b]GENDER:[/b] gender of your pokemon <br>
[b]PERSONALITY:[/b] a full-length description of how they act. please use full sentences.<br>
[b]LEVEL:[/b] up to level 30<br>
[b]ATTACKS:[/b] up to 6 moves <br>
</div>
<div class="rpbox"> <div class="rptext">ABOUT THE RPER</div> 
[b]alias:[/b] ${data.alias}<br>
[b]gender:[/b] ${data['gender/Pronouns']}<br>
[b]age:[/b] ${data['your age']}<br>
[b]character number:[/b] ${data['character number']}<br>
[b]where did you find us?:[/b] ${data['where did you find us?']}<br>
</div>
</div>
<div class="jinwha">TEMPLATE © THE JINOA REGION </div>


<style type="text/css">.direcbox { width: 300px; background-color: #fff; border: 1px solid #000; } 
.directxt { font: 10px/95% arial; text-align: justify; padding: 3px; }
.xtratxt { width: 400px; font: 10px/95% arial; text-align: justify; }</style>[/dohtml]
                `;

const PostTemplate = ({ data }) => {
    const convertedData = convert(data);
    return (
      <div>
          <CopyToClipboard text={convertedData}>
              <button>copy to clipboard</button>
          </CopyToClipboard>
          <br />
          <textarea readOnly cols="120" rows="30" value={convertedData}>
          </textarea>
      </div>
    )
};

export default PostTemplate;
