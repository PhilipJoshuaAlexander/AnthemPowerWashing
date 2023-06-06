import { Component,ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('gallery', { static: false }) gallery!: ElementRef;

  ngAfterViewInit() {
    if (this.gallery) {
    }
  }

  scrollGallery(direction: string) {
    if (this.gallery) {
      const galleryContainer: HTMLElement = this.gallery.nativeElement;
      const scrollAmount = galleryContainer.scrollWidth / galleryContainer.childElementCount;
      if (direction === 'prev') {
        galleryContainer.scrollLeft -= scrollAmount;
      } else {
        galleryContainer.scrollLeft += scrollAmount;
      }
    }
  }
}
