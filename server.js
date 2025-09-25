import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

function NOD(a, b) {
  return b === 0n ? a : NOD(b, a % b);
}

function NOK(a, b) {
  if (a === 0n || b === 0n) return 0n;
  return (a * b) / NOD(a, b);
}

app.get("/yaroslav76071_mail_ru", (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    if (x < 0n || y < 0n) {
      return res.type("text/plain").send("NaN");
    }

    const result = NOK(x, y);

    res.type("text/plain").send(result.toString());
  } catch (err) {
    res.type("text/plain").send("NaN");
  }
});

app.listen(PORT, () => {});
