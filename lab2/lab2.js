const radius = 5;
const stripWidth = 1;
let attempts = 0;
let previousDistance = null;

alert(
  "Гра «Влуч у область»!\n" +
    "Введіть координати точки (x, y).\n" +
    "Вертикальна стрічка: |x| <= 1\n" +
    "Горизонтальна стрічка: |y| <= 1\n" +
    "Коло: x² + y² <= 25",
);

while (true) {
  const inputX = prompt("Введіть координату x:");
  if (inputX === null) break;

  const inputY = prompt("Введіть координату y:");
  if (inputY === null) break;

  const x = Number(inputX);
  const y = Number(inputY);

  if (
    inputX.trim() === "" ||
    inputY.trim() === "" ||
    !Number.isFinite(x) ||
    !Number.isFinite(y)
  ) {
    alert("Помилка! Введіть коректні числові координати.");
    continue;
  }

  attempts++;

  // Перевірка вертикальної стрічки
  const inVerticalStrip = Math.abs(x) <= stripWidth;

  // Перевірка горизонтальної стрічки
  const inHorizontalStrip = Math.abs(y) <= stripWidth;

  // Перевірка кола
  const inCircle = x * x + y * y <= radius * radius;

  // Об'єднання стрічок у перетині з колом
  const hit = (inVerticalStrip || inHorizontalStrip) && inCircle;

  if (hit) {
    alert(`Нарешті ви влучили з ${attempts}-ї спроби!`);
    break;
  }

  // Відстань від точки до центра координат
  const distance = Math.sqrt(x * x + y * y);

  if (previousDistance === null) {
    alert("Промах! Спробуйте ще раз.");
  } else if (distance < previousDistance) {
    alert("Тепліше!");
  } else if (distance > previousDistance) {
    alert("Холодніше!");
  } else {
    alert("Відстань не змінилася. Спробуйте ще раз!");
  }

  previousDistance = distance;
}
