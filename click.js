var buttons = document.querySelectorAll('button');
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openNewTab, false);
}

function openNewTab(event) {
   window.open(event.target.dataset.url, '_blank');
}
