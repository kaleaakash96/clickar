// const clickBox85509 = document. getElementById ('clickBox85509');
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
//         animatedMarker.addEventListener('click', function(ev, target){
//             const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
//             if (aEntity && intersectedElement === aEntity) {
//                 const scale = aEntity.getAttribute('scale');
//                 Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
//                 aEntity.setAttribute('scale', scale);
//             }
//         });
        
        
        const popup = (() => {
 open( "http://xahlee.info/js/js.html",
 "_blank",
 "width=640,height=480,menubar=no,scrollbar=no"); }
);

animatedMarker.addEventListener ( "click", popup, false);
        
        
        
}});
