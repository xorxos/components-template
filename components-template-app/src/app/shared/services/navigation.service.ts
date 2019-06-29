import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  // Observables
  private _sidebarCollapsed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sidebarCollapsedObservable: Observable<boolean> = this._sidebarCollapsed.asObservable();

  private _notificationBarCollapsed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public notificationBarCollapsedObservable: Observable<boolean> = this._notificationBarCollapsed.asObservable();

  constructor() { }

  public toggleSideBar() {
    if (this._sidebarCollapsed.value === false) {
      this._sidebarCollapsed.next(true)
    } else {
      this._sidebarCollapsed.next(false)
    }
  }

  public toggleNotificationBar() {
    if (this._notificationBarCollapsed.value === false) {
      this._notificationBarCollapsed.next(true)
    } else {
      this._notificationBarCollapsed.next(false)
    }
  }
}
