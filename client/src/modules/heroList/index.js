import React from "react";

const HeroList = (props) => {
    const {u} = props;
        return(
            <li>
               <ul>{u.nickname}</ul>
               <ul>{u.superpowers}</ul>
            </li>
        );
}

export default HeroList