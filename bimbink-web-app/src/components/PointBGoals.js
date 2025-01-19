// src/components/PointBGoals.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Ensure you have firebase configured
import { collection, addDoc, getDocs, writeBatch } from 'firebase/firestore';

const PointBGoals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoals, setNewGoals] = useState([{ category: '', pointA: '', pointB: '', quarter: 'Q4' }]);

  useEffect(() => {
    let isMounted = true;

    const fetchGoals = async () => {
      const querySnapshot = await getDocs(collection(db, 'goals'));
      if (isMounted) {
        const goalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setGoals(goalsData);
      }
    };

    fetchGoals();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleAddRow = () => {
    setNewGoals([...newGoals, { category: '', pointA: '', pointB: '', quarter: 'Q4' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedGoals = newGoals.map((goal, i) => (i === index ? { ...goal, [field]: value } : goal));
    setNewGoals(updatedGoals);
  };

  const handleSave = async () => {
    const batch = writeBatch(db);
    newGoals.forEach((goal) => {
      const docRef = collection(db, 'goals').doc();
      batch.set(docRef, goal);
    });
    await batch.commit();
    setNewGoals([{ category: '', pointA: '', pointB: '', quarter: 'Q4' }]);
    const querySnapshot = await getDocs(collection(db, 'goals'));
    const goalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setGoals(goalsData);
  };

  return (
    <div className="container">
      <h5>Point B Goals</h5>
      <ul className="collection">
        {goals.map(goal => (
          <li key={goal.id} className="collection-item">
            {goal.category} - {goal.pointA} - {goal.pointB} - {goal.quarter}
          </li>
        ))}
      </ul>
      <h5>Add New Goals</h5>
      {newGoals.map((goal, index) => (
        <div key={index} className="row">
          <div className="input-field col s3">
            <select
              value={goal.category}
              onChange={(e) => handleInputChange(index, 'category', e.target.value)}
              className="browser-default"
            >
              <option value="" disabled>Select Category</option>
              <option value="Occupation">Occupation</option>
              <option value="Location">Location</option>
              <option value="Family">Family</option>
              <option value="Self-development">Self-development</option>
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
          <div className="input-field col s3">
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
      <button className="btn" onClick={handleAddRow}>Plus</button>
      <button className="btn" onClick={handleSave}>Save</button>
    </div>
  );
};

export default PointBGoals;