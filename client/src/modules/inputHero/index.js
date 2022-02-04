import React, { useState } from 'react'
import axios from 'axios';

function Entry(){
    const [data, setData] = useState({
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: [""],
        catch_phrase: "",
      });

    const [img, setImage] = useState(null)
    
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
      const handleChangePicture = (e) =>{
        setImage(e.target.files[0])
        console.log({img})
        console.log(e.target.files[0])
        console.log(e.target.files)
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        const heroData = {
          nickname: data.nickname,
          real_name: data.real_name,
          origin_description: data.origin_description,
          superpowers: [data.superpowers],
          catch_phrase: data.catch_phrase,
        };
        heroData.append('add_image', img)
        //setImage(e.target.files[0])
        const config = {
          headers: { 'content-type': 'multipart/form-data' },
         
      }
        axios.post("http://localhost:5003/api/superhero/", heroData,img , config).then((response) => {
          console.log(response.status);
        });
      };

      return (
        <div>
          <h1>Add Hero</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Nickname
              <input
                type="text"
                name="nickname"
                value={data.nickname}
                onChange={handleChange}
              />
            </label>
            <label>
              Real Name
              <input
                type="text"
                name="real_name"
                value={data.real_name}
                onChange={handleChange}
              />
            </label>
            <label>
               Origin Description
              <input
                type="text"
                name="origin_description"
                value={data.origin_description}
                onChange={handleChange}
              />
            </label>
            <label>
                Superpowers
              <input
                type="text"
                name="superpowers"
                value={data.superpowers}
                onChange={handleChange}
              />
            </label>
            <label>
                Catch Phrase
              <input
                type="text"
                name="catch_phrase"
                value={data.catch_phrase}
                onChange={handleChange}
              />
            </label>
            <label>
                File
              <input
                type="file"
                name="img"
                value={data.img}
                onChange={handleChangePicture}
              />
            </label>
            <button type="submit">Enter</button>
          </form>
        </div>
      );
}

export default Entry