document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  const button = document.querySelector('#button');
  let isMouseDown = false;

  for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      cell.addEventListener('mousedown', () => {
        isMouseDown = true;
        cell.style.backgroundColor = 'black';
      });

      cell.addEventListener('mouseup', () => {
        isMouseDown = false;
      });

      cell.addEventListener('mousemove', () => {
        if (isMouseDown) {
          cell.style.backgroundColor = 'black';
        }
      });

      row.appendChild(cell);
    }

    container.appendChild(row);
  }

  button.addEventListener('click', () => {
    let input = prompt('Enter the number of squares per side (max 100)');
    let numOfSquares = parseInt(input);
    
    while (isNaN(numOfSquares) || numOfSquares < 1 || numOfSquares > 100) {
      alert('Invalid input! Please enter a number between 1 and 100.');
      input = prompt('Enter the number of squares per side (max 100)');
      numOfSquares = parseInt(input);
    }

    // Clear existing cells
    container.innerHTML = '';

    // Create new grid based on user input
    const cellSize = `${Math.floor(480 / numOfSquares)}px`; // calculate cell size based on container width
    for (let i = 0; i < numOfSquares; i++) {
      const row = document.createElement('div');
      row.classList.add('row');

      for (let j = 0; j < numOfSquares; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.maxWidth = cellSize; // set maximum cell size based on number of squares
        cell.style.maxHeight = cellSize;

        cell.addEventListener('mousedown', () => {
          isMouseDown = true;
          cell.style.backgroundColor = 'black';
        });

        cell.addEventListener('mouseup', () => {
          isMouseDown = false;
        });

        cell.addEventListener('mousemove', () => {
          if (isMouseDown) {
            cell.style.backgroundColor = 'black';
          }
        });

        row.appendChild(cell);
      }

      container.appendChild(row);
    }
  });
});