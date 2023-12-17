import { Link, useParams } from 'react-router-dom';
import kittens from '../data';
import React from 'react';

const SingleKitten = () => {
  const { kittenId } = useParams();
  const kitten = kittens.find((kitten) => kitten.id === kittenId);
  const { image2, name, description } = kitten;
  return (
    <section className="section product">
      <img src={image2} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
      <Link to="/kittens">back to Kittens</Link>
    </section>
  );
};

export default SingleKitten;
