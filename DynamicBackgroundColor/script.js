const rect=document.querySelector("#center")

rect.addEventListener("mousemove",function(det){
    var rectlocation=rect.getBoundingClientRect();
    var mouselocation=Math.floor(det.clientX-rectlocation.left);
    if(mouselocation<rectlocation.width/2){
        var redcolor=gsap.utils.mapRange(0,rectlocation.width/2,255,0,mouselocation)
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power3
        })
    }else{
        var bluecolor=gsap.utils.mapRange(rectlocation.width/2,rectlocation.width,0,255,mouselocation)
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power3
        })
    }
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:'white',
        ease:Power4
    })
})