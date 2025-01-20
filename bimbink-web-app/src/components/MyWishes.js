// src/components/MyWishes.js
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // Ensure you have firebase configured
import { collection, addDoc, getDocs, writeBatch, doc, query, where, deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/PointBGoals.css'; // Reuse the same styles

const MyWishes = () => {
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      let isMounted = true;

      const fetchWishes = async () => {
        const q = query(collection(db, 'user-wishes'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        if (isMounted) {
          const wishesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setWishes(wishesData);
        }
      };

      fetchWishes();

      return () => {
        isMounted = false;
      };
    }
  }, [user]);

  const handleAddWish = async () => {
    if (user && newWish.trim() !== '' && wishes.length < 108) {
      const docRef = await addDoc(collection(db, 'user-wishes'), { wish: newWish, userId: user.uid });
      setWishes([...wishes, { id: docRef.id, wish: newWish }]);
      setNewWish('');
    }
  };

  const handleRemove = async (id) => {
    await deleteDoc(doc(db, 'user-wishes', id));
    setWishes(wishes.filter(wish => wish.id !== id));
  };

  return (
    <div className="container">
      <h6>My Wishes</h6>
      <ul className="collection">
        {wishes.map(wish => (
          <li key={wish.id} className="collection-item">
            {wish.wish}
            <button className="btn red remove-button" onClick={() => handleRemove(wish.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {wishes.length < 108 && (
        <div className="row goal-row">
          <div className="input-field col s10">
            <input
              type="text"
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              placeholder="Add a new wish"
            />
          </div>
          <div className="input-field col s2">
            <button className="btn blue darken-2" onClick={handleAddWish}>Add Wish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWishes;
