const products = {
  pots: [
    { name: 'گلدان سفالی لوکس', description: 'گلدان سفالی دست‌ساز با طراحی کلاسیک و شیک، مناسب برای گیاهان آپارتمانی.', image: 'https://images.unsplash.com/photo-1611095561950-1a89b8a33e97?q=80&w=2070&auto=format&fit=crop', price: 150000, discount: 0, popularity: 8, plantType: 'low-light' },
    { name: 'گلدان سرامیکی مدرن', description: 'گلدان سرامیکی با لعاب براق و طراحی مینیمال، ایده‌آل برای دکوراسیون مدرن.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', price: 200000, discount: 30, popularity: 9, plantType: 'low-water' },
    { name: 'گلدان مرمری', description: 'گلدان با طرح مرمر، ترکیبی از زیبایی و استحکام برای دکوراسیون لوکس.', image: 'https://images.unsplash.com/photo-1598982395476-a3b499f7ff32?q=80&w=2070&auto=format&fit=crop', price: 300000, discount: 0, popularity: 7, plantType: 'low-light' },
    { name: 'گلدان چوبی طبیعی', description: 'گلدان چوبی با بافت طبیعی، مناسب برای فضاهای گرم و صمیمی.', image: 'https://images.unsplash.com/photo-1611095561950-1a89b8a33e97?q=80&w=2070&auto=format&fit=crop', price: 120000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
  indoor: [
    { name: 'پوتوس طلایی', description: 'گیاه پوتوس با برگ‌های سبز و طلایی، مقاوم و مناسب برای نور کم.', image: 'https://images.unsplash.com/photo-1610986004638-c15a58e0ebec?q=80&w=2070&auto=format&fit=crop', price: 80000, discount: 0, popularity: 9, plantType: 'low-light' },
    { name: 'سانسوریا مخملی', description: 'سانسوریا با برگ‌های بلند و مخملی، تصفیه‌کننده هوای خانه.', image: 'https://images.unsplash.com/photo-1597086853960-658a496a6d56?q=80&w=2070&auto=format&fit=crop', price: 100000, discount: 20, popularity: 8, plantType: 'low-water' },
    { name: 'فیکوس الاستیکا', description: 'فیکوس با برگ‌های براق و تیره، مناسب برای دکوراسیون داخلی شیک.', image: 'https://images.unsplash.com/photo-1610986004638-c15a58e0ebec?q=80&w=2070&auto=format&fit=crop', price: 150000, discount: 0, popularity: 7, plantType: 'low-light' },
    { name: 'کاج مطبق', description: 'گیاه کاج مطبق با ظاهر مینیاتوری، ایده‌آل برای فضاهای کوچک.', image: 'https://images.unsplash.com/photo-1597086853960-658a496a6d56?q=80&w=2070&auto=format&fit=crop', price: 200000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
  outdoor: [
    { name: 'رز هلندی', description: 'گل رز هلندی در رنگ‌های متنوع، مناسب برای باغچه‌های لوکس.', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2070&auto=format&fit=crop', price: 50000, discount: 0, popularity: 9, plantType: 'flowering' },
    { name: 'یاس رازقی', description: 'یاس رازقی معطر با گل‌های سفید، ایده‌آل برای فضای باز.', image: 'https://images.unsplash.com/photo-1582793988953-209c22a3b6e9?q=80&w=2070&auto=format&fit=crop', price: 60000, discount: 0, popularity: 8, plantType: 'flowering' },
    { name: 'نرگس شیراز', description: 'گل نرگس با عطر دل‌انگیز، مناسب برای باغ و فضای سبز.', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2070&auto=format&fit=crop', price: 45000, discount: 0, popularity: 7, plantType: 'flowering' },
    { name: 'لاله عباسی', description: 'گل لاله عباسی با رنگ‌های شاد، مناسب برای حاشیه باغچه.', image: 'https://images.unsplash.com/photo-1582793988953-209c22a3b6e9?q=80&w=2070&auto=format&fit=crop', price: 40000, discount: 0, popularity: 6, plantType: 'flowering' },
  ],
  'flower-seeds': [
    { name: 'بذر آفتابگردان', description: 'بذر آفتابگردان برای کاشت گل‌های بزرگ و جذاب.', image: 'https://images.unsplash.com/photo-1617055453186-314ff4ebedee?q=80&w=2070&auto=format&fit=crop', price: 20000, discount: 25, popularity: 8, plantType: 'flowering' },
    { name: 'بذر لاله', description: 'بذر لاله در رنگ‌های متنوع، مناسب برای باغچه‌های زینتی.', image: 'https://images.unsplash.com/photo-1617055453186-314ff4ebedee?q=80&w=2070&auto=format&fit=crop', price: 25000, discount: 0, popularity: 7, plantType: 'flowering' },
    { name: 'بذر میخک', description: 'بذر میخک با گل‌های معطر، ایده‌آل برای باغچه.', image: 'https://images.unsplash.com/photo-1617055453186-314ff4ebedee?q=80&w=2070&auto=format&fit=crop', price: 18000, discount: 0, popularity: 6, plantType: 'flowering' },
  ],
  'vegetable-seeds': [
    { name: 'بذر گوجه‌فرنگی', description: 'بذر گوجه‌فرنگی ارگانیک، مناسب برای کاشت خانگی.', image: 'https://images.unsplash.com/photo-1598032895397-b947244972c2?q=80&w=2070&auto=format&fit=crop', price: 15000, discount: 0, popularity: 8, plantType: 'low-water' },
    { name: 'بذر ریحان', description: 'بذر ریحان معطر، مناسب برای آشپزی و باغچه.', image: 'https://images.unsplash.com/photo-1598032895397-b947244972c2?q=80&w=2070&auto=format&fit=crop', price: 12000, discount: 0, popularity: 7, plantType: 'low-water' },
    { name: 'بذر کاهو', description: 'بذر کاهو برای کاشت سبزیجات تازه و ترد.', image: 'https://images.unsplash.com/photo-1598032895397-b947244972c2?q=80&w=2070&auto=format&fit=crop', price: 10000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
  'edible-seeds': [
    { name: 'بذر کدو', description: 'بذر کدو برای کاشت در باغچه‌های خانگی.', image: 'https://images.unsplash.com/photo-1603046891887-1533e8e0b49d?q=80&w=2070&auto=format&fit=crop', price: 20000, discount: 0, popularity: 7, plantType: 'low-water' },
    { name: 'بذر توت‌فرنگی', description: 'بذر توت‌فرنگی برای کاشت میوه‌های شیرین و جذاب.', image: 'https://images.unsplash.com/photo-1603046891887-1533e8e0b49d?q=80&w=2070&auto=format&fit=crop', price: 30000, discount: 0, popularity: 8, plantType: 'flowering' },
    { name: 'بذر هندوانه', description: 'بذر هندوانه برای کاشت میوه‌های آبدار و شیرین.', image: 'https://images.unsplash.com/photo-1603046891887-1533e8e0b49d?q=80&w=2070&auto=format&fit=crop', price: 25000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cartCount').textContent = cartCount;
}

updateCartCount();

// Three.js Interactive Background
let scene, camera, renderer, particles;
function initThreeJS() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bgCanvas'), alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xfef08a,
    size: 0.5,
    transparent: true,
    opacity: 0.8,
  });
  particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  camera.position.z = 50;

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  document.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    gsap.to(particles.rotation, { x: mouseY * 0.1, y: mouseX * 0.1, duration: 1 });
  });
}
initThreeJS();

// GSAP Animations
gsap.utils.toArray('.section-animate').forEach(section => {
  gsap.fromTo(section, 
    { opacity: 0, y: 80 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Countdown Timer
function startCountdown() {
  document.querySelectorAll('.countdown-timer').forEach(timer => {
    const endDate = new Date(timer.dataset.end).getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endDate - now;
      if (distance < 0) {
        timer.textContent = 'منقضی شده';
        return;
      }
      const days =