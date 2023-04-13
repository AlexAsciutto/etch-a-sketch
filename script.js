document.addEventListener('DOMContentLoaded', () => {
    // Get the container element
    const container = document.querySelector('#container');
    let isMouseDown = false;
    
    // Create a loop to generate 16 rows
    for (let i = 0; i < 16; i++) {
      // Create a new row element
      const row = document.createElement('div');
      row.classList.add('row');
  
      // Create a loop to generate 16 cells for each row
      for (let j = 0; j < 16; j++) {
        // Create a new cell element
        const cell = document.createElement('div');
        cell.classList.add('cell');

      //
      cell.addEventListener('mousedown', () => {
        isMouseDown = true;
        cell.style.backgroundColor = 'black';
      });

      //
      cell.addEventListener('mouseup', () => {
        isMouseDown = false;
      });

      //
      cell.addEventListener('mousemove', () => {
        if (isMouseDown) {
          cell.style.backgroundColor = 'black';
        }
      });
  
      // Add the cell to the row
        row.appendChild(cell);
      }
  
      // Add the row to the container
      container.appendChild(row);
    }
  });