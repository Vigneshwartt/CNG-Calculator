const dis=document.getElementById("distance")
const fue=document.getElementById("fuel")
const cos=document.getElementById("cost")
const bt=document.getElementById("btn")
const res=document.getElementById("result")
bt.addEventListener('click',(event)=>{
   // if we put this means if we cannot give that value means it will not proced
    event.preventDefault();
    const km=dis.value;
    const fuel=fue.value;
    const cost=cos.value;
    const result=Math.round((km/fuel)*cost);
    const msg=`Your fuel cost : ₹${result}`
    res.innerText=msg;
    res.style.padding='4px';
    console.log(msg);
    dis.value='';
    cos.value='';
    fue.value='';

})