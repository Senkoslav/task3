const express = require('express');
const app = express();

// Функция для вычисления НОД
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Функция для вычисления НОК
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Функция для проверки натурального числа
function isNaturalNumber(num) {
    const n = Number(num);
    return Number.isInteger(n) && n > 0;
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

// Обработчик GET запроса
app.get('*', (req, res) => {
    const x = req.query.x;
    const y = req.query.y;
    
    if (x === undefined || y === undefined) {
        return res.status(400).send('Missing parameters x and y');
    }
    
    if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
        return res.send('NaN');
    }
    
    const xNum = parseInt(x, 10);
    const yNum = parseInt(y, 10);
    const result = lcm(xNum, yNum);
    
    res.send(result.toString());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
