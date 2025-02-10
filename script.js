 <!-- Particles.jsライブラリ -->
  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
    // Particles.jsの設定
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 3,
          "random": true
        },
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
          "onhover": {
            "enable": false
          },
          "onclick": {
            "enable": false
          },
          "resize": true
        }
      },
      "retina_detect": true
    });
  </script>
  
  <script>
    // FontAwesomeのアイコンと具体的ベネフィットのデータ
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
    
    const iconGrid = document.getElementById("iconGrid");
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
  </script>
