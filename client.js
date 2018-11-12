$(document).ready(readyNow);
let clickCount = 0;

function readyNow() {
  $('#generateButton').on('click', generateButton);
  $('div').on('click', '.swapColor', toggleColor);
}

function generateButton() {
  console.log('clicked on generate button');
  clickCount++;
  $('#content').append(`
    <div class="box"> 
      <p>${clickCount}</p>
      <button class="swapColor" id="${clickCount}">Swap Color</button>
      <button id="deleteButton">Delete</button>
    </div>
  `);
}

function toggleColor() {
  let elementId = $(this).attr('id');
  console.log('elementId', elementId);
  if(clickCount == elementId) {
    $('.box').css('background-color', 'yellow');
  }

}
