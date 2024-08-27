import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DynamicReactiveFormComponent } from "./dynamic-reactive-form.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DynamicReactiveFormComponent", () => {

  let fixture: ComponentFixture<DynamicReactiveFormComponent>;
  let component: DynamicReactiveFormComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DynamicReactiveFormComponent]
    });

    fixture = TestBed.createComponent(DynamicReactiveFormComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
