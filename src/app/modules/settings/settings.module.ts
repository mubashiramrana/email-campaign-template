import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmsSettingsComponent } from './sms-settings/sms-settings.component';
import { SmtpSettingsComponent } from './smtp-settings/smtp-settings.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    SettingsComponent,
    AccountSettingsComponent,
    SmsSettingsComponent,
    SmtpSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class SettingsModule { }
