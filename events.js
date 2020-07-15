AFRAME.registerComponent('markerhandler', {

     const animatedMarker = document.querySelector("#animated-marker");

animatedMarker.addEventListener('click' ,() = > {
    window.open("google.com",'_blank');
});


});

//     init: function() {
//         const animatedMarker = document.querySelector("#animated-marker");
//         const aEntity = document.querySelector("#animated-model");

//         // every click, we make our model grow in size :)
//         animatedMarker.addEventListener('click', function(ev, target){
//             const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
//             if (aEntity && intersectedElement === aEntity) {
// //                 const scale = aEntity.getAttribute('scale');
// //                 Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
// //                 aEntity.setAttribute('scale', scale);
//                             }
//         });
// }});
