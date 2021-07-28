var percantage=100;
var img
var imgwidth=0;
var imgheight=0;
var deg=0;
var x, y=0;



function updateimage(){
	var url=document.querySelector("#url").value;
	var title=document.querySelector("#title");
	var download = document.querySelector("#download")
	var i=0
	title.innerText = `${url} - AvImage Viewer`
	download.href = url;
	download.download=url+".png";
	while (i<2){
		img.src=url+" "
		img.src=url
		imgwidth=img.clientWidth; imgheight=img.clientHeight;
		console.log(imgwidth + "/null" + imgheight)
		i++;
	}
	img.style.transform = `rotate(${deg}deg)`
	
}

function inputupdate(){
	var scale=document.querySelector("#size")
	scale.innerText=percantage
}

function scale(){
	img.style.width = imgwidth * (percantage/100) + "px"
	img.style.height = imgheight * (percantage/100) + "px"
}

/*출처: https://uxgjs.tistory.com/155 [UX 공작소]*/