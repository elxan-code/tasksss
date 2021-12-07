
function info(){
    let p = document.querySelector("p");
    let a = document.querySelector("a");
    a.href="https://www.w3schools.com/";
    a.id="w3r";
    a.type="text/html";
    a.rel="nofollow";
    a.target="_self";
    a.textContent="w3schools";
    p.append(a);
    return p;
}
console.log(info())