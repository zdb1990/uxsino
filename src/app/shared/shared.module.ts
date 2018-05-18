import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { GrowlModule } from 'primeng/growl';
import { AutoComponent } from './../auto/auto.component';
@NgModule({
	imports: [
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
		ButtonModule,
		InputTextModule,
		AccordionModule,
		GrowlModule,
	],
	exports: [],
	declarations: [
		AutoComponent
	],
	providers: [],
})
export class SharedModule { }
