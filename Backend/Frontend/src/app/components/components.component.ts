import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CommonService } from '../shared/service/common/common.service';
import { SidebarService } from '../shared/service/sidebar/sidebar.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  showMiniSidebar: boolean = false;
  base: string = '';
  page: string = '';
  last: string = '';
  public isuserHeader!: boolean;
  public isAdminHeader!: boolean;
  public isstudentHeader!: boolean;
  public mainFooter!: boolean;
  public routeStatus:any ;
  public routeStatusSub:any ;
  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private common: CommonService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.setRouting(data);
      }
    });

    this.setRouting(this.Router);

    this.common.isAdminHeader.subscribe((res: boolean) => {
      this.isAdminHeader = res;
    });
    this.common.isuserHeader.subscribe((res: boolean) => {
      this.isuserHeader = res;
    });
    this.common.isstudentHeader.subscribe((res: boolean) => {
      this.isstudentHeader = res;
    });
    this.common.mainFooter.subscribe((res: boolean) => {
      this.mainFooter = res;
    });
    this.sidebar.toogleSidebar.subscribe((res: any) => {
      if (res == 'true') {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });
  }

  ngOnInit(): void {}

  private setRouting(data: any): void {
    this.routeStatus = data.url.split('/')[1];
    this.routeStatusSub = data.url.split('/')[2];

    this.common.base.next(data.url.split('/')[1]);
    this.common.page.next(data.url.split('/')[2]);
    this.common.last.next(data.url.split('/')[3]);

    if (
      this.routeStatus == 'home' ||
      this.routeStatus == 'pages' ||
      this.routeStatus == 'blog'
    ) {
      this.common.isuserHeader.next(true);
      this.common.isstudentHeader.next(false);
      this.common.isAdminHeader.next(false);
    }
    if (
      this.routeStatus == 'student' ||
      (this.routeStatus == 'pages' &&
        (this.routeStatusSub == 'course' ||
          this.routeStatusSub === 'cart' ||
          this.routeStatusSub === 'checkout' ||
          this.routeStatusSub === 'purchase-history'))
    ) {
      this.common.isuserHeader.next(false);
      this.common.isstudentHeader.next(true);
      this.common.isAdminHeader.next(false);
    }
    if (this.routeStatus == 'instructor') {
      this.common.isuserHeader.next(false);
      this.common.isstudentHeader.next(false);
      this.common.isAdminHeader.next(true);
    }

  }
}
