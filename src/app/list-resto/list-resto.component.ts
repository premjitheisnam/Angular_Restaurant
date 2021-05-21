import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  constructor(private resto: RestoService) {}

  collection: any = [];

  ngOnInit(): void {
    //api call for getList from resto.service file//
    this.resto.getList().subscribe((result) => {
      console.log(result);
      this.collection = result;
    });
  }
  //delete api call from resto.service file
  deleteResto(item) {
    this.collection.splice(item - 1, 1);
    this.resto.deleteResto(item).subscribe((result) => {
      console.log('result', result);
    });
  }
}
