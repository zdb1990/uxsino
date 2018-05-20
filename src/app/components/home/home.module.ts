import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        MenubarModule,
        AccordionModule,
        ButtonModule,
        InputTextModule,
        DropdownModule
    ],
    exports: [
        ...routedComponents
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [],
})
export class HomeModule { }
