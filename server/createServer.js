const express = require('express');
const cors = require('cors');

const server = express()
server.use(cors())

const foodList = ['pizza', 'soup', 'fries', 'kimchi', 'sea food', 'ramen', 'thai', 'friarielli']

const weiland = [
    {firstName: 'Beth', lastName: 'Schofield', favFood: 'Kimchi', link: "https://kimchee.uk.com/" },
    {firstName: 'Charanjit', lastName: 'Pooni', favFood: '', link: "https://www.nestfood.co.uk/"},
    {firstName: 'Charlie', lastName: 'Simms', favFood: 'Curry (for now)', link: "https://www.dishoom.com/"},
    {firstName: 'Dere', lastName: 'Jemireyigbe', favFood: '', link: "https://www.nestfood.co.uk/"},
    {firstName: 'Dragos', lastName: 'Sucio', favFood: 'Greek Moussaka', link: "https://www.tripadvisor.co.uk/Restaurants-g186338-zfd10919-London_England-Moussaka.html"},
    {firstName: 'Fopeayo', lastName: 'Unknown', favFood: 'Italian food', link: "https://uk.vapiano.com/en/home/"},
    {firstName: 'Geraldine', lastName: 'Bengsch', favFood: 'Polish dumplings', link: "https://www.balticrestaurant.co.uk/"},
    {firstName: 'Kai', lastName: 'Tse', favFood: 'Ramen', link: "https://www.kanada-ya.com/"},
    {firstName: 'Tonderai', lastName: 'Mavindidze', favFood: 'Karaage', link: "https://japang.co/en-gb/order-online/"},
    {firstName: 'Michael', lastName: 'Laird', favFood: 'Sea food', link: "https://www.bentleys.org/"},
    {firstName: 'Olivia', lastName: 'Vacaru', favFood: 'Burgers', link: "http://bigmoesdiner.co.uk/menus.php#"},
    {firstName: 'Paola', lastName: 'Maddaluno', favFood: 'Friarielli', link: "https://briciole.co.uk/"},
    {firstName: 'Raj', lastName: 'Tandel', favFood: 'Anything spicy', link: "https://www.myspicekitchen.co.uk/order?l=en#/where"},
    {firstName: 'Rishabh', lastName: 'Rawat', favFood: 'Dominos Pizza', link: "https://www.dominos.co.uk/?utm_source=extended_network&utm_medium=yext&y_source=1_MTIxMzcxMjMtNzE1LWxvY2F0aW9uLm1lbnVfdXJs"},
    {firstName: 'Stelios', lastName: 'Thomas', favFood: 'French fries', link: "https://poptata.com/"},
    {firstName: 'Steph', lastName: 'Cooper', favFood: 'Thai food', link: "https://www.somsaa.com/#menus"},
    {firstName: 'Tara', lastName: 'Hussain', favFood: 'Soup & Bagels', link: "https://www.shoop-soup.com/menu"}
];


server.get('/', (req, res)=>{
    res.send('Welcom to Taraj');
})

server.post("/", (req,res) => {
    res.status(405).send("Not allowed!");
})


server.get('/weiland', (req,res) =>{
    res.send(weiland);
})

server.get('/weiland/random', (req, res)=>{
    const index = Math.floor(Math.random() * weiland.length);
    res.send(weiland[index]);
})


server.get('/weiland/:firstName', (req, res)=>{
    try{ 
        const searchName = req.params.firstName;
        const capName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
        const selectedName = weiland.find((c) => c.firstName === capName);
    
        if (!selectedName) {
            throw `Error: ${searchName} does not belong to the Weiland cohort`;
          }
           res.send(selectedName);
    }catch(err){
        console.log(err);
        res.status(404).send(err);
    }
    
})


module.exports  = server;
