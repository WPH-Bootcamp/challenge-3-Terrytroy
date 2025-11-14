// code here, goodluck!!

"use strict";

let prompt = require("prompt-sync")();

function getValidNumberInput(prompMessage) {
  let num;
  let flag = 0;
  do {
    flag++;
    if (flag > 1) console.log("Input tidak valid, Harus berupa angka.");
    num = prompt(prompMessage);
  } while (isNaN(num) || num.trim() === "");
  return parseFloat(num);
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  while (true) {
    const op = prompt(promptMessage);
    if (validOperators.includes(op)) {
      return op;
    }
    console.log("Operator tidak valid! Pilih salah satu: +, -, *, /, %, **");
  }
}

function calculation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return "Error: Division by zero!";
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "Operator tidak valid!";
  }
}

console.log("Program Calculator Sederhana");

while (true) {
  let angka1 = getValidNumberInput("Masukan angka pertama: ");
  let angka2 = getValidNumberInput("Masukan angka kedua: ");
  let operator = getValidOperatorInput(
    "Masukan operator (+, -, *, /, %, **): "
  );

  let hasil = calculation(parseInt(angka1), parseInt(angka2), operator);

  console.log("==============================");
  console.log("Hasilnya adalah : ", hasil);
  console.log("==============================");

  const typeOfResult = typeof hasil;
  console.log("Tipe hasil:", typeOfResult);

  if (typeOfResult === "number") {
    if (hasil > 0) {
      console.log("Angka ini POSITIF");
    } else if (hasil < 0) {
      console.log("Angka ini NEGATIF");
    } else {
      console.log("Angka ini NOL");
    }

    if (Number.isInteger(hasil)) {
      console.log("Tipe angka: Integer");
    } else {
      console.log("Tipe angka: Float");
    }

    const evenOdd = hasil % 2 === 0 ? "Genap (Even)" : "Ganjil (Odd)";
    console.log("Angka ini:", evenOdd);
  } else if (typeOfResult === "string") {
    console.log("Error: Division by zero!");
  } else {
    console.log(hasil ?? "Result is undefined or null, something went wrong!");
  }

  let question = prompt("Apakah Anda ingin melanjutkan? (yes/no): ");

  if (question.toLowerCase() === "no") {
    console.log("Terima kasih telah menggunakan kalkulator sederhana ini.");
    break;
  }
}
console.log("Program selesai.");

// sorry coach kali ini banyak kebantu pakai AI.
// dan jujur utk Logic dr pembuatan agak kurang
// tapi dr baca yg sudah jadi masih cukup bisa.
// di bagian buat calculator sy cukup kesulitan,
// utk bagian analiis masih cukup bisa.
