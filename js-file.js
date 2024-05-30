

function darken(e){
    e.classList.add('square-hover');
}

function lighten(e){
    e.classList.remove('square-hover');
}

function color(e){
    e.style.backgroundColor = 'blue';
}

function assignSq(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(function(elem) {
        elem.addEventListener('mouseover', () => {
            darken(elem);
        });
        elem.addEventListener('mouseout', () => {
            lighten(elem);
        });
        elem.addEventListener('click', () => {
            color(elem);
        });
    });
}

function fillGrid() {
    let numberOfSq = Number(value.value);
    console.log(numberOfSq + `Hi`);
    grid.innerHTML = '';
    grid.style.maxWidth = numberOfSq*10 + `px`;
    console.log(numberOfSq*10 + `px`);


    for(i=0; i < numberOfSq*numberOfSq; i++){
        const newSq = document.createElement('div');
        newSq.classList.add('square');
        grid.appendChild(newSq);
    }
    assignSq();
}


const grid = document.querySelector('.grid');
const value = document.querySelector('.value');
const enter = document.querySelector('.enter');
const clear = document.querySelector('.clear');

assignSq();

enter.addEventListener('click', () => {
    fillGrid();
});

clear.addEventListener('click', () => {
    
});