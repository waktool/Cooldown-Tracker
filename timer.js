const COLOR_GREEN = '#90EE90'; // Light green
const COLOR_AMBER = '#FFD580'; // Light amber
const COLOR_RED = '#FFB6B6';   // Light red
const FIVE_MINUTES_IN_MS = 5 * 60 * 1000; // 5 minutes in milliseconds

// Sample data array to populate the table

const EGG_LUCK_DATA = [
    { rowId: 'row1', image: 'Assets/The_Cocktail.webp', item: 'The Cocktail', type: 'Potion', effect: 'Coin Boost<br>Diamonds Boost<br>Damage Boost<br><strong>Egg Luck</strong><br>Drop Chance<br>Player Speed', amount: '+200%<br>+50%<br>+100%<br><strong>+300%</strong><br>+100%<br>+50%', duration: '30m' },
    { rowId: 'row2', image: 'Assets/The_Cocktail_II.webp', item: 'The Cocktail II', type: 'Potion', effect: 'Coin Boost<br>Diamonds Boost<br>Damage Boost<br><strong>Egg Luck</strong><br>Drop Chance<br>Player Speed', amount: '+300%<br>+100%<br>+150%<br><strong>+400%</strong><br>+150%<br>+75%', duration: '30m' },
    { rowId: 'row3', image: 'Assets/Lucky_Eggs_Potion_XI.webp', item: 'Lucky Eggs Potion XI', type: 'Potion', effect: '<strong>Egg Luck</strong>', amount: '<strong>+275%</strong>', duration: '110m' },
    { rowId: 'row4', image: 'Assets/Glitched_Drive.webp', item: 'Glitched Drive', type: 'Buff', effect: 'Coin Boost<br>Diamonds Boost<br><strong>Egg Luck</strong>', amount: '+250%<br>+25%<br><strong>+400%</strong>', duration: '5m' },
    { rowId: 'row5', image: 'Assets/Millionaire_Bucks.webp', item: 'Boost Exchange! Egg Luck', type: 'Boost', effect: '<strong>Egg Luck</strong>', amount: '<strong>+100%</strong>', duration: '1d' },
    { rowId: 'row6', image: 'Assets/Lucky_Egg_Enchant_X.webp', item: 'Lucky Eggs X (Empowered)', type: 'Empower', effect: '<strong>Egg Luck</strong>', amount: '<strong>+40%</strong>', duration: '8h' },
    { rowId: 'row7', image: 'Assets/Lucky_Easter_Egg.webp', item: 'Lucky Easter Egg', type: 'Boost', effect: '<strong>Egg Luck</strong>', amount: '<strong>+100%</strong>', duration: '12h' },
];

