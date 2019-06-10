$(()=>{
    function islogin(){
        $.get('data/islogin.php').then(resText=>{
            console.log(resText)
            if(resText.ok==0) {
                $('[data-toggle=login]').show().next().hide()
            }else{
                $('[data-toggle=login]').hide().next().show().find('[data-toggle=uname]').html(resText.uname)
                // object.defineProperty()
                var html=''
                html+=`<div class="row">
                            <div class="col-md-6 ">
                                <label for="">用户名</label>
                                <div>
                                    <input type="text" class="form-control" value="${resText.uname}"  readonly>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="">部门</label>
                                <div>
                                    <input type="text" class="form-control" value="${resText.dname}"  readonly>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">姓名</label>
                                <div>
                                    <input type="text" class="form-control" value="${resText.user_name}">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="">性别</label>`

                    if(resText.sex==='1'){
                        html+=` <div>
                                    <label for=""><input type="radio" name="sex"  checked value="1">男</label>
                                </div>
                                <div>
                                    <label for=""><input type="radio" name="sex" value="0">女</label>
                                </div>`
                    }else{
                        html+=` <div>
                                    <label for=""><input type="radio" name="sex" value="1">男</label>
                                </div>
                                <div>
                                    <label for=""><input type="radio" name="sex"  checked value="0">女</label>
                                </div>`
                    }
                    html+=`</div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">邮箱</label>
                                <div>
                                    <input type="text" class="form-control" value="${resText.email}">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="">手机号码</label>
                                <div>
                                    <input type="text" class="form-control" value="${resText.phone}">
                                </div>
                            </div>
                        </div>
                      
                        
                        <button class="btn btn-primary">提交</button>
                        <button class="btn">重置</button>`
                $('.container1').html(html)
            }
            // console.log(resText)
        })
    }
    islogin();

    $(document.body).on('click','[data-toggle=login]>li:first-child>a',function(){
        location='user.html?back='+location.href
    })
    $(document.body).on('click','.drop-menu>li:last-child>a',e=>{
        e.preventDefault();
        // $.get('data/logout.php').then(islogin)
        //退出加载登录页面
        location='login.html'
    })
})