import { Component } from '@angular/core';
import { PlaceholderService } from './service/placeholder.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private placeHolderService: PlaceholderService){}
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  title = 'application';
  dataSource;

  async ngOnInit(): Promise<void>{
    this.dataSource =  await this.placeHolderService.get();

  }
}//kjbjhvcg
