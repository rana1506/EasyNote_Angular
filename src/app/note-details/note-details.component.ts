import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

	@Input() note: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
