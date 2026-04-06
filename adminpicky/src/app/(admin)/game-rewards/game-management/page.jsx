"use client";

import React, { useState } from 'react';
import styles from '../games.module.css';

const GameManagement = () => {
  const [device, setDevice] = useState('desktop'); // desktop or mobile
  const [game, setGame] = useState({
    name: "Spin & Win Mega Promo",
    type: "Wheel",
    rewardType: "Coupon",
    wheelPrizes: "50% OFF,0% OFF,10% OFF,20% OFF,30% OFF,40% OFF,60% OFF,70% OFF",
    status: "Active",
    spinLimit: true,
    dailyLogin: false,
    autoApply: true
  });

  const [spinRotation, setSpinRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(null);

  // Scratch specific state
  const [scratchGrid, setScratchGrid] = useState(new Array(40).fill(false)); // 8x5 grid
  const [scratchPrize, setScratchPrize] = useState("50% OFF");
  
  const [editingId, setEditingId] = useState(null);

  const [gamesList, setGamesList] = useState([
    { id: 1, name: "Spin & Win Mega Promo", type: "Wheel", reward: "Coupon", active: true },
    { id: 2, name: "Scratch to Win iPhone", type: "Scratch", reward: "Points", active: false },
    { id: 3, name: "Daily Login Mystery Box", type: "MysteryBox", reward: "Daily", active: true },
    { id: 4, name: "Weekend Special Spin", type: "Wheel", reward: "Discount", active: true },
    { id: 5, name: "Festival Points Multiplier", type: "Scratch", reward: "Points", active: true },
    { id: 6, name: "New User Spin", type: "Wheel", reward: "Coupon", active: false }
  ]);

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const toggleGameStatus = (id) => {
    setGamesList(gamesList.map(g => g.id === id ? { ...g, active: !g.active } : g));
  };

  const handleCreateGame = () => {
    if (!game.name) {
      alert("Please enter a game name!");
      return;
    }

    if (editingId) {
      setGamesList(gamesList.map(g => g.id === editingId ? {
        ...g,
        name: game.name,
        type: game.type,
        reward: game.type === 'Wheel' ? 'Wheel Prizes' : game.rewardType,
        active: game.status === "Active"
      } : g));
      setEditingId(null);
      alert(`Success! "${game.name}" has been updated.`);
    } else {
      const newGame = {
        id: Math.floor(Math.random() * 1000) + 10,
        name: game.name,
        type: game.type,
        reward: game.type === 'Wheel' ? 'Wheel Prizes' : game.rewardType,
        active: game.status === "Active"
      };
      setGamesList([newGame, ...gamesList]);
      alert(`Success! "${newGame.name}" has been created and added to the table.`);
    }

    setGame({
      ...game,
      name: ""
    });
  };

  const handleEditGame = (g) => {
    setEditingId(g.id);
    setGame({
      ...game,
      name: g.name,
      type: g.type,
      status: g.active ? "Active" : "Inactive"
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteGame = (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      setGamesList(gamesList.filter(g => g.id !== id));
    }
  };

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setShowWinPopup(null);
    
    const prizes = (game.wheelPrizes || "").split(',');
    const winningIndex = Math.floor(Math.random() * prizes.length);
    const winningPrize = prizes[winningIndex].trim();
    
    // We want the slice to land under the top pointer (at 0 degrees)
    // Slices are drawn sequentially from 0. Slice i's center is i * (360/N) + (360/N)/2.
    const sliceAngle = 360 / prizes.length;
    const targetDeg = 360 - (winningIndex * sliceAngle + sliceAngle / 2);
    
    // Extra full spins for effect
    const extraSpins = 360 * 5;
    const finalRotation = spinRotation + extraSpins + targetDeg - (spinRotation % 360);
    
    setSpinRotation(finalRotation);
    
    setTimeout(() => {
        setIsSpinning(false);
        setShowWinPopup(winningPrize);
    }, 4000);
  };

  const handleScratch = (index) => {
    if (scratchGrid[index]) return;
    const newGrid = [...scratchGrid];
    newGrid[index] = true;
    setScratchGrid(newGrid);
  };

  const resetScratch = () => {
    setScratchGrid(new Array(40).fill(false));
    const prizes = (game.wheelPrizes || "YOU WON!, TRY AGAIN!, 100 POINTS, 50% OFF").split(',');
    setScratchPrize(prizes[Math.floor(Math.random() * prizes.length)].trim());
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Game Management</h1>
          <p className={styles.subtitle}>Create and manage gamified experiences to boost user engagement.</p>
        </div>
      </div>

      {/* CREATE GAME SECTION */}
      <div className={styles.contentWrapper} style={{ marginBottom: '3rem' }}>
        <div className={styles.formSection}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
             {editingId ? 'Edit Game' : 'Create Game'}
          </h3>
          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Game Name</label>
              <input type="text" name="name" value={game.name} onChange={handleChange} className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Game Type</label>
              <select name="type" value={game.type} onChange={(e) => {
                  handleChange(e);
                  if (e.target.value === 'Scratch') resetScratch();
              }} className={styles.select}>
                <option value="Wheel">Spin Wheel</option>
                <option value="Scratch">Scratch Card</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Reward Type</label>
              <select name="rewardType" value={game.rewardType} onChange={handleChange} className={styles.select}>
                <option value="Coupon">Coupon</option>
                <option value="Points">Points</option>
                <option value="Discount">Discount</option>
                <option value="Daily">Daily Login Box</option>
              </select>
            </div>

            {game.type === "Wheel" && (
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>
                  Wheel Prizes (Comma Separated - 8 slices)
                </label>
                <input 
                  type="text" 
                  name="wheelPrizes" 
                  value={game.wheelPrizes} 
                  onChange={handleChange} 
                  className={styles.input} 
                  placeholder="e.g. 50%, 20%, 0%, 10%, Free, 5%, No Prize, 30%"
                />
              </div>
            )}

            {/* Advanced Features */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Advanced Settings
              </h4>

              <div style={{ display: 'flex', gap: '2rem', background: '#f8fafc', padding: '1rem', borderRadius: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={game.spinLimit} onChange={() => setGame({ ...game, spinLimit: !game.spinLimit })} />
                  Limit 1 per day
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={game.dailyLogin} onChange={() => setGame({ ...game, dailyLogin: !game.dailyLogin })} />
                  Daily Login Trigger
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={game.autoApply} onChange={() => setGame({ ...game, autoApply: !game.autoApply })} />
                  Auto-Apply Coupon
                </label>
              </div>
            </div>
          </div>

          <div className={styles.actionsRow}>
            {editingId && (
              <button 
                className={styles.btnPrimary} 
                style={{background: '#64748b', marginRight: 'auto'}} 
                onClick={() => {
                  setEditingId(null);
                  setGame({...game, name: ""});
                }}>
                Cancel Edit
              </button>
            )}
            <button className={styles.btnPrimary} onClick={handleCreateGame}>
              {editingId ? 'Update Game' : 'Create Game'}
            </button>
          </div>
        </div>

        {/* LIVE PREVIEW */}
        <div className={styles.previewSection}>
          <div className={styles.previewSectionTitle}>
            Live Game Preview
            <div className={styles.previewDeviceToggle}>
              <button className={`${styles.deviceBtn} ${device === 'desktop' ? styles.active : ''}`} onClick={() => setDevice('desktop')}>Desktop</button>
              <button className={`${styles.deviceBtn} ${device === 'mobile' ? styles.active : ''}`} onClick={() => setDevice('mobile')}>Mobile</button>
            </div>
          </div>

          <div className={`${styles.livePreviewBox} ${device === 'mobile' ? styles.mobile : ''}`}>
            <div className={styles.previewOverlay}>
              <h3>{game.name}</h3>
              <p>Win a {game.rewardType} today!</p>
            </div>

            {/* Emulated Graphics */}
            {game.type === 'Wheel' ? (
              <div style={{position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                
                {/* Pointer Arrow */}
                <div style={{
                  position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', 
                  width: 0, height: 0, borderLeft: '15px solid transparent', borderRight: '15px solid transparent', 
                  borderTop: '25px solid #facc15', zIndex: 30, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'
                }}></div>

                {/* Rotating Wheel graphic */}
                <div className={styles.wheelGraphic} style={{
                    animation: 'none',
                    transform: `rotate(${spinRotation}deg)`,
                    transition: 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)'
                }}>
                  {(game.wheelPrizes || "").split(',').map((prize, idx, arr) => {
                    const angle = idx * (360 / arr.length) + ((360 / arr.length) / 2);
                    return (
                      <div key={idx} style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-85px) rotate(90deg)`,
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                        whiteSpace: 'nowrap',
                        zIndex: 5
                      }}>
                        {prize.trim()}
                      </div>
                    );
                  })}
                </div>
                
                {/* Center Spin Button */}
                <div className={styles.wheelMarker} 
                     onClick={handleSpin} 
                     style={{
                        cursor: isSpinning ? 'not-allowed' : 'pointer', 
                        zIndex: 15, 
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        transform: isSpinning ? 'translate(-50%, -50%) scale(0.95)' : 'translate(-50%, -50%) scale(1)',
                        transition: 'transform 0.2s'
                     }}>
                  SPIN
                </div>

                {/* Win Popup Overlay */}
                {showWinPopup && (
                  <div style={{
                      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                      background: 'rgba(15, 23, 42, 0.95)', padding: '2rem', borderRadius: '20px',
                      color: 'white', textAlign: 'center', zIndex: 100, border: '2px solid #facc15',
                      boxShadow: '0 0 40px rgba(250, 204, 21, 0.5)', width: '80%'
                  }}>
                      <div style={{fontSize: '3rem', margin: '0 0 0.5rem 0'}}>🎉</div>
                      <h3 style={{fontSize: '1.5rem', color: '#facc15', margin: 0}}>You Won!</h3>
                      <p style={{fontSize: '1.25rem', fontWeight: 800, margin: '1rem 0', color: 'white'}}>{showWinPopup}</p>
                      <button onClick={() => setShowWinPopup(null)} style={{
                          background: '#facc15', color: '#0f172a', border: 'none',
                          padding: '0.6rem 1.5rem', borderRadius: '10px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer'
                      }}>Got it</button>
                  </div>
                )}
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div style={{
                     position: 'relative', width: '250px', height: '150px', borderRadius: '16px', overflow: 'hidden',
                     boxShadow: '0 10px 25px rgba(0,0,0,0.3)', border: '4px solid white'
                  }}>
                     
                     {/* Background Win Graphic (The Prize) */}
                     <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                     }}>
                        <span style={{fontSize: '0.8rem', color: '#0f172a', fontWeight: 800}}>YOU WON!</span>
                        <span style={{fontSize: '1.6rem', fontWeight: 900, color: '#e11d48', marginTop: '0.5rem', textAlign: 'center'}}>{scratchPrize}</span>
                     </div>

                     {/* The Scratch Overlays */}
                     <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(5, 1fr)',
                     }}>
                        {scratchGrid.map((scratched, index) => (
                           <div key={index} 
                                onMouseEnter={() => handleScratch(index)}
                                onTouchMove={() => handleScratch(index)}
                                style={{
                                  background: scratched ? 'transparent' : 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23cbd5e1\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E") #94a3b8',
                                  transition: 'background 0.3s ease-out',
                                  cursor: 'crosshair',
                                  borderRight: !scratched ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                  borderBottom: !scratched ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                }}
                           />
                        ))}
                     </div>

                     {/* Overlay Text */}
                     {scratchGrid.filter(Boolean).length < 15 && (
                        <div style={{
                           position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                           pointerEvents: 'none', color: 'white', fontWeight: 900, letterSpacing: '2px',
                           fontSize: '1.4rem', textShadow: '0 2px 5px rgba(0,0,0,0.8)'
                        }}>
                           SCRATCH HERE
                        </div>
                     )}
                  </div>
                  
                  <button onClick={resetScratch} style={{
                      marginTop: '1.5rem', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)',
                      padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', cursor: 'pointer'
                  }}>Reset Card</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* GAMES LIST SECTION */}
      <div className={styles.tableContainer}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Active Games</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Game Name</th>
              <th>Type</th>
              <th>Reward</th>
              <th>Status</th>
              <th>Toggle Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {gamesList.map((g) => (
              <tr key={g.id}>
                <td>#{g.id}</td>
                <td style={{ fontWeight: 600, color: 'var(--text-main)' }}>{g.name}</td>
                <td>{g.type}</td>
                <td>{g.reward}</td>
                <td>
                  <span className={`${styles.badge} ${g.active ? styles.active : styles.inactive}`}>
                    {g.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className={`${styles.toggleSwitch} ${g.active ? styles.active : ''}`} onClick={() => toggleGameStatus(g.id)}>
                    <div className={styles.toggleCircle}></div>
                  </div>
                </td>
                <td>
                  <div className={styles.actionWrapper}>
                    <button className={styles.iconBtn} title="Edit Game" onClick={() => handleEditGame(g)}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button className={`${styles.iconBtn} ${styles.delete}`} title="Delete Game" onClick={() => handleDeleteGame(g.id)}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default GameManagement;
