// calculator_test.js
import { assertEquals } from "https://deno.land/std@0.224.0/testing/asserts.ts";

// Simula una evaluación básica similar al hook useCalculator
function evaluate(input) {
  try {
    // Reemplazar símbolo de porcentaje con su valor decimal
    const sanitized = input.replace(/%/g, "*0.01");

    // Evitar múltiples puntos decimales consecutivos
    if (/\d*\.\d*\./.test(sanitized)) return "ERROR";

    const result = eval(sanitized);

    // Validaciones del resultado
    if (
      typeof result !== "number" ||
      isNaN(result) ||
      result < 0 ||
      result > 999999999 ||
      result.toString().length > 9
    ) {
      return "ERROR";
    }

    return result.toString();
  } catch {
    return "ERROR";
  }
}

// 🧪 Test Cases
Deno.test("suma básica sin errores", () => {
  assertEquals(evaluate("2+2"), "4");
});

Deno.test("multiplicación normal", () => {
  assertEquals(evaluate("5*3"), "15");
});

Deno.test("división precisa", () => {
  assertEquals(evaluate("10/2"), "5");
});

Deno.test("resta básica", () => {
  assertEquals(evaluate("7-4"), "3");
});

Deno.test("suma con decimales", () => {
  assertEquals(evaluate("1.5+2.5"), "4");
});

Deno.test("número negativo y suma", () => {
  assertEquals(evaluate("-5+10"), "5");
});

Deno.test("porcentaje como decimal", () => {
  assertEquals(evaluate("50%"), "0.5");
});

Deno.test("multiplicación que supera el límite", () => {
  assertEquals(evaluate("999999999*2"), "ERROR");
});

Deno.test("división con resultado largo", () => {
  const res = evaluate("22/7");
  assertEquals(res.length <= 9, true);
});

Deno.test("entrada con múltiples puntos decimales", () => {
  assertEquals(evaluate("1.2.3"), "ERROR");
});
