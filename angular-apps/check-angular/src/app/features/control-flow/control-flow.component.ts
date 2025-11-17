import { Component } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'app-control-flow',
    imports: [
        AsyncPipe
    ],
    templateUrl: './control-flow.component.html',
    styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
    $imPipi = new BehaviorSubject(1);
    $array = new BehaviorSubject([1, 2, 3]);

    onChange() {
        this.$imPipi.next(this.$imPipi.value + 1);
        this.$array.next([Math.random(), Math.random()]);
    }
}
