'use strict';

function drawBackground() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, length, length);
}

function makeTitle() {
  let title = 'Fruit Quantities';
  ctx.font = '30px serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.fillText(title, length / 2, 50);
}

function drawGrid() {
  ctx.strokeStyle = 'white';
  ctx.moveTo(0, length / 10);
  ctx.lineTo(length, length / 10);
  ctx.stroke();

  ctx.moveTo(length / 10, 0);
  ctx.lineTo(length / 10, length);
  ctx.stroke();
}

function drawBar() {
  for (let i = 0; i < fruits.length; i++) {
    ctx.fillStyle = fruits[i].color;
    ctx.fillRect(
        length / 10,
        length / 10 + (length / 6.5) * i,
        (length / 10) * 9 * fruits[i].quantity / 20,
        (length / 10),
    );
  }
}

function writeNames() {
  for (let i = 0; i < fruits.length; i++) {
    let text = `${fruits[i].name}: ${fruits[i].quantity}`;
    ctx.font = '30px serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'left';
    ctx.fillText(text, length / 8,
        length / 6.5 + (length / 6.5) * i,
    );
  }
}

function drawChart() {
  drawBackground();
  makeTitle();
  drawGrid();
  drawBar();
  writeNames();
}

let fruits = [
  {name: 'Apple', quantity: 20, color: 'red'},
  {name: 'Orange', quantity: 10, color: 'orange'},
  {name: 'Banana', quantity: 15, color: 'yellow'},
  {name: 'Kiwi', quantity: 3, color: 'green'},
  {name: 'Blueberry', quantity: 5, color: 'blue'},
  {name: 'Grapes', quantity: 8, color: 'purple'},
];

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const length = (canvas.width = canvas.height = 800);

drawChart();
