// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const sizePicker = document.querySelector('#sizePicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('click', makeGrid);

function makeGrid(event) {

  // Your code goes here!
  const pixelCanvas = document.querySelector('#pixel_canvas');

  if (event.target.type === 'submit') {

    event.preventDefault();

    while (pixelCanvas.firstChild) {
      pixelCanvas.removeChild(pixelCanvas.firstChild);
    }

    const height = event.target.form[0].valueAsNumber;
    const width = event.target.form[1].valueAsNumber;


    for (var j = 1; j <= height; j++) {
      pixelCanvasRow = document.createElement('tr');

      for (var i = 1; i <= width; i++) {
        let pixelCanvasCell = document.createElement('td');
        pixelCanvasRow.appendChild(pixelCanvasCell);
      }

      pixelCanvas.appendChild(pixelCanvasRow);
    }

    // add event listener for pixelcanvas cells
    pixelCanvas.addEventListener('click', function(event) {
      if(event.target.nodeName === "TD") {
        event.preventDefault();

        event.target.style.backgroundColor = colorPicker.value;
      }

    });

  }

}
