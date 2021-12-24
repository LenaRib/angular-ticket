import { ThisReceiver } from '@angular/compiler';
import { Passenger } from './passenger';

export class Tariff {
  public totalPrice: number | null

  public companyName: String
  public tariffName: String
  public coastKm: number
  public baggageMax: number | undefined = undefined
  public weightForCoast: number = 0
  public baggageCoast: number  = 0
  public childAge: number  | undefined = undefined
  public childTicketDiscount: number | undefined = undefined
  public baggageCoastKg: boolean | undefined = false

  constructor(){
  }

  calculateChildTariff(age: number) {
      if (this.childAge && age <= this.childAge) {
        return this.childTicketDiscount || 1
      }
    return 1;
  }
  calculateBaggageCoast(baggageWeight: number){
    if(baggageWeight >= this.weightForCoast){
      if(this.baggageCoastKg) {
        return this.baggageCoast * (baggageWeight - this.weightForCoast)
      } else {
      return this.baggageCoast
      }
    }
    else return 0
  }
  calculate(passager: Passenger) {
      if (this.baggageMax && passager.baggageWeight >= this.baggageMax) {
        return null
      } else {
        const distanceCoast = this.coastKm * passager.distanceKm
        const childDiscontCoast = +(this.calculateChildTariff(passager.age)).toFixed(2)
        const baggageCoast = this.calculateBaggageCoast(passager.baggageWeight)

        return distanceCoast * childDiscontCoast + baggageCoast 
        
      }
  }
}
