//first i will use the queryselector to grab my logo tag
let title_logo = document.querySelector(`#title_logo`);
//second i will be grabbing my queryselectall to grab all my classes in my main
let main_p_tags = document.querySelectorAll(`.div_p`);
//third i will be grabbing my footer id tag
let header_p = document.getElementsByClassName(`header_p`)
//and last but not least i will be grabbing the rest of my header classes
let footer_info = document.getElementById(`footer_info`);
//i will be changing the elements style
title_logo [`style`][`color`] = `red`;
//now i will add content
main_p_tags[`innerHTML`] = `this is new content for my main p tags`;
//i will be adding new nested tags
footer_info.insertAdjacentHTML(`afterbegin` , `<p>this is a new p tag</P>`)
//adding a new tag using insertAdjacentHTML to put it at the before end 
footer_info.insertAdjacentHTML(`beforebegin`,`<h2> This is a new title </h2>`);
