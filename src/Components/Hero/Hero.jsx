import React, { useState } from 'react'
import './Hero.css'
import { db } from "../firebase"
import { setDoc, doc, getDoc, Timestamp } from "firebase/firestore";

const Hero = () => {


  const [shareText, setShareText] = useState("");
  const [shareCode, setShareCode] = useState("");



  const [findCode, setFindCode] = useState("");
  const [findText, setFindText] = useState("");


  const handleShare = async () => {
    if (!shareText.trim() || !shareCode.trim()) {
      alert("Please enter both text and code.");
      return;
    }
    try {
    
      const docRef = doc(db, "shared", shareCode);
      /* const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        alert("This code is already use");
        return;
      } */
      await setDoc(docRef, {
        text: shareText,
        code: shareCode,
        createdAt: Timestamp.now(), 
      });
      alert("Shared successfully!");
    } catch (error) {
      alert(error);
    }
  };

  
  const handleFind = async () => {
    if (!findCode.trim()) {
      alert("Please enter a code.");
      setFindText("");
      return;
    }
    try {
      const docRef = doc(db, "shared", findCode);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFindText(docSnap.data().text || "");
       
      } else {
        setFindText("");
        alert("No text found for this code.");
      }
    } catch (error) {
      setFindText("");
      alert(error);
    }
  };

  
  const handlePasteFindCode = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setFindCode(text);
    } catch (e) {
        console.log(e);
    }
  };
  const handleCopyFindText = async () => {
    try {
      await navigator.clipboard.writeText(findText);
    } catch (e) {
        console.log(e);
    }
  };
  const handlePasteShareText = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setShareText(text);
    } catch (e) {
        console.log(e);
    }
  };
  const handleCopyShareCode = async () => {
    try {
      await navigator.clipboard.writeText(shareCode);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <div className='hero'>
      <div className="find-text" id="find-text">
        <div className="code-sec">
          <div className="e-w-p">
            <h1>Enter code 👇</h1>
            <input type="button" value="Paste" className='e-w-p-btn' onClick={handlePasteFindCode} />
          </div>
          <input
            type="text"
            placeholder="Enter code here !"
            value={findCode}
            onChange={e => setFindCode(e.target.value)}
          />
          <input
            type="button"
            value="Find"
            className='share-btn'
            onClick={handleFind}
          />
        </div>
        <div className="text-sec">
          <div className="text-w-c-btn">
            <h1>Here your text 👇</h1>
            <input type="button" value="Copy" className='cpy-btn' onClick={handleCopyFindText} />
          </div>
          <textarea
            name="textarea"
            id="textarea"
            placeholder='Text will appear here...'
            value={findText}
            readOnly
          ></textarea>
          
        </div>
      </div>

      <div className="share-text" id='share-text'>
        <div className="texts-sec">
          <div className="w-paste">
            <h1>Enter text 👇</h1>
            <input type="button" value="Paste" className='paste-btn' onClick={handlePasteShareText} />
          </div>
          <textarea
            name="textarea"
            id="textareas"
            placeholder='Enter your text...'
            value={shareText}
            onChange={e => setShareText(e.target.value)}
          ></textarea>
        </div>
        <div className="code-s-sec">
          <div className="code-w-cpy">
            <h1>Create code 👇</h1>
            <input type="button" value="Copy" className='cpy-btn' onClick={handleCopyShareCode} />
          </div>
          <input
            type="text"
            placeholder="Enter code here !"
            value={shareCode}
            onChange={e => setShareCode(e.target.value)}
          />
        </div>
        <input
          type="button"
          value="Share"
          className='share-btn'
          onClick={handleShare}
        />

      </div>
    </div>
  )
}

export default Hero