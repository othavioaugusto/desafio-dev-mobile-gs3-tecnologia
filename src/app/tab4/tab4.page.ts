import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private navController: NavController, private router: Router) { }

  chamarLoginChat() {
    console.log("== CHAMANDO PAGINA LOGIN CHAT ==");
    // this.router.navigate(['/login']);
    this.router.navigateByUrl(`/tabs/tab4/login`);
  }

}