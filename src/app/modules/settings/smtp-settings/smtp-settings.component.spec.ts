import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SmtpSettingsComponent } from "./smtp-settings.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SmtpSettingsComponent", () => {

  let fixture: ComponentFixture<SmtpSettingsComponent>;
  let component: SmtpSettingsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SmtpSettingsComponent]
    });

    fixture = TestBed.createComponent(SmtpSettingsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
