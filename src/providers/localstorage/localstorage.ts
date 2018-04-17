import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Items } from '../../providers/providers';
/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {
  public items:Items;
  constructor(public storage: Storage) {
    	    	
  }

  setItems(itemsToLocal){
	return this.storage.set('itemsToLocal', itemsToLocal);
	
  }

  setConfig(config){
  	return this.storage.set('config',config);
  }


  getItems(){
  	return this.storage.get('itemsToLocal');
  }

  getConfig(){
  	return this.storage.get('config');
  }

  removeItems(){
   return this.storage.remove('ItemsToLocal');
  }

  removeConfig(){
    return this.storage.remove('Config');
  }



}
