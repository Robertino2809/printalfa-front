import Image from 'next/image';
import cards from '/public/assets/cards.js';

const CardsList = () => {
  return (
    <div className='flex justify-center'>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {cards.map(card => (
          <Card
            key={card.id}
            name={card.name}
            description={card.description}
            image={card.image} 
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, description, image }) => {
  return (
    <div className="card-border border-gray-100 card-shadow h-80 w-60 mt-5 p-5 bg-white">
      <div className='bg-red-200 rounded-xl w-14 h-14 flex justify-center items-center'>
        <Image src={image} alt='name' className='w-9 h-9' />
      </div>
      <div className='pt-4'>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
    
  );
};

export default CardsList;
