import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

// My original implementation is commented out. Curses on me for diving too deep into the documentation.

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    // constructor( private element: ElementRef, private renderer: Renderer2 ) {}

    @HostListener('click') onclick() {
        // if ( this.isOpen ) {
        //     this.renderer.removeClass( this.element.nativeElement, 'open');
        //     this.isOpen = false;
        // } else {
        //     this.renderer.addClass( this.element.nativeElement, 'open');
        //     this.isOpen = true;
        // }
        this.isOpen = !this.isOpen;
    }
}