const TIMER_DATA = [
    { rowId: 'row1', image: 'Assets/Millionaire_Bucks.webp', item: 'Boost Exchange! Drop Chance', type: 'Boost', effect: 'Drop Chance', amount: '+15%', duration: '1d' },
    { rowId: 'row2', image: 'Assets/Millionaire_Bucks.webp', item: 'Boost Exchange! Diamond', type: 'Boost', effect: 'Diamond Boost', amount: '+5%', duration: '1d' },
    { rowId: 'row3', image: 'Assets/Millionaire_Bucks.webp', item: 'Boost Exchange! Egg Luck', type: 'Boost', effect: 'Egg Luck', amount: '+100%', duration: '1d' },
    { rowId: 'row4', image: 'Assets/Candy_Cane.webp', item: 'Candy Cane', type: 'Buff', effect: 'Drops', amount: '2.25%', duration: '7m' },
    { rowId: 'row5', image: 'Assets/Cookie.webp', item: 'Christmas Cookie', type: 'Buff', effect: 'Pet Attack Speed', amount: '10%', duration: '5m' },
    { rowId: 'row6', image: 'Assets/Cocoa_Cup.webp', item: 'Hot Cocoa', type: 'Buff', effect: 'Movement Speed', amount: '50%', duration: '5m' },
    { rowId: 'row7', image: 'Assets/Shiny_Apple.webp', item: 'Shiny Apple', type: 'Buff', effect: 'Pet Damage', amount: '2.25%', duration: '7m' },
    { rowId: 'row8', image: 'Assets/Shiny_Banana.webp', item: 'Shiny Banana', type: 'Buff', effect: 'Coin Boost', amount: '7.5%', duration: '7m' },
    { rowId: 'row9', image: 'Assets/Shiny_Orange.webp', item: 'Shiny Orange', type: 'Buff', effect: 'Diamonds Boost', amount: '1.5%', duration: '7m' },
    { rowId: 'row10', image: 'Assets/Shiny_Pineapple.webp', item: 'Shiny Pineapple', type: 'Buff', effect: 'Drop Boost', amount: '1.5%', duration: '7m' },
    { rowId: 'row11', image: 'Assets/Shiny_Watermelon.webp', item: 'Shiny Watermelon', type: 'Buff', effect: 'Bonus Boost', amount: '1.5%', duration: '7m' },
    { rowId: 'row12', image: 'Assets/Rainbow_Fruit.webp', item: 'Rainbow Fruit', type: 'Buff', effect: 'All Boosts Combined', amount: 'N/A', duration: '7m' },
    { rowId: 'row13', image: 'Assets/Squeaky_Toy.webp', item: 'Squeaky Toy', type: 'Buff', effect: 'Pet Attack Speed', amount: '25%', duration: '10m' },
    { rowId: 'row14', image: 'Assets/Toy_Ball.webp', item: 'Toy Ball', type: 'Buff', effect: 'Pet Movement Speed', amount: '300%', duration: '5m' },
    { rowId: 'row15', image: 'Assets/Toy_Bone.webp', item: 'Toy Bone', type: 'Buff', effect: 'Pet Attack Speed', amount: '10%', duration: '5m' },
    { rowId: 'row16', image: 'Assets/Sprinkler.webp', item: 'Sprinkler', type: 'Boost', effect: 'Breakables Respawn Rate', amount: '50%', duration: '5m' },
    { rowId: 'row17', image: 'Assets/Royality_Charm.webp', item: 'Royalty Charm', type: 'Charm', effect: 'Pet Damange', amount: '40%', duration: '' },
    { rowId: 'row18', image: 'Assets/Strength_Charm.webp', item: 'Strength Charm', type: 'Charm', effect: 'Pet Damange', amount: '30%', duration: '' },
    { rowId: 'row19', image: 'Assets/Agility_Charm.webp', item: 'Agility Charm', type: 'Charm', effect: 'Pet Speed', amount: '150%', duration: '' },
    { rowId: 'row19', image: 'Assets/Bonus_Charm.webp', item: 'Bonus Charm', type: 'Charm', effect: 'Bonus Chance', amount: '35%', duration: '' },
    { rowId: 'row20', image: 'Assets/Exotic_Treasure_Flag.webp', item: 'Exotic Treasure Flag', type: 'Flag', effect: 'Drop Chance', amount: '?%', duration: '5m' },
    { rowId: 'row21', image: 'Assets/Strength_Flag.webp', item: 'Strength Flag', type: 'Flag', effect: 'Pet Strength', amount: '50%', duration: '5m' },
    { rowId: 'row22', image: 'Assets/Hasty_Flag.webp', item: 'Hasty Flag', type: 'Flag', effect: 'Pet Attack & Movement Speed', amount: '?%', duration: '5m' },
];

const ENCHANT_DATA = [
    { rowId: 'row1', image: 'Assets/Treasure_Hunter_X.webp', item: 'Treasure Hunter X', type: 'Empower', effect: 'Drop Chance', amount: '+22%', duration: '8h' },
    { rowId: 'row2', image: 'Assets/Speed_V.webp', item: 'Speed V', type: 'Empower', effect: 'Player & Pet Speed', amount: '+50%', duration: '8h' },
];

const POTION_DATA = [
    { rowId: 'row1', image: 'Assets/The_Cocktail.webp', item: 'The Cocktail', type: 'Potion', effect: 'Coin Boost<br>Diamonds Boost<br>Damage Boost<br>Egg Luck<br>Drop Chance<br>Player Speed', amount: '+200%<br>+50%<br>+100%<br>+300%<br>+100%<br>+50%', duration: '30m' },
    { rowId: 'row2', image: 'Assets/Treasure_Hunter_Potion_XI.webp', item: 'Treasure Hunter Potion XI', type: 'Potion', effect: 'Drop Chance', amount: '+80%', duration: '110m' },
    { rowId: 'row3', image: 'Assets/Damage_Potion_XI.webp', item: 'Damage Potion XI', type: 'Potion', effect: 'Pet Damage', amount: '+165%', duration: '110m' },
];




