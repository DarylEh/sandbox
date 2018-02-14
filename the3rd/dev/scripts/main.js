const btn = document.getElementById('button');

const rainbow = ['red', 'orange','yellow','blue', 'rebeccapurple', 'violet'];

function change(){
    document.body.style.background = rainbow[Math.floor(rainbow.length*Math.random())];
}
    btn.addEventListener('click', change);
