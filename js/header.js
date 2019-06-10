//悬停下拉列表

(()=>{
    ajax({
        type:'get',
        url:'header.html'
    }).then(html=>{
       //console.log(html)
        document.getElementById('header').innerHTML=html;
        var drop=document.getElementById('welcome');
        drop.onmouseover=function(e){
            //console.log(this.children[1])
            this.children[1].style.display='block';
            // if(this.children[1].style.height==0){
            //     this.children[1].style.height='250px'
            // }
            this.children[1].style.height='250px'
        }
        drop.onmouseout=function() {
            this.lastElementChild.style.height = 0;
        }
    });

})()