(function(d,p){
  var a=new XMLHttpRequest(),
      b=d.body;
  a.open("GET",p,!0);
  a.send();
  a.onload=function(){
      var c=d.createElement("div");
      c.style.display="none";
      c.innerHTML=a.responseText;
      b.insertBefore(c,b.childNodes[0])
  }
})(document,"https://cdn.plyr.io/3.3.9/plyr.svg");
