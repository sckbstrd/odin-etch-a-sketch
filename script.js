const main = document.getElementById('main');
const colorPicker = document.getElementById('colorpicker');


// Deep periwinkle and soft lilac
// Hex codes: #735DA5, #D3C5E5
// https://webflow.com/blog/best-color-combinations

let defaultColor = '#735DA5';
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);

colorPicker.value = defaultColor;


function changeColor() {root.style.setProperty('--colorpick', colorPicker.value);}

colorPicker.addEventListener('change', changeColor);

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

 
main.addEventListener('click', function handleClick(event) {
    if (event.target.className == 'griddiv'){
        event.target.style.backgroundColor=colorPicker.value;
    }
});

main.addEventListener('contextmenu', function handleClick(event) {
    event.preventDefault();
    if (event.target.className == 'griddiv'){event.target.style.backgroundColor = 'white';}
});
