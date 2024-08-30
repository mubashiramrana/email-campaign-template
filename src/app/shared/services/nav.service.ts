import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

// Menu
export interface Menu {
	headTitle?: string,
	headTitle2?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	badgeClass? :string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search: boolean = false;

	// Language
	public language: boolean = false;

	// Mega Menu
	public megaMenu: boolean = false;
	public levelMenu: boolean = false;
	public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Full screen
	public fullScreen: boolean = false;

	constructor(private router: Router) {
		this.setScreenWidth(window.innerWidth);
		fromEvent(window, 'resize').pipe(
			debounceTime(1000),
			takeUntil(this.unsubscriber)
		).subscribe((evt: any) => {
			this.setScreenWidth(evt.target.innerWidth);
			if (evt.target.innerWidth < 991) {
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			}
			if(evt.target.innerWidth < 1199) {
				this.megaMenuColapse = true;
			}
		});
		if(window.innerWidth < 991) { // Detect Route change sidebar close
			this.router.events.subscribe(event => {
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			});
		}
	}

	ngOnDestroy() {
		this.unsubscriber.next;
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: Menu[] = [
		{
			headTitle: 'MAIN',
		},
		{
			title: 'Dashboard', icon: 'home', type: 'sub', active: true, children: [
				{ path: '/dashboard/dashboard01', title: 'Dashboard-1', type: 'link' },
				{ path: '/dashboard/dashboard02', title: 'Dashboard-2', type: 'link' },
				{ path: '/dashboard/dashboard03', title: 'Dashboard-3', type: 'link' }
			]
		},
		{ path: '/widgets/', icon: 'server', title: 'Email Templates', type: 'link' },
		{ path: '/widgets/', icon: 'mail', title: 'User Management', type: 'link' },
		{ path: '/widgets/', icon: 'users', title: 'Group Management', type: 'link' },
		{ path: '/widgets/', icon: 'list', title: 'Campaign', type: 'link' },
		{ path: '/widgets/', icon: 'edit', title: 'License Management', type: 'link' },
		{ path: '/widgets/', icon: 'life-buoy', title: 'Rebranding ', type: 'link' },
		{
			headTitle: 'Settings',
		},
		{
			title: 'Setting', icon: 'settings', type: 'sub', active: false, children: [
				{ path: '/settings/account-settings', title: 'Account Setting', type: 'link' },
				{ path: '/settings/sms-settings', title: 'SMS Settings', type: 'link' },
				{ path: '/settings/smtp-settings', title: 'SMTP Settings', type: 'link' },
				{ path: '/apps/calendar', title: 'Domain Settings', type: 'link' },
				{ path: '/apps/contacts', title: 'Box Settings', type: 'link' },
				{ path: '/apps/image-compare', title: 'Phishing Reply Settings', type: 'link' },
				{ path: '/apps/notifications', title: 'Azure AD Defaults', type: 'link' },
				{ path: '/apps/widget-notification', title: 'LDPA Settings', type: 'link' },
				{ path: '/apps/treeview', title: 'InfoShield Settigns', type: 'link' },
				{ path: '/apps/file-manager01', title: 'Notifiction Settings', type: 'link' },
				{ path: '/apps/file-manager02', title: 'MFA Settigns', type: 'link' },
				{ path: '/apps/file-details', title: 'IMPA Settigns', type: 'link' },
				{ path: '/apps/file-details', title: 'IP Deny List', type: 'link' },
				{ path: '/apps/file-details', title: 'Azure Fetch Users App Seettings', type: 'link' },
				{ path: '/apps/file-details', title: 'Azure Email App Settings', type: 'link' },
				{ path: '/apps/file-details', title: 'Report Ad-in-Settings', type: 'link' },
				{ path: '/apps/file-details', title: 'UI Settings', type: 'link' },
				{ path: '/apps/file-details', title: 'License Settings', type: 'link' }
			]
		}
	];


	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
