$(document).ready(readyNow);
let clickCount = 0;

function readyNow() {
  $('#generateButton').on('click', generateButton);
  $('div').on('click', '.swapColor', toggleColor);
  $('div').on('click', '.deleteButton', deleteButton);
}

function generateButton() {
  console.log('clicked on generate button');
  clickCount++;
  $('#content').append(
    `<div class="box red" data-name="changeColor">
      <p>${clickCount}</p>
      <button class="swapColor">Swap Color</button>
      <button class="deleteButton">Delete</button>
    </div>`);
}

function toggleColor() {
  let buttonElement = $(this).closest('div');
  
  console.log('element', buttonElement);
  if ('box red' == buttonElement.attr('class')) {
     console.log('its red');
    $(buttonElement).removeClass('red').addClass('yellow');
  } else {
    $(buttonElement).removeClass('yellow').addClass('red');
  }
}

function deleteButton() {
  let deleteElement = $(this).closest('div');
  deleteElement.remove();
  console.log(deleteElement);
}