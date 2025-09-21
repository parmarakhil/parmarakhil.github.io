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
        if(value && value.length > 0) {
            this._originalprojects = value;
            console.log('Carousel received projects:', value);
            // Initialize currentPage if not set
            if (!this._currentPage) {
                this._currentPage = 1;
            }
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
        
        // Ensure minimum of 1 result per page
        if (this.resultsPerPage < 1) {
            this.resultsPerPage = 1;
        }

        this.populateCarousel();
    }

    private populateCarousel(): void {

        if(this._currentPage && this._originalprojects && this._originalprojects.length > 0 && this.resultsPerPage) {
            this.start =  (this._currentPage - 1) * this.resultsPerPage;
            this.end = this._currentPage * this.resultsPerPage;

            this._projects = this._originalprojects.slice(this.start, this.end);
            this._projects.sort((a:any, b:any) => +new Date (b.date) - +new Date(a.date));

            console.log('Carousel populated with projects:', this._projects);
            console.log('Start:', this.start, 'End:', this.end, 'Results per page:', this.resultsPerPage);

            this.onResultsPerPageChanged.emit(this.resultsPerPage);
        } else {
            console.log('Carousel population failed - conditions not met:', {
                currentPage: this._currentPage,
                originalProjects: this._originalprojects?.length,
                resultsPerPage: this.resultsPerPage
            });
        }
    }
}