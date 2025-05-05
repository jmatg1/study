# **Symbol в JavaScript**  

**`Symbol`** — это примитивный тип данных, введённый в **ECMAScript 6 (ES6)**, который представляет собой **уникальный и неизменяемый** идентификатор.  

## 🔹 **Основные особенности**  
1. **Уникальность**  
   - Каждый `Symbol` создаётся уникальным, даже если его описание одинаково.  
   - Не равен ни одному другому значению, включая символы с таким же описанием.  

   ```javascript
   const sym1 = Symbol("id");
   const sym2 = Symbol("id");

   console.log(sym1 === sym2); // false (всегда уникальны!)
   ```

2. **Неизменяемость**  
   - `Symbol` нельзя изменить после создания.  
   - Не участвует в автоматическом приведении типов (нельзя конвертировать в строку или число напрямую).  

   ```javascript
   const sym = Symbol("example");
   // console.log(sym + " text"); // Ошибка! Нельзя конвертировать
   console.log(sym.toString()); // "Symbol(example)" (явное преобразование)
   ```

3. **Не перечисляется в `for...in` и `Object.keys()`**  
   - Символьные свойства объекта **не видны** при обычном переборе.  
   - Чтобы получить символьные ключи, нужно использовать `Object.getOwnPropertySymbols()`.  

   ```javascript
   const obj = {
       [Symbol("key")]: "secret value",
       name: "Alice"
   };

   console.log(Object.keys(obj)); // ["name"] (символы не видны)
   console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(key)]
   ```

---

## 🔹 **Зачем нужны Symbol?**  
### 1. **Создание уникальных ключей для объектов**  
   - Позволяют добавлять **скрытые** свойства, которые не конфликтуют с другими.  

   ```javascript
   const user = {
       name: "Alice",
       [Symbol("id")]: 123 // "скрытое" свойство
   };

   console.log(user[Symbol("id")]); // undefined (нельзя получить без ссылки)
   ```

### 2. **Избежание конфликтов имён**  
   - Полезны для добавления метаданных в объекты, не влияя на основной код.  

   ```javascript
   const cache = Symbol("cache");

   function heavyCalculation() {
       if (!this[cache]) {
           this[cache] = computeExpensiveValue();
       }
       return this[cache];
   }
   ```

### 3. **Использование встроенных символов (`Well-known Symbols`)**  
   - JavaScript использует символы для настройки поведения объектов (например, итераторы, преобразование в примитивы).  

   ```javascript
   const arr = [1, 2, 3];
   const iterator = arr[Symbol.iterator](); // Получаем итератор

   console.log(iterator.next()); // { value: 1, done: false }
   ```

   **Примеры встроенных символов:**  
   - `Symbol.iterator` – делает объект итерируемым (используется в `for...of`).  
   - `Symbol.toStringTag` – задаёт строковое представление объекта (`Object.prototype.toString`).  
   - `Symbol.hasInstance` – настраивает поведение `instanceof`.  

---

## 🔹 **Как создать Symbol?**  
1. **`Symbol()`** – создаёт уникальный символ.  
   ```javascript
   const sym = Symbol("описание (необязательно)");
   ```

2. **`Symbol.for(key)`** – создаёт или возвращает символ из **глобального реестра**.  
   - Если символ с таким ключом уже есть – возвращает его.  
   - Полезен для совместного использования символов в разных частях программы.  

   ```javascript
   const sym1 = Symbol.for("id"); // Создаёт символ в реестре
   const sym2 = Symbol.for("id"); // Возвращает тот же символ

   console.log(sym1 === sym2); // true
   ```

3. **`Symbol.keyFor(sym)`** – возвращает ключ символа из глобального реестра.  
   ```javascript
   const sym = Symbol.for("id");
   console.log(Symbol.keyFor(sym)); // "id"
   ```

---

## 🔹 **Примеры использования**  
### 1. **Скрытые свойства объекта**  
```javascript
const user = {
    name: "Alice",
    [Symbol("password")]: "qwerty123"
};

console.log(user[Symbol("password")]); // undefined (недоступно без ссылки)
```

### 2. **Кастомное поведение объектов**  
```javascript
const toStringSymbol = Symbol("toString");

const obj = {
    [toStringSymbol]() {
        return "Это секретное сообщение!";
    }
};

console.log(obj[toStringSymbol]()); // "Это секретное сообщение!"
```

### 3. **Защита от перезаписи методов**  
```javascript
Array.prototype[Symbol("customMethod")] = function() {
    console.log("Этот метод защищён от конфликтов!");
};

const arr = [1, 2, 3];
arr[Symbol.for("customMethod")](); // "Этот метод защищён от конфликтов!"
```

---

## 🔹 **Ограничения**  
- **Не поддерживают `new`**  
  ```javascript
  // const sym = new Symbol(); // Ошибка!
  ```
- **Не сериализуются в JSON**  
  ```javascript
  const obj = { [Symbol("key")]: "value" };
  console.log(JSON.stringify(obj)); // {} (символы игнорируются)
  ```

---

## 🔹 **Вывод**  
- **`Symbol`** – это уникальный и неизменяемый идентификатор.  
- **Используется:**  
  - Для создания скрытых свойств объектов.  
  - Для избежания конфликтов имён.  
  - Для настройки поведения объектов (встроенные символы).  
- **Доступ:**  
  - Через глобальный реестр (`Symbol.for()`).  
  - Через методы типа `Object.getOwnPropertySymbols()`.  

Символы помогают писать более безопасный и гибкий код, избегая нежелательных перезаписей свойств! 🔒