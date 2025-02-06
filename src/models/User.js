export default class User {
  constructor(userUID, firstName, lastName, email) {
    this.userUID = userUID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  toObject() {
    return {
      userUID: this.userUID,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
  }

  static getData(doc) {
    const data = doc.data();
    const user = new User(
      data.userUID,
      data.firstName,
      data.lastName,
      data.email
    );
    user.id = doc.id;
    user.password = undefined;
    return user;
  }
}
