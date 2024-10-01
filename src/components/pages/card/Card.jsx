import { useGetCharactersQuery } from '../../../redux/api/card';
import style from './Card.module.css';

const Card = () => {
  const { data } = useGetCharactersQuery();

  return (
    <div>
   <h1>Hunter X Hunter</h1>
    <div className={style.Card}>
      {data?.map((item) => (
        <div key={item.id} className={style.content}>
          <img className={style.image} src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <h3>{item.also_known_as}</h3>
          <p>{item.abilities}</p>
          <h4      style={{
                color: item.state === 'alive' ? 'green' : 'red',
                fontWeight: 'bold',
              }}>{item.state}</h4>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