document.addEventListener('DOMContentLoaded', () => {
    populateTable(EGG_LUCK_DATA, 'eggLuckTableBody');
    populateTable(TIMER_DATA, 'timerTableBody');
    populateTable(ENCHANT_DATA, 'empowerEnchantTableBody'); // Populate the "Empower Enchant" table
    populateTable(POTION_DATA, 'potionTableBody'); // Populate the "Empower Enchant" table
    makeHeadersSortable();
    loadTimers();
});

function populateTable(dataArray, tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);

    dataArray.forEach(data => {
        const row = document.createElement('tr');
        row.id = data.rowId + `-${tableBodyId}`; // Ensure unique row IDs

        // Create table cells
        const imageCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.item;
        img.style.width = '40px';
        imageCell.appendChild(img);
        row.appendChild(imageCell);

        const itemCell = document.createElement('td');
        itemCell.innerText = data.item;
        row.appendChild(itemCell);

        const typeCell = document.createElement('td');
        typeCell.innerText = data.type;
        row.appendChild(typeCell);

        const effectCell = document.createElement('td');
        effectCell.innerHTML = data.effect;
        row.appendChild(effectCell);

        const amountCell = document.createElement('td');
        amountCell.innerHTML = data.amount;
        row.appendChild(amountCell);

        const durationCell = document.createElement('td');
        durationCell.classList.add('duration');
        durationCell.innerText = data.duration;
        row.appendChild(durationCell);

        const expiryCell = document.createElement('td');
        expiryCell.classList.add('expiry');
        row.appendChild(expiryCell);

        const countdownCell = document.createElement('td');
        countdownCell.classList.add('countdown');
        row.appendChild(countdownCell);

        // Create the cell for the buttons and always append it
        const startButtonCell = document.createElement('td');
        row.appendChild(startButtonCell);

        // Only add the Start and Reset buttons if the duration field has a value
        if (data.duration) {
            const startButton = document.createElement('button');
            startButton.innerText = '+1';
            startButton.onclick = () => startTimer(row.id); // Ensure it targets the correct ID
            startButton.style.marginRight = '5px'; // Add margin for spacing
            startButtonCell.appendChild(startButton);

            const resetButton = document.createElement('button');
            resetButton.innerText = 'Reset';
            resetButton.onclick = () => resetTimer(row.id); // Ensure it targets the correct ID
            resetButton.disabled = true;
            startButtonCell.appendChild(resetButton);
        }

        tableBody.appendChild(row);
    });
}


// Call the function to populate the table when the script runs
//populateTable();

function startTimer(rowId) {
    const row = document.getElementById(rowId);
    const expiryCell = row.getElementsByClassName('expiry')[0];
    const durationCell = row.getElementsByClassName('duration')[0];
    const durationString = durationCell ? durationCell.innerText : '';
    const additionalDuration = parseDuration(durationString);

    let expiry = new Date(expiryCell.innerText);

    // If expiry is not valid (e.g., empty), start a new timer from now
    if (isNaN(expiry.getTime())) {
        expiry = new Date(); // Set current time if expiry is invalid
    }

    // Add the parsed duration to the existing expiry time
    expiry = new Date(expiry.getTime() + additionalDuration);
    expiryCell.innerText = expiry.toLocaleString('en-US', { hour12: true });

    // Save the updated expiry time to localStorage
    localStorage.setItem(`expiry-${rowId}`, expiry.toISOString());

    // Update the countdown with the new expiry
    updateCountdown(row, expiry);
}


