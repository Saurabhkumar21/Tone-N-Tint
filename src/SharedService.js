// src/services/SharedService.js
class SharedService {
    constructor() {
      this.predictedTone = '';
    }
  
    setTone(predictedTone) {
      this.predictedTone = predictedTone;
    }
  
    getTone() {
      return this.predictedTone;
    }
  }
  
  export default new SharedService();
  