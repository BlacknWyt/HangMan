import {useState, useEffect} from 'react'

//imported images
const pic1 = require('../images/state1.GIF')
const pic2 = require('../images/state2.GIF')
const pic3 = require('../images/state3.GIF')
const pic4 = require('../images/state4.GIF')
const pic5 = require('../images/state5.GIF')
const pic6 = require('../images/state6.GIF')
const pic7 = require('../images/state7.GIF')
const pic8 = require('../images/state8.GIF')
const pic9 = require('../images/state9.GIF')
const pic10 = require('../images/state10.gif')
const pic11 = require('../images/state11.GIF')

function HangMan(){
    let [input, inputUpdate] = useState()

    //synced states
    let [picProgress, picProgressUpdate] = useState(0)
    let [pic, picUpdate] = useState(pic1)
    let [tried, triedUpdate] = useState('')

    let [letters, lettersUpdate] = useState(['e', 's', 'p', 'i', 'o','e'])

    //this function picks a random word for the game
    function shufL(){
        //words available to play with in game
        let arr = [['e', 'x', 't', 'r', 'a', 'v', 'a', 'g', 'e', 'n', 't'],['e', 's', 'p', 'i', 'o', 'n', 'a', 'g', 'e'],
        ['e', 'x', 'h', 'i', 'b', 'i', 't', 'i', 'o', 'n'],['l', 'i', 'b', 'e', 'r', 't', 'a','r', 'i','a', 'n'],['p', 'o', 'e', 'm']];
        let ran = Math.floor((Math.random() * 5) + 1);
        if(ran === 1){
            arr = arr[0]
        }
        if(ran === 2){
            arr = arr[1]
        }
        if(ran === 3){
            arr = arr[2]
        }
        if(ran === 4){
            arr = arr[3]
        }
        if(ran === 5){
            arr = arr[4]
        }
        for(let i = 0; i < arr.length; i++){
            if(document.getElementById(i))
                document.getElementById(i).style.color = 'white';
        }
        lettersUpdate(arr);
        picProgressUpdate(0);
        triedUpdate('')
    }

    let change = (e) => {
        inputUpdate(e.currentTarget.value)
    }

    //this function checks if the input value is in the word..if it is it will be output for the user to see else the player will be one step closer to  losing 
    let check = (letter) => {
        //if the hanged man reaches stage 11 the player loses
        //and the game is restart
        if(picProgress === 10){
            alert('Sorry thats game over..Restarting game..')
            shufL();
            return;
        }
        let checkLetter = letter.toLowerCase();

        triedUpdate(tried +" " + checkLetter);
        //this loop checks if the input letter is in the word
        let word = false;
        for(let a=0; a < letters.length; a++){
            let letr = letters[a].toLowerCase();
            if(checkLetter === letr){
                document.getElementById(a).style.color = 'black';
                document.getElementById('inp').value = '';
                word = true;
            }
        }
        //if the loop finishes and word does not = true then a level is add to the hanged man
        if(word === false){
            picProgressUpdate(picProgress + 1);
            document.getElementById('inp').value = '';
        }
    }

    //this uses the corresponding picture for level
    useEffect(() => {
        if(picProgress === 0){
            picUpdate(pic1)
        }
        if(picProgress === 1){
            picUpdate(pic2)
        }
        if(picProgress === 2){
            picUpdate(pic3)
        }
        if(picProgress === 3){
            picUpdate(pic4)
        }
        if(picProgress === 4){
            picUpdate(pic5)
        }
        if(picProgress === 5){
            picUpdate(pic6)
        }
        if(picProgress === 6){
            picUpdate(pic7)
        }
        if(picProgress === 7){
            picUpdate(pic8)
        }
        if(picProgress === 8){
            picUpdate(pic9)
        }
        if(picProgress === 9){
            picUpdate(pic10)
        }
        if(picProgress === 10){
            picUpdate(pic11)
        }
    })

    return(
        <div style={{display:'grid', gridTemplateColumns:'20% 60% 20%',textAlign:'center',margin:'0', marginBottom:'0'}}>
            <div style={{backgroundColor:'lightblue'}}>
                <p>Letters tried: <br/> {tried}</p>
            </div>
            <div style={{marginTop:'30px', marginBottom:'30px'}}>
            <div>
              {
                <div style={{display:'block', textAlign:'center' }}>
                {
                letters.map((l, a = 0 + 1) =>
                  <p style={{borderBottom:'solid black 2px',display:'inline-block', marginLeft:'20px', marginRight:'20px'}} key={a}>
                  <input id={a} value={l} style={{textAlign:'center',width:'30px', fontWeight:'bolder', border:'none', color:'white',fontSize:'20px'}} placeholder={l} readOnly/></p>
                )
                }
                </div>
              }
            </div>
            <div>
                <img id='hangedman' src={pic} width='20%' alt='a'/>
            </div>
            <div>
              <input id='inp' maxLength='1' onChange={change}/>
              <button type='reset' onClick={() => check(input)}>Check</button>
            </div><br/>
            <div>
                <button onClick={() => shufL()}>Restart</button>
            </div>
            </div>
            <div style={{backgroundColor:'lightblue'}}></div>
        </div>
    )
}

export default HangMan;