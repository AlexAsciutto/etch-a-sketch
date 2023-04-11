document.addEventListener('DOMContentLoaded', () => {
    // Get the container element
    const container = document.querySelector('#container');
    console.log(container);
  
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
  
        // Add the cell to the row
        row.appendChild(cell);
      }
  
      // Add the row to the container
      container.appendChild(row);
    }
  });