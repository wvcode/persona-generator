import { Component, OnInit } from '@angular/core';
import { XkcdService } from 'src/app/services/xkcd.service';

@Component({
  selector: 'app-xkcd',
  templateUrl: './xkcd.component.html',
  styleUrls: ['./xkcd.component.css']
})
export class XkcdComponent implements OnInit {

  comicTitle = ''
  comicStripe = ''
  comicAlt = ''
  comicNumber = 0
  lastComicNumber = 0

  constructor(private xkcdService: XkcdService) { }

  getComic(id) {
    let newId = id == 0 ? 'last' : id
    console.log(newId)
    this.xkcdService.getComic(newId).subscribe(comic => {
      console.log(comic)
      this.comicTitle = comic['title']
      this.comicStripe = comic['img']
      this.comicAlt = comic['alt']
      this.comicNumber = comic['num']
      if (newId == 'last') {
        this.lastComicNumber = comic['num']
      }
    })
  }

  goFirst() {
    this.getComic(1)
  }

  goLast() {
    this.getComic(this.lastComicNumber)
  }

  goPrevious() {
    this.comicNumber -= 1
    this.getComic(this.comicNumber)
  }

  goNext() {
    this.comicNumber += 1
    this.getComic(this.comicNumber)
  }

  goRandom() {
    this.comicNumber = Math.random() * (this.lastComicNumber - 1) + 1
    this.getComic(this.comicNumber)
  }

  ngOnInit() {
    this.getComic(0)
  }

}
