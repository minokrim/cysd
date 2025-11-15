import { useEffect,useState } from "react";
import axios from "axios";
export default function ContentContext(){
      const [posts, setPosts] = useState([]);

      function getChildrenData(){
    axios.get('https://cysdcam.org/wp-json/wp/v2/posts?slug=children')
    .then((res)=>{
        console.log(res.data);
    })
      }

      useEffect(() => {
        getChildrenData()
  }, []);
    return <main>

    </main>
}