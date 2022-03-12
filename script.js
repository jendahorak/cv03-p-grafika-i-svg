"use strict";

document.addEventListener("DOMContentLoaded", () => { 

    // loads svg paths into array
    const allmunicip = document.querySelectorAll('path')

    // loads display divs into array
    const info = document.querySelectorAll('.info')

    // saves default values of loaded divs for later use
    const infoDefVals = new Array()
    info.forEach(el => {infoDefVals.push(el.innerHTML)})



    allmunicip.forEach(el => {
        // onmousover changes html content in display divs
        el.onmouseover=function(ev){
            let status = ev.target.getAttribute('status')

            info[0].innerHTML = `Name: ${ev.target.getAttribute('name')}`
            info[1].innerHTML = `Population: ${ev.target.dataset.population}`
            info[2].innerHTML = `Status: ${status}`

        // changes color of the svg paths
            if (status == 'hostile') {
                ev.target.setAttribute('class', 'hostile')
            } else if (status == 'neutral') {
                ev.target.setAttribute('class', 'neutral')
            } else {
                ev.target.setAttribute('class', 'peaceful')
            }
        }

        // resets the color and shown info
        el.onmouseout = function(ev){
            ev.target.setAttribute('class', 'default-poly')
            info.forEach(function(el, i){
                el.innerHTML = infoDefVals[i]
            });
        }
        
    });
    
});