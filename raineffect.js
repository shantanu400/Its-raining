const mastergrid = document.querySelector('.grid');
for (let z = 0; z < 15*20; z++) {
    const square = document.createElement('div');
    square.classList.add('square');
    mastergrid.appendChild(square);
}

function getRColor() {
    const colgrp = ['#f10b0b','#f80000','#f8b300','#00baf8','#ff9500'];
    return colgrp[Math.floor(Math.random()*colgrp.length)];
}

async function makerainfall() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '#7fc0eb9b';
    });
    const rainheight = 4;
    const color = getRColor(); 
    for (let j= 0; j< 15; j++) {
        
        for (let i = 0; i < 20 + rainheight; i++) { 
            let index = i * 15 + j;
          
            await new Promise(resolve => setTimeout(() => {
               
                if (i < 20) {
                    squares[index].style.backgroundColor = color;
                    squares[index].style.opacity = 1; 
                }
             
                if (i >= rainheight && i < 20 + rainheight) {
                    squares[index - rainheight * 15].style.backgroundColor = '#7fc0eb9b';
                    squares[index - rainheight * 15].style.opacity = 1;
                }
                resolve();
            }, 60));
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}
setInterval(makerainfall, 2000);