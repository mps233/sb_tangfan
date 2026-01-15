// 形容词列表
const adjectives = [
    '煞笔',
    '傻逼',
    '憨批',
    '沙雕',
    '逗比',
    '智障',
    '弱智',
    '脑瘫',
    '蠢货',
    '白痴'
];

let currentIndex = 0;

// 添加鼠标移动效果
document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.title');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    title.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
});

// 点击标题切换背景
document.querySelector('.title').addEventListener('click', () => {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});

// 切换形容词
document.getElementById('switchBtn').addEventListener('click', () => {
    const adjectiveElement = document.getElementById('adjective');
    
    // 添加淡出效果
    adjectiveElement.style.opacity = '0';
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % adjectives.length;
        adjectiveElement.textContent = adjectives[currentIndex];
        adjectiveElement.style.opacity = '1';
    }, 200);
});
