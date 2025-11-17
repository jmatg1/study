`viewChild` `viewChildren`          -
`contentChild` `contentChildren`    - 

```html
<app-children>
  <div #content>content1</div>
  <div #content>content2</div>
</app-children>
```

```typescript
export class AppRoot {
    content = viewChild('content');
    contents = viewChildren('content');
}

export class AppChildren {
    content = contentChild('content');
    contents = contentChildren('content');
}
```
