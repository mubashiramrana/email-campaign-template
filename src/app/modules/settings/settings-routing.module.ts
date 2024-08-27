import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SmsSettingsComponent } from './sms-settings/sms-settings.component';
import { SmtpSettingsComponent } from './smtp-settings/smtp-settings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'account-settings',
        component: AccountSettingsComponent
      },
      {
        path: 'sms-settings',
        component: SmsSettingsComponent
      },
      {
        path: 'smtp-settings',
        component: SmtpSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
