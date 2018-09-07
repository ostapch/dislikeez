const imagesURL = chrome.runtime.getURL('images/');
let iconChanged = false;

const init = () => {
  const svg = document.querySelectorAll('#top-level-buttons .force-icon-button svg')[1];

  if (!iconChanged && svg === undefined) {
    window.requestAnimationFrame(init);
  } else {
    const svgParent = svg.parentElement;
    svgParent.removeChild(svg);
    const img = document.createElement('img');
    img.style.height = '30px';
    img.setAttribute('src', `${imagesURL}ilyusha-32.png`);
    img.setAttribute('srcset', [32, 48, 128].reduce((prevValue, currentValue, currentIndex) => {
      return `${prevValue}${prevValue.length ? ', ' : ''}${imagesURL}ilyusha-${currentValue}.png ${currentIndex + 1}x`.trim();
    }, ''));
    svgParent.appendChild(img);
    iconChanged = true;
  }
};

window.requestAnimationFrame(init);
