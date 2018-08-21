var imagesURL = chrome.runtime.getURL("images/");
const cssObjectModel = {
  '#top-level-buttons .force-icon-button button': {
    background: 'url(' + imagesURL + 'ilyusha32.png)',
  }
};

function cssObjectModelToCssString(cssObjectModel) {
  var cssString = '';
  for (rule in cssObjectModel) {
    cssString += rule + '{'
    for (key in cssObjectModel[rule]) {
      cssString += key + ':' + cssObjectModel[rule][key] + ';'
    }
    cssString += '}'
  }
  return cssString;
}

setTimeout(function() {
  var svg = document.querySelector('#top-level-buttons .force-icon-button svg');
  console.log(svg);
  var svgParent = svg.parentElement;
  svgParent.removeChild(svg);
  var img = document.createElement('img');
  img.setAttribute('src', imagesURL + 'ilyusha48.png');
  svgParent.appendChild(img);
}, 3000);


function init() {
  var css = cssObjectModelToCssString(cssObjectModel);
  console.log(css);
  var extensionStyles = document.createElement('style');
  extensionStyles.innerText = css;
  document.head.appendChild(extensionStyles);
}

init();
