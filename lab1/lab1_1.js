function first () {
    console.clear()

    let A = 10;
    let B = 20;
    let C = 30;
    let D = 40;
    let E = 50;

    console.log("До перестановки:");
    console.log("A =", A);
    console.log("B =", B);
    console.log("C =", C);
    console.log("D =", D);
    console.log("E =", E);

    let temp = A;
    A = B;
    B = temp;

    console.log("\nПісля перестановки:");
    console.log("A =", A);
    console.log("B =", B);
    console.log("C =", C);
    console.log("D =", D);
    console.log("E =", E);
}

function second () {
    console.clear();
    
    const radius = Number(prompt("Введіть радіус кола:"));

    if (radius > 0) {
        const perimeter = 2 * Math.PI * radius;

        console.log("Радіус кола:", radius);
        console.log("Периметр кола:", perimeter.toFixed(2));
    } else {
        console.log("Помилка: радіус повинен бути більшим за нуль.");
    }

}

function third () {
    console.clear();
    
    const x = Number(prompt("Введіть координату x точки:"));
    const y = Number(prompt("Введіть координату y точки:"));

    // Параметри вертикальної смуги
    const left = -2;
    const right = 2;

    // Параметри кола: центр (0, 0), радіус 3
    const centerX = 0;
    const centerY = 0;
    const radius = 3;

    // Перевірка належності точки вертикальній смузі
    const inStrip = x >= left && x <= right;

    // Перевірка належності точки колу
    const inCircle = (x - centerX) ** 2 + (y - centerY) ** 2 <= radius ** 2;

    // Перевірка належності об'єднанню фігур
    if (inStrip || inCircle) {
    console.log("Точка належить об'єднанню фігур.");
    } else {
        console.log("Точка не належить об'єднанню фігур.");
    }

}

const firstButtonElement = document.querySelector('#first')
firstButtonElement.addEventListener("click", first);

const secondButtonElement = document.querySelector('#second')
secondButtonElement.addEventListener("click", second)

const thirdButtonElement = document.querySelector("#third")
thirdButtonElement.addEventListener("click", third)