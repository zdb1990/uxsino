import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
  providers: [MessageService]
})
export class AutoComponent implements OnInit {
  msgs: Message[] = [];
  userMessage: FormGroup;
  userToken: Boolean = false;
  arr: any = [];
  constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.userMessage = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  _submit(): void {
    this.messageService.clear();
    if (this.userMessage.controls.name.valid && this.userMessage.controls.password.valid) {
      this.messageService.add({ severity: 'success', summary: '登陆成功', detail: '正在为您跳转主页' });
      this.router.navigateByUrl('/home');
    } else {
      this.messageService.add({ severity: 'error', summary: '登陆失败', detail: '请正确填写你的信息' });
    }

  }
}

