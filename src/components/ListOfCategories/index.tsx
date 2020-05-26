import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

const api =
  'https://petgram-server-dramirez.cdavidramirezg24.now.sh/categories';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();

  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const renderList = (fixed = false) => (
    <List fixed={fixed}>
      {loading ? (
        <Category />
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
