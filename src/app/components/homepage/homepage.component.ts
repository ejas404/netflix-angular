import { Component , OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor (private service : MovieApiService){

  }

  ngOnInit():void{
    console.log('this is this')
    this.bannerData();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((res)=>console.log(res))
  }

}
