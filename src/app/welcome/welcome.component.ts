import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = "";
  constructor(private router: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    console.log("Some welcome message")
    // console.log(this.router.snapshot.params["name"])
    this.name = this.router.snapshot.params["name"]
  }
  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloworldBeanService())
    this.welcomeDataService.executeHelloworldBeanService().subscribe()
    }
}
