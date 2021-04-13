const typewrite = document.querySelector("input[name='Typing']");
const place = document.getElementById("a");

typewrite.onchange = () => {
    document.getElementById("a").innerHTML = typewrite.value;
    place.style.color = 'white';

    if (place.innerHTML === '') {
        place.innerHTML = 'Enter message...';
    }
    if (place.innerHTML === 'Enter message...') {
        place.style.color = 'grey';
    }
}
typewrite.onblur = () => {
    typewrite.style.display = 'none';
}

document.addEventListener('keydown', e => {
  switch (e.code) {
    case "Enter":
      typewrite.style.display = 'block';
      typewrite.focus();
      break;
  }
})

place.style.color = 'grey';