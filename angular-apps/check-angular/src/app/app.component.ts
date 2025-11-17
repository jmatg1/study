import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        RouterLink,
        RouterLinkActive,
        MatButton
    ],
    providers: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
}
