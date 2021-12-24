import { Tariff } from '../modules/tariff';

export function setTariffList() {
  const arrayTariff = []
  
  const AEROFLOT = 'Аэрофлот'
  const RZD = 'РЖД'

  const ECONOM = 'Эконом'
  const ADVANCED = 'Продвинутый'
  const LUX = 'Люкс'

  const AeroflotEconom = new Tariff()
  AeroflotEconom.companyName = AEROFLOT
  AeroflotEconom.tariffName = ECONOM
  AeroflotEconom.coastKm = 4
  AeroflotEconom.baggageMax= 20
  AeroflotEconom.weightForCoast = 5
  AeroflotEconom.baggageCoast = 4000
  arrayTariff.push(AeroflotEconom)

  const AeroflotAdvanced = new Tariff()
  AeroflotAdvanced.companyName = AEROFLOT
  AeroflotAdvanced.tariffName = ADVANCED
  AeroflotAdvanced.coastKm = 8
  AeroflotAdvanced.baggageMax = 50
  AeroflotAdvanced.weightForCoast =20
  AeroflotAdvanced.baggageCoast = 5000
  AeroflotAdvanced.childAge = 7
  AeroflotAdvanced.childTicketDiscount = 0.3
  arrayTariff.push(AeroflotAdvanced)

  const AeroflotLux = new Tariff()
  AeroflotLux.companyName = AEROFLOT
  AeroflotLux.tariffName = LUX
  AeroflotLux.coastKm = 15
  AeroflotLux.childAge = 16
  AeroflotLux.childTicketDiscount = 0.3
  arrayTariff.push(AeroflotLux)

  const RzdEconom = new Tariff()
  RzdEconom.companyName = RZD
  RzdEconom.tariffName = ECONOM
  RzdEconom.coastKm = 0.5
  RzdEconom.weightForCoast = 15
  RzdEconom.baggageCoast = 50 
  RzdEconom.baggageCoastKg = true
  RzdEconom.childTicketDiscount = 0.5
  RzdEconom.childAge = 5
  arrayTariff.push(RzdEconom)

  const RzdAdvanced = new Tariff()
  RzdAdvanced.companyName = RZD
  RzdAdvanced.tariffName = ADVANCED
  RzdAdvanced.coastKm = 2
  RzdAdvanced.baggageMax = 60
  RzdAdvanced.weightForCoast =20
  RzdAdvanced.baggageCoast = 50
  RzdAdvanced.baggageCoastKg = true
  RzdAdvanced.childAge = 5
  RzdAdvanced.childTicketDiscount = 0.5
  arrayTariff.push(RzdAdvanced)

  const RzdLux = new Tariff()
  RzdLux.companyName = RZD
  RzdLux.tariffName = LUX
  RzdLux.coastKm = 4
  RzdLux.baggageMax = 60
  RzdLux.childAge = 16
  RzdLux.childTicketDiscount = 0.2
  arrayTariff.push(RzdLux)

  return arrayTariff
}
