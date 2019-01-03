// this small script can be used to make any dom element draggable
// after adding script to your page , you can make any element on page by running
//draggable(domElement); as simple as that
// function currently does not change the z index of the element which means
// element can be accidently put behind other elements.
  <script>
function draggable(win){
  obj ={};
  win.style.position = "relative";
  win.onmousedown = mousedown;
 function mousedown(e){
   if(e.target!==e.currentTarget) return;
    console.log(e);
    obj.x = e.screenX, obj.y = e.screenY;
    win.style.background = "pink"
      obj.left = win.style.left? Number.parseInt(win.style.left):0;
      obj.top = win.style.top? Number.parseInt(win.style.top):0;
      window.addEventListener("mousemove",mousemove );

    window.onmouseup = function() {
      console.log("mouse up trigged")
      window.removeEventListener("mousemove",mousemove );
       win.style.background = "lightblue"}
  }

  function mousemove (e){
    console.log("moving",e);
   win.style.top=obj.top+(e.screenY-obj.y)+"px";
   win.style.left=(obj.left+(e.screenX-obj.x))+"px";
   console.log(win.style.top+" "+win.style.left)
  }
}
  </script>
