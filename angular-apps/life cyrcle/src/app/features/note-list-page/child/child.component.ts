import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    SimpleChanges,
    ViewChild,
    ElementRef,
    afterNextRender,
    afterRender,
    afterRenderEffect,
    signal,
    effect, EffectRef, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';


@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnChanges,    OnInit,    DoCheck,    AfterContentInit,    AfterContentChecked,    AfterViewInit,    AfterViewChecked,    OnDestroy {

    @Input() inputValue = 0;
    intervalValue = 0;
    @Output() destroyed = new EventEmitter<void>();
    @ViewChild('title') titleRef!: ElementRef<HTMLHeadingElement>;

    count = signal(0);
    private readonly cleanupEffect: EffectRef;

    constructor(private cdr: ChangeDetectorRef,) {
        console.log('1. Constructor called');

        // Effect для отслеживания изменений сигнала
        this.cleanupEffect = effect(() => {
            // console.log('Signal changed:', this.count());
        });
        //
        // // Однократный эффект после следующего рендеринга
        // afterNextRender(() => {
        //     console.log('afterNextRender: Component rendered first time');
        // });
        //
        // // Эффект после каждого рендеринга
        // afterRender(() => {
        //     console.log('afterRender: Component rendered');
        // });

        // Альтернативный эффект рендеринга
        // afterRenderEffect(() => {
        //     console.log('afterRenderEffect: Runs after render');
        // });
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges', changes);
    }

    ngOnInit() {

        this.cdr.detectChanges();
        console.log('3. ngOnInit - Component initialized');
    }

    ngDoCheck() {
        console.log('4. ngDoCheck - Change detection run');
    }

    ngAfterContentInit() {
        console.log('5. ngAfterContentInit - Content projected');
    }

    ngAfterContentChecked() {
        console.log('6. ngAfterContentChecked - Content checked');
    }

    ngAfterViewInit() {
        console.log('7. ngAfterViewInit - View initialized');
        console.log('Title element:', this.titleRef.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('8. ngAfterViewChecked - View checked');
    }

    ngOnDestroy() {
        console.log('9. ngOnDestroy - Component destroying');
        this.cleanupEffect.destroy();
        this.destroyed.emit();
    }

    increment() {
        this.count.update(v => v + 1);
    }

    changeInput() {
        this.inputValue += 1;
    }
}
