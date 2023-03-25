// Button.js

export function Button(text, onClickCallback, classes = ['btn']) {

  const button = document.createElement('button');
  //button.classList.add('btn');
  button.setAttribute('class', classes);
  button.innerText = text;

  button.addEventListener('click', onClickCallback);

  return button;
  
}
