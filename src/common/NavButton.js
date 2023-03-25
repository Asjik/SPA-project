// NavButton.js

export function NavButton(text, componentFn, classes = ['btn']) {

  const button = document.createElement('button');
  button.setAttribute('class', classes);
  //button.classList.add(...classes);
  button.innerText = text;

  button.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', {
      detail: componentFn
    });

    document.body.dispatchEvent(navigationEvent);
  });

  return button;

}
