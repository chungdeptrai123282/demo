import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit{
  constructor(){}
  @Input()
  title!:String;

  @Input()
  margin?='1rem 0 1rem 0.2rem';

  @Input()
  fontSize?='1rem 0 1rem 0.2rem';

  ngOnInit(): void {
    
  }

}
