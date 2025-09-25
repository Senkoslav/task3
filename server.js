import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// --- Функция НОД (BigInt) ---
function NOD(a, b) {
  return b === 0n ? a : NOD(b, a % b);
}

// --- Функция НОК (BigInt) ---
function NOK(a, b) {
  if (a === 0n || b === 0n) return 0n;
  return (a * b) / NOD(a, b);
}

// --- Маршрут для твоего email ---
app.get("/yaroslav76071_mail_ru", (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    // Проверка на отрицательные
    if (x < 0n || y < 0n) {
      return res.type("text/plain").send("NaN");
    }

    const result = NOK(x, y);

    // Ответ всегда text/plain, чтобы бот не ругался на HTML
    res.type("text/plain").send(result.toString());
  } catch (err) {
    res.type("text/plain").send("NaN");
  }
});

// --- Запуск сервера ---
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/yaroslav76071_mail_ru?x=12&y=18`);
});
