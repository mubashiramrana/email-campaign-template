import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-dynamic-reactive-form",
  templateUrl: "./dynamic-reactive-form.component.html",
  styleUrls: ["./dynamic-reactive-form.component.scss"]
})

export class DynamicReactiveFormComponent implements OnInit, OnChanges {

  @Input() formConfig!: any[];
  @Input() title! : string;

  dyanmicFrom!: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formConfig'] && changes['formConfig'].currentValue) {
      this.createDyanmicForm();
    }
  }

  ngOnInit() {
    if (this.formConfig?.length) {
      this.createDyanmicForm();
    }
  }

  createDyanmicForm() {
    const group: any = {};
    this.formConfig.forEach(controlConfig => {
      group[controlConfig.key] = [controlConfig.value, this.getValidators(controlConfig.validators)]
    });
    this.dyanmicFrom = this.fb.group(group);
  }

  getValidators(validators: any) {
    const formValidators = [];
    if (validators) {
      if (validators.required) {
        formValidators.push(Validators.required);
      }
      if (validators.minLength) {
        formValidators.push(Validators.minLength(validators.minLength));
      }
    }

    return formValidators;
  }

  submitForm() { }
}
