console.log("🚀 async.js начал выполнение");

try {
    document.getElementById("title").textContent = "👀 async.js изменил заголовок";
} catch (e) {
    console.log("❌ async.js: DOM ещё не загружен");
}
function f () {
    debugger;
    if(true) {
        var a = 1;
    }
    const b  =1;


}
f();
