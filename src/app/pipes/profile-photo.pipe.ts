import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'profilePhoto',
  standalone: true
})
export class ProfilePhotoPipe implements PipeTransform {
  constructor(private http: HttpClient) {

  }
  transform(photoId: number): Observable<string>  {
    return this.http.get<any>(`${environment}/photos/${photoId}`).pipe(
      map(photo => photo.url)
    );
    // return of('https://via.placeholder.com/600/92c952')
  }

}
