// variables
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes = [{
    quote:'To live is the rarest thing in the world. Most people exist, that is all',
    person:'Oscar Wilde'
},
{
    quote:'That it will never come again is what makes life so sweet',
    person:'Emily Dickinson'
},
{
    quote: 'It is never too late to be what you might have been',
    person:'George Eliot'
},
{
    quote:'Pain is inevitable. Suffering is optional',
    person:'Haruki Murakami'
},
{
    quote:'All the world a stage, and all the men and women merely players.',
    person: 'William Shakespeare'
},
{
    quote: 'Be kind, for everyone you meet is fighting a hard battle.',
    person: 'Plato'
},
{
    quote: 'Unable are the loved to die for love is immortality.',
    person:'Emily Dickinson'
},
{
    quote: 'Let me live, love, and say it well in good sentences',
    person: 'Sylvia Plath'
},
{
    quote: 'Dont let your happiness depend on something you may lose',
    person: 'C.S. Lewis'
},];
// console.log(quotes.length);
btn.addEventListener('click',function(){

    let random= Math.floor(Math.random()*quotes.length);
    console.log(random);
    // console.log(quote);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})


// document.getElementById('user-choice')
// const randomNumber=Math.floor(Math.random()*3)+1