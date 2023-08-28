//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");


console.log(btn)

btn.addEventListener('click', ()=>{
    callMe(text.value, delay.value);
})


async function callMe(text, delay){
    let str = await text;
    setTimeout(()=>{
     output.innerText = str;
    }, delay);
}
