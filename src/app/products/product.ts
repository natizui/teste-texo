export class Product {

  constructor (
  public id: number,
  public name: string,
  public quantity: number,
  public unit: string,
  public price: number,
  public perishable: boolean,
  public expirationDate: Date,
  public manifactureDate: Date,
  ){}
}
