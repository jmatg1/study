import { importProvidersFrom } from '@angular/core';
import {
    MatAnchor,
    MatButton,
    MatButtonModule, MatFabAnchor,
    MatFabButton,
    MatIconButton,
    MatMiniFabButton
} from '@angular/material/button';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { HttpClientService } from "../../core/http-client";
// и другие модули

export const materialImports = [
    MatExpansionModule, MatDivider, MatIcon, MatButton, MatAnchor, MatIconButton, MatFabButton, MatMiniFabButton, MatFabAnchor,MatExpansionPanel,

];
