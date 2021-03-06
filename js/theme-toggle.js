const themes = document.getElementsByClassName('theme');
for(let i =0; i <themes.length; i++){
    themes[i].addEventListener('click', changeTheme);
}


function changeTheme(ev) {
    //change color variable
    let colorTheme = ev.target.id;
    // set data-theme to new theme
    document.documentElement.setAttribute('data-theme', colorTheme);
    
    //set backgrounds of all theme indicators to inherit
        for(let i =0; i <themes.length; i++){
        themes[i].style.setProperty('background-color',  'inherit');
    }
    //set position of indicator dot
    let dot = document.getElementById(colorTheme);
    dot.style.setProperty('background-color', 'var(--equals-key');
    
}    