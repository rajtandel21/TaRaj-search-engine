const form = document.getElementById('myForm');
const result = document.getElementById('result');


async function getRandomData(){
    //check the result div is empty
    console.log(result.length);
    if(result.length > 0){
        result.firstChild.remove;
    }
    const fetchData = await fetch('http://localhost:3000/weiland/random');
    const resData = await fetchData.json();
    
    const data = document.createElement('div');
    result.append(data);
    
    const personData = document.createElement('p');
    personData.textContent = `${resData.firstName} likes to eat ${resData.favFood}.`
    data.append(personData);

    const restaLink = document.createElement('a');
    restaLink.textContent = `If you like ${resData.favFood} too, check out this link.`;
    restaLink.setAttribute('href', `${resData.link}`);
    data.append(restaLink);
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(e.submitter.name === 'searchBtn'){
        //searching for specific stuff'
        // getSpecificData()
    }else{
        //random data
        getRandomData();
    }
})
