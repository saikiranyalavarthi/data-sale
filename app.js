// Scorecard 1
const scorecard1 = document.querySelector('#scorecard1');
const totalSales = 500; // Replace with your actual data

scorecard1.querySelector('.value').textContent = `$${totalSales}`;

// Scorecard 2
const scorecard2 = document.querySelector('#scorecard2');
const totalOrders = 50; // Replace with your actual data

scorecard2.querySelector('.value').textContent = totalOrders;



// Table Filters
const dateFilter = document.querySelector('#date-filter');
const dimensionFilter = document.querySelector('#dimension-filter');

dateFilter.addEventListener('change', handleFilterChange);
dimensionFilter.addEventListener('change', handleFilterChange);

function handleFilterChange() {
  const selectedDate = dateFilter.value;
  const selectedDimension = dimensionFilter.value;

 
}

