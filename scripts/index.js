document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы с классом 'favorite' (это звездочки для избранного)
    const favoriteIcons = document.querySelectorAll('.favorite');

    // Перебираем каждую найденную звездочку
    favoriteIcons.forEach(icon => {
        // Добавляем обработчик события 'click' для каждой звездочки
        icon.addEventListener('click', function () {
            // Переключаем класс 'active' у звездочки
            // Если класс есть, он удаляется, если нет — добавляется
            this.classList.toggle('active');

            // Проверяем, есть ли у звездочки класс 'active'
            if (this.classList.contains('active')) {
                // Если есть, меняем текст звездочки на закрашенную звезду '★'
                this.textContent = '★';
                // Выводим уведомление, что маршрут добавлен в избранное
                alert('Маршрут добавлен в избранное!');
            } else {
                // Если класса 'active' нет, меняем текст звездочки на незакрашенную звезду '⭐'
                this.textContent = '⭐';
                // Выводим уведомление, что маршрут удален из избранного
                alert('Маршрут удален из избранного!');
            }
        });
    });
});