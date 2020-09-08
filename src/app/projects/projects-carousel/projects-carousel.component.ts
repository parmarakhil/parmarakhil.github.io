import { 
    Component, OnInit,
    Input, HostListener,
    EventEmitter, ElementRef,
    Output
} from "@angular/core";
import { IProject } from "../projects-interfaces";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { debounce } from "../../core/utils";

@Component({
    selector: "app-projects-carousel",
    templateUrl: "./projects-carousel.component.html",
    styleUrls: ["./projects-carousel.component.scss", "./projects-carousel.component.responsivity.scss"],
    animations: [
        trigger("fadeInOut", [
            state("void", style({
                opacity: 0
            })),
            transition("void <=> *", animate(300)),
        ])
    ]
})
export class ProjectsCarouselComponent implements OnInit {
    
    public _projects: IProject[] = [];
    public _originalprojects: IProject[] = [];
    public _currentPage: number;

    @Output() onResultsPerPageChanged = new EventEmitter<number>();

    resultsPerPage: number;
    elWidth: number;
    start: number;
    end: number;

    constructor(private elRef: ElementRef) { }

    @Input() get currentPage(): number {
        return this._currentPage;
    }
    
    set currentPage(value: number) {
        if(value) {
            this._currentPage = value;
            this.populateCarousel();
        }
    }

    @Input() get projects(): IProject[] {
        return this._projects;
    }
  
    set projects(value: IProject[]) {
        if(value) {
            this._originalprojects = value;
            this.onResizeElement();
        }
    }
    
    ngOnInit(): void {}

    @HostListener("window:resize")
    @debounce(25) 
    onResize() { 
        this.onResizeElement();
    }

    private onResizeElement(): void {
        this.elWidth = this.elRef.nativeElement.clientWidth;
        this.resultsPerPage = Math.ceil(this.elWidth / 465);

        this.populateCarousel();
    }

    private populateCarousel(): void {

        if(this._currentPage && this._projects) {
            this.start =  (this._currentPage - 1) * this.resultsPerPage;
            this.end = this._currentPage * this.resultsPerPage;

            this._projects = this._originalprojects.slice(this.start, this.end);
            this._projects.sort((a:any, b:any) => +new Date (b.date) - +new Date(a.date));

            this.onResultsPerPageChanged.emit(this.resultsPerPage);
        }
    }
}