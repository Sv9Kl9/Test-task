window.onload = function(){
fetch('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/772410430/dfaaee220c&width=640&height=360&autoplay=1&loop=1&autopause=0&controls=0&muted=1')
.then(response => response.json())
.then(vid => {
  let body = document.querySelector('body');
  let iframe = document.createElement('div');
  iframe.innerHTML = vid.html;
  body.append(iframe);
} )

fetch('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/772410499/dc0b01c09d&width=640&height=360&autoplay=1&loop=1&autopause=0&controls=0&muted=1')
.then(response => response.json())
.then(vid => {
  let body = document.querySelector('body');
  let iframe = document.createElement('div');
  iframe.innerHTML = vid.html;
  body.append(iframe);
} )
}

// fetch('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/772410430/dfaaee220c&width=640&height=360&autoplay=1&loop=1&autopause=0&controls=0&muted=1')
// .then(response => response.json())
// .then(vid => {
//   let body = document.querySelector('body')
//   let iframe = document.createElement('div')
//   iframe.innerHTML = vid.html
//   body.append(iframe)
//  
// } )

// fetch('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/772410499/dc0b01c09d&width=640&height=360&autoplay=1&loop=1&autopause=0&controls=0&muted=1')
// .then(response => response.json())
// .then(vid => {
//   let body = document.querySelector('body')
//   let iframe = document.createElement('div')
//   iframe.innerHTML = vid.html
//   body.append(iframe)
//   
// } )