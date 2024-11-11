
let buttons=document.querySelectorAll('.integer_dot');
let calc_screen=document.querySelector('.screen');
let delete_btn=document.querySelector('.delete');
let operators=document.querySelectorAll('.operators');
let equal_sign=document.querySelector('.equal_sign');
calc_screen.innerHTML=null;
buttons.forEach((item)=>
item.addEventListener('click',()=>{
   if(calc_screen.innerHTML.length<30){
 if(calc_screen.innerHTML.length>15)
 {
  calc_screen.style.fontSize='20px';
 }
 else{
  calc_screen.style.fontSize='30px';
 }
 
        if(item.innerText!='.'){
          
            calc_screen.innerHTML=calc_screen.innerHTML+item.innerText;}
            
            else if(item.innerText=='.'){
                if(calc_screen.innerHTML=='' || calc_screen.innerHTML[calc_screen.innerHTML.length-1]=='+'  || calc_screen.innerHTML[calc_screen.innerHTML.length-1]=='-'  || calc_screen.innerHTML[calc_screen.innerHTML.length-1]=='*'  || calc_screen.innerHTML[calc_screen.innerHTML.length-1]=='/'){
            calc_screen.innerHTML=calc_screen.innerHTML+'0.';}
            else{
                if(calc_screen.innerHTML.slice(-1)!='.')
                {
                calc_screen.innerHTML=calc_screen.innerHTML+item.innerText; 
                }
                else {
                    return;
                }
            }
            }
    
    }
    else{
      return;
    }
  }
 
));

operators.forEach((item)=>item.addEventListener('click',()=>
{

if(calc_screen.innerHTML!='' && item.innerText!='-' && !['+','-','*','/','.'].includes(calc_screen.innerHTML.slice(-1)))
{
    calc_screen.innerHTML=calc_screen.innerHTML+item.innerText;
}
if((calc_screen.innerHTML=='' && item.innerText=='-') || (calc_screen.innerHTML!='' && item.innerText=='-'))
{
    if( !['+','-','*','/'].includes(calc_screen.innerHTML.slice(-1))){
    calc_screen.innerHTML=calc_screen.innerHTML+item.innerText;}
}



  }));
  equal_sign.addEventListener('click',()=>{
    if(calc_screen.innerHTML.includes('/0'))
        {
            calc_screen.innerHTML="do not devide by 0";
        }
    
        else{
          try{
            if(calc_screen.innerHTML!=''){
            calc_screen.innerHTML=eval(calc_screen.innerHTML);
            }
            else{
              return;
            }
          }
          catch{
            calc_screen.innerHTML='error';
          }
        }
  }
)



delete_btn.addEventListener('click',()=>
    {
        if(calc_screen.innerHTML!='do not devide by 0' && calc_screen.innerHTML!='undefined' && calc_screen.innerHTML!='error'){
       calc_screen.innerHTML=calc_screen.innerHTML.substring(0,calc_screen.innerHTML.length-1);
        }
        else{
            calc_screen.innerHTML=null;
          
        }
    }); 
    
    document.addEventListener("keydown", function(event) {
      if(calc_screen.innerHTML.length<31){
      if(calc_screen.innerHTML.length>15)
        {
         calc_screen.style.fontSize='20px';
        }
        else{
         calc_screen.style.fontSize='30px';
        }

        if (event.key === "Backspace" || event.key==='Delete') {
            calc_screen.innerHTML=null;
          
        }
        else if(['1','2','3','4','5','6','7','8','9','0'].includes(event.key))
        {
        
            calc_screen.innerHTML=calc_screen.innerHTML+event.key;}
            
        
      else if(event.key=="Enter")
      {
        if(calc_screen.innerHTML.includes('/0'))
        {
            calc_screen.innerHTML="do not devide by 0";
        }
        else{
          try{
            if(calc_screen.innerHTML!=''){
            calc_screen.innerHTML=eval(calc_screen.innerHTML);
            }
            else{
              return;
            }
          }
          catch{
            calc_screen.innerHTML='error';
          }
        }
      }
      else if(!['+','*','-','/'].includes(calc_screen.innerHTML.slice(-1)) )
      {
        if(['+','*','/'].includes(event.key) &&  calc_screen.innerHTML!=''){
        calc_screen.innerHTML=calc_screen.innerHTML+event.key;}
        else if(['-'].includes(event.key))
        {
            calc_screen.innerHTML=calc_screen.innerHTML+event.key;
        }
      }
   }
  else{
    return;
  }}
  
    ); 