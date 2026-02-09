import { useState, useRef, useEffect } from "react";

/* ─── AD DATA ─── */
const ADS = [
  { id: 1, brand: "Budweiser", title: "American Icons", celebs: ["Clydesdale", "Bald Eagle"], cat: "Beer", emoji: "🐴", logo: "anheuser-busch.com", color: "#8B0000" },
  { id: 2, brand: "Bud Light", title: "Keg", celebs: ["Post Malone", "Shane Gillis", "Peyton Manning"], cat: "Beer", emoji: "🍺", logo: "budlight.com", color: "#004B8D" },
  { id: 3, brand: "Pepsi", title: "The Choice", celebs: ["Polar Bear"], cat: "Beverage", emoji: "🐻‍❄️", logo: "pepsi.com", color: "#004B93" },
  { id: 4, brand: "Squarespace", title: "Unavailable", celebs: ["Emma Stone"], cat: "Tech", emoji: "🌐", logo: "squarespace.com", color: "#111" },
  { id: 5, brand: "Instacart", title: "Bananas", celebs: ["Ben Stiller", "Benson Boone"], cat: "Delivery", emoji: "🍌", logo: "instacart.com", color: "#43B02A" },
  { id: 6, brand: "Ritz", title: "Ritz Island", celebs: ["Jon Hamm", "Bowen Yang", "Scarlett Johansson"], cat: "Food", emoji: "🏝️", logo: "ritzcrackers.com", color: "#C5922E" },
  { id: 7, brand: "Dunkin'", title: "No One Can See This", celebs: ["Ben Affleck", "Jennifer Aniston", "Matt LeBlanc", "Jason Alexander"], cat: "Food", emoji: "🍩", logo: "dunkindonuts.com", color: "#FF671F" },
  { id: 8, brand: "Uber Eats", title: "Football Conspiracy", celebs: ["Matthew McConaughey", "Bradley Cooper"], cat: "Delivery", emoji: "🍔", logo: "ubereats.com", color: "#06C167" },
  { id: 9, brand: "Pringles", title: "Pringleleo", celebs: ["Sabrina Carpenter"], cat: "Food", emoji: "🥔", logo: "pringles.com", color: "#D42426" },
  { id: 10, brand: "Grubhub", title: "Eat the Fees", celebs: ["George Clooney"], cat: "Delivery", emoji: "🎬", logo: "grubhub.com", color: "#F63440" },
  { id: 11, brand: "Michelob Ultra", title: "The ULTRA Instructor", celebs: ["Kurt Russell", "Lewis Pullman", "Chloe Kim"], cat: "Beer", emoji: "⛷️", logo: "michelobultra.com", color: "#001F5B" },
  { id: 12, brand: "TurboTax", title: "The Expert", celebs: ["Adrien Brody"], cat: "Finance", emoji: "💰", logo: "turbotax.com", color: "#003DA5" },
  { id: 13, brand: "Amazon Alexa", title: "Alexaaaa+", celebs: ["Chris Hemsworth", "Elsa Pataky"], cat: "Tech", emoji: "🤖", logo: "amazon.com", color: "#FF9900" },
  { id: 14, brand: "Rocket / Redfin", title: "Won't You Be My Neighbor", celebs: ["Lady Gaga"], cat: "Real Estate", emoji: "🏠", logo: "rocketmortgage.com", color: "#C8102E" },
  { id: 15, brand: "State Farm", title: "Halfway There", celebs: ["Danny McBride", "Keegan-Michael Key", "Hailee Steinfeld"], cat: "Insurance", emoji: "🛡️", logo: "statefarm.com", color: "#E41A2C" },
  { id: 16, brand: "Fanatics", title: "Let's Get That Ring", celebs: ["Kendall Jenner"], cat: "Sports", emoji: "💍", logo: "fanatics.com", color: "#000" },
  { id: 17, brand: "Novartis", title: "Relax Your Tight End", celebs: ["Rob Gronkowski", "George Kittle"], cat: "Health", emoji: "🏈", logo: "novartis.com", color: "#0460A9" },
  { id: 18, brand: "Dove", title: "Keep Her Confident", celebs: [], cat: "Personal Care", emoji: "🕊️", logo: "dove.com", color: "#004A8F" },
  { id: 19, brand: "Ro", title: "GLP-1", celebs: ["Serena Williams"], cat: "Health", emoji: "💪", logo: "ro.co", color: "#111" },
  { id: 20, brand: "Toyota", title: "Superhero Belt", celebs: [], cat: "Auto", emoji: "🚗", logo: "toyota.com", color: "#D71920" },
  { id: 21, brand: "OIKOS", title: "The Big Hill", celebs: ["Derrick Henry", "Kathryn Hahn"], cat: "Food", emoji: "🏔️", logo: "oikos.com", color: "#0054A6" },
  { id: 22, brand: "Kinder Bueno", title: "Yes Bueno", celebs: ["William Fichtner"], cat: "Food", emoji: "🍫", logo: "kinder.com", color: "#E87722" },
  { id: 23, brand: "Bosch", title: "A Little Buzz", celebs: ["Guy Fieri"], cat: "Home", emoji: "🔧", logo: "bosch.com", color: "#E20015" },
  { id: 24, brand: "NERDS", title: "Taste Buds", celebs: ["Andy Cohen"], cat: "Food", emoji: "🍬", logo: "nerdscandy.com", color: "#E91E8C" },
  { id: 25, brand: "Oakley × Meta", title: "Athletic Intelligence", celebs: ["Marshawn Lynch", "Spike Lee", "IShowSpeed"], cat: "Tech", emoji: "🕶️", logo: "oakley.com", color: "#000" },
  { id: 26, brand: "Xfinity", title: "Jurassic Park Works", celebs: ["Sam Neill", "Laura Dern", "Jeff Goldblum"], cat: "Tech", emoji: "🦖", logo: "xfinity.com", color: "#6138F5" },
  { id: 27, brand: "Ramp", title: "Multiply What's Possible", celebs: ["Brian Baumgartner"], cat: "Finance", emoji: "📊", logo: "ramp.com", color: "#F2F546" },
  { id: 28, brand: "T-Mobile", title: "Tell Me Why", celebs: ["Backstreet Boys"], cat: "Tech", emoji: "📱", logo: "t-mobile.com", color: "#E20074" },
  { id: 29, brand: "Raisin Bran", title: "Will Shat", celebs: ["William Shatner"], cat: "Food", emoji: "🥣", logo: "kelloggs.com", color: "#FFD100" },
  { id: 30, brand: "Jeep", title: "Big Mouth Billy Bass", celebs: [], cat: "Auto", emoji: "🐟", logo: "jeep.com", color: "#004225" },
  { id: 31, brand: "Lay's", title: "Father & Daughter", celebs: [], cat: "Food", emoji: "🥔", logo: "lays.com", color: "#E31837" },
  { id: 32, brand: "Skechers", title: "Slip-Ins", celebs: ["Sofía Vergara"], cat: "Fashion", emoji: "👟", logo: "skechers.com", color: "#003DA5" },
  { id: 33, brand: "Google", title: "New Home", celebs: ["Kelce Brothers"], cat: "Tech", emoji: "🔍", logo: "google.com", color: "#4285F4" },
  { id: 34, brand: "Anthropic", title: "Claude", celebs: [], cat: "Tech", emoji: "🧠", logo: "anthropic.com", color: "#D4A27F" },
  { id: 35, brand: "Hellmann's", title: "Meal Diamond", celebs: ["Andy Samberg", "Elle Fanning"], cat: "Food", emoji: "🥪", logo: "hellmanns.com", color: "#003DA5" },
  { id: 36, brand: "DoorDash", title: "50 Cent", celebs: ["50 Cent"], cat: "Delivery", emoji: "🚪", logo: "doordash.com", color: "#FF3008" },
  { id: 37, brand: "Svedka", title: "Fembot & BroBot", celebs: [], cat: "Beverage", emoji: "🍸", logo: "svedka.com", color: "#1A1A2E" },
  { id: 38, brand: "Boehringer", title: "Kidney Health", celebs: ["Sofía Vergara", "Octavia Spencer"], cat: "Health", emoji: "🏥", logo: "boehringer-ingelheim.com", color: "#003366" },
  { id: 39, brand: "Super Mario Galaxy", title: "Movie Trailer", celebs: [], cat: "Entertainment", emoji: "⭐", logo: "nintendo.com", color: "#E60012" },
  { id: 40, brand: "Dairy Queen", title: "Taylor & Swift", celebs: ["Tyrod Taylor", "D'Andre Swift"], cat: "Food", emoji: "🍦", logo: "dairyqueen.com", color: "#D91A2A" },
  { id: 41, brand: "NFL", title: "You Are Special", celebs: [], cat: "Sports", emoji: "🌟", logo: "nfl.com", color: "#013369" },
  { id: 42, brand: "He Gets Us", title: "More", celebs: [], cat: "Non-Profit", emoji: "✝️", color: "#222" },
  { id: 43, brand: "Tecovas", title: "Cowboy Boots", celebs: [], cat: "Fashion", emoji: "🤠", logo: "tecovas.com", color: "#4A3728" },
  { id: 44, brand: "Manscaped", title: "Hair Ballad", celebs: [], cat: "Personal Care", emoji: "✂️", logo: "manscaped.com", color: "#111" },
  { id: 45, brand: "Skittles", title: "Woodland Creature", celebs: ["Elijah Wood"], cat: "Food", emoji: "🌈", logo: "skittles.com", color: "#EB1C24" },
  { id: 46, brand: "e.l.f.", title: "Telenovela", celebs: ["Melissa McCarthy"], cat: "Beauty", emoji: "💄", logo: "elfcosmetics.com", color: "#111" },
  { id: 47, brand: "Salesforce", title: "MrBeast", celebs: ["MrBeast"], cat: "Tech", emoji: "☁️", logo: "salesforce.com", color: "#00A1E0" },
  { id: 48, brand: "Ring", title: "Lost Pets", celebs: [], cat: "Tech", emoji: "🔔", logo: "ring.com", color: "#1C96E8" },
  { id: 49, brand: "Rippling", title: "Revenge", celebs: ["Tim Robinson"], cat: "Tech", emoji: "⚡", logo: "rippling.com", color: "#FDE100" },
  { id: 50, brand: "Frank's RedHot", title: "Eat the GOAT", celebs: ["Ludacris"], cat: "Food", emoji: "🌶️", logo: "franksredhot.com", color: "#CE1126" },
  { id: 51, brand: "Starbucks", title: "Team USA", celebs: [], cat: "Beverage", emoji: "☕", logo: "starbucks.com", color: "#006241" },
  { id: 52, brand: "FanDuel", title: "Last Call for Football", celebs: ["Rob Gronkowski", "Joe Montana"], cat: "Sports", emoji: "🎰", logo: "fanduel.com", color: "#1493FF" },
];

const TIERS = [
  { id: "S", label: "S", color: "#D9636B", desc: "Legendary" },
  { id: "A", label: "A", color: "#E8A87C", desc: "Excellent" },
  { id: "B", label: "B", color: "#D4C95A", desc: "Solid" },
  { id: "C", label: "C", color: "#7ED87E", desc: "Mid" },
  { id: "D", label: "D", color: "#8FC8D8", desc: "Forgettable" },
];

const ALL_CATS = [...new Set(ADS.map(a => a.cat))].sort();

/* ─── THUMBNAIL COMPONENT ─── */
function AdThumb({ ad, size = 40 }) {
  const [imgErr, setImgErr] = useState(false);
  const logoUrl = ad.logo ? `https://logo.clearbit.com/${ad.logo}` : null;

  return (
    <div style={{
      width: size, height: size, minWidth: size, borderRadius: 8,
      background: ad.color || "#333",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", position: "relative", flexShrink: 0,
    }}>
      {logoUrl && !imgErr ? (
        <img
          src={logoUrl}
          alt={ad.brand}
          onError={() => setImgErr(true)}
          loading="lazy"
          style={{
            width: size * 0.7, height: size * 0.7,
            objectFit: "contain",
            filter: "brightness(0) invert(1) drop-shadow(0 0 1px rgba(0,0,0,0.5))",
          }}
        />
      ) : (
        <span style={{ fontSize: size * 0.5, lineHeight: 1 }}>{ad.emoji}</span>
      )}
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [rankings, setRankings] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sb-lx-ranks") || "{}"); }
    catch { return {}; }
  });
  const [selectedAd, setSelectedAd] = useState(null);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const [showShare, setShowShare] = useState(false);
  const [draggedAd, setDraggedAd] = useState(null);
  const [dragOverTier, setDragOverTier] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);

  // Persist rankings
  useEffect(() => {
    try { localStorage.setItem("sb-lx-ranks", JSON.stringify(rankings)); }
    catch {}
  }, [rankings]);

  const getAdsInTier = (tierId) => ADS.filter((ad) => rankings[ad.id] === tierId);
  const unrankedAds = ADS.filter((ad) => !rankings[ad.id]);
  const rankedCount = Object.keys(rankings).length;
  const progress = Math.round((rankedCount / ADS.length) * 100);

  const filteredUnranked = unrankedAds.filter((ad) => {
    const q = search.toLowerCase();
    const matchSearch = !q || ad.brand.toLowerCase().includes(q) || ad.title.toLowerCase().includes(q) || ad.celebs.some((c) => c.toLowerCase().includes(q)) || ad.cat.toLowerCase().includes(q);
    const matchCat = catFilter === "All" || ad.cat === catFilter;
    return matchSearch && matchCat;
  });

  const handleSelect = (ad) => {
    if (selectedAd?.id === ad.id) { setSelectedAd(null); }
    else { setSelectedAd(ad); if (showInstructions) setShowInstructions(false); }
  };

  const handleTierClick = (tierId) => {
    if (selectedAd) { setRankings((p) => ({ ...p, [selectedAd.id]: tierId })); setSelectedAd(null); }
  };

  const handleRemove = (adId, e) => {
    e.stopPropagation();
    setRankings((p) => { const n = { ...p }; delete n[adId]; return n; });
  };

  const handleMoveTier = (adId, currentTier, direction, e) => {
    e.stopPropagation();
    const tierIds = TIERS.map(t => t.id);
    const idx = tierIds.indexOf(currentTier);
    const newIdx = idx + direction;
    if (newIdx >= 0 && newIdx < tierIds.length) {
      setRankings(p => ({ ...p, [adId]: tierIds[newIdx] }));
    }
  };

  // Drag handlers
  const handleDragStart = (ad) => (e) => { setDraggedAd(ad); e.dataTransfer.effectAllowed = "move"; };
  const handleDragOver = (tierId) => (e) => { e.preventDefault(); setDragOverTier(tierId); };
  const handleDragLeave = () => setDragOverTier(null);
  const handleDrop = (tierId) => (e) => {
    e.preventDefault();
    if (draggedAd) { setRankings((p) => ({ ...p, [draggedAd.id]: tierId })); setDraggedAd(null); setDragOverTier(null); }
  };
  const handleDragEnd = () => { setDraggedAd(null); setDragOverTier(null); };
  const handleDropToPool = (e) => {
    e.preventDefault();
    if (draggedAd) { setRankings((p) => { const n = { ...p }; delete n[draggedAd.id]; return n; }); setDraggedAd(null); }
  };

  const resetAll = () => { setRankings({}); setSelectedAd(null); };

  const generateShareText = () => {
    let text = "🏈 My Super Bowl LX Ad Rankings\n\n";
    TIERS.forEach((tier) => {
      const ads = getAdsInTier(tier.id);
      if (ads.length > 0) text += `${tier.label}: ${ads.map((a) => a.brand).join(" · ")}\n`;
    });
    text += "\nRank yours ▸ ";
    return text;
  };

  const handleShare = async () => {
    const text = generateShareText();
    if (navigator.share) {
      try { await navigator.share({ title: "Super Bowl LX Tier Ranking", text }); } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      setShowShare(true); setTimeout(() => setShowShare(false), 2000);
    }
  };

  /* ─── AD CARD (pool) ─── */
  const PoolCard = ({ ad }) => {
    const isSelected = selectedAd?.id === ad.id;
    const isDragging = draggedAd?.id === ad.id;
    return (
      <div
        draggable onDragStart={handleDragStart(ad)} onDragEnd={handleDragEnd}
        onClick={() => handleSelect(ad)}
        className="pool-card"
        style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "8px 12px 8px 8px", borderRadius: 10,
          background: isSelected ? "rgba(217,99,107,0.25)" : "rgba(255,255,255,0.06)",
          border: isSelected ? "2px solid #D9636B" : "2px solid transparent",
          cursor: "grab", opacity: isDragging ? 0.3 : 1,
          transition: "all 0.15s ease", userSelect: "none", WebkitUserSelect: "none",
          animation: isSelected ? "pulseGlow 1.5s ease infinite" : "none",
        }}
      >
        <AdThumb ad={ad} size={38} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13,
            color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {ad.brand}
          </div>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.45)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            maxWidth: 140, fontFamily: "'DM Sans', sans-serif",
          }}>
            {ad.celebs.length > 0 ? ad.celebs.slice(0, 2).join(", ") : ad.title}
          </div>
        </div>
      </div>
    );
  };

  /* ─── AD CHIP (in tier) ─── */
  const TierChip = ({ ad, tierId }) => {
    const isDragging = draggedAd?.id === ad.id;
    const tierIdx = TIERS.findIndex(t => t.id === tierId);
    return (
      <div
        draggable onDragStart={handleDragStart(ad)} onDragEnd={handleDragEnd}
        className="tier-chip"
        style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "4px 6px", borderRadius: 8,
          background: "rgba(255,255,255,0.08)",
          opacity: isDragging ? 0.3 : 1,
          transition: "all 0.15s ease",
          cursor: "grab", userSelect: "none", position: "relative",
        }}
      >
        <AdThumb ad={ad} size={28} />
        <span style={{
          fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 11,
          color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}>
          {ad.brand}
        </span>
        {/* Mini controls */}
        <div style={{ display: "flex", gap: 2, marginLeft: 2 }}>
          {tierIdx > 0 && (
            <button onClick={(e) => handleMoveTier(ad.id, tierId, -1, e)}
              className="chip-btn" title="Move up" style={chipBtnStyle}>▲</button>
          )}
          {tierIdx < TIERS.length - 1 && (
            <button onClick={(e) => handleMoveTier(ad.id, tierId, 1, e)}
              className="chip-btn" title="Move down" style={chipBtnStyle}>▼</button>
          )}
          <button onClick={(e) => handleRemove(ad.id, e)}
            className="chip-btn" title="Remove" style={{ ...chipBtnStyle, color: "#D9636B" }}>×</button>
        </div>
      </div>
    );
  };

  const chipBtnStyle = {
    background: "rgba(255,255,255,0.08)", border: "none", color: "rgba(255,255,255,0.4)",
    borderRadius: 4, width: 18, height: 18, fontSize: 9, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", padding: 0,
    fontFamily: "system-ui",
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#141416", color: "#fff",
      fontFamily: "'DM Sans', sans-serif", position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #141416; overflow-x: hidden; }
        ::-webkit-scrollbar { height: 4px; width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(217,99,107,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(217,99,107,0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pool-card:hover { background: rgba(255,255,255,0.1) !important; transform: translateY(-1px); }
        .pool-card { transition: all 0.15s ease !important; }
        .tier-chip:hover { background: rgba(255,255,255,0.12) !important; }
        .tier-chip .chip-btn { opacity: 0; transition: opacity 0.15s; }
        .tier-chip:hover .chip-btn { opacity: 1; }
        @media (hover: none) { .tier-chip .chip-btn { opacity: 1; } }
        .tier-row-active { cursor: pointer; }
        .tier-row-active:hover { background: rgba(255,255,255,0.03) !important; }
        .tier-label-active { animation: pulseGlow 1.5s ease infinite; }
        .cat-pill:hover { background: rgba(255,255,255,0.1) !important; }
        .share-btn:hover { filter: brightness(1.1); }
        .share-btn:active { transform: scale(0.97); }
      `}</style>

      {/* Background glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 50% -20%, rgba(217,99,107,0.06) 0%, transparent 50%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 920, margin: "0 auto", padding: "16px 12px 120px" }}>

        {/* ─── HEADER ─── */}
        <header style={{ textAlign: "center", marginBottom: 18, animation: "fadeInUp 0.4s ease" }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 7vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1,
            textTransform: "uppercase",
            background: "linear-gradient(135deg, #fff 20%, #D9636B 60%, #E8A87C 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Super Bowl LX
          </div>
          <div style={{
            fontFamily: "'Oswald', sans-serif", fontWeight: 500,
            fontSize: "clamp(13px, 2.5vw, 18px)", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 2,
          }}>
            Ad Tier Ranking
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 4 }}>
            Patriots vs Seahawks · Feb 8, 2026 · {ADS.length} ads
          </div>
        </header>

        {/* ─── PROGRESS ─── */}
        <div style={{ marginBottom: 14, animation: "fadeInUp 0.4s ease 0.05s both" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
              {rankedCount}/{ADS.length} ranked ({progress}%)
            </span>
            <div style={{ display: "flex", gap: 6 }}>
              {rankedCount > 0 && (
                <button onClick={resetAll} style={{
                  fontSize: 11, color: "rgba(255,255,255,0.4)", background: "none",
                  border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6,
                  padding: "3px 10px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                }}>Reset</button>
              )}
              {rankedCount >= 3 && (
                <button className="share-btn" onClick={handleShare} style={{
                  fontSize: 11, color: "#fff", fontWeight: 600,
                  background: "linear-gradient(135deg, #D9636B, #E8A87C)",
                  border: "none", borderRadius: 6, padding: "4px 14px",
                  cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.15s ease",
                }}>
                  {showShare ? "✓ Copied!" : "Share"}
                </button>
              )}
            </div>
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${progress}%`, borderRadius: 2,
              background: "linear-gradient(90deg, #D9636B, #E8A87C, #D4C95A, #7ED87E, #8FC8D8)",
              transition: "width 0.3s ease",
            }} />
          </div>
        </div>

        {/* ─── TIER ROWS ─── */}
        <div style={{ marginBottom: 18, animation: "fadeInUp 0.4s ease 0.1s both" }}>
          {TIERS.map((tier) => {
            const tierAds = getAdsInTier(tier.id);
            const isDropTarget = dragOverTier === tier.id;
            const isClickable = selectedAd !== null;
            return (
              <div
                key={tier.id}
                className={isClickable ? "tier-row-active" : ""}
                onDragOver={handleDragOver(tier.id)} onDragLeave={handleDragLeave}
                onDrop={handleDrop(tier.id)}
                onClick={() => handleTierClick(tier.id)}
                style={{
                  display: "flex", alignItems: "stretch", minHeight: 56,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  background: isDropTarget ? "rgba(255,255,255,0.03)" : "transparent",
                  transition: "background 0.15s ease",
                }}
              >
                {/* Tier label */}
                <div
                  className={isClickable ? "tier-label-active" : ""}
                  style={{
                    width: 50, minWidth: 50, display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    background: tier.color, fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700, fontSize: 26, color: "#1a1a1e",
                  }}
                >
                  {tier.label}
                </div>
                {/* Tier content */}
                <div style={{
                  flex: 1, display: "flex", flexWrap: "wrap", gap: 5,
                  padding: "6px 8px", alignItems: "center", alignContent: "center", minHeight: 44,
                }}>
                  {tierAds.length === 0 && (
                    <span style={{
                      fontSize: 11, fontStyle: "italic", fontFamily: "'DM Sans', sans-serif",
                      color: isDropTarget ? tier.color : isClickable ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                    }}>
                      {isDropTarget ? "Drop here" : isClickable ? `Tap → ${tier.desc}` : tier.desc}
                    </span>
                  )}
                  {tierAds.map((ad) => <TierChip key={ad.id} ad={ad} tierId={tier.id} />)}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── INSTRUCTIONS ─── */}
        {showInstructions && rankedCount === 0 && (
          <div style={{
            textAlign: "center", padding: "10px 16px", marginBottom: 14,
            background: "rgba(217,99,107,0.08)", borderRadius: 10,
            border: "1px solid rgba(217,99,107,0.15)",
            animation: "fadeInUp 0.4s ease 0.15s both",
          }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
              👆 Tap an ad → then tap a tier to rank it
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 3 }}>
              Desktop: drag & drop works too
            </div>
          </div>
        )}

        {/* ─── SEARCH + FILTERS ─── */}
        <div style={{ marginBottom: 10, animation: "fadeInUp 0.4s ease 0.2s both" }}>
          <div style={{ position: "relative", marginBottom: 6 }}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by brand, celebrity, category..."
              style={{
                width: "100%", padding: "10px 14px 10px 36px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)",
                color: "#fff", fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: "none",
              }}
            />
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 15, opacity: 0.3 }}>🔍</span>
            {search && (
              <button onClick={() => setSearch("")} style={{
                position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", color: "rgba(255,255,255,0.3)",
                fontSize: 16, cursor: "pointer", padding: "2px 4px",
              }}>×</button>
            )}
          </div>
          <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 4, WebkitOverflowScrolling: "touch" }}>
            {["All", ...ALL_CATS].filter(c => c === "All" || unrankedAds.some(a => a.cat === c)).map((cat) => (
              <button key={cat} className="cat-pill" onClick={() => setCatFilter(cat)} style={{
                padding: "3px 10px", borderRadius: 6, border: "none",
                background: catFilter === cat ? "rgba(217,99,107,0.25)" : "rgba(255,255,255,0.05)",
                color: catFilter === cat ? "#D9636B" : "rgba(255,255,255,0.4)",
                fontSize: 11, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap",
                fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s ease", flexShrink: 0,
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ─── AD POOL ─── */}
        <div
          onDragOver={(e) => e.preventDefault()} onDrop={handleDropToPool}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 6, animation: "fadeInUp 0.4s ease 0.25s both",
          }}
        >
          {filteredUnranked.map((ad) => <PoolCard key={ad.id} ad={ad} />)}
        </div>

        {filteredUnranked.length === 0 && unrankedAds.length > 0 && (
          <div style={{ padding: 24, textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
            No ads match your search
          </div>
        )}

        {unrankedAds.length === 0 && (
          <div style={{ padding: 32, textAlign: "center", borderRadius: 12, background: "rgba(255,255,255,0.02)" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, fontWeight: 500 }}>All {ADS.length} ads ranked!</div>
            <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 4 }}>Share your hot takes</div>
          </div>
        )}
      </div>

      {/* ─── FLOATING SELECTED INDICATOR ─── */}
      {selectedAd && (
        <div style={{
          position: "fixed", bottom: 36, left: "50%", transform: "translateX(-50%)",
          background: "rgba(217,99,107,0.95)", backdropFilter: "blur(12px)",
          color: "#fff", padding: "6px 8px 6px 6px", borderRadius: 14,
          fontSize: 13, fontWeight: 600, fontFamily: "'Oswald', sans-serif",
          letterSpacing: "0.03em", textTransform: "uppercase",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)", zIndex: 100,
          display: "flex", alignItems: "center", gap: 8,
          animation: "fadeInUp 0.15s ease",
        }}>
          <AdThumb ad={selectedAd} size={30} />
          <span>{selectedAd.brand}</span>
          <span style={{ opacity: 0.5, fontWeight: 400, fontSize: 10, fontFamily: "'DM Sans', sans-serif" }}>→ tap a tier</span>
          <button onClick={(e) => { e.stopPropagation(); setSelectedAd(null); }} style={{
            background: "rgba(0,0,0,0.2)", border: "none", color: "#fff",
            borderRadius: "50%", width: 22, height: 22, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, marginLeft: 2,
          }}>×</button>
        </div>
      )}

      {/* ─── STORY CO BRANDING ─── */}
      <div style={{
        position: "fixed", bottom: 8, right: 10, display: "flex",
        alignItems: "center", gap: 6, zIndex: 50,
        padding: "4px 8px", borderRadius: 6,
        background: "rgba(20,20,22,0.8)", backdropFilter: "blur(8px)",
      }}>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3 }}>
            Made by <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>Story</span>
          </div>
          <div style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.2, maxWidth: 170 }}>
            Making cinematic ads for science & technology companies
          </div>
        </div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="rgba(255,255,255,0.1)" />
          <text x="12" y="16.5" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="700" fontFamily="Oswald, sans-serif">S</text>
        </svg>
      </div>
    </div>
  );
}