function updateCountdown(row, expiry) {
    const resetButton = row.getElementsByTagName('button')[1];
    resetButton.disabled = false;
    const countdownElement = row.getElementsByClassName('countdown')[0];

    // Clear any existing timer and start a new one
    clearInterval(window[row.id + 'Interval']);
    window[row.id + 'Interval'] = setInterval(() => {
        const now = new Date();
        const distance = expiry - now;

        if (distance > 0) {
            const hours = Math.floor(distance / (1000 * 60 * 60)); // Calculate total hours
            const minutes = Math.floor((distance / (1000 * 60)) % 60); // Remaining minutes
            const seconds = Math.floor((distance / 1000) % 60); // Remaining seconds

            // Update background color based on time remaining
            if (distance > FIVE_MINUTES_IN_MS) { // Greater than 5 minutes
                countdownElement.style.backgroundColor = COLOR_GREEN; // Use defined light green
            } else if (distance <= FIVE_MINUTES_IN_MS && distance > 0) { // Between 0 and 5 minutes
                countdownElement.style.backgroundColor = COLOR_AMBER; // Use defined light amber
            } else {
                countdownElement.style.backgroundColor = ''; // Reset to default
            }

            // Update the countdown display to show hours, minutes, and seconds
            countdownElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerText = "EXPIRED";
            countdownElement.style.backgroundColor = COLOR_RED; // Use defined light red when expired
            clearInterval(window[row.id + 'Interval']);
            resetButton.disabled = true;
        }
    }, 1000);
}



function resetTimer(rowId) {
    const row = document.getElementById(rowId);
    clearInterval(window[rowId + 'Interval']);
    row.getElementsByClassName('expiry')[0].innerText = '';
    row.getElementsByClassName('countdown')[0].innerText = '';
    row.getElementsByClassName('countdown')[0].style.backgroundColor = ''; // Reset background color
    const startButton = row.getElementsByTagName('button')[0];
    startButton.disabled = false;
    const resetButton = row.getElementsByTagName('button')[1];
    resetButton.disabled = true;

    // Remove the expiry time from localStorage
    localStorage.removeItem(`expiry-${rowId}`);
}

function parseDuration(durationString) {
    let multiplier;
    if (durationString.includes('d')) {
        multiplier = 24 * 60 * 60 * 1000; // Convert days to milliseconds
    } else if (durationString.includes('h')) {
        multiplier = 60 * 60 * 1000; // Convert hours to milliseconds
    } else if (durationString.includes('m')) {
        multiplier = 60 * 1000; // Convert minutes to milliseconds
    } else {
        multiplier = 1000; // Default to seconds if no other unit found
    }
    const number = parseFloat(durationString);
    return number * multiplier;
}

function loadTimers() {
    const tables = ['timerTableBody', 'empowerEnchantTableBody', 'potionTableBody', 'eggLuckTableBody'];


    tables.forEach(tableId => {
        const tableBody = document.getElementById(tableId);
        const rows = tableBody.querySelectorAll('tr');

        rows.forEach(row => {
            const rowId = row.id;
            const expiryString = localStorage.getItem(`expiry-${rowId}`);

            if (expiryString) {
                const expiry = new Date(expiryString);
                if (expiry > new Date()) {
                    row.getElementsByClassName('expiry')[0].innerText = expiry.toLocaleString('en-US', { hour12: true });
                    updateCountdown(row, expiry);
                } else {
                    // Remove expired timers from localStorage
                    localStorage.removeItem(`expiry-${rowId}`);
                }
            }
        });
    });
}

function makeHeadersSortable() {
    const headers = document.querySelectorAll('#timerTable thead th');
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => sortTableByColumn(index));
    });
}

function sortTableByColumn(columnIndex) {
    const tableBody = document.getElementById('timerTableBody');
    const rowsArray = Array.from(tableBody.querySelectorAll('tr'));

    const sortedRows = rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        // Handle blank cells by sorting them to the bottom
        if (cellA === '' && cellB !== '') return 1;
        if (cellB === '' && cellA !== '') return -1;
        if (cellA === '' && cellB === '') return 0;

        if (!isNaN(cellA) && !isNaN(cellB)) {
            // If the cell content is a number, compare as numbers
            return parseFloat(cellA) - parseFloat(cellB);
        } else {
            // Otherwise, compare as strings
            return cellA.localeCompare(cellB);
        }
    });

    // Clear the table body and append the sorted rows
    tableBody.innerHTML = '';
    sortedRows.forEach(row => tableBody.appendChild(row));
}