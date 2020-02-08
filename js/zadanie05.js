var button = document.querySelectorAll('button');
for(var i=0; i<button.length;i++){
    button[i].addEventListener('click', function klik() {
        document.getElementById('container').innerHTML=this.getAttribute('data-text');
    })
}