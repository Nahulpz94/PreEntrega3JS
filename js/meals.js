document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1';

    // obtener todas las comidas
    fetch(`https://www.themealdb.com/api/json/v1/${apiKey}/search.php?s=`)
        .then(response => response.json())
        .then(data => {
            // manejar la respuesta de la API
            const mealList = document.getElementById('meal-list');
            
            // verificar comidas
            if (data.meals) {
                // filtro comidas que tienen información de imagen
                const mealsWithImages = data.meals.filter(meal => meal.strMealThumb);

                // revisar comidas filtradas y agregarlas a la lista
                mealsWithImages.forEach(meal => {
                    const listItem = document.createElement('li');

                    // sumar la imagen de la comida
                    const img = document.createElement('img');
                    img.src = meal.strMealThumb;
                    img.alt = meal.strMeal;
                    listItem.appendChild(img);

                    // sumar el nombre de la comida
                    const mealName = document.createElement('p');
                    mealName.textContent = meal.strMeal;
                    listItem.appendChild(mealName);

                    mealList.appendChild(listItem);
                });
            } else {
                // En caso en el que no se encuentren comidas
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'No se encontraron comidas.';
                mealList.appendChild(errorMessage);
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
});
