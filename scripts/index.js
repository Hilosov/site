// Блок схема лежит в макет/блок схема

document.addEventListener("DOMContentLoaded", () => {


    const routesContainer = document.getElementById('routes');
    const toggleBtn = document.getElementById('toggleRoutesBtn');
    let routesVisible = false;
    

    const createHtml = (route) =>
    {
        const html = `
                    <a href="travel.html" class="text">${route.title}</a>
                    <img src="${route.image}" alt="Фото маршрута">
                    <div class="description">
                        <p>${route.description}</p>
                    </div>
                    <div class="favorite">★</div>
                `;
        return html;
    }

    const apiUrl = 'data.json';

    // Функция для отображения/скрытия маршрутов
    function toggleRoutes() {
        if (!routesVisible) {
            // Если маршруты не отображены, создаём и показываем их
            routesContainer.innerHTML = ''; // Очищаем контейнер

            // Загрузка из файла
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Данные
                console.log(typeof (data));
                data.forEach(route => {
                    const routeElement = document.createElement('div');
                    routeElement.className = 'route';
                    routeElement.innerHTML = createHtml(route);
                    routesContainer.appendChild(routeElement);
                });})
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });

            // Без загрузки
            // routes.forEach(route => {
            //     const routeElement = document.createElement('div');
            //     routeElement.className = 'route';
            //     routeElement.innerHTML = createHtml(route);
            //     routesContainer.appendChild(routeElement);
            // });
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


    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            // Показываем контент
            content.style.display = 'block';

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }
});