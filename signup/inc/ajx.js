function customerType()
{
 var t1=document.getElementById('customer_id').value;
 if(t1=="")
 {
  document.getElementById('myspan').innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myspan").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","inc/officer_detail.php?val1="+t1,true);
xmlhttp.send();
}

function parent()
{
 var t2=document.getElementById('parent_id').value;
 if(t2=="")
 {
document.getElementById('myspan2').innerHTML="";
return;
}
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myspan2").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","inc/parent_detail.php?val2="+t2,true);
xmlhttp.send();
}