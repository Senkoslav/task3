import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

function gcdBig(a, b) {
  return b === 0n ? a : gcdBig(b, a % b);
}

function lcmBig(a, b) {
  if (a === 0n || b === 0n) return 0n;
  return (a * b) / gcdBig(a, b);
}

app.get("/yaroslav76071_mail_ru", (req, res) => {
  res.type("text/plain");

  try {
    const { x, y } = req.query;

    // Проверяем, что x и y существуют и не пустые строки
    if (!x || !y) {
      return res.send("NaN");
    }

    const bx = BigInt(x);
    const by = BigInt(y);

    if (bx < 0n || by < 0n) {
      return res.send("NaN");
    }

    const result = lcmBig(bx, by);
    res.send(result.toString());
  } catch (err) {
    res.send("NaN");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/yaroslav76071_mail_ru`);
});
