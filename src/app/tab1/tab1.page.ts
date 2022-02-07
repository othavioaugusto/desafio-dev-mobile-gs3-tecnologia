import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navController: NavController, private router: Router) { }

  chamarTab2() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    this.router.navigateByUrl(`/tabs/tab2`);
  }
 
  chamarTab3() {
    this.router.navigateByUrl(`/tabs/tab3`);
  }

  chamarTab4() {
    this.router.navigateByUrl(`/tabs/tab4`);
  }


}
