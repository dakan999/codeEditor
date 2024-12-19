const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Обработка POST запроса для выполнения кода
app.post('/execute', (req, res) => {
  const { language, code } = req.body;
  if (!language || !code) {
    return res.status(400).json({ status: 'error', error: 'Invalid input' });
  }

  // Мок результат выполнения
  res.json({ status: 'success', output: `Executed ${language} code: ${code}` });
});

// Запуск сервера
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
