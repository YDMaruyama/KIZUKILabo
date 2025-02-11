// デバッグ用ログ
console.log("script.js が読み込まれました。");

// --- Particles.js の設定 ---
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": false },
      "onclick": { "enable": false },
      "resize": true
    }
  },
  "retina_detect": true
});

// --- アイコンと具体的ベネフィットのデータ ---
const iconData = [
  {
    iconClass: "fa-solid fa-gear",
    title: "タスク自動化",
    description: "ルーチン作業を自動化し、業務効率を大幅に向上"
  },
  {
    iconClass: "fa-solid fa-user-tie",
    title: "個人秘書",
    description: "スケジュール管理や問い合わせ対応をサポート"
  },
  {
    iconClass: "fa-solid fa-comments",
    title: "リアルタイムコミュニケーション",
    description: "即時応答で情報共有と連携を強化"
  },
  {
    iconClass: "fa-solid fa-chart-line",
    title: "データ分析と予測",
    description: "大量データから未来のトレンドを予測"
  },
  {
    iconClass: "fa-solid fa-lightbulb",
    title: "クリエイティブサポート",
    description: "革新的なアイデアを実現し、創造性を刺激"
  },
  {
    iconClass: "fa-solid fa-brain",
    title: "自動学習と改善",
    description: "システムが自己学習し、継続的に最適化"
  }
];

// --- DOMContentLoaded で各処理を実行 ---
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM の読み込み完了。初期化処理を開始します。");

  // IntersectionObserver によるアニメーション処理（セミナー概要）
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.seminar-overview').forEach(section => {
    observer.observe(section);
  });

  // ヒーロー右カラムにアイコングリッドを生成
  const iconGrid = document.getElementById("iconGrid");
  if (iconGrid) {
    iconData.forEach(data => {
      const card = document.createElement("div");
      card.className = "icon-card";
      
      const iconEl = document.createElement("i");
      iconEl.className = data.iconClass;
      
      const titleEl = document.createElement("div");
      titleEl.innerHTML = `<strong>${data.title}</strong>`;
      
      const descEl = document.createElement("div");
      descEl.className = "description";
      descEl.textContent = data.description;
      
      card.appendChild(iconEl);
      card.appendChild(titleEl);
      card.appendChild(descEl);
      
      iconGrid.appendChild(card);
    });
  }
});

window.addEventListener('load', function() {
  // すべての .particle-canvas 要素を取得
  const canvases = document.querySelectorAll('.particle-canvas');
  if (canvases.length === 0) return;  // Canvas が存在しなければ処理中止

  canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    let particles = [];

    // 粒子を初期化する関数
    function initParticles() {
      particles = [];
      const cols = 20;  // 横方向の粒子数
      const rows = 10;  // 縦方向の粒子数
      const spacingX = canvas.width / (cols - 1);
      const spacingY = canvas.height / (rows - 1);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            baseX: i * spacingX,
            baseY: j * spacingY,
            size: 2,
            phase: Math.random() * Math.PI * 2  // ランダムな位相
          });
        }
      }
    }

    // Canvas サイズの設定
    function resize() {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        initParticles(); // サイズ変更時に粒子を再配置
      }
    }
    window.addEventListener('resize', resize);
    resize();  // 初期サイズ設定と粒子配置

    let time = 0;
    // アニメーション関数
    function animate() {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        // サイン波で垂直方向に動かす
        const amplitude = 10;          // 振幅（波の高さ）
        const frequency = 0.05;        // 変動の速さ
        const offset = amplitude * Math.sin(time + p.phase + p.baseX * frequency);
        const x = p.baseX;
        const y = p.baseY + offset;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 123, 255, 0.6)';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  });
});
