const animalData = [
    {"type": "CAT", "name": "Cooper", "age": 2, "furr": "#380000", "eyes": "black"},
    {"type": "CAT", "name": "Rex", "age": 2, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "CAT", "name": "Cash", "age": 1, "furr": "#F0F0F0", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Cash", "age": 5, "furr": "#F8F8F8", "eyes": "black"},
    {"type": "DOG", "name": "Mac", "age": 4, "furr": "#F8F8F8", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Oakley", "age": 1, "furr": "#884A0B", "eyes": "black"},
    {"type": "DOG", "name": "Teddy", "age": 1, "furr": "#CE9051", "eyes": "black"},
    {"type": "DOG", "name": "Oscar", "age": 1, "furr": "#380000", "eyes": "black"},
    {"type": "DOG", "name": "Rudy", "age": 1, "furr": "#380000", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Oakley", "age": 2, "furr": "#CE9051", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Teddy", "age": 2, "furr": "#CE9051", "eyes": "black"},
    {"type": "DOG", "name": "Bailey", "age": 2, "furr": "#CE9051", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Teddy", "age": 1, "furr": "#380000", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Cash", "age": 5, "furr": "#F8F8F8", "eyes": "black"},
    {"type": "CAT", "name": "Kobe", "age": 1, "furr": "#CE9051", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Chip", "age": 4, "furr": "#F0F0F0", "eyes": "black"},
    {"type": "DOG", "name": "Rex", "age": 3, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "CAT", "name": "Chip", "age": 2, "furr": "#D3D3D3", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Rudy", "age": 3, "furr": "#CE9051", "eyes": "black"},
    {"type": "DOG", "name": "Oakley", "age": 1, "furr": "#F0F0F0", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Charlie", "age": 1, "furr": "#CE9051", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Oakley", "age": 3, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "DOG", "name": "Oakley", "age": 3, "furr": "#F0F0F0", "eyes": "black"},
    {"type": "CAT", "name": "Oakley", "age": 4, "furr": "#D3D3D3", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Cash", "age": 1, "furr": "#380000", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Mac", "age": 3, "furr": "#F8F8F8", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Bailey", "age": 4, "furr": "#F8F8F8", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Cash", "age": 5, "furr": "#380000", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Chip", "age": 1, "furr": "#CE9051", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Teddy", "age": 5, "furr": "#F0F0F0", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Oakley", "age": 2, "furr": "#CE9051", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Teddy", "age": 2, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "CAT", "name": "Teddy", "age": 5, "furr": "#884A0B", "eyes": "black"},
    {"type": "DOG", "name": "Max", "age": 4, "furr": "#F8F8F8", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Kobe", "age": 1, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "CAT", "name": "Cash", "age": 5, "furr": "#D3D3D3", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Oakley", "age": 2, "furr": "#F0F0F0", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Teddy", "age": 4, "furr": "#F0F0F0", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Cooper", "age": 1, "furr": "#D3D3D3", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Oakley", "age": 3, "furr": "#CE9051", "eyes": "black"},
    {"type": "DOG", "name": "Kobe", "age": 2, "furr": "#884A0B", "eyes": "black"},
    {"type": "DOG", "name": "Oakley", "age": 4, "furr": "#D3D3D3", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Charlie", "age": 3, "furr": "#380000", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Bear", "age": 3, "furr": "#F0F0F0", "eyes": "black"},
    {"type": "CAT", "name": "Oakley", "age": 1, "furr": "#D3D3D3", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Cooper", "age": 2, "furr": "#884A0B", "eyes": "black"},
    {"type": "CAT", "name": "Rudy", "age": 1, "furr": "#D3D3D3", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Teddy", "age": 2, "furr": "#380000", "eyes": "black"},
    {"type": "DOG", "name": "Teddy", "age": 4, "furr": "#D3D3D3", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Oakley", "age": 2, "furr": "#884A0B", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Cooper", "age": 3, "furr": "#F8F8F8", "eyes": "black"},
    {"type": "CAT", "name": "Rudy", "age": 2, "furr": "#F0F0F0", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Bailey", "age": 5, "furr": "#380000", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Oscar", "age": 2, "furr": "#F8F8F8", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Teddy", "age": 3, "furr": "#F8F8F8", "eyes": "black"},
    {"type": "DOG", "name": "Rex", "age": 3, "furr": "#884A0B", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Mac", "age": 5, "furr": "#380000", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Charlie", "age": 2, "furr": "#380000", "eyes": "black"},
    {"type": "DOG", "name": "Chip", "age": 2, "furr": "#884A0B", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Rex", "age": 1, "furr": "#CE9051", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Oscar", "age": 1, "furr": "#380000", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Oakley", "age": 3, "furr": "#380000", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Teddy", "age": 3, "furr": "#D3D3D3", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Kobe", "age": 3, "furr": "#F8F8F8", "eyes": "black"},
    {"type": "CAT", "name": "Rex", "age": 3, "furr": "#884A0B", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Cooper", "age": 5, "furr": "#884A0B", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Rudy", "age": 3, "furr": "#380000", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Cooper", "age": 5, "furr": "#380000", "eyes": "black"},
    {"type": "CAT", "name": "Cash", "age": 1, "furr": "#884A0B", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Rudy", "age": 3, "furr": "#380000", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Teddy", "age": 2, "furr": "#F0F0F0", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Bailey", "age": 1, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "CAT", "name": "Mac", "age": 4, "furr": "#884A0B", "eyes": "black"},
    {"type": "DOG", "name": "Rex", "age": 2, "furr": "#F0F0F0", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Max", "age": 3, "furr": "#F8F8F8", "eyes": "black"},
    {"type": "CAT", "name": "Teddy", "age": 1, "furr": "#D3D3D3", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Max", "age": 2, "furr": "#380000", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Kobe", "age": 5, "furr": "#F0F0F0", "eyes": "black"},
    {"type": "CAT", "name": "Oakley", "age": 2, "furr": "#CE9051", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Chip", "age": 1, "furr": "#D3D3D3", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Cash", "age": 4, "furr": "#380000", "eyes": "black"},
    {"type": "DOG", "name": "Cash", "age": 4, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "CAT", "name": "Max", "age": 5, "furr": "#CE9051", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Chip", "age": 4, "furr": "#D3D3D3", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Cooper", "age": 3, "furr": "#CE9051", "eyes": "black"},
    {"type": "DOG", "name": "Bear", "age": 2, "furr": "#F0F0F0", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Oscar", "age": 5, "furr": "#F8F8F8", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Mac", "age": 1, "furr": "#F0F0F0", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Max", "age": 2, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "DOG", "name": "Oakley", "age": 1, "furr": "#884A0B", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Mac", "age": 4, "furr": "#884A0B", "eyes": "#4682B4"},
    {"type": "CAT", "name": "Cooper", "age": 5, "furr": "#884A0B", "eyes": "#5C4033"},
    {"type": "CAT", "name": "Rudy", "age": 1, "furr": "#F8F8F8", "eyes": "#4682B4"},
    {"type": "DOG", "name": "Oakley", "age": 3, "furr": "#F8F8F8", "eyes": "#5C4033"},
    {"type": "DOG", "name": "Charlie", "age": 5, "furr": "#F0F0F0", "eyes": "black"},
    {"type": "DOG", "name": "Bailey", "age": 4, "furr": "#380000", "eyes": "black"},
    {"type": "CAT", "name": "Kobe", "age": 1, "furr": "#D3D3D3", "eyes": "black"},
    {"type": "DOG", "name": "Bear", "age": 3, "furr": "#F8F8F8", "eyes": "black"},
    {"type": "CAT", "name": "Oscar", "age": 4, "furr": "#F0F0F0", "eyes": "black"},
    {"type": "CAT", "name": "Chip", "age": 4, "furr": "#F8F8F8", "eyes": "#5C4033"}
];

function generateGrid(containerId) {
    const container = document.getElementById(containerId);
    const bark = document.getElementById('barkSound');
    const meow = document.getElementById('meowSound');

    animalData.forEach((animal) => {
        const card = document.createElement('div');
        // Class 'cat' or 'dog' decides the ear shapes in CSS
        card.className = `animal-card ${animal.type.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="ears"></div>
            <div class="head" style="background-color: ${animal.furr};">
                <div class="eye-left" style="background-color: ${animal.eyes};"></div>
                <div class="eye-right" style="background-color: ${animal.eyes};"></div>
                <div class="nose"></div>
            </div>
            <div class="label">${animal.name} (${animal.type})</div>
        `;

        card.onclick = () => {
            if (animal.type === "DOG") {
                bark.currentTime = 0;
                bark.play();
            } else {
                meow.currentTime = 0;
                meow.play();
            }
        };

        container.appendChild(card);
    });
}  