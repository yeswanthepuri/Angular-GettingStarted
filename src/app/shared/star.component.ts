import { Component, Output, OnChanges, Input, EventEmitter } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['star.component.css']
})
export class Stars implements OnChanges {
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    //Input declarative is a function.
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`this rating ${this.rating}`);
    }
}