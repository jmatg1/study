`root`1 на всё приложение  
`platform` для глобального состояния между несколькими приложениями  
`any` Angular создаёт новый экземпляр сервиса для каждого инжектора, который его запрашивает.
`null` Ты обязан вручную указать `providers: [...]` где-то (в компоненте или модуле), иначе инжектор не найдёт его.

```typescript
@Injectable( options?: { providedIn: Type<any> | 'root' | 'platform' | 'any' | null; }
```

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MyService {
    // ✅ In a service
    private http = inject(HttpClient);
}
```
