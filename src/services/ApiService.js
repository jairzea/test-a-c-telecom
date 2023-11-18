import axios from "axios";

const apiUrl =
  "https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10";

const ApiService = {
  async getImages() {
    try {
      const response = await axios.get(apiUrl);
      console.log("response", response);
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener las imágenes", error);
      throw error;
    }
  },
};

export default ApiService;
