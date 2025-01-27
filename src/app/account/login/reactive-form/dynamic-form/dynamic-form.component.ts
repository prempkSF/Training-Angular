import { Component, Input } from '@angular/core';
import { Login } from '../class/login-baseclass';
import { ReactiveControlService } from '../control-service/reactive-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  @Input() questions: Login<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';
  constructor(private qcs: ReactiveControlService) {}
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as Login<string>[]);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
