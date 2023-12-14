import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { iinCheck } from '../utils/iinCheck';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  iin = null;
  isValid = false;
  isChecked = false;
  handleValidate() {
    const isValid = iinCheck(String(this.iin));
    this.isValid = isValid;
    this.isChecked = true;
  }
  handleKeyDown(event: any) {
    this.isChecked = false;
    if (event.key === 'Enter' && this.iin) {
      this.handleValidate();
    }
  }
}
