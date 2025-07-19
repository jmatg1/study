import { RouterLink, RouterOutlet } from "@angular/router";
import { HttpClientService } from "../../core/http-client";
import { materialImports } from "../../shared/material-imports/material-imports";
import { MatExpansionPanel } from "@angular/material/expansion";
import { untracked } from "@angular/core/primitives/signals";
import {
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    computed,
    effect,
    Self,
    signal,
    SimpleChanges,
    SkipSelf
} from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { CommonModule } from "@angular/common";
import { interval } from "rxjs";

@Component({
    selector: 'app-list',
    imports: [
        ...materialImports,
        ChildComponent,
        CommonModule,
    ],
    providers: [CommonModule,
        HttpClientService,],
    viewProviders: [MatExpansionPanel,],
    templateUrl: './note-list-page.component.html',
    styleUrl: './note-list-page.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NoteListPageComponent {
    public parentValue = 10;
    public timer = 10;

    public childAlive = signal(false);
    public count = signal(0);
    public actionValue = signal(0);

    constructor(@SkipSelf() private httpService: HttpClientService, private cdr: ChangeDetectorRef) {
    }

    onChildDestroyed() {
        console.log('Дочерний компонент был уничтожен');
    }

    inc() {
        this.count.update((v) => v + 1)
    }

    incValueParent() {
        this.parentValue = this.parentValue + 1;
    }
}
