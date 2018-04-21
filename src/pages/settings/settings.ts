import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Settings } from './../../providers/settings/settings';



import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;

  settingsReady = false;

  constructor(public navCtrl: NavController){
    
  }

  
  ionViewDidLoad() {
    // Build an empty form for the template to render
   
  }

  

  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
