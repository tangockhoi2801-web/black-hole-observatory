(function(){
  function M(id,chapter,level,prompt,answer,distractors,why,reasons,steps){
    if(!Array.isArray(distractors)){
      const args=Array.from(arguments);
      let reasonIndex=-1;
      for(let i=5;i<args.length;i++){if(Array.isArray(args[i])){reasonIndex=i;break;}}
      if(reasonIndex>5){distractors=args.slice(5,reasonIndex-1);why=args[reasonIndex-1]||"";reasons=args[reasonIndex]||[];steps=Array.isArray(args[reasonIndex+1])?args[reasonIndex+1]:[];}
    }
    if(!Array.isArray(reasons))reasons=[];
    const optionWhy={};distractors.forEach((v,i)=>optionWhy[v]=reasons[i]||"Phương án này không phù hợp với dữ kiện và nguyên tắc hóa học của câu hỏi.");
    return {id,chapter,type:"mcq",level,prompt,options:[answer,...distractors],answer,why,optionWhy,steps:steps||[]};
  }
  function T(id,chapter,level,prompt,context,items){
    return {id,chapter,type:"tf",level,prompt,context,statements:items.map(x=>({text:x[0],answer:x[1],why:x[2]}))};
  }
  function S(id,chapter,level,prompt,answer,tol,unit,why,common,steps){
    return {id,chapter,type:"short",level,prompt,answer,tol,unit,why,common,steps:steps||[]};
  }
  window.CHEM12_QUESTION_FACTORIES={M,T,S};
  window.CHEM12_EXTRA_QUESTIONS=[];
})();