import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-smtp-settings",
  templateUrl: "./smtp-settings.component.html",
  styleUrls: ["./smtp-settings.component.scss"]
})

export class SmtpSettingsComponent implements OnInit {
  notificationSMTPFields:any;
  forwardSMTPFields:any;
  active = 1;
  constructor() { 

  }

  ngOnInit() {
    this.notificationSMTPFields = this.generateSMTPNotificationFormData();
    this.forwardSMTPFields = this.generateSMTPForwardFormData();
  }

  generateSMTPNotificationFormData(){
    return [
      {
        type : 'text',
        label : 'From',
        placeholder : '',
      },
      {
        type : 'text',
        label : 'Host',
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
      }
    ];
  }

  generateSMTPForwardFormData(){
    return [
      {
        type : 'text',
        label : 'From',
        placeholder : '',
      },
      {
        type : 'text',
        label : 'Sender',
        placeholder : '',
      },
      {
        type : 'text',
        label : 'Host',
        placeholder : '',
      },
      {
        type : 'password',
        label : 'Password',
        placeholder : '',
      }
    ];
  }
}
