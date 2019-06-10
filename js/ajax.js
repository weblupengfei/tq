function ajax({type,url,data,dataType}){
    return new Promise(callback=>{
        if(window.XMLHttpRequest){
            var xhr=new XMLHttpRequest();
        }else{
            var xhr=new ActiveXObject("Microsoft.XMLHttp");
        }
        if(type.toLowerCase()==="get"&&data!==undefined){
            url+=("?"+data);
        }
        xhr.open(type,url,true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4&&xhr.status===200){
                var resText=xhr.responseText;
                if(dataType!==undefined&&dataType.toLowerCase()=="json"){
                    resText=JSON.parse(resText);
                }
                callback(resText)
            }
        };
        if(type.toLowerCase()==="post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
        xhr.send(type.toLowerCase()==="get"?null:data);
    });
}
