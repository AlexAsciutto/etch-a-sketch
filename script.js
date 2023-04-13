document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');
    const button = document.querySelector('#button');
    let isMouseDown = false;

    button.addEventListener('click', () => {
      const input = prompt('Enter the number of squares per side (max 100)');
      // rest of the code goes here
  });  

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
  });