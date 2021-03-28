import axios from "axios";


    async function GetBreed(hound) {

      let res = await axios.get(`https://dog.ceo/api/breed/${hound}/images`);
    
      let data = res.data.message;
      console.log("in breed.js:", data);
      return data;
    }
    


export default GetBreed;