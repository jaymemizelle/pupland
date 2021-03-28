import axios from "axios";


    async function ImageSource() {

      let res = await axios.get('https://dog.ceo/api/breeds/image/random');
    
      let data = res.data.message;
      console.log(data);
      return data;
    }
    


export default ImageSource;
