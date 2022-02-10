// exploring js
// first test
const jsTesting = document.getElementById('btn-body-color');
jsTesting.onclick = makeTomato;
function makeTomato(){
    document.body.style.backgroundColor = 'lightgreen';
}
// second test
document.getElementById('btn-main-color').addEventListener('click', function(){
    document.getElementById('main-section').style.backgroundColor = 'orange';
})

// task 2


// task 3
document.getElementById('backpack').style.backgroundColor = 'tomato';

// task 4
document.getElementsByClassName('card').style.borderRadius = '30px';
// doesn't working

// task 5
function clickMeOnceMore(){
    console.log('lets explore js')
}