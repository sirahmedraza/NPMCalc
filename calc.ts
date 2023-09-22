export function calculator(a:number,b:number,op:string){
    if(op==='+'){
       return (a+b);
    } else if(op==='-'){
       return(a-b)
    } else if(op==='*'){
       return(a*b);
    } else if(op==='/'){
       return(a/b);
    }
   }