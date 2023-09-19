console.log("Завдання: 4 ==============================");

// Функція task4, яка буде використовувати проміси
function task4() {
  // Визначаємо перший проміс з іменем promise1
  // Функція promise1, повертає новий проміс
  // Ми викликаємо конструктор Promise, що приймає в якості аргументу функцію 
  //(executor function)
  // Ця функція приймає два аргументи: resolve і reject, які є функціями
   const promise1 = new Promise((resolve, reject) => {
  // Використовуємо функцію setTimeout, щоб симулювати асинхронну операцію
  // Ця функція приймає два аргументи: функцію, яку потрібно викликати після певного часу, і час у мілісекундах (1000 мс = 1 с)
  // Після 1 секунди викликаємо функцію resolve, яка змінює стан проміса на "виконано" і передає значення 'Проміс 1 виконано'
    setTimeout(() => {
      resolve('Проміс 1 виконано');
    }
    , 1000);
  });
  


  // Визначаємо другий проміс з іменем promise2
  // Функція promise2, повертає новий проміс
  // Використовуємо функцію setTimeout, щоб симулювати асинхронну операцію з затримкою 1сек
  // Після 1 секунди викликаємо функцію resolve, яка змінює стан проміса на "виконано" і передає значення 'Проміс 2 виконано'
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Проміс 2 виконано');
    }, 1000);
  });
  // Promise.all приймає масив промісів і повертає новий проміс, який вирішується, коли всі вхідні проміси вирішені
  // Функція then викликається, коли проміс вирішений
  Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results);
  })

  // Результати всіх вхідних промісів передаються у функцію then у вигляді масиву, виводимо в консоль масив
  // ['Проміс 1 виконано', 'Проміс 2 виконано']
.catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Всі операції завершено");
  });

  // Функція catch викликається, коли будь-який з промісів відхилено
  // Повідомлення про помилку від першого відхиленого проміса передається у функцію catch, виводимо в консоль помилку
  // Функція finally викликається незалежно від того, чи вирішено проміс, чи відхилено
  // Виводимо в консоль "Всі операції завершено"
}

// Викликаємо функцію task4
task4();
