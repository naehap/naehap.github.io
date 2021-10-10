//import { data } from "jquery";

function title_template() {
    return $(`
    <div class = "has-background-warning" id="root">
        <h1 class="title title is-1 has-text-centered"> TRIVIA Bonanza Game! </h1>
        <div id="main_board"></div>
    </div>
    `);
}
//adding a part about which game do you want to play?
function which_game(){
    return $(`
    <div class = "subtitle" id="root">
        <h2 class="sub_title title is-2 has-text-centered"> Get Excited!! </h2>
        <div id="main_board"></div>
    </div>
    <img src = "images/lightbulb.jpeg" width = "100" style="float:left";/>
        <br>
        <h3 class = "compgame"><strong><u>WHO IS READY for some trivia!!! The trivia below is randomly generated</u></strong></h3>
        <br>
        <br>
    <img src = "images/lightbulb.jpeg" width = "100" style="float:left";/>
    <br>
        <h3 class = "compgame"><strong>You can get started! You Win by answering 5! questions correctly. Press on the buttons below to select your answer</strong></h3>
        <br>
        
    `);
}
//personalizing game
function custom_game(){
return $(`
<br>
<br>
<br>
<div class = "customize form"  id="root">
    <h2 class="personalize"> Personalize Your Game Here: </h2>
</div>  
`);
}
function dropdown_menu(){
    return $(`
<div class="dropdown">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Dropdown button</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
  <div class="dropdown-content">
    <a href="#" class="dropdown-item">
      Dropdown item
    </a>
    <a class="dropdown-item">
      Other dropdown item
    </a>
    <a href="#" class="dropdown-item">
      Active dropdown item
    </a>
    <a href="#" class="dropdown-item">
      Other dropdown item
    </a>
  </div>
</div>
</div>
`);
}
function select_dropdown(){
    return $(`
<div class = "custom">
  <h2 class="personalize"> Category: </h2>
  <div class="select is-primary">
    <select id ="select1">
      <option value= "default">Pick One of the Below:</option>
      <option value= "9">General Knowledge</option>
      <option value= "12">Music</option>
      <option value= "14">TV</option>
      <option value= "17">Science & Nature</option>
      <option value= "27">Animals</option>
      <option value= "25">Art</option>
      <option value= "22">Geography</option>
    </select>
  </div>

  <h2 class="personalize"> Difficulty Level: </h2>
  <div class="select is-primary">
    <select id ="select2">
      <option>Pick One of the Below:</option>
      <option value= "123">Easy</option>
      <option value= "medium">Medium</option>
      <option value= "hard">Hard</option>
    </select>
  </div>
  <div class="is-primary">
    <button class="startquiz">Start</button>
  </div>
</div>
`); 
}
function select_dropdowntest(){
  return $(`
  <div class="buttonalign">
    <p class = "compgame has-background-grey-lighter" id="category"></p>
    <br>
    <h1 class = "compgame has-background-primary" id = "question"></h1>
    <br>
    <button class="button is-primary is-light is-large is-rounded" id = "mc1"></button>
    <button class="button is-primary is-light is-large is-rounded" id = "mc2"></button>
    <button class="button is-primary is-light is-large is-rounded" id = "mc3"></button>
    <button class="button is-primary is-light is-large is-rounded" id = "mc4"></button>
    <br>
    <br>
    <button class="button is-danger is-small is-rounded" id = "refresh">Press here to start game over!</button>
    <br>
  </div>
`);
}
async function trivia_test() {
    const result = await axios({
        method: 'get',
        url: 'https://opentdb.com/api.php?amount=1',
    });
  
     //console.log(result.data.results[0])
}
//export async function test() {
 // document.getElementById("select1").onchange=function() { 
 //   var category = this.value; 
    //console.log(category)
 // }
//}
//trying out trivia one
export async function triviaAPI(){
  let response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
  //console.log(response);
  let data = await response.json();
  //console.log(data);
  //console.log(data.results[0].category);
  //console.log(data.results[0].incorrect_answers[0]);
  useApiData(data);
}
export async function catAPI(){
  let catfact = await fetch('https://catfact.ninja/fact');
  //console.log(catfact);
  let data = await catfact.json();
  let fact = data.fact;
  useCatdata(fact);
}
export async function dogAPI(){
  let dogpic = await fetch('https://dog.ceo/api/breeds/image/random');
  let data = await dogpic.json();
  let fact = data.message;
  //console.log(fact);
  useDogdata(fact);
}
export async function boredAPI(){
  let bored = await fetch('https://www.boredapi.com/api/activity/');
  let data = await bored.json();
  let fact = data.activity;
  //console.log(fact);
  useBoreddata(fact)
  //let data = await bored.json();
  //let fact = data.message;
  //console.log(fact);
  //useDogdata(fact);
}
export async function jokeAPI(){
  let joke = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
  let fact = await joke.json();
  useJokedata(fact);
  console.log(fact)
}
export async function useApiData(data){
  document.querySelector("#category").innerHTML =  `The category of this question is: ${data.results[0].category} and the question difficulty is ${data.results[0].difficulty}`;
  //document.querySelector("#difficulty").innerHTML =  `This question difficulty is: ${data.results[0].difficulty}`;
  document.querySelector("#question").innerHTML =  `The Question Is: ${data.results[0].question}`;
  document.querySelector("#mc1").innerHTML =  `${data.results[0].incorrect_answers[0]}`;
  document.querySelector("#mc2").innerHTML =  `${data.results[0].incorrect_answers[1]}`;
  document.querySelector("#mc3").innerHTML =  `${data.results[0].incorrect_answers[2]}`;
  document.querySelector("#mc4").innerHTML =  `${data.results[0].correct_answer}`;
}
function correct_answer(){
  let correctButton = document.querySelector("#mc4");
  let i = 0;
  correctButton.addEventListener("click",()=>{
    alert("Yay! That is correct!");
  i = i + 1;
  if (i== 5){
    alert("This game is now over, you WON! Congrats on getting 5 questions correct. You can keep playing for fun:)");
  }
    triviaAPI();
  })
}

function incorrect_answer(){
  let incorrectButton1 = document.querySelector("#mc1");
  let incorrectButton2 = document.querySelector("#mc2");
  let incorrectButton3 = document.querySelector("#mc3");
  incorrectButton1.addEventListener("click",()=>{
    confirm("Oh NO:( That is incorrect, press cancel to try again, OK to go to the next quesiton");
  })
  incorrectButton2.addEventListener("click",()=>{
    confirm("Oh NO:( That is incorrect, press cancel to try again, OK to go to the next quesiton");
  })
  incorrectButton3.addEventListener("click",()=>{
    confirm("Oh NO:( That is incorrect, press cancel to try again, OK to go to the next quesiton");
  })
}
function refresh_page(){
  let refresh_page = document.querySelector("#refresh");
  refresh_page.addEventListener("click",()=>{
    location.reload();
  })
}
function catsetup(){
  return $(`
  <br>
  <div class="box div1 is-family-secondary" id="cat">
  </div>
  <div class = "box div1 vertical-align:top" id="bored">
  </div>
  <div class = "box div1" id="joke">
  </div>

`);
}
function dogsetup(){
  return $(`
  <br>
  <div class = "has-background-warning">
  <p>Here's a random dog pic below to cheer up your day!</p>
  <div class="box div2 is-family-secondary" id="dog"></div>
  </div>
`);
}
export async function useCatdata(fact){
  document.querySelector("#cat").innerHTML =  `Here's a fun fact about cats while you're here: <br> ${fact}`;
}
export async function useDogdata(fact){
  document.querySelector("#dog").innerHTML =  `<img src="${fact}">`;
}
export async function useBoreddata(fact){
  document.querySelector("#bored").innerHTML =  `Here's an activity you can do if you're bored: <br> ${fact}`;
}
export async function useJokedata(fact){
  if(fact.setup == undefined){
    document.querySelector("#joke").innerHTML =  `Here's an joke to make you smile:<br> ${fact.joke} `;
  }else{
    document.querySelector("#joke").innerHTML =  `Here's an joke to make you smile:<br> ${fact.setup} <br> ${fact.delivery} `;
  } 
  }
  
export async function Load() {
    let body = $('body');
    body.empty();
    body.append(title_template());
    body.append(which_game());
    //body.append(custom_game());
    trivia_test();
    //body.append(select_dropdown());
    body.append(select_dropdowntest());
    triviaAPI();
    catAPI();
    dogAPI();
    boredAPI();
    jokeAPI();
    correct_answer();
    incorrect_answer();
    refresh_page();
    body.append(catsetup());
    body.append(dogsetup());
    //for select dropdown menu

}
$(document).ready(Load());
