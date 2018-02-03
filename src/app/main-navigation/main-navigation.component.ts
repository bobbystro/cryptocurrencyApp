import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  menuHidden = false;

  constructor() {
  }

  menuFixed = false;
  // main_menu = 0;
  //
  // scroll = () => {
  //   const windowTopPosition = window.pageYOffset;
  //   if (this.main_menu < windowTopPosition) {
  //     this.menuFixed = true;
  //   } else {
  //     this.menuFixed = false;
  //   }
  // }

  ngOnInit() {
    // this.main_menu = document.getElementsByClassName('main-nav')[0]['offsetTop'];
    // window.addEventListener('scroll', this.scroll, true);
  }

  hideMenu() {
    this.menuHidden = !this.menuHidden;
  }

}
