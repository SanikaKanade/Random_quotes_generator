let orgData="";
let quoteData="";
let data="";
let dataAut="";
const quotes=document.getElementById('quotes');
const author=document.getElementById('author');
const newBtn=document.getElementById('newBtn');

const image=document.createElement('img');
image.className='image';

const twitter=document.getElementById('twitter');

const whatsapp=document.getElementById('whatsapp');

const sharewhatsapp=()=>{
    let whatsappPost=`https://api.whatsapp.com/send?text=${data} By ${dataAut}`;
    window.open(whatsappPost)
}

const tweetNow=()=>{
    let tweetPost=`https://twitter.com/intent/tweet?text=${data} By ${dataAut}`;
    window.open(tweetPost)
}

//Generating Random Number
const   getNewQuotes=()=>{
    let rimage=Math.floor(Math.random()*32);
    console.log(rimage);
    image.src=`./images/${rimage}.jpg`;
    document.querySelector('.mainCard').appendChild(image)
    let rnum=Math.floor(Math.random()*16);
    quoteData=orgData[rnum];
    data=orgData[rnum].text;
    quotes.innerText=`${orgData[rnum].text}`;
    quoteData.author==null
        ?(author.innerText='- UnKnown')
        :(author.innerText=`- ${orgData[rnum].author}`);
    quoteData.author==null
        ?(dataAut='UnKnown')
        :(dataAut=orgData[rnum].author);
}
const getQuotes=async () =>{
    const api="https://type.fit/api/quotes";
    try{
        let data=await fetch(api);
        orgData=await data.json();

        getNewQuotes();
    }
    catch(error){
        console.log(error);
    }
};

twitter.addEventListener('click',tweetNow);
whatsapp.addEventListener('click',sharewhatsapp)
newBtn.addEventListener('click',getNewQuotes);
getQuotes();