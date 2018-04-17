import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Item } from '../../models/item';
import { Http } from '@angular/http';

@Injectable()
export class Items {
  items: Item[] = [];
  productos;
  tags;
  currentItems;

  defaultItem: any = {

  };


  constructor(public http:Http, public network:Network) {

    let productosUrl = "http://nutriapp.com.co/wp-json/wp/v2/mm_producto?per_page=10000";
    let tagsUrl = "http://nutriapp.com.co/wp-json/wp/v2/tags";
    this.http.get(productosUrl).map(res => res.json()).subscribe(data => {

      this.productos = data;

      this.http.get(tagsUrl).map(res => res.json()).subscribe(data => {

        this.tags = data;

        this.currentItems = productosOrganizados(this.productos,this.tags);
        for (let item of this.currentItems) {
          this.items.push(new Item(item));
        }
      });

    });


    var productosOrganizados = function organizarProductos(productos, tags){

      for(var i = 0; i < productos.length;i++ ){

        for(var k = 0; k < productos[i].tags.length; k++){
          for(var j = 0; j < tags.length; j++){
            if(productos[i].tags[k] ==  tags[j].id){
              productos[i].tags[k] = tags[j].name;
            }
          }
        }
      }
      return productos;

    }

  }

  query(params?: any) {
    return this.items.filter((item) => {

      let response=[];
      for (let key in params) { // search by tags
        for(let tag  in item.tags){

          let field = item.tags[tag];
          if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
            response.push(item);
          } else if (field == params[key]) {
            response.push(new Item(item));
          }
        }
      }
      for (let key in params) { // search by fabricante
        if(typeof item.datos['mm_producto_fabricante'] == 'undefined')
          return;
        let field = item.datos['mm_producto_fabricante'][0];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          response.push(item);
        } else if (field == params[key]) {
          response.push(new Item(item));
        }

      }
      for (let key in params) { // search by title

        let field = item.title.rendered;
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          response.push(item);
        } else if (field == params[key]) {
          response.push(new Item(item));
        }

      }
      if(response.length > 0){
        return response;
      }



    });
  }

  add(item: Item) {
    //codigo para enviar correo con el producto creado
  }

  get(){
    return this.items;
  }
}
