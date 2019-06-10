$(()=>{
    var form=document.forms['loginform'],
        txtName=form.uname,
        txtPwd=form.upwd,
        btn=form.elements['btn'];
    btn.onclick=function() {
        //console.log("uname="+txtName.value+"&upwd="+txtPwd.value);
        $.ajax({
            type:'post',
            url:'data/login.php',
            data:"uname="+txtName.value+"&upwd="+txtPwd.value
        }).then(resText=>{
            console.log(resText);
                if(resText==="true"){
                    if(location.search!==''){
                        var back=location.search.slice(6)
                        //console.log(back)
                        location=back;
                    }else{
                        location='user.html'

                    }
            }
        })
    }
    $(window).keyup(e=>{
        if(e.keyCode==13){
            btn.onclick();
        }
    })
})