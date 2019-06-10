(()=>{
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
}
)()