`pending`	initial state  
`rejected`	operation failed  
`fulfilled`	operation completed  

`race` вернет самый быстрый независимо успешен он был или нет
`any` вернет первый успешный , ошибка если все были с ошибкой
`allSettled` вернет всё с массивом объекта {status, value, reason}
`all` вернет все если все успешны и вернет ошибку первого неверного промиса
`try` принимает первым аргументом функцию и следующие аругменты принимаемой функции
`withResolvers()` возвращает объект с `promise`, `resolve`, `reject`
### Основные методы экземпляра `Promise`
Эти методы вызываются на конкретном экземпляре `Promise`.

1. **`Promise.try(func, arg1, arg2, ..., argN)`**
   ```javascript
    const p1 = (a) => Promise.reject(a);
    
    Promise.try(p1, 3)
    .then(results => console.log(results))
    .catch(rejected => console.log(rejected)) // выведит 3
    ```
   
2. **`Promise.withResolvers()`**
   ```javascript
    const { promise, resolve, reject } = Promise.withResolvers();
    
    resolve(2);
    promise.then((res) => console.log(res))
    ```

1. **`Promise.prototype.then(onFulfilled, onRejected)`**
    - Регистрирует обработчики для выполнения при успешном выполнении (`onFulfilled`) или отклонении (`onRejected`) промиса.
    - Возвращает новый `Promise`, что позволяет создавать цепочки.

   ```javascript
   const promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve("Успех!"), 1000);
   });

   promise.then(
       result => console.log(result), // "Успех!"
       error => console.log(error)
   );
   ```

2. **`Promise.prototype.catch(onRejected)`**
    - Регистрирует обработчик для отклонения промиса. Эквивалентно `then(null, onRejected)`.
    - Используется для обработки ошибок.

   ```javascript
   const promise = new Promise((resolve, reject) => {
       setTimeout(() => reject(new Error("Ошибка!")), 1000);
   });

   promise.catch(error => console.log(error.message)); // "Ошибка!"
   ```

3. **`Promise.prototype.finally(onFinally)`**
    - Регистрирует обработчик, который выполняется независимо от того, успешно или с ошибкой завершился промис.
    - Не принимает значения результата или ошибки, но позволяет выполнять "очистку".

   ```javascript
   const promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve("Успех!"), 1000);
   });

   promise
       .then(result => console.log(result)) // "Успех!"
       .finally(() => console.log("Промис завершён!")); // "Промис завершён!"
   ```

### Статические методы `Promise`
Эти методы вызываются на самом конструкторе `Promise`, а не на его экземплярах.

1. **`Promise.resolve(value)`**
    - Создаёт промис, который немедленно выполняется с переданным значением.

   ```javascript
   Promise.resolve("Готово!")
       .then(result => console.log(result)); // "Готово!"
   ```

2. **`Promise.reject(reason)`**
    - Создаёт промис, который немедленно отклоняется с указанной причиной.

   ```javascript
   Promise.reject(new Error("Не удалось!"))
       .catch(error => console.log(error.message)); // "Не удалось!"
   ```

3. **`Promise.all(iterable)`**
    - Принимает итерируемый объект (например, массив промисов) и возвращает новый промис, который:
        - Выполняется, когда все переданные промисы выполнены, возвращая массив их результатов.
        - Отклоняется, если хотя бы один промис отклонён, возвращая первую ошибку.

   ```javascript
   const p1 = Promise.resolve(1);
   const p2 = Promise.resolve(2);
   const p3 = Promise.resolve(3);

   Promise.all([p1, p2, p3])
       .then(results => console.log(results)); // [1, 2, 3]
   ```

   Если один промис отклоняется:

   ```javascript
   const p1 = Promise.resolve(1);
   const p2 = Promise.reject(new Error("Ошибка!"));
   const p3 = Promise.resolve(3);

   Promise.all([p1, p2, p3])
       .catch(error => console.log(error.message)); // "Ошибка!"
   ```

4. **`Promise.allSettled(iterable)`**
    - Принимает итерируемый объект и возвращает промис, который выполняется, когда все переданные промисы завершены (выполнены или отклонены).
    - Возвращает массив объектов с полями `status` (`"fulfilled"` или `"rejected"`) и `value` или `reason`.

   ```javascript
   const p1 = Promise.resolve(1);
   const p2 = Promise.reject(new Error("Ошибка!"));
   const p3 = Promise.resolve(3);

   Promise.allSettled([p1, p2, p3])
       .then(results => console.log(results));
   // [
   //   { status: "fulfilled", value: 1 },
   //   { status: "rejected", reason: Error: Ошибка! },
   //   { status: "fulfilled", value: 3 }
   // ]
   ```

5. **`Promise.any(iterable)`**
    - Принимает итерируемый объект и возвращает промис, который:
        - Выполняется, как только хотя бы один промис выполнен, возвращая его результат.
        - Отклоняется, если все промисы отклонены, возвращая `AggregateError` с массивом ошибок.

   ```javascript
   const p1 = Promise.reject(new Error("Ошибка 1"));
   const p2 = Promise.resolve("Успех!");
   const p3 = Promise.reject(new Error("Ошибка 2"));

   Promise.any([p1, p2, p3])
       .then(result => console.log(result)); // "Успех!"
   ```

   Если все промисы отклонены:

   ```javascript
   const p1 = Promise.reject(new Error("Ошибка 1"));
   const p2 = Promise.reject(new Error("Ошибка 2"));

   Promise.any([p1, p2])
       .catch(error => console.log(error.errors)); // [Error: Ошибка 1, Error: Ошибка 2]
   ```

6. **`Promise.race(iterable)`**
    - Принимает итерируемый объект и возвращает промис, который завершается (выполняется или отклоняется) с результатом самого быстрого промиса.

   ```javascript
   const p1 = new Promise(resolve => setTimeout(() => resolve("Первый"), 2000));
   const p2 = new Promise(resolve => setTimeout(() => resolve("Второй"), 1000));

   Promise.race([p1, p2])
       .then(result => console.log(result)); // "Второй"
   ```

   Если самый быстрый промис отклоняется:

   ```javascript
   const p1 = new Promise((_, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000));
   const p2 = new Promise(resolve => setTimeout(() => resolve("Успех"), 2000));

   Promise.race([p1, p2])
       .catch(error => console.log(error.message)); // "Ошибка!"
   ```

### Примечания
- Все методы `Promise` возвращают новый объект `Promise`, что позволяет создавать цепочки вызовов.
- `Promise.allSettled` полезен, когда нужно дождаться завершения всех промисов, независимо от их статуса.
- `Promise.any` и `Promise.race` подходят для сценариев, где важен самый быстрый результат, но `Promise.any` игнорирует отклонения, пока не выполнится хотя бы один промис.
- Обработка ошибок через `.catch` важна для предотвращения необработанных исключений.

Если нужны дополнительные примеры или разъяснения по конкретному методу, дайте знать!
