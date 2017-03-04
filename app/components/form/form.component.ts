import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'form',
    template: `
			<div class="label">목표</div>
			<input type="text" pInputText [(ngModel)]="todo" size="30" />

			<div class="label">태그</div>
			<input type="text" pInputText [(ngModel)]="tags" size="30"/>

			<div class="label">시작일</div>
			<p-calendar [(ngModel)]="from" [locale]="kr" [showIcon]="true" readonlyInput="true"></p-calendar> 

			<div class="label">완료일</div>
			<p-calendar [(ngModel)]="to" [locale]="kr" [showIcon]="true" readonlyInput="true"></p-calendar> 
			
			<br>
			<br>

			<a [routerLink]="['/stat']">
				<div class="btn" (click)="onclick()" style="padding: 5px 0;">
					<span style="font-size: 0.7em; font-weight:bold;">등록</span>
				</div>
			</a>  

			<a [routerLink]="['/form']" style="color:rgb(150,150,150);margin-left:5px;">

		`,
    //styleUrls: ['components/form/form.component.css']
    styles: [`
			.label{
				color: gray;	
				margin-top: 10px;
				margin-bottom: 5px;
			}
		`]
})
export class FormComponent {
	from: Date;
	to: Date;
	todo: string;
	tags: string;

	kr: any;

	onclick(){
		alert('제출');	
	}

	ngOnInit(){
		this.kr = {
			firstDayOfWeek: 0,
			dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
			dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
			monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
			monthNamesShort: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
		};	
	}
}
