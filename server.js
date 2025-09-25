import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Функция НОД
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Функция НОК
function lcm(a, b) {
  if (a === 0 || b === 0) return 0; // по условию 0 считается натуральным
  return (a * b) / gcd(a, b);
}

app.get("/yaroslav76071_mail_ru", (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  // Проверка: x и y должны быть целыми и >= 0
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
    return res.send("NaN");
  }

  const result = lcm(x, y);
  res.send(result.toString());
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}/yaroslav76071_mail_ru?x=0&y=18`);
});
