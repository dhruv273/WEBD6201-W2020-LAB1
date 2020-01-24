//IIFE - Immediately Invokeed Function Expression 
//mean? -> anoymous self-excuting fuction 
(function(){
       function Start()
       {
          console.log("%cApp Started...", "color:blue; font-size:20px");
          main();
       }

       let Main = function()
       {
          console.log("%cMain App Started...", "color: green; font-size:16px");
       }
    
   window.addEventListener("load", Start);
})();