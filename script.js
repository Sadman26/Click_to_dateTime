let fun = () => {
    let d = new Date().toLocaleString();
    let p = document.getElementById('para')
    p.innerHTML = d;

}
let fun2 = () => {
    document.getElementById('btn').style.backgroundColor = 'cyan';
    document.getElementById('btn').style.color = 'black';
}
let fun3 = () => {
    document.getElementById('btn').style.backgroundColor = 'deeppink';
    document.getElementById('btn').style.color = 'white';

}
let btn = document.getElementById('btn');
btn.addEventListener('click', fun);
btn.addEventListener('mouseover', fun2);
btn.addEventListener('mouseout', fun3);
