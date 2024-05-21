document.addEventListener("DOMContentLoaded", function() {
  // Укажите дату, с которой нужно считать прошедшее время
  const startDate = new Date('2024-05-18T00:00:00'); // Измените эту дату на нужную вам

  // Функция для вычисления прошедших дней
  function calculateElapsedDays(startDate) {
      const currentDate = new Date();
      const elapsedTime = currentDate - startDate;
      const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      return elapsedDays;
  }

  // Обновление содержимого элемента с классом "days"
  function updateDaysElement() {
      const daysElement = document.querySelector('.days');
      if (daysElement) {
          const elapsedDays = calculateElapsedDays(startDate);
          daysElement.textContent = ` ${elapsedDays} дней назад.`;
      }
  }

  // Обновить элемент при загрузке страницы
  updateDaysElement();
});
document.addEventListener("DOMContentLoaded", function() {
  // Укажите дату, с которой нужно считать прошедшее время
  const startDate = new Date('2024-01-17T00:00:00'); // Измените эту дату на нужную вам

  // Функция для вычисления прошедших дней
  function calculateElapsedDays(startDate) {
      const currentDate = new Date();
      const elapsedTime = currentDate - startDate;
      const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      return elapsedDays;
  }

  // Обновление содержимого элемента с классом "days"
  function updateDaysElement() {
      const daysElement = document.querySelector('.days2');
      if (daysElement) {
          const elapsedDays = calculateElapsedDays(startDate);
          daysElement.textContent = ` ${elapsedDays} дней назад.`;
      }
  }

  // Обновить элемент при загрузке страницы
  updateDaysElement();
});
document.addEventListener("DOMContentLoaded", function() {
  // Укажите дату, с которой нужно считать прошедшее время
  const startDate = new Date('2024-04-24T00:00:00'); // Измените эту дату на нужную вам

  // Функция для вычисления прошедших дней
  function calculateElapsedDays(startDate) {
      const currentDate = new Date();
      const elapsedTime = currentDate - startDate;
      const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      return elapsedDays;
  }

  // Обновление содержимого элемента с классом "days"
  function updateDaysElement() {
      const daysElement = document.querySelector('.days3');
      if (daysElement) {
          const elapsedDays = calculateElapsedDays(startDate);
          daysElement.textContent = ` ${elapsedDays} дней назад.`;
      }
  }

  // Обновить элемент при загрузке страницы
  updateDaysElement();
});
document.addEventListener("DOMContentLoaded", function() {
  // Укажите дату, с которой нужно считать прошедшее время
  const startDate = new Date('2023-12-09T00:00:00'); // Измените эту дату на нужную вам

  // Функция для вычисления прошедших дней
  function calculateElapsedDays(startDate) {
      const currentDate = new Date();
      const elapsedTime = currentDate - startDate;
      const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      return elapsedDays;
  }

  // Обновление содержимого элемента с классом "days"
  function updateDaysElement() {
      const daysElement = document.querySelector('.days4');
      if (daysElement) {
          const elapsedDays = calculateElapsedDays(startDate);
          daysElement.textContent = ` ${elapsedDays} дней назад.`;
      }
  }

  // Обновить элемент при загрузке страницы
  updateDaysElement();
});
document.addEventListener("DOMContentLoaded", function() {
    // Укажите дату, с которой нужно считать прошедшее время
    const startDate = new Date('2024-05-09T00:00:00'); // Измените эту дату на нужную вам
  
    // Функция для вычисления прошедших дней
    function calculateElapsedDays(startDate) {
        const currentDate = new Date();
        const elapsedTime = currentDate - startDate;
        const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        return elapsedDays;
    }
  
    // Обновление содержимого элемента с классом "days"
    function updateDaysElement() {
        const daysElement = document.querySelector('.days6');
        if (daysElement) {
            const elapsedDays = calculateElapsedDays(startDate);
            daysElement.textContent = ` ${elapsedDays} дней назад.`;
        }
    }
  
    // Обновить элемент при загрузке страницы
    updateDaysElement();
  });