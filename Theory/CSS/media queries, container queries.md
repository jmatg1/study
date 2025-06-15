Основная идея CSS Container Queries заключается в регистрации элемента как «контейнера» и применении стилей к другим элементам, когда элемент-контейнер удовлетворяет определенным условиям.

@container стили будут применяться к определенным элементам в зависимости от условий контейнера

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

```css
.post {
    container-name: card;
    container-type: inline-size;
}
/* If the container is larger than 700px */
@container card (min-width: 150px) {
    h2 {
        color:red;
    }
}
```
