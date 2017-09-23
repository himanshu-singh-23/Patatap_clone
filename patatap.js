var body=document.querySelector("body");
console.log(body);
body.addEventListener("keypress",function (event) {
				var shap=new Shape.Circle(new Point(10,10),100);
				shap.fillColor='purple';
})