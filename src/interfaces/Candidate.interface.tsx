// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {

    name: string;
    email: string;
    company: string;
    bio: string;
    image: ImageBitmap;
    reject: boolean;


  }
  
  export default Candidate;