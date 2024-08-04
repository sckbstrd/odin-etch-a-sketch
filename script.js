const main = document.querySelector('div');



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




main.addEventListener('click', function handleClick(event) {
    if (event.target.className == 'griddiv'){event.target.style.backgroundColor = 'red';}
    

});
