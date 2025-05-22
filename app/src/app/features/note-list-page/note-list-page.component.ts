
import { RouterLink, RouterOutlet } from "@angular/router";
import { HttpClientService } from "../../core/http-client";
import { materialImports } from "../../shared/material-imports/material-imports";
import { MatExpansionPanel } from "@angular/material/expansion";
import { untracked } from "@angular/core/primitives/signals";
import { Component, computed, effect, signal, SimpleChanges } from "@angular/core";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-list',
    imports: [RouterLink,
        ...materialImports, ChildComponent
    ],
    viewProviders: [MatExpansionPanel, ],
  templateUrl: './note-list-page.component.html',
  styleUrl: './note-list-page.component.scss',
  standalone: true,
})
export class NoteListPageComponent {
    public panelOpenState = signal(5)
    public dow = signal(2)
    public computed1 = computed(() => this.panelOpenState() + this.dow())

    constructor(private http: HttpClientService) {
        this.http.getHello().subscribe(res => {
            console.log(res);
        })

        effect(() => {
            console.log('Count changed to:', untracked(() => this.computed1()) );
        })
    }
    parentValue = 10;

    changeValue() {
        this.parentValue += 5;
    }

    onChildDestroyed() {
        console.log('Parent: child component destroyed');
    }
}
