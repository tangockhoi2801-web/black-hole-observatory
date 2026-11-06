(function(){
  function M(id,chapter,level,prompt,answer,distractors,why,reasons,steps){
    if(!Array.isArray(distractors)){
      const args=Array.from(arguments);
      distractors=args.slice(5,8);
      why=args[8]||"";
      reasons=Array.isArray(args[9])?args[9]:[];
      steps=Array.isArray(args[10])?args[10]:[];
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