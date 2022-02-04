import { UiHandleService } from './../../services/ui-handle.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription;
  isProjectFormActive!: boolean;
  constructor(private readonly uiHandleService: UiHandleService) { 
    this.subscription = this.uiHandleService.onToggle()
      .subscribe((res) => (this.isProjectFormActive = res.isProjectFormActive))
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleProjectForm(): void {
    this.uiHandleService.toggleProjectForm();
  }

}
