document.getElementById("btn2").addEventListener('click', function(){

       document.getElementById("mySidenav").style.width = "100%";
})

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";

  }

  function openMenu() {
    document.getElementById("menu-response").style.width = "100%";
  }

  function closeMenu() {
    document.getElementById("menu-response").style.width = "0%";
  }

  document.addEventListener('DOMContentLoaded', ()=>{

    let tl = new TimelineMax();

    tl.fromTo('.nav-bar',4,
    {y: '-60', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')

    .fromTo('.title',1,
    {y: '-50', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')

    .fromTo('.year',1,
    {y: '-50', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')

    .fromTo('.text',1,
    {y: '-50', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')

    .fromTo('.btn-1',1,
    {y: '-50', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')

    .fromTo('.btn-2',1,
    {y: '-50', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')

    .fromTo('.items',1,
    {y: '-50', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')

    .fromTo('.block-2',5,
    {y: '80', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')
    
    .fromTo('.items-2',.9,
    {y: '50', opacity:0},
    {y: '0', opacity:1, ease:Expo.easeInOut},'-=0.5')



})