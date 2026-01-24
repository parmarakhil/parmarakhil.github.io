import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { IExperience } from "../experience/experience-interfaces";
import { IAbout } from "../about/about-interfaces";
import { IPost } from "../posts/posts-interfaces";
import {IProject} from "../projects/projects-interfaces";
import { MediumService } from "./medium.service";

@Injectable()
export class DataService {

    baseUrl: string = "assets/data/";
    
    constructor(private http: HttpClient, private mediumService: MediumService) { }

    getExperiences() : Observable<IExperience[]> {
        return this.http.get<IExperience[]>(this.baseUrl + "experiences.json")
            .pipe(
                catchError(this.handleError)
            );
    }
    
    getAbout() : Observable<IAbout> {
      return this.http.get<any>(this.baseUrl + "about.json")
          .pipe(
              catchError(this.handleError)
          );
    }

    getPosts() : Observable<IPost[]> {
        // Fetch only Medium posts
        return this.mediumService.getMediumPosts()
            .pipe(
                catchError(this.handleError)
            );
    }
    getProjects() : Observable<IProject[]> {
        return this.http.get<IProject[]>(this.baseUrl + "projects.json")
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
      console.error("server error:", error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || "backend server error");
      }
      return throwError(error || "Node.js server error");
    }
}