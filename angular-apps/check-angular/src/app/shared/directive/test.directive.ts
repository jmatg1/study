import {
    Directive, ElementRef, HostListener,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[appUnless]' })
export class UnlessDirective {
    private hasView = false;
    @Input() appUnless = true;
    // @Input() set appUnless(a: boolean) {
    //     console.log(a);
    //     console.log(this.templateRef);
    // };

    constructor(
        private el: ElementRef,
        // private templateRef: TemplateRef<any>,
        // private viewContainer: ViewContainerRef
    ) {
        // console.log(this.templateRef);
    }
    // private highlight(color: string) {
    //     this.el.nativeElement.style.backgroundColor = color;
    // }
    //
    // @Input() set appUnless(condition: boolean) {
    //     if (!condition && !this.hasView) {
    //         this.viewContainer.createEmbeddedView(
    //             this.templateRef
    //         );
    //         this.hasView = true;
    //     } else if (condition && this.hasView) {
    //         this.viewContainer.clear();
    //         this.hasView = false;
    //     }
    // }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
