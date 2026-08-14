import React, { useEffect, useState } from 'react';

const LEETCODE_USERNAME = 'rupeshh132';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`)
      .then(r => r.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback data if API is unavailable
        setStats({
          totalSolved: 120,
          easySolved: 60,
          mediumSolved: 45,
          hardSolved: 15,
          ranking: 350000,
        });
        setLoading(false);
      });
  }, []);

  const statItems = stats ? [
    { label: 'Total Solved', value: stats.totalSolved, color: '#ffa800', bg: '#fff8e6' },
    { label: 'Easy', value: stats.easySolved, color: '#00b8a3', bg: '#e6faf8' },
    { label: 'Medium', value: stats.mediumSolved, color: '#ffc01e', bg: '#fff9e0' },
    { label: 'Hard', value: stats.hardSolved, color: '#ef4743', bg: '#fdf0f0' },
  ] : [];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        {/* LeetCode icon */}
        <div style={{
          width: '36px', height: '36px', borderRadius: '8px',
          background: '#ffa800', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 1.91 5.345 5.345 0 0 0 1.258 2.768l.2.214 1.97 2.115 2.138 2.296 2.134 2.292a1.373 1.373 0 0 0 2.378-1.077 1.372 1.372 0 0 0-.411-.912l-2.023-2.173-2.134-2.292-1.927-2.069a2.532 2.532 0 0 1-.617-1.326 2.529 2.529 0 0 1 .059-.955 2.535 2.535 0 0 1 .59-1.01l4.032-4.318 3.931-4.136a1.373 1.373 0 0 0-.961-2.317zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--ink)' }}>LeetCode</div>
          <a href="https://leetcode.com/u/rupeshh132/" target="_blank" rel="noreferrer"
            style={{ fontSize: '13px', color: '#ffa800', textDecoration: 'none', fontWeight: 600 }}>
            @rupeshh132 ↗
          </a>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', gap: '12px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ flex: 1, height: '72px', background: '#f0f0ee', borderRadius: '12px', animation: 'pulse 1.5s ease infinite' }} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {statItems.map((item, i) => (
            <div key={i} style={{
              background: item.bg,
              borderRadius: '12px',
              padding: '14px 12px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: item.color, lineHeight: 1 }}>
                {item.value}
              </div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(17,17,17,0.5)', marginTop: '4px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeetCodeStats;
