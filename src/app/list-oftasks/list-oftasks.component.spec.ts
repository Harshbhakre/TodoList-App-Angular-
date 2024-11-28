import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOFTasksComponent } from './list-oftasks.component';

describe('ListOFTasksComponent', () => {
  let component: ListOFTasksComponent;
  let fixture: ComponentFixture<ListOFTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOFTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOFTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
