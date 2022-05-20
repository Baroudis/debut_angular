import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {
  produits: any;
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.products()
  }

  products() {
    this.produitService.getproducts().subscribe(data => {
      this.produits = data;
      console.log(this.produits)
    })
  }

  delete(id:any){
    
    this.produitService.delete(id).subscribe(()=>{
      console.log("produit with id : " + id + " deleted")
      //document.getElementById("lescards")?.classList.add("d-none")
      //document.getElementById("lescards")?.classList.remove("d-none")
      window.location.reload()
    })
  }

}


