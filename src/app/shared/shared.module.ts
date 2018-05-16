import { AutoComponent } from './../auto/auto.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		ReactiveFormsModule,
	],
	exports: [],
	declarations: [
		AutoComponent,
	],
	providers: [],
})
export class SharedModule { }
