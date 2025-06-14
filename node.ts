function getRandomNumber(): number {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
    return number;
}

getRandomNumber()

export default getRandomNumber;