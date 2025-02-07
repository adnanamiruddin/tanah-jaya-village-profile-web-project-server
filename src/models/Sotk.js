import { formatDate } from "../helpers/helper.js";

export default class Blog {
  constructor(name, posi) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toObject() {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static getData(doc) {
    const data = doc.data();
    const blog = new Blog(
      data.type,
      data.title,
      data.slug,
      data.status,
      data.author,
      data.coverImageURL,
      data.coverDescription,
      data.content
    );
    blog.id = doc.id;
    blog.createdAt = formatDate(data.createdAt);
    blog.updatedAt = formatDate(data.updatedAt);
    return blog;
  }
}
