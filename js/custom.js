// first test
const jsTesting = document.getElementById('btn-body-color');
jsTesting.onclick = makeTomato;
function makeTomato(){
    document.body.style.backgroundColor = 'tomato';
}
// second test
document.getElementById('btn-main-color').addEventListener('click', function(){
    document.getElementById('main-section').style.backgroundColor = 'orange';
})

// task 2

