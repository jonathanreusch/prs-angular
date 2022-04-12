import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Vendor } from 'src/app/models/vendor.model';
import { ProductService } from 'src/app/services/product.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productId: number = 0;
  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorSevice: VendorService
  ) {}

  ngOnInit(): void {
    this.vendorSevice.getAll().subscribe(
      (data) => {
        console.log(data);
        this.vendors = data;
      },
      (error) => {
        console.log(error);
      }
    )
    this.route.params.subscribe((params) => {
      this.productId = params.id;
      this.productService.getById(this.productId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.product = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  editProdut() {
    this.productService.updateProduct(this.product).subscribe(
      (data) => {
        this.router.navigateByUrl('/produt/detail/' + this.product.id);
      },
      (error) => console.log(error)
    );
  }
}
