// IH9ixTN7zF7EHiJEjtD4
export default class Greeting {
  constructor(villageHeadName, villageHeadPhotoURL, greetingContent) {
    this.villageHeadName = villageHeadName;
    this.villageHeadPhotoURL = villageHeadPhotoURL;
    this.greetingContent = greetingContent;
  }

  toObject() {
    return {
      villageHeadName: this.villageHeadName,
      villageHeadPhotoURL: this.villageHeadPhotoURL,
      greetingContent: this.greetingContent,
    };
  }

  static getData(doc) {
    const data = doc.data();
    const greeting = new Greeting(
      data.villageHeadName,
      data.villageHeadPhotoURL,
      data.greetingContent
    );
    greeting.id = doc.id;
    return greeting;
  }
}
