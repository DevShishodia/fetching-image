
   let task = fetch('https://meme-api.herokuapp.com/gimme');

   let a = task.then(function(response){
            return response.json();
  });

   let b = a.then(function(data){
         console.log(data);
         display_data(data.url);
   });

    function display_data(image_url){
       let imgg  = document.getElementById('image');
       imgg.src = image_url;
    }