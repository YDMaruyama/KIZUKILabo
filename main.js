  <script>
    // --- スムーズスクロール ---
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

 // 口コミセットの自動切替（左スライド＆フェードアウト、右スライド＆フェードインのアニメーション付き）
let currentSet = 0;
const testimonialSets = document.querySelectorAll('.testimonial-set');
const totalSets = testimonialSets.length;

function nextTestimonialSet() {
  const current = testimonialSets[currentSet];
  // 現在のセットに退出アニメーションを適用
  current.classList.add('exit');

  // 退出アニメーションが終わるのを待ってから切り替え（0.5秒後）
  setTimeout(() => {
    current.classList.remove('active', 'exit');
    // 次のセットのインデックスを計算
    currentSet = (currentSet + 1) % totalSets;
    const next = testimonialSets[currentSet];
    // 次のセットに入場アニメーションを適用
    next.classList.add('enter', 'active');
    // 入場アニメーション終了後、enterクラスを削除（0.5秒後）
    setTimeout(() => {
      next.classList.remove('enter');
    }, 500);
  }, 500);
}

// 5秒ごとに口コミセットを切り替え
setInterval(nextTestimonialSet, 7000);


  </script>
