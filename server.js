import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Функция gcd (НОД) для BigInt
function gcdBig(a, b) {
  return b === 0n ? a : gcdBig(b, a % b);
}

// Функция lcm (НОК) для BigInt
function lcmBig(a, b) {
  if (a === 0n || b === 0n) return 0n;
  return (a * b) / gcdBig(a, b);
}

app.get("/yaroslav76071_mail_ru", (req, res) => {
  res.type("text/plain");

  try {
    // Проверяем наличие обоих параметров
    if (req.query.x === undefined || req.query.y === undefined) {
      return res.send("NaN");
    }

    // Преобразуем в BigInt
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    // Проверяем что числа натуральные (>= 0)
    if (x < 0n || y < 0n) {
      return res.send("NaN");
    }

    const result = lcmBig(x, y);

    // Возвращаем только цифры, без лишних символов
    res.send(result.toString());
  } catch (err) {
    // Если x или y не преобразуются в BigInt → NaN
    res.send("NaN");
  }
});

app.listen(PORT, () => {
  console.log(
    `✅ Server running at http://localhost:${PORT}/yaroslav76071_mail_ru?x=1&y=121111111111111111111111111111111111111111111111111111111`
  );
});
