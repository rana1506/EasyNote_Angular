import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit { 

  	constructor(private loc8rDataService: Loc8rDataService) { }

  	notes: Array<any>;
  		

	private getNotes(): void {console.log('inside note.component')
		this.loc8rDataService
		.getNotes()
		.then(foundLocations => this.notes = foundLocations);
	}
  	ngOnInit(): void {
  		this.getNotes();
  	}

}
