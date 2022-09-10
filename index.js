async function fetchData(url) {
  try {
    let res = await fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: "Client-ID 7072b457c1cfb79",
      }),
    });
    let data = await res.json();
    return await data.data
  } catch (error) {
    console.log(error);
  }
}



async function showData(){
    const url = "https://api.imgur.com/3/gallery/top";

    const data=await fetchData(url);
    // console.log(data)

    let col=document.createElement('div');
    col.className='col';
    // let count=0;
    let row=document.getElementById('row');
    data.map((item)=>{

        // if(count==4){
        //     col=document.createElement('div');
        //     col.className='col';
        //     count=0;  
        // }
        let itemContainer=document.createElement('div')
        
        let images
        
        if(item.images){
            images=item.images[0];
        }
       
        
        if(images!=undefined){

           
            console.log(images.type)

            if(images.type=='video/mp4'){
                let video=document.createElement('iframe');
                
                video.src=images.mp4;
                video.referrerPolicy='no-referrer';
                itemContainer.append(video);
                
            
            }else{
                let img=document.createElement('img');

                img.src=images.link;
                img.referrerPolicy='no-referrer';
                itemContainer.append(img);

            }
            // count++;
        }
        col.append(itemContainer);
        
        // if(count==4){
        //     console.log(count)
           
        // }
        // console.log(images.type)
    })
    row .append(col)
    
   
}

showData();