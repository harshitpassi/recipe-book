import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionDisplayed = 'recipes';

  onSectionClicked(section: string) {
    this.sectionDisplayed = section;
  }
}
