console.log("Завдання: 8 ==============================");

function task8() {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
  function fetchFakeData() {
    const fakeData = { name: "John", age: 30 };
    return Promise.resolve(fakeData);
  }
 fetchFakeData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Завдання 8 завершено");
  });
  
  // Створюємо fakeData константу з данними { name: "John",age: 30}
  // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  // Викликаємо функцію fetchFakeData
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task8
task8();
