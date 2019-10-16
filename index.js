(function () {
  'use strict';

  var imgObj = new Image();
  imgObj.src = 'http://i.scdn.co/image/ab67616d0000b273a41c47fc904538e3b0c328eb'
  imgObj.setAttribute('crossOrigin', '');
  var img = document.querySelector('img'),
      list = document.querySelector('ul'),
      section = document.querySelector('section'),
      paletteReady = false;
      imgObj.addEventListener('load', function() {
      if ( !paletteReady )
          getPalette();
  });
  
  if (!paletteReady)
      getPalette();
  
  function getPalette() {
      paletteReady = true;
      
      var vibrant = new Vibrant(img),
          swatches = vibrant.swatches(),
          listFragment = new DocumentFragment();
      
      for ( var swatch in swatches ) {
          if (swatches.hasOwnProperty(swatch) && swatches[swatch]) { 
              console.log(swatch, swatches[swatch].getHex());
              var li = document.createElement('li'),
                  p = document.createElement('p'),
                  small = document.createElement('small');
              
              p.textContent = swatches[swatch].getHex();
              p.style.color = swatches[swatch].getTitleTextColor();
              small.textContent = swatch;
              small.style.color = swatches[swatch].getBodyTextColor();
              li.style.backgroundColor = swatches[swatch].getHex();
              li.appendChild(p);
              li.appendChild(small);
              listFragment.appendChild(li);
          }
      }
      
      list.appendChild(listFragment);
      
      if (swatches['DarkVibrant']) {
          section.style.backgroundColor = swatches['DarkVibrant'].getHex();
      }
  }

  const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))


toDataURL('http://i.scdn.co/image/ab67616d0000b27336ccfbe26545732377ae36d2')
  .then(dataUrl => {
    console.log('RESULT:', dataUrl)
  })

} ());