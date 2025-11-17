### ngTemplateOutlet

`ngTemplateOutlet` — это директива Angular, которая позволяет вставить TemplateRef в DOM, как будто ты динамически создаёшь embedded view, но в декларативной форме, прямо в шаблоне.

Это самый удобный способ рендерить <ng-template> с контекстом.

`createEmbeddedView` используется, чтобы программно создать и вставить **вёрстку из `ng-template`**

```html
<ng-template #myFragment>
  <p>Я появился через ngTemplateOutlet</p>
</ng-template>
<ng-template #myFragment1>
  <p>Я появился через createEmbeddedView</p>
</ng-template>

<ng-container *ngTemplateOutlet="myFragment"></ng-container>

<button (click)="onCreate()">createEmbeddedView</button>

```

```typescript
export class TemplateOutletComponent {
    viewC = viewChild.required<TemplateRef<any>>('myFragment1');
    private viewContainer = inject(ViewContainerRef);

    onCreate() {
        console.log(this.viewC());
        this.viewContainer.createEmbeddedView(this.viewC());
    }
}

```
