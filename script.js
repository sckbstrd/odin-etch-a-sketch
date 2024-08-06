const main = document.getElementById('main');
const colorPicker = document.getElementById('colorpicker');
const checkBox = document.getElementById('checkbox');
const checkBox2 = document.getElementById('checkbox2');
const label = document.querySelector('label');


// Deep periwinkle and soft lilac
// Hex codes: #735DA5, #D3C5E5
// https://webflow.com/blog/best-color-combinations


let defaultColor = '#735DA5';
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);

colorPicker.value = defaultColor;
root.style.setProperty('--colorpick', colorPicker.value)

function changeColor() {root.style.setProperty('--colorpick', colorPicker.value);}

colorPicker.addEventListener('change', changeColor);

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const hexRed = red.toString(16).padStart(2, '0');
    const hexGreen = green.toString(16).padStart(2, '0');
    const hexBlue = blue.toString(16).padStart(2, '0');
  
    const rgb = `#${hexRed}${hexGreen}${hexBlue}`;
    return rgb;
}

let elementExists = document.getElementsByClassName('griddiv')[0];

if (elementExists == undefined){
for (let i=0; i<16; i++) {
    const oneRow = document.createElement('div')
    oneRow.setAttribute('class', 'row');
    for (let i=0; i<16; i++) {
        const griddiv = document.createElement('div');
        griddiv.setAttribute('class', 'griddiv');
        oneRow.appendChild(griddiv);
    }
    main.appendChild(oneRow);
	}
}


main.addEventListener('click', handleClick);
main.addEventListener('contextmenu', handleRightClick);


function handleClick(event) {
    if (event.target.className == 'griddiv' && checkBox.checked) {
        colorPicker.value = getRandomColor();
        label.style.backgroundColor = colorPicker.value;
    }
    root.style.setProperty('--colorpick', colorPicker.value);
    event.target.style.backgroundColor = colorPicker.value;
}

function handleRightClick(event) {
    event.preventDefault();
    if (event.target.className == 'griddiv'){event.target.style.backgroundColor = 'white';}
}

function changeMode() {
    if (checkBox2.checked){
        main.removeEventListener('click',  handleClick);
        main.addEventListener('mouseout', handleClick);    
    } else {
        main.removeEventListener('mouseout',  handleClick);
        main.addEventListener('click', handleClick);    
    }
}

checkBox2.addEventListener('change', changeMode);



