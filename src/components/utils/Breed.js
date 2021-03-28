import axios from "axios";


    async function GetBreed(hound) {

      let res = await axios.get(`https://dog.ceo/api/breed/${hound}/images`);
    
      let data = res.data.message;
      return data;
    }
    

export default GetBreed;