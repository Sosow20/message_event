import React, { useState } from 'react';
import './index.css';

function App() {
  const [step, setStep] = useState(0); // 0: bouton, 1: prank, 2: vrai cadeau
  const [confetti, setConfetti] = useState([]);
  const [showPrankMeme, setShowPrankMeme] = useState(false);

 const handleReveal = () => {
  setShowPrankMeme(true); // Afficher d'abord le contenu
  setTimeout(() => setStep(1), 50); // Puis changer l'étape presque instantanément
};

  const handleRealGift = () => {
    setStep(2);
    // Lancer les confettis
    const newConfetti = [];
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        color: ['#ffff00', '#ff00ff', '#00ffff', '#ff0000', '#00ff00', '#0000ff', '#ffa500'][Math.floor(Math.random() * 7)],
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2
      });
    }
    setConfetti(newConfetti);
  };

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: step === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                  step === 1 ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      overflow: 'hidden',
      transition: 'background 0.8s ease'
    }}>

      {/* Confettis pour le vrai cadeau */}
      {step === 2 && confetti.map(conf => (
        <div
          key={conf.id}
          className="animate-confetti"
          style={{
            position: 'fixed',
            width: '12px',
            height: '12px',
            left: `${conf.left}%`,
            top: '-20px',
            backgroundColor: conf.color,
            animationDelay: `${conf.delay}s`,
            animationDuration: `${conf.duration}s`,
            borderRadius: '50%'
          }}
        />
      ))}

      <div style={{ maxWidth: '700px', padding: '20px', width: '100%' }}>
        
        {/* ÉTAPE 0 : BOUTON MYSTÈRE */}
        {step === 0 && (
          <div 
            className="animate-slideIn"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '60px 40px',
              borderRadius: '30px',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
              textAlign: 'center'
            }}
          >
            <h1 style={{
              fontSize: '3em',
              marginBottom: '30px',
              color: '#667eea',
              fontWeight: 'bold'
            }}>
              🎁 Salut Abdel ! 🎁
            </h1>
            
            <p style={{
              fontSize: '1.4em',
              color: '#555',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Tu as scanné le QR code mystérieux...<br />
              Es-tu prêt à découvrir ton cadeau ? 🤔
            </p>

            <button
              onClick={handleReveal}
              style={{
                fontSize: '1.5em',
                padding: '20px 50px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                animation: 'pulse 2s infinite'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.5)';
              }}
            >
              🎉 Découvrir mon cadeau ! 🎉
            </button>
          </div>
        )}

        {/* ÉTAPE 1 : PRANK ! */}
        {step === 1 && (
          <div 
            className="animate-slideIn"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '40px',
              borderRadius: '30px',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
              textAlign: 'center'
            }}
          >
            {showPrankMeme && (
              <>
                {/* TROLL FACE IMAGE */}
                <div style={{
                  marginBottom: '20px',
                  animation: 'bounce 1s ease-in-out'
                }}>
                  <img 
                    src="https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
                    alt="Troll Face"
                    style={{
                      width: '250px',
                      height: 'auto',
                      borderRadius: '20px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      transform: 'rotate(-5deg)'
                    }}
                  />
                </div>

                <h1 style={{
                  fontSize: '3em',
                  color: '#f5576c',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  animation: 'shake 0.5s infinite'
                }}>
                  AHAHAHAH ! 🤣
                </h1>

                <p style={{
                  fontSize: '2.2em',
                  color: '#333',
                  marginBottom: '20px',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  C'ÉTAIT UN PRANK ! 😆
                </p>

                <p style={{
                  fontSize: '1.8em',
                  color: '#333',
                  marginBottom: '20px',
                  fontWeight: 'bold'
                }}>
                  T'as vraiment cru que j'allais t'offrir un cadeau ? 🤣<br />
                  Fallait peut-être faire une wishlist si t'espérais avoir quelque chose hein !
                </p>

                <p style={{
                  fontSize: '1.3em',
                  color: '#666',
                  marginBottom: '10px'
                }}>
                  Il n'y a rien ! Nada ! Que dalle ! WALOU !! 🤷‍♀️
                </p>

                <div style={{
                  fontSize: '5em',
                  margin: '20px 0',
                  filter: 'grayscale(100%)'
                }}>
                  🎁❌
                </div>

                <p style={{
                  fontSize: '1.2em',
                  color: '#888',
                  fontStyle: 'italic',
                  marginBottom: '30px'
                }}>
                  Bien tenté quand même... 😏
                </p>

                <div style={{
                  background: '#fff3cd',
                  padding: '20px',
                  borderRadius: '15px',
                  border: '2px dashed #ffa500',
                  marginBottom: '30px'
                }}>
                  <p style={{
                    fontSize: '1.2em',
                    color: '#856404',
                    margin: 0
                  }}>
                    Bon ok, je n'allais pas te laisser comme ça...<br />
                    J'ai quand même un <strong>PETIT cadeau</strong> pour toi ! 😉
                  </p>
                </div>

                <button
                  onClick={handleRealGift}
                  style={{
                    fontSize: '1.3em',
                    padding: '18px 40px',
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 30px rgba(17, 153, 142, 0.5)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  👀 Voir le vrai cadeau
                </button>
              </>
            )}
          </div>
        )}

        {/* ÉTAPE 2 : VRAI CADEAU ! */}
        {step === 2 && (
          <div 
            className="animate-slideIn"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              padding: '50px',
              borderRadius: '30px',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
              textAlign: 'center',
              border: '3px solid gold'
            }}
          >
            <div style={{
              fontSize: '6em',
              marginBottom: '20px',
              animation: 'prize 1.5s ease-out'
            }}>
              🎬🍿
            </div>

            <h1 style={{
              fontSize: '2.5em',
              color: '#4facfe',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              🎉 SURPRISE ! 🎉
            </h1>

            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
            }}>
              <p style={{
                fontSize: '1.8em',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                🎟️ DEUX BILLETS DE CINÉMA PATHÉ 🎟️
              </p>
              <p style={{
                fontSize: '1.2em',
                marginBottom: '10px'
              }}>
                Valables dans <strong>TOUS les cinémas Pathé de France</strong> ! 🍿
              </p>
            </div>

            <div style={{
              background: '#f8f9fa',
              padding: '25px',
              borderRadius: '15px',
              marginBottom: '25px',
              border: '2px solid #dee2e6'
            }}>
              <p style={{
                fontSize: '1.3em',
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                ✨ Choisis ta qualité premium ✨ 
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                marginTop: '15px'
              }}>
                {['🖥️ ScreenX', '🎥 IMAX', '🔊 Dolby Atmos', '🎢 4DX'].map((quality, i) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '15px',
                    borderRadius: '10px',
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    color: '#667eea',
                    border: '2px solid #667eea',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}>
                    {quality}
                  </div>
                ))}
              </div>
              <p style={{
                fontSize: '0.95em',
                color: '#666',
                marginTop: '15px',
                fontStyle: 'italic'
              }}>
                (Billets valable jusqu'au 30/11/2026. <br />
Le E-billet Ciné 4DX Accès National est une contremarque à échanger contre 1 place* sur le site de réservation en ligne cinémaspathegaumont.com ou sur l'application des cinémas Pathé Gaumont.
Pour découvrir toutes nos salles technos : <a href="https://www.pathe.fr/experiences" target="_blank" rel="noopener noreferrer">https://www.pathe.fr/experiences</a>
(*) <br /> Sur la base d'une séance 4DX, IMAX, Dolby Cinéma ou ScreenX <br />
Les lunettes 3D seront à régler en supplément (facultatif)
Hors séance spéciale.)
              </p>
            </div>

            <div style={{
              background: '#fff3cd',
              padding: '25px',
              borderRadius: '15px',
              border: '3px dashed #ffc107',
              marginBottom: '20px'
            }}>
              <p style={{
                fontSize: '1.4em',
                color: '#856404',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}>
                📧 Comment ça marche ?
              </p>
              <p style={{
                fontSize: '1.1em',
                color: '#856404',
                lineHeight: '1.6'
              }}>
                Deux codes se cache derrière ton enveloppe ! 🎁<br />
                Saisis-les sur ton compte Pathé et<br />
                <strong>profite du cinéma comme jamais ! 🎬</strong>
              </p>
            </div>

            <div style={{
              fontSize: '3em',
              marginTop: '20px'
            }}>
              🎊🎉🎊
            </div>

            <p style={{
              fontSize: '1.3em',
              color: '#666',
              marginTop: '20px',
              fontStyle: 'italic'
            }}>
              Bon film Abdel ! 🍿✨
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  );
}

export default App;