import { Component, Input, OnInit } from '@angular/core'; import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'stat',
    template: `

			<div style="color:black;">
				성취율 : <b style="color:red">{{achieve}}%</b>
			</div>

			<div style="height:10px"></div>
			
			<div style="color:rgb(150,150,150);">
				사용 태그
			</div>
			<div style="max-width: 400px">
				<p-chart type="pie" [data]="data"></p-chart>
			</div>

			<div style="height:20px"></div>

			<div style="color:rgb(150,150,150); margin-bottom:5px;">
				등록 대비 완료횟수
			</div>

			<div style="max-width: 400px">
				<p-chart type="line" [data]="data2" (onDataSelect)="selectData($event)"></p-chart>
			</div>
		`,
    styles: [`
			h3 {
				color:gray;	
			}
		`]
})

export class StatComponent implements OnInit {
	achieve: number;

	data: any;
	data2: any;
	
	constructor() {
		this.data = {
			labels: ['코딩', '영어', '게임'],
			datasets: [
				{	
					data: [2, 1, 2],
					backgroundColor:[
						'#FF6384',
						'#36A2EB',
						'#FFCE56'
					],
					hoverBackgroundColor: [
						'#FF6384',
						'#36A2EB',
						'#FFCE56'
					]
				}	
			]
		}	

		this.data2 = {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				datasets: [
						{
								label: '등록',
								data: [65, 59, 80, 81, 56, 55, 40],
								fill: false,
								borderColor: '#4bc0c0'
						},
						{
								label: '완료',
								data: [28, 48, 40, 19, 86, 27, 90],
								fill: false,
								borderColor: '#565656'
						}
				]
		}
	}

	ngOnInit(): void {
		this.achieve = 88;
		const tmp = this.achieve;
		this.achieve = 0;

		const iid:number= setInterval(()=>{
			this.achieve += 3;	
			if (this.achieve >= tmp){
				this.achieve = tmp;	
				clearInterval(iid);	
			}
		}, 10);
	}
}
