// Завантаження мовних ресурсів
let currentLanguage = 'uk';
const languageFiles = {
  uk: 'languages/uk.json',
  en: 'languages/en.json',
  it: 'languages/it.json',
  pt: 'languages/pt.json',
  tr: 'languages/tr.json',
  he: 'languages/he.json',
  kz: 'languages/kz.json',
};

// Зміна мови
document.getElementById('language-select').addEventListener('change', (e) => {
  currentLanguage = e.target.value;
  loadLanguage(currentLanguage);
});

function loadLanguage(lang) {
  fetch(languageFiles[lang])
    .then(response => response.json())
    .then(data => {
      document.getElementById('title').textContent = data.title;
      document.getElementById('label1').textContent = data.quadrant1;
      document.getElementById('label2').textContent = data.quadrant2;
      document.getElementById('label3').textContent = data.quadrant3;
      document.getElementById('label4').textContent = data.quadrant4;
      document.getElementById('clear-btn').textContent = data.clearButton;
      document.getElementById('save-btn').textContent = data.saveButton;
      document.getElementById('theme-btn').textContent = data.themeButton;
      document.getElementById('hint-text').innerHTML = `<p>${data.hint}</p>`;
    });
}

// Темний режим
document.getElementById('theme-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Підказки
document.getElementById('hint-btn').addEventListener('click', () => {
  document.getElementById('hint-text').classList.toggle('hidden');
});

// Очищення полів
document.getElementById('clear-btn').addEventListener('click', () => {
  document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
});

// Збереження результатів
document.getElementById('save-btn').addEventListener('click', () => {
  const content = Array.from(document.querySelectorAll('textarea')).map(textarea => textarea.value).join('\n');
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'descartes-square.txt';
  link.click();
});

// Завантаження мови за замовчуванням
loadLanguage(currentLanguage);