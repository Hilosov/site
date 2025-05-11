// Блок схема лежит в макет/блок схема

document.addEventListener("DOMContentLoaded", () => {

const routes = [
        {
            title: "Горный поход",
            description: "Живописные горные тропы с видом на долины.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Морское путешествие",
            description: "Прогулка на яхте вдоль побережья.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Городская экскурсия",
            description: "Знакомство с историческими местами города.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Городская экскурсия",
            description: "Знакомство с историческими местами города.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Городская экскурсия",
            description: "Знакомство с историческими местами города.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Городская экскурсия",
            description: "Знакомство с историческими местами города.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Городская экскурсия",
            description: "Знакомство с историческими местами города.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Городская экскурсия",
            description: "Знакомство с историческими местами города.",
            image: "./images/travel_head.jpg"
        },
        {
            title: "Городская экскурсия",
            description: "Знакомство с историческими местами города.",
            image: "./images/travel_head.jpg"
        }
    ];

    const routesContainer = document.getElementById('routes');
    const toggleBtn = document.getElementById('toggleRoutesBtn');
    let routesVisible = false;

    // Функция для отображения/скрытия маршрутов
    function toggleRoutes() {
        if (!routesVisible) {
            // Если маршруты не отображены, создаём и показываем их
            routesContainer.innerHTML = ''; // Очищаем контейнер
            routes.forEach(route => {
                const routeElement = document.createElement('div');
                routeElement.className = 'route';
                routeElement.innerHTML = `
                    <a href="travel.html" class="text">${route.title}</a>
                    <img src="${route.image}" alt="Фото маршрута">
                    <div class="description">
                        <p>${route.description}</p>
                    </div>
                    <div class="favorite">★</div>
                `;
                routesContainer.appendChild(routeElement);
            });
            routesContainer.style.display = 'block';
            toggleBtn.textContent = 'Скрыть маршруты';
            routesVisible = true;
        } else {
            // Если маршруты отображены, скрываем их
            routesContainer.style.display = 'none';
            toggleBtn.textContent = 'Показать маршруты';
            routesVisible = false;
        }
    }

    // Назначаем обработчик на кнопку
    toggleBtn.addEventListener('click', toggleRoutes);
    console.log('Скрипт отработал корректно')
});


document.addEventListener('click', function(e) {
        // Проверяем, был ли клик по элементу с классом 'favorite'
        if (e.target.classList.contains('favorite')) {
            e.target.classList.toggle('active');
            if (e.target.classList.contains('active')) {
                e.target.textContent = '⭐';
                alert('Маршрут добавлен в избранное!');
            } else {
                e.target.textContent = '★';
                alert('Маршрут удалён из избранного!');
            }
        }
    });

document.addEventListener('DOMContentLoaded', function () {


    //3.2 задание и 3.3
    // Находим все элементы с классом 'favorite' (это звездочки для избранного)
    // const favoriteIcons = document.querySelectorAll('.favorite');

    // // Перебираем каждую найденную звездочку
    // favoriteIcons.forEach(icon => {
    //     // Добавляем обработчик события 'click' для каждой звездочки
    //     icon.addEventListener('click', function () {
    //         // Переключаем класс 'active' у звездочки
    //         // Если класс есть, он удаляется, если нет — добавляется
    //         this.classList.toggle('active');

    //         console.log(this.classList.contains('active'))
    //         // Проверяем, есть ли у звездочки класс 'active'
    //         if (this.classList.contains('active')) {
    //             // Если есть, меняем текст звездочки на закрашенную звезду '⭐'
    //             this.textContent = '⭐';
    //             // Выводим уведомление, что маршрут добавлен в избранное
    //             alert('Маршрут добавлен в избранное!');
    //         } else {
    //             // Если класса 'active' нет, меняем текст звездочки на незакрашенную звезду '★'
    //             this.textContent = '★';
    //             // Выводим уведомление, что маршрут удален из избранного
    //             alert('Маршрут удален из избранного!');
    //         }
    //     });
    // });

    



    // Scroll
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    

    window.addEventListener('scroll', () => {
        console.log('Страница скролится');
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});