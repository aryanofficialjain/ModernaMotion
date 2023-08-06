// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function circlemouse() {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#mouse-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px )`;
    });

}

circlemouse();