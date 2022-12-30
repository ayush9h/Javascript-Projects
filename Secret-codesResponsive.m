position: absolute;
  left: 0;
  top: 250px;
  right: 0;
  text-align: center;
  
  
  <!--for main container--->
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 100px;

<!--for main button--->
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: inline-block;
  background: aqua;
  color: black;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 30px;
  margin: 50px auto;
  border-radius: 6px;
  transition: all 0.3s ease;
  border-radius: 0.2rem;
  font-family: "Poppins", sans-serif;

<!---For audio--->
document.getElementById("icon").addEventListener("click",function(){
  document.getElementById("myAudio").play();
});
