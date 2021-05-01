function test(a, b) {
    return a * b;
}

//map function
var numbers= [1,2,3,4,5];
var doubled  = numbers.map(n => n * 2);
//console.log(doubled)

//filter
var numbers = [1,2,3,4,5];
var greaterThan2 = numbers.filter(n => n > 2);
//console.log(greaterThan2)

//reduce
var numbers = [1,2,3,4,5];
var initialVal = 0;
let result=numbers.reduce((accu, val) => val + accu , initialVal);
//console.log(result)

function f() {
   // console.log("I’m a tarheel born");
    return () => {
    //  console.log("I’m a tarheel bred");
    };
  }
  //setTimeout(f, 0);
//console.log("and when I die");
  //setTimeout(f(), 0);
//console.log("I’m a tarheel dead");

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result_1 = words.filter(word => word.length = 6 && word.length == 5);
//console.log(result_1);

window.addEventListener('load', async () => {
    const item_ids = await getItemIDs();
    let item_views = [];
    for (let i = 0; i < item_ids.length; i++) {
      const item_info = await getItemInfo(item_ids[i]);
      const item_view = createItemView(item_info);
      item_views.push(item_view);
      item_views[i].addEventListener('click', () => {
        item_views[i].toggleMetaInformation();
      });
    }
  });
  
  const getItemIDs = async () => {
    const result = await fetch('https://backend/item');
    return await result.json();
  }