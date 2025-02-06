import { formatDate } from "../helpers/helper.js";

// 9KgkN30VXDWH3Es7MJHF
export default class Infographic {
  constructor(
    totalPopulation,
    totalFamily,
    totalMale,
    totalFemale,
    totalEnvironment,
    dalobaMale,
    dalobaFemale,
    kassiMale,
    kassiFemale,
    jalayaMale,
    jalayaFemale,
    barangMale,
    barangFemale,
    nanasayaMale,
    nanasayaFemale,
    totalPlayground,
    totalElementarySchool,
    totalJuniorHighSchool,
    totalSeniorHighSchool,
    totalMosque,
    totalHealthCenter,
    totalPosyandu
  ) {
    this.totalPopulation = totalPopulation;
    this.totalFamily = totalFamily;
    this.totalMale = totalMale;
    this.totalFemale = totalFemale;
    this.totalEnvironment = totalEnvironment;
    this.dalobaMale = dalobaMale;
    this.dalobaFemale = dalobaFemale;
    this.kassiMale = kassiMale;
    this.kassiFemale = kassiFemale;
    this.jalayaMale = jalayaMale;
    this.jalayaFemale = jalayaFemale;
    this.barangMale = barangMale;
    this.barangFemale = barangFemale;
    this.nanasayaMale = nanasayaMale;
    this.nanasayaFemale = nanasayaFemale;
    this.totalPlayground = totalPlayground;
    this.totalElementarySchool = totalElementarySchool;
    this.totalJuniorHighSchool = totalJuniorHighSchool;
    this.totalSeniorHighSchool = totalSeniorHighSchool;
    this.totalMosque = totalMosque;
    this.totalHealthCenter = totalHealthCenter;
    this.totalPosyandu = totalPosyandu;
    this.updatedAt = new Date();
  }

  toObject() {
    return {
      totalPopulation: this.totalPopulation,
      totalFamily: this.totalFamily,
      totalMale: this.totalMale,
      totalFemale: this.totalFemale,
      totalEnvironment: this.totalEnvironment,
      dalobaMale: this.dalobaMale,
      dalobaFemale: this.dalobaFemale,
      kassiMale: this.kassiMale,
      kassiFemale: this.kassiFemale,
      jalayaMale: this.jalayaMale,
      jalayaFemale: this.jalayaFemale,
      barangMale: this.barangMale,
      barangFemale: this.barangFemale,
      nanasayaMale: this.nanasayaMale,
      nanasayaFemale: this.nanasayaFemale,
      totalPlayground: this.totalPlayground,
      totalElementarySchool: this.totalElementarySchool,
      totalJuniorHighSchool: this.totalJuniorHighSchool,
      totalSeniorHighSchool: this.totalSeniorHighSchool,
      totalMosque: this.totalMosque,
      totalHealthCenter: this.totalHealthCenter,
      totalPosyandu: this.totalPosyandu,
      updatedAt: this.updatedAt,
    };
  }

  static getData(doc) {
    const data = doc.data();
    const infographic = new Infographic(
      data.totalPopulation,
      data.totalFamily,
      data.totalMale,
      data.totalFemale,
      data.totalEnvironment,
      data.dalobaMale,
      data.dalobaFemale,
      data.kassiMale,
      data.kassiFemale,
      data.jalayaMale,
      data.jalayaFemale,
      data.barangMale,
      data.barangFemale,
      data.nanasayaMale,
      data.nanasayaFemale,
      data.totalPlayground,
      data.totalElementarySchool,
      data.totalJuniorHighSchool,
      data.totalSeniorHighSchool,
      data.totalMosque,
      data.totalHealthCenter,
      data.totalPosyandu
    );
    infographic.id = doc.id;
    infographic.updatedAt = formatDate(data.updatedAt);
    return infographic;
  }
}
