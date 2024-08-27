import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styleUrls: ["./account-settings.component.scss"]
})

export class AccountSettingsComponent implements OnInit {
  dyanmicFormFields : any;
  title = 'Account Settings';
  constructor() { 

  }

  ngOnInit() {
    this.dyanmicFormFields = this.generateDynamicFormData();
  }

  generateDynamicFormData(){
    return [
      {
        type : 'text',
        label : 'UserName',
        placeholder : '',
      },
      {
        type : 'password',
        label : 'Old Password',
        placeholder : '',
      },
      {
        type : 'password',
        label : 'New Password',
        placeholder : '',
      },
      {
        type : 'password',
        label : 'Confirm New Password',
        placeholder : '',
      }
    ];
  }
}
