const preMovie = async () => {

    const promiseWifeBringTicks = new Promise((resolve, reject) => {
        setTimeout(() =>resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const addButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'));

   

  

    let ticket = await promiseWifeBringTicks;


    // console.log(`wife: i have the ${ticket}`);
    // console.log("husband: we should go in");

    // console.log("wife: i need butter in my pop");

    // let popcorn = await getPopcorn;


    // console.log(`wife: i have the ${popcorn}`);
    // console.log("husband: we should go in");

    // console.log("wife: i need butter in my pop");

    
    // let butter = await addButter;


    // console.log(`wife: i got ${butter} on popcorn`);
    // console.log("husband: anything else darling?");
    // console.log("wife: cold drinks");

    // let colddrink = await getColdDrinks;



    // console.log(`wife: i have the ${colddrink}`);
    // console.log("wife: lets go in");
    // console.log("husband: thanks for reminding me");

    let [popcorn, butter, coke] = await Promise.all([getPopcorn,addButter,getColdDrinks]);

    console.log(`${popcorn},${butter},${coke}`)

return ticket;
}


preMovie().then((m) => console.log(`person: shows ${m}`));
console.log("person4: shows ticket");
console.log("person5: shows ticket");
