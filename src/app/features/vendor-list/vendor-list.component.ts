import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[] = [];
  //vendor: Vendor = new Vendor()
  //vendorId: number = 1

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.getAll().subscribe(
      data => {
        console.log(data);
        this.vendors = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteVendor(id: number) {
    this.vendorService.deleteById(id).subscribe(
      (data) => {
        //this.router.navigateByUrl('/user/list')
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }
}
