console.log("✅ defer.js начал выполнение");

document.getElementById("title").textContent = "🧠 defer.js изменил заголовок";
document.getElementById("title").style.color = "green";

const promise = new Promise((resolve) => {
    console.log(2);
  resolve(1); // Промис завершается успешно со значением 1
});

promise.then((result) => {
  console.log(result); // Выведет: 1
});

console.log(3)
