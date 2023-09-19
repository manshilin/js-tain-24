console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 500);
  });
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 200);
  });
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 300);
  });
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  // Виводимо в консоль результат виконання проміса, який вирішився першим.
  Promise.any([promise1, promise2, promise3])
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log("Завдання 10 завершено");
    });
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task10();
