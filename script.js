var t=gsap.timeline()

t.from("#nav img,#nav h3,#nav h4,#nav button",{
    y:-100,
    duration:1,
    delay:0.5,  
    opacity:0,
    stagger:0.2
})  
t.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3
})
t.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3 
})
t.from("#scroll",{
    scale:0,
    opacity:0
})
t.to("#scroll",{
    
y:30,
repeat:-1,
duration:1,
yoyo:true

})