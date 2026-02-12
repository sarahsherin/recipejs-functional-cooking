const container = document.getElementById("recipe-container");

const recipes = [
    {
        name: "Masala Dosa",
        time: "40 mins",
        difficulty: "easy",
        description: "Crispy rice crepe filled with spiced potato mixture."
    },
    {
        name: "Paneer Butter Masala",
        time: "50 mins",
        difficulty: "medium",
        description: "Creamy tomato gravy with paneer cubes."
    },
    {
        name: "Vegetable Biryani",
        time: "90 mins",
        difficulty: "hard",
        description: "Layered rice dish cooked with aromatic spices."
    }
];

function displayRecipes(recipeArray) {
    container.innerHTML = "";

    recipeArray.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <div class="recipe-meta">
                <span>⏱ ${recipe.time}</span>
                <span class="${recipe.difficulty}">
                    ${recipe.difficulty.toUpperCase()}
                </span>
            </div>
            <p>${recipe.description}</p>
        `;

        container.appendChild(card);
    });
}

function filterRecipes(level) {
    if (level === "all") {
        displayRecipes(recipes);
    } else {
        const filtered = recipes.filter(recipe =>
            recipe.difficulty === level
        );
        displayRecipes(filtered);
    }
}

displayRecipes(recipes);




