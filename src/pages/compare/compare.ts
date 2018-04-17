import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ComparePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html',
})
export class ComparePage {
 currentItems: any = [];
 item: any;
 item2: any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public items: Items,public alerCtrl: AlertController, ) {
  	this.item = navParams.get('item') || items.defaultItem;
  	this.item2 = undefined;

  }

  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      tags: val
    });
  }

  openItemToCompare(item) {
	this.item2 = item;
  }

  doAlert(item) {
		let mensaje = 'Azúcares:   '+item.datos.mm_producto_azucares +'grs. <br />Fibra dietaria:   '+ item.datos.mm_producto_fibraDietaria +'grs. <br />';	
		let alert = this.alerCtrl.create({
		  	title: 'Caracteristicas calorias',
		  	message: mensaje,
		  	buttons: ['Cerrar']
			});
		alert.present()
  	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparePage');
  }

}
