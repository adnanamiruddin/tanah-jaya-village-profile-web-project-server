import { formatDate } from "../helpers/helper.js";

export default class Schedule {
  constructor(name, date, location) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toObject() {
    return {
      name: this.name,
      date: this.date,
      location: this.location,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static getData(doc) {
    const data = doc.data();
    const schedule = new Schedule(data.name, data.date, data.location);
    schedule.id = doc.id;
    schedule.createdAt = formatDate(data.createdAt);
    schedule.updatedAt = formatDate(data.updatedAt);
    return schedule;
  }
}
