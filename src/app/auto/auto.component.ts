import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
  providers: [MessageService]
})
export class AutoComponent implements OnInit {
  msgs: Message[] = [];
  userMessage: FormGroup;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userMessage = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }
}
