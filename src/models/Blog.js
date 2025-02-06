import { formatDate } from "../helpers/helper.js";

export default class Blog {
  constructor(
    type,
    title,
    slug,
    status,
    author,
    coverImageURL,
    coverDescription,
    content
  ) {
    this.type = type; // blog, history, tourist-spot, disaster-mitigation
    this.title = title;
    this.slug = slug;
    this.status = status; // published, draft
    this.author = author;
    this.coverImageURL = coverImageURL;
    this.coverDescription = coverDescription;
    this.content = content;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toObject() {
    return {
      type: this.type,
      title: this.title,
      slug: this.slug,
      status: this.status,
      author: this.author,
      coverImageURL: this.coverImageURL,
      coverDescription: this.coverDescription,
      content: this.content,
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
