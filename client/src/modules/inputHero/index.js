import React, { useState } from 'react'
import axios from 'axios';

function Entry(){
    const [data, setData] = useState({
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: [""],
        catch_phrase: ""
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const heroData = {
          nickname: data.nickname,
          real_name: data.real_name,
          origin_description: data.origin_description,
          superpowers: [data.superpowers],
          catch_phrase: data.catch_phrase
        };
        setData(heroData)
        axios.post("http://localhost:5003/api/superhero/", heroData).then((response) => {
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
            <button type="submit">Enter</button>
          </form>
        </div>
      );
}

export default Entry