import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AccountSettingsComponent } from "./account-settings.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AccountSettingsComponent", () => {

  let fixture: ComponentFixture<AccountSettingsComponent>;
  let component: AccountSettingsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AccountSettingsComponent]
    });

    fixture = TestBed.createComponent(AccountSettingsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
