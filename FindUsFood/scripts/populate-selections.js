let themeSelections = [
    'Pizza',
    'Sea-food',
    'Italian',
    'Mexican',
    'Steakhouse',
    'Breakfast',
    'Chinese',
    'Chicken',
    'Japanese',
    'Burger',
    'Sandwich',
    'American',
    'Barbecue',
    'Salads',
    'Diner',
    'Sushi',
    'Soup',
    'Ice-cream',
    'Greek',
    'Grill',
    'Brunch',
    'Asian',
    'Mediterranean',
    'Hotdogs',
    'Russian',
    'French'
];

themeSelections.sort();

themeSelectionsElement = document.getElementById('theme-selections');

let left = document.querySelector('#left');
let right = document.querySelector('#right');

for (let i = 0; i < themeSelections.length; i++) {
    let newInput = document.createElement('input');
    newInput.className = 'themes';
    newInput.type = 'checkbox';
    newInput.value = themeSelections[i];
    if (i < themeSelections.length/2) {
        left.appendChild(newInput);
        left.innerHTML += themeSelections[i] + "<br>";
    } else {
        right.appendChild(newInput);
        right.innerHTML += themeSelections[i] + "<br>";
    }
}
