// Ключ для локального сховища
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт для зберігання даних форми
let formData = {
  email: '',
  message: '',
};

// Посилання на елементи DOM
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

// Функція для збереження даних у локальне сховище
const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Функція для заповнення форми з локального сховища
const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
};

// Слухач події input
form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});

// Слухач події submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Перевірка на заповненість полів
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Вивід об'єкта formData в консоль
  console.log(formData);

  // Очищення форми, локального сховища і об'єкта formData
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

// Заповнення форми при завантаженні сторінки
populateForm();
