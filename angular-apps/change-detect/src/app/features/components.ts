import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";

@Component({
    selector: 'app-child',
    template: `Дочерний: {{ data }}`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
    @Input() data!: string;
}


@Component({
    selector: 'app-parent',
    imports: [
        ChildComponent
    ],
    template: `
    <p>Родитель: {{ parentText }}</p>
    <button (click)="update()">Обновить</button>
    <app-child [data]="childText"></app-child>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
    parentText = 'Исходный родитель';
    childText = 'Исходный ребёнок';

    constructor(private cd: ChangeDetectorRef) {}

    update() {
        this.parentText = 'Новый родитель';
        this.childText = 'Новый ребёнок';
        this.cd.detectChanges(); // 🔥 тут главный момент
    }
}

@Component({
    selector: 'app-grand',
    template: `
      <p>Дед: {{ grandText }}</p>
      <app-parent></app-parent>
    `,
    imports: [
        ParentComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandParentComponent {
    grandText = 'Дедовский текст';
}
