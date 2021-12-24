import { Component, OnInit } from '@angular/core';
import { Passenger } from '../modules/passenger';
import { Tariff } from '../modules/tariff';
import { setTariffList } from '../modules/utils'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  distanceKm: number
  age: number
  baggageWeight: number 
  tariffList: Array<Tariff>
  companyList: Array<String>

  constructor() {}

  ngOnInit() {}

  public submit() {
    const passenger = new Passenger(this.distanceKm, this.age, this.baggageWeight);
    const tafirrList = setTariffList();
    
    tafirrList.map(el => {
        el.totalPrice = el.calculate(passenger)
      }
    );

    this.tariffList = tafirrList
    this.companyList = Array.from(new Set(this.tariffList.map(t=>t.companyName)))
    
    return false
  }
}
