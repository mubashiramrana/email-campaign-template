import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sms-settings",
  templateUrl: "./sms-settings.component.html",
  styleUrls: ["./sms-settings.component.scss"]
})

export class SmsSettingsComponent implements OnInit {
  dyanmicFormFields : any;
  title = 'SMS Settings';
  constructor() { 

  }

  ngOnInit() {
    this.dyanmicFormFields = this.generateDynamicFormData();
  }

  generateDynamicFormData(){
    return [
      {
        type : 'text',
        label : 'Host',
        placeholder : '',
      },
      {
        type : 'text',
        label : 'Sender',
        placeholder : '',
      },
      {
        type : 'text',
        label : 'UserName',
        placeholder : '',
      },
      {
        type : 'password',
        label : 'Password',
        placeholder : '',
      },
      {
        type : 'text',
        label : 'Provider',
        placeholder : '',
      }
    ];
  }
}
