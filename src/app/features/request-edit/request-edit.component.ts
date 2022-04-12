import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = new Request();
  requestId: number =0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestService: RequestService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.requestId = params.id;
      this.requestService.getById(this.requestId).subscribe(
        data => {
          if (data.length > 0){
            this.request = data[0];
          }
          console.log(data);
         },
         error => {
           console.log(error);
         }
      );
    });
  }

  editRequest () {
    this.requestService.updateRequest(this.request).subscribe(
      data => {
        this.router.navigateByUrl('/request/detail/' + this.request.id);
      },
      error => console.log(error)
    );
  }

}
