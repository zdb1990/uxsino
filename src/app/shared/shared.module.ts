import { AutoComponent } from './../auto/auto.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
	imports: [
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
		ButtonModule,
		InputTextModule,
	],
	exports: [],
	declarations: [
		AutoComponent,
	],
	providers: [],
})
export class SharedModule { }
