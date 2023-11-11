import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewRecipePage } from './add-new-recipe.page';

describe('AddNewRecipePage', () => {
  let component: AddNewRecipePage;
  let fixture: ComponentFixture<AddNewRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
