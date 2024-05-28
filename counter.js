export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function bajarPaginadelTodo() {
  const abajo = document.body.scrollHeight;
  window.scrollTo({ top: abajo, behavior: 'smooth' });
}

export function bajarPagina(idSection) {
  const section = document.getElementById(idSection);
  if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const middlePosition = sectionTop + (sectionHeight / 2) - (window.innerHeight / 2);
      window.scrollTo({ top: middlePosition, behavior: 'smooth' });
  }
}

export function toggleMoreButtons() {
  var moreButtons = document.querySelector('.more-buttons');
  moreButtons.classList.toggle('show');
}

document.addEventListener('click', function (event) {
  var moreButtons = document.querySelector('.more-buttons');
  var button = event.target.closest('.button-container button');
  if (!moreButtons.contains(event.target) && !button) {
      moreButtons.classList.remove('show');
  }
});

