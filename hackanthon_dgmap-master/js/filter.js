var city=modal.innerText.split('\n');
filter.oninput=function(){
  var result=[];
  for(var i=0;i<city.length;i++){
    if(~city[i].toLowerCase().indexOf(filter.value.toLowerCase())) result[i]=city[i]
  }
  modal.innerHTML=result.filter(function(x){return x!==undefined&&x!==null}).join('<br>')
}