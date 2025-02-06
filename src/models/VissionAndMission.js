// bG1Na520lFw40JerEbfP
export default class VissionAndMission {
  constructor(vission, mission) {
    this.vission = vission;
    this.mission = mission;
  }

  toObject() {
    return {
      vission: this.vission,
      mission: this.mission,
    };
  }

  static getData(doc) {
    const data = doc.data();
    const vissionAndMission = new VissionAndMission(data.vission, data.mission);
    vissionAndMission.id = doc.id;
    return vissionAndMission;
  }
}
