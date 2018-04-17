import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Items } from '../../providers/providers';
import { Item } from '../../models/item';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  items: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items,public alerCtrl: AlertController, public sharing : SocialSharing) {
    this.item = navParams.get('item') || items.defaultItem;

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

  	openCompareItem(item: Item) {

    this.navCtrl.push('ComparePage', {
      item: item
    });
  }
  shareThisItem(item:Item){
  	this.sharing.share('hola voy a compartir esto', 'Producto a compartir', item.title.rendered, '');
  }

}
