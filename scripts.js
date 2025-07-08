// Скрипт за показване на последната актуализация
document.getElementById('last-updated').textContent = new Date().toLocaleDateString('bg-BG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Скрипт за обработка на формата
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратява изпращането на формата
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;   
    alert(`Благодарим ви, ${name}! Вашето съобщение е изпратено успешно.\nИмейл: ${email}\nСъобщение: ${message}`);
    // Тук можете да добавите код за изпращане на данните до сървър
    document.getElementById('contact-form').reset(); // Изчиства формата след изпращане
});

// Скрипт за показване на текущата дата и час
const dateTimeSection = document.createElement('section');
dateTimeSection.id = 'datetime';
dateTimeSection.innerHTML = '';
const dateTimeDisplay = document.createElement('p');
dateTimeDisplay.style.class = 'text-center';
dateTimeDisplay.style.textAlign = 'center';
dateTimeDisplay.style.fontSize = '1.2em';
dateTimeDisplay.style.color = '#333';
dateTimeDisplay.style.margin = '20px 0';
dateTimeDisplay.className = 'text-center'; // Добавя клас за центриране
const updateDateTime = () => {
    const now = new Date();
    dateTimeDisplay.textContent = `Текущата дата и час е: ${now.toLocaleString('bg-BG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })}`;
};
updateDateTime(); // Първоначално обновяване
setInterval(updateDateTime, 1000); // Обновява всяка секунда
dateTimeSection.appendChild(dateTimeDisplay);
document.querySelector('main').appendChild(dateTimeSection); // Добавя секцията с дата и час
