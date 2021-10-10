function base_template() {
    return $(`
    <div class = "has-background-warning" id="root">
        <section id="header"> 
            <h1 class="title title is-1 has-text-centered"> Final Project Testing</h1>
        </section>
        <br>
        <section id="main_page">
            <div id="main_board">
            </div>
        </section>
    </div>
    `);
}
async function catfacts() {
    const result = await axios({
        method: 'get',
        url: 'https://cat-fact.herokuapp.com/facts',
        //withCredentials: true,
    });
    //console.log(result.data[0].text)
    //for(let i = 0; i < 5; i++){
      //  $('#main_board').append(result.data[i].text);  
    //}
    let x = Math.floor(Math.random() * 4) + 1;
    //console.log(result);
    $('#main_board').append(result.data[x].text);  
   
    
}
function display_catfact(){
    const cat_widget = $(`
        <div class="buttons is-centered">
            <button class="cat_button button is-link is-medium is-rounded">  Cat Button  </button>
            <br>
        </div>
    `);
    $('#main_board').append(cat_widget);  
}

//trying out trivia one

export async function Load() {
    let body = $('body');
    body.empty();
    body.append(base_template());

    catfacts()
    display_catfact();
    
    body.on('click', '.cat_button', catfacts);
    
}
$(document).ready(Load());