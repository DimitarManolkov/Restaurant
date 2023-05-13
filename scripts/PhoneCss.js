var isAndroid = /Android/i.test(navigator.userAgent);
var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isAndroid || isiOS) {
  // Apply CSS code for mobile devices here
  var css = `
  .cheffs{
    height: 37.5em;
    display: inline-block;
    flex-wrap: wrap;
}
.cheffContainer{
    text-align: center;
    display: inline-block;
    white-space: nowrap;
    width: 600px;
    margin: 0.25em 1em;
}
.names{
    display: block;
    margin-top: 15;
    font-size: 25px;
    color: #ffecdf;
    border: groove #ffecdf;
    border-radius: 25%;
    margin-top: 0.5em;
    
}
.nameBox{
    width: 1.25px;
}
.cheffContainer a{
    text-decoration: none;
}
.cheffContainer a :hover{
    background-color: #ffecdf;  
    color: #483c32; 
}
.cheffContainer img{
    border-radius: 35%;
    flex-wrap: wrap;
}
  `;
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
} else {
  let css = `
  *{
    box-sizing: border-box;
}
.cheffs{
    height: 37.5em;
    display: inline-block;
    flex-wrap: wrap;
}
.cheffContainer{
    text-align: center;
    display: inline-block;
    white-space: nowrap;
    width: 600px;
    margin: 0.25em 1em;
}
.names{
    display: block;
    margin-top: 15;
    font-size: 25px;
    color: #ffecdf;
    border: groove #ffecdf;
    border-radius: 25%;
}
.nameBox{
    width: 1.25px;
}
.cheffContainer a{
    text-decoration: none;
}
.cheffContainer a :hover{
    background-color: #ffecdf;  
    color: #483c32; 
}
#secondContainer{
    margin: 3.125em 10.3125em;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
}
#firstContainer{
    margin: 3.125em 10.3125em;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
}
.cheffContainer img{
    border-radius: 35%;
    flex-wrap: wrap;
}
  `;
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}
