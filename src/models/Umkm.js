import { formatDate } from "../helpers/helper.js";

export default class Umkm {
  constructor(name, slug, priceRange, description, whatsappNumber, imageURL) {
    this.name = name;
    this.slug = slug;
    this.priceRange = priceRange;
    this.description = description;
    this.whatsappNumber = whatsappNumber;
    this.imageURL = imageURL;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toObject() {
    return {
      name: this.name,
      slug: this.slug,
      priceRange: this.priceRange,
      description: this.description,
      whatsappNumber: this.whatsappNumber,
      imageURL: this.imageURL,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static getData(doc) {
    const data = doc.data();
    const umkm = new Umkm(
      data.name,
      data.slug,
      data.priceRange,
      data.description,
      data.whatsappNumber,
      data.imageURL
    );
    umkm.id = doc.id;
    umkm.createdAt = formatDate(data.createdAt);
    umkm.updatedAt = formatDate(data.updatedAt);
    return umkm;
  }
}
