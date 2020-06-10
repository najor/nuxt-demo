export class Reservation {
  get id(): string {
    return this._id
  }

  set id(value: string) {
    this._id = value
  }

  persons: number
  notes: string
  private _id: string

  constructor(persons: number, notes: string) {
    this.persons = persons
    this.notes = notes
    this._id = ''
  }
}
