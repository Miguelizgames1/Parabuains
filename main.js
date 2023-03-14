const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL('https://th.bing.com/th/id/R.7597ce511eb3c85964c4117e5cee4d92?rik=36z5LS3TwcU0iQ&riu=http%3a%2f%2fmelhorcomdeus.com.br%2fwp-content%2fuploads%2f2020%2f06%2ffesta-feliz-aniversario-1024x1024.jpg&ehk=wUicfLlMlqCmuVGOacjiaWMrSRJDu5D0kbF9SITTz%2f8%3d&risl=&pid=ImgRaw&r=0', function(Img){} )
	blockImageObject = Img;
    
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeigth(510);
    blockImageObject.set({
        top:0,
        left:0
    });
    canvas.add(blockImageObject)

}

function playSound(){
	x.play();
}