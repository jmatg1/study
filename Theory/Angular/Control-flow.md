### If
```html
@if (user.profile.settings.startDate; as startDate) {
{{ startDate }}
} else if () {
}
else {}
```

### For
`$count` Количество элементов в коллекции, перебираемых повторно  
`$index`	Индекс текущей строки  
`$first`	Является ли текущая строка первой строкой  
`$last`	Является ли текущая строка последней?  
`$even`	Является ли текущий индекс строки четным  
`$odd`	Является ли текущий индекс строки нечетным  
```typescript
@for (item of $array | async; track $index) {
    <span>{{item}}</span><br>
} @empty {
<li> There are no items. </li>
}
```

### Switch
```typescript
@switch (userPermissions) {
  @case ('admin') {
  }
  @case ('reviewer') {
  }
  @case ('editor') {
  }
  @default {
  }
}
```
