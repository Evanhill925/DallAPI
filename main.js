var a = null;
var userOut = "placeholder";
console.log(key)
// import {
//     key
// } from `./second.js`;

bodystring = {"prompt": a , "n": 2,"size": "1024x1024" }

// dropdown menu for style choice using select

function userProm() {
    a =document.querySelector("#username")
    bodystring = {"prompt": a.value , "n": 2,"size": "1024x1024" }
}





function fetchTwo() {
    console.log(a)
    fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        body: JSON.stringify(bodystring),
        headers: { "Content-Type": "application/json","Authorization": key }
      }) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.data)
        console.log(data.data[0].url)
        document.querySelector('img').src = data.data[0].url
        // document.getElementById('two').src = data.data[1].url
      })
    .catch(err => {
     console.log(`error ${err}`)
    })
    //   .then(r =>  r.json().then(data => ({status: r.status, body: data})))
    //   .then(rat => {console.log(rat);
    //      userOut = rat;
    //     // document.getElementById("imageStore").innerHTML = JSON.stringify(userOut,null,'\t');})
    //     document.getElementById("imageStore").innerHTML = rat;
      

}


    function dogPiss() {
        userProm()
        fetchTwo()
    }



//     curl https://api.openai.com/v1/images/generations \
//     -H 'Content-Type: application/json' \
//    
//     -d '{
//     "prompt": "A cute baby sea otter",
//     "n": 2,
//     "size": "1024x1024"
//   }'

// {
//     "created": 1667943375,
//     "data": [
//       {
//         "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-7XhdXiCsFkhMaekHAdlkNu8S/user-2aTEWaDkDQLTHiW4bxED47Nb/img-LLS4mu69zdeml8TvfjnMFehW.png?st=2022-11-08T20%3A36%3A15Z&se=2022-11-08T22%3A36%3A15Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-08T18%3A35%3A39Z&ske=2022-11-09T18%3A35%3A39Z&sks=b&skv=2021-08-06&sig=ajBcv4Nfb5smub3JOziBmUQvwBsB7DNj6NFDKEzqnDc%3D"
//       },
//       {
//         "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-7XhdXiCsFkhMaekHAdlkNu8S/user-2aTEWaDkDQLTHiW4bxED47Nb/img-QNoRpKfMdLjyGeJVRm2cfqUp.png?st=2022-11-08T20%3A36%3A15Z&se=2022-11-08T22%3A36%3A15Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-08T18%3A35%3A39Z&ske=2022-11-09T18%3A35%3A39Z&sks=b&skv=2021-08-06&sig=cEnnmskBEkYPXVuKgohy7B8Vx9QXVTAM8lY2/K7Omlo%3D"
//       }
//     ]
//   }
  


document.getElementById('go').onclick = () => dogPiss()
document.getElementById('test').onclick = () =>console.log(userOut)