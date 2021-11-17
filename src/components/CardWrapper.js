import Card from "./Card";

function CardWrapper() {
  return (
    <div className="cards__wrapper">
      <Card
        name="Cindy Clawford"
        src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        alt="A cute tabby kitten"
        species="Cat"
        food="Mice"
        birth="2012"
      />
      <Card
        name="Little Miss Purrfect"
        src="https://learnwebcode.github.io/json-example/images/cat-2.jpg"
        alt="A gray fluffy kitten"
        species="Cat"
        food="Wet food, dry food"
        birth="2016"
      />
      <Card
        name="El Taco"
        src="https://i.imgflip.com/mh1vd.jpg"
        alt="A cat wearing a sombrero, drinking tequila"
        species="Cat"
        food="tequila, bar snax"
        birth="1995"
      />
      <Card
        name="Mr Gwumpy"
        src="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg"
        alt="A grumpy cat, frowning angrily"
        species="Cat"
        food="Caviar"
        birth="1984"
      />
    </div>
  );
}

export default CardWrapper;
