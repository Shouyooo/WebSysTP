document.addEventListener('DOMContentLoaded', function() {

    const variationButtons = document.querySelectorAll('.variation-btn');
    const variationDetails = document.getElementById('variation-details');
    const closeVariationButton = document.getElementById('close-variation');

    const variationData = {
        chinese: {
            title: "Chinese-Style Fried Rice",
            description: "Classic Cantonese fried rice with a savory soy sauce base and traditional ingredients.",
            ingredients: [
                "3 cups day-old jasmine rice",
                "2 tablespoons peanut oil",
                "2 eggs, beaten",
                "1/2 cup char siu (Chinese BBQ pork), diced",
                "1/4 cup green peas",
                "1/4 cup carrots, diced",
                "2 tablespoons soy sauce",
                "1 tablespoon oyster sauce",
                "1/2 teaspoon white pepper",
                "2 stalks green onions, chopped"
            ]
        },
        thai: {
            title: "Thai-Style Pineapple Fried Rice",
            description: "Sweet and savory fried rice with a tangy kick from fish sauce and lime.",
            ingredients: [
                "3 cups day-old jasmine rice",
                "2 tablespoons vegetable oil",
                "2 eggs, beaten",
                "1/2 cup shrimp, peeled and deveined",
                "1/2 cup fresh pineapple chunks",
                "1/4 cup cashews, roasted",
                "1/4 cup red bell pepper, diced",
                "2 tablespoons fish sauce",
                "1 tablespoon lime juice",
                "1 teaspoon curry powder",
                "Fresh cilantro for garnish"
            ]
        },
        japanese: {
            title: "Japanese Garlic Fried Rice",
            description: "Simple but flavorful garlic fried rice commonly served with a fried egg on top.",
            ingredients: [
                "3 cups day-old short-grain rice",
                "3 tablespoons butter",
                "4 cloves garlic, minced",
                "2 eggs, for frying separately",
                "2 tablespoons soy sauce",
                "1 tablespoon mirin",
                "1/4 teaspoon black pepper",
                "2 stalks green onions, thinly sliced",
                "Nori seaweed strips for garnish (optional)"
            ]
        },
        indonesian: {
            title: "Indonesian Nasi Goreng",
            description: "Fragrant and spicy Indonesian fried rice with sweet soy sauce and shrimp paste.",
            ingredients: [
                "3 cups day-old long-grain rice",
                "2 tablespoons vegetable oil",
                "2 eggs, beaten",
                "1/2 cup chicken, diced",
                "1 small onion, finely chopped",
                "2 cloves garlic, minced",
                "1 red chili, sliced",
                "1 tablespoon kecap manis (sweet soy sauce)",
                "1 teaspoon shrimp paste",
                "Cucumber slices and tomato wedges for garnish",
                "Fried shallots for topping"
            ]
        }
    };

    variationButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const variationType = this.getAttribute('data-variation');
            const variation = variationData[variationType];
            
            if (variation) {
                document.getElementById('variation-title').textContent = variation.title;
                document.getElementById('variation-description').textContent = variation.description;
                
                const ingredientsList = document.getElementById('variation-ingredients');
                ingredientsList.innerHTML = '';
                
                variation.ingredients.forEach(function(ingredient) {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
                
                variationDetails.classList.remove('hidden');
                variationDetails.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    if (closeVariationButton) {
        closeVariationButton.addEventListener('click', function() {
            variationDetails.classList.add('hidden');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                if (id) {
                    document.querySelectorAll('nav a').forEach(navLink => {
                        navLink.classList.remove('active');
                        if (navLink.getAttribute('href') === `#${id}`) {
                            navLink.classList.add('active');
                        }
                    });
                }
            }
        });
    });
});