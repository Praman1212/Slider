    let preBtn = document.getElementById("pre");
    let nextBtn = document.getElementById("next");

    let array = ['chelsea.jpg','city.jpg','psg.jpg','amadrid.jpg'];
      
    let image = document.getElementById("photo");

    let i=0;
    preBtn.addEventListener('click',()=>{

        i--;
        if(i<0){
            i = array.length - 1;
        }
        image.src = array[i];
    })

    nextBtn.addEventListener('click',()=>{

        i++;
        if(i > array.length - 1){
            i = 0 ;
        }
        image.src = array[i];

    })