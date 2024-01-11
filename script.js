const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imgeView = document.getElementById('img-view');

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
	let imgLink = URL.createObjectURL(inputFile.files[0]);
	imgeView.style.backgroundImage = `url(${imgLink})`;
	imgeView.textContent = "";
	imgeView.style.border = 0;

}
dropArea.addEventListener("dragober",function(e){
	e.preventDefault();
});
dropArea.addEventListener("drop",function(e){
	e.preventDefault();
	inputFile.files = e.dataTransfer.files;
	uploadImage()
});