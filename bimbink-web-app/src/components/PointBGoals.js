// src/components/PointBGoals.js
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // Ensure you have firebase configured
import { collection, addDoc, getDocs, writeBatch, doc, query, where, deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/PointBGoals.css'; // Import custom CSS

const PointBGoals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoals, setNewGoals] = useState([{ category: '', pointA: '', pointB: '', quarter: 'Q4' }]);
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

      const fetchGoals = async () => {
        const q = query(collection(db, 'point-b-goals'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        if (isMounted) {
          const goalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setGoals(goalsData);
        }
      };

      fetchGoals();

      return () => {
        isMounted = false;
      };
    }
  }, [user]);

  const handleAddRow = () => {
    setNewGoals([...newGoals, { category: '', pointA: '', pointB: '', quarter: 'Q4' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedGoals = newGoals.map((goal, i) => (i === index ? { ...goal, [field]: value } : goal));
    setNewGoals(updatedGoals);
  };

  const handleSave = async () => {
    console.log('handleSave called');
    if (user) {
      console.log('User is authenticated:', user.uid);
      const batch = writeBatch(db);
      newGoals.forEach((goal) => {
        const docRef = doc(collection(db, 'point-b-goals')); // Create a new document reference
        batch.set(docRef, { ...goal, userId: user.uid });
      });
      await batch.commit();
      console.log('Batch committed');
      setNewGoals([{ category: '', pointA: '', pointB: '', quarter: 'Q4' }]);
      const q = query(collection(db, 'point-b-goals'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      const goalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGoals(goalsData);
      console.log('Goals updated:', goalsData);
    } else {
      console.log('User is not authenticated');
    }
  };

  const handleRemove = async (id) => {
    await deleteDoc(doc(db, 'point-b-goals', id));
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="container">
      <h6>Your Point B Goals</h6>
      <ul className="collection">
        {goals.map(goal => (
          <li key={goal.id} className="collection-item">
            <span className="badge category-badge">{goal.category}</span>A: {goal.pointA} -&#62; B: {goal.pointB}<span className="badge">{goal.quarter}</span>
            <button className="btn red remove-button" onClick={() => handleRemove(goal.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h6>add new / more goals</h6>
      {newGoals.map((goal, index) => (
        <div key={index} className="row goal-row">
          <div className="input-field col s2">
            <select
              value={goal.category}
              onChange={(e) => handleInputChange(index, 'category', e.target.value)}
              className="browser-default"
            >
              <option value="" disabled>Select Category</option>
              <option value="Occupation">Occupation</option>
              <option value="Income">Income</option>
              <option value="Location">Location</option>
              <option value="Family">Family</option>
              <option value="Self-development">Self-development</option>
              <option value="Health">Health</option>
              <option value="Travels">Travels</option>
              <option value="Hobby">Hobby</option>
            </select>
          </div>
          <div className="input-field col s3">
            <input
              type="text"
              value={goal.pointA}
              onChange={(e) => handleInputChange(index, 'pointA', e.target.value)}
              placeholder="Point A"
            />
          </div>
          <div className="input-field col s3">
            <input
              type="text"
              value={goal.pointB}
              onChange={(e) => handleInputChange(index, 'pointB', e.target.value)}
              placeholder="Point B"
            />
          </div>
          <div className="input-field col s2">
            <select
              value={goal.quarter}
              onChange={(e) => handleInputChange(index, 'quarter', e.target.value)}
              className="browser-default"
            >
              <option value="Q1">Q1</option>
              <option value="Q2">Q2</option>
              <option value="Q3">Q3</option>
              <option value="Q4">Q4</option>
            </select>
          </div>
        </div>
      ))}
      <div className="button-container">
        <button className="btn light-blue lighten-2" onClick={handleAddRow}>Add More</button>
        <button className="btn blue darken-2" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default PointBGoals;
