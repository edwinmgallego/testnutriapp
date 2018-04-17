import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };
  userData;


  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,private facebook: Facebook){

  }

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }
  // // Attempt to login in through our User service
  // doLogin() {
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  //     .then((res: FacebookLoginResponse) => this.navCtrl.push(MainPage))
  //     .catch(e => console.log('Error logging into Facebook', e));
  //   // this.user.login(this.account).subscribe((resp) => {
  //   //   this.navCtrl.push(MainPage);
  //   // }, (err) => {
  //   //   this.navCtrl.push(MainPage);
  //   //   // Unable to log in
  //   //   let toast = this.toastCtrl.create({
  //   //     message: this.loginErrorString,
  //   //     duration: 3000,
  //   //     position: 'top'
  //   //   });
  //   //   toast.present();
  //   // });
  // }
}
