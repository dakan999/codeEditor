const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Подключаем CORS

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/run', (req, res) => {
  const { language, code } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: 'Language and code are required.' });
  }

  let output;

  if (language === 'javascript') {
    try {
      output = eval(code);
    } catch (error) {
      output = `Error executing JavaScript: ${error.message}`;
    }
  } else if (language === 'python') {
    output = `Executed Python code: ${code}`;
  } else {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  res.json({
    message: `Code executed in ${language}`,
    codeOutput: output,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
