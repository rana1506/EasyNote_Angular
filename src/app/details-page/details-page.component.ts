import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Loc8rDataService } from '../loc8r-data.service';
import { Note } from '../note';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(private loc8rDataService: Loc8rDataService,
    private route: ActivatedRoute) { }

  public newNote: Note;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('noteId')
          return this.loc8rDataService.getNoteById(id);
        })
      ) 
      .subscribe((newNote: Note) => {
        this.newNote = newNote;
        this.pageContent.header.title = newNote.title;
        this.pageContent.sidebar = `${newNote.title} is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.\n\nIf you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.`;
      });
  }

   public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
    sidebar: ''
  };
}
