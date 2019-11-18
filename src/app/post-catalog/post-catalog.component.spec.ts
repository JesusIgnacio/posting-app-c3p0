import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCatalogComponent } from './post-catalog.component';

describe('PostCatalogComponent', () => {
  let component: PostCatalogComponent;
  let fixture: ComponentFixture<PostCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
