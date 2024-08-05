const main = document.getElementById('main');
const colorPicker = document.getElementById('colorpicker');


// Deep periwinkle and soft lilac
// Hex codes: #735DA5, #D3C5E5
// https://webflow.com/blog/best-color-combinations

let defaultColor = '#735DA5';

window.addEventListener("load", startup);

function startup() {
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("change", getColor, false);
    colorPicker.select();
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



function getColor(event) {
    return colorPicker.value;
}
  

main.addEventListener('click', function handleClick(event) {
    if (event.target.className == 'griddiv'){event.target.style.backgroundColor=getColor(event);}
});

main.addEventListener('contextmenu', function handleClick(event) {
    event.preventDefault();
    if (event.target.className == 'griddiv'){event.target.style.backgroundColor = 'white';}
});
