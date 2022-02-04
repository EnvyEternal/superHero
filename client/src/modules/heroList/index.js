import React from "react";

const HeroList = (props) => {
    const {u} = props;
        return(
            <li>
               <ul>{u.nickname}</ul>
               <ul>{u.images}</ul>
            </li>
        );
}

export default HeroList