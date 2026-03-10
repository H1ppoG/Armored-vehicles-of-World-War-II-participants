const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// отдаем все файлы из текущей папки
app.use(express.static(path.join(__dirname)));

// по умолчанию – index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});