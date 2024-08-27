import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SmsSettingsComponent } from "./sms-settings.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SmsSettingsComponent", () => {

  let fixture: ComponentFixture<SmsSettingsComponent>;
  let component: SmsSettingsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SmsSettingsComponent]
    });

    fixture = TestBed.createComponent(SmsSettingsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
