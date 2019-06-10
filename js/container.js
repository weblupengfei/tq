(()=>{
    ajax({
        type:'get',
        url:'container.html'
    }).then(html=>{
        document.getElementById('main-container').innerHTML=html

    //点击改变背景颜色
    var tar=document.querySelectorAll('.sidebar-item a')
   // console.log(tar)
    for(var i = 0;i<tar.length;i++) {
        tar[i].onclick = function (e) {
            e.preventDefault()
            if (!this.hasAttribute('active')) {
                var visited = document.querySelector('.active')
                if (visited !== null) {
                    visited.classList.remove('active')
                }
                this.classList.add('active')
            }
            //点击下拉框
            var ul=this.nextElementSibling;
            var open=document.querySelector('.show');
            //console.log(this.parentElement.parentElement)
                if(ul!==null){
                     // if(open==this.parentElement){
                     //     ul.style.height=height+'px'
                     // }
                    var height=ul.getElementsByTagName('li').length*49
                    if(!ul.classList.contains('show')){
                        if(open!==null){
                            if(open==this.parentElement.parentElement) {
                                open.style.height = height + 'px';
                            }
                            open.classList.remove('show')
                            open.style.height=0;
                        }
                        ul.classList.add('show')
                        ul.style.height=height+'px'
                    }else{
                        ul.classList.remove('show')
                        ul.style.height=0
                    }
                }else{

                }

        }
    }
    //点击首页显示
                var tabs=document.querySelectorAll('.tabs a');
                for(var tab of tabs){
                    tab.onclick=function(){
                        var back=document.querySelector('.tabs li[style]')
                        //console.log(back)
                        if(back!==null){
                            back.removeAttribute('style')
                            back.children[0].removeAttribute('style')
                        }
                        this.style.color='blue'
                        this.parentElement.style.background='#fff'
                        // this.style.borderRight='1px solid rgba(0,0,0,0.1)';
                        var show=document.querySelector('.container>div[style]')
                        if(show!==null){
                            show.removeAttribute('style')
                        }
                        var id=this.dataset.target.slice(1);
                        var div=document.getElementsByClassName(id)[0]
                        div.style.zIndex=10
                    }
                }
    })
})()