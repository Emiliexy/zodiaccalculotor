// 修改默认图片路径
const DEFAULT_IMAGE = './images/zodiac/default.png';

document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('yearSelect');
    const monthSelect = document.getElementById('monthSelect');
    const daySelect = document.getElementById('daySelect');
    const revealBtn = document.getElementById('revealBtn');
    const resultSection = document.getElementById('resultSection');

    // 初始化年份选择
    const currentYear = new Date().getFullYear();
    const startYear = 1920;

    // 倒序添加年份选项（从当前年份到1920年）
    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // 初始化月份选择
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSelect.appendChild(option);
    }

    // 更新日期选择
    function updateDays() {
        const year = parseInt(yearSelect.value);
        const month = parseInt(monthSelect.value);
        const daysInMonth = new Date(year, month, 0).getDate();
        
        daySelect.innerHTML = '<option value="">日</option>';
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        }
    }

    monthSelect.addEventListener('change', updateDays);
    yearSelect.addEventListener('change', updateDays);

    const zodiacData = {
        rat: {
            name: 'Rat',
            chineseName: '鼠',
            years: [1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
            element: 'Water',
            traits: ['Clever', 'Quick-witted', 'Resourceful', 'Versatile', 'Kind', 'Curious'],
            luckyColors: ['Blue', 'Gold'],
            luckyNumbers: [2, 3],
            image: './images/zodiac/rat.png',
            icon: './images/icons/rat-icon.png'
        },
        ox: {
            name: 'Ox',
            chineseName: '牛',
            years: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
            element: 'Earth',
            traits: ['Honest', 'Diligent', 'Reliable', 'Strong', 'Patient', 'Kind'],
            luckyColors: ['Yellow', 'Green'],
            luckyNumbers: [1, 4],
            image: './images/zodiac/ox.png',
            icon: './images/icons/ox-icon.png'
        },
        tiger: {
            name: 'Tiger',
            chineseName: '虎',
            years: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
            element: 'Wood',
            traits: ['Brave', 'Confident', 'Charismatic', 'Enthusiastic', 'Generous', 'Leader'],
            luckyColors: ['Blue', 'Orange'],
            luckyNumbers: [1, 3, 4],
            image: './images/zodiac/tiger.png',
            icon: './images/icons/tiger-icon.png'
        },
        rabbit: {
            name: 'Rabbit',
            chineseName: '兔',
            years: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
            element: 'Wood',
            traits: ['Gentle', 'Elegant', 'Alert', 'Quick', 'Skillful', 'Kind'],
            luckyColors: ['Red', 'Pink', 'Purple'],
            luckyNumbers: [3, 4, 9],
            image: './images/zodiac/rabbit.png',
            icon: './images/icons/rabbit-icon.png'
        },
        dragon: {
            name: 'Dragon',
            chineseName: '龙',
            years: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
            element: 'Earth',
            traits: ['Confident', 'Intelligent', 'Enthusiastic', 'Ambitious', 'Romantic', 'Artistic'],
            luckyColors: ['Gold', 'Silver'],
            luckyNumbers: [1, 6, 7],
            image: './images/zodiac/dragon.png',
            icon: './images/icons/dragon-icon.png'
        },
        snake: {
            name: 'Snake',
            chineseName: '蛇',
            years: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
            element: 'Fire',
            traits: ['Wise', 'Mysterious', 'Graceful', 'Charming', 'Lucky', 'Financial'],
            luckyColors: ['Black', 'Red', 'Yellow'],
            luckyNumbers: [2, 8, 9],
            image: './images/zodiac/snake.png',
            icon: './images/icons/snake-icon.png'
        },
        horse: {
            name: 'Horse',
            chineseName: '马',
            years: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
            element: 'Fire',
            traits: ['Energetic', 'Independent', 'Positive', 'Loyal', 'Adventurous', 'Warm-hearted'],
            luckyColors: ['Green', 'Yellow'],
            luckyNumbers: [2, 3, 7],
            image: './images/zodiac/horse.png',
            icon: './images/icons/horse-icon.png'
        },
        goat: {
            name: 'Goat',
            chineseName: '羊',
            years: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
            element: 'Earth',
            traits: ['Gentle', 'Compassionate', 'Creative', 'Artistic', 'Kind-hearted', 'Persistent'],
            luckyColors: ['Brown', 'Red', 'Purple'],
            luckyNumbers: [2, 7],
            image: './images/zodiac/goat.png',
            icon: './images/icons/goat-icon.png'
        },
        monkey: {
            name: 'Monkey',
            chineseName: '猴',
            years: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
            element: 'Metal',
            traits: ['Smart', 'Clever', 'Intelligent', 'Witty', 'Curious', 'Innovative'],
            luckyColors: ['White', 'Blue', 'Gold'],
            luckyNumbers: [4, 9],
            image: './images/zodiac/monkey.png',
            icon: './images/icons/monkey-icon.png'
        },
        rooster: {
            name: 'Rooster',
            chineseName: '鸡',
            years: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
            element: 'Metal',
            traits: ['Honest', 'Bright', 'Communicative', 'Ambitious', 'Capable', 'Warm-hearted'],
            luckyColors: ['Gold', 'Brown', 'Yellow'],
            luckyNumbers: [5, 7, 8],
            image: './images/zodiac/rooster.png',
            icon: './images/icons/rooster-icon.png'
        },
        dog: {
            name: 'Dog',
            chineseName: '狗',
            years: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
            element: 'Earth',
            traits: ['Loyal', 'Honest', 'Friendly', 'Faithful', 'Smart', 'Straightforward'],
            luckyColors: ['Green', 'Red', 'Purple'],
            luckyNumbers: [3, 4, 9],
            image: './images/zodiac/dog.png',
            icon: './images/icons/dog-icon.png'
        },
        pig: {
            name: 'Pig',
            chineseName: '猪',
            years: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
            element: 'Water',
            traits: ['Diligent', 'Compassionate', 'Generous', 'Easy-going', 'Optimistic', 'Honest'],
            luckyColors: ['Yellow', 'Gray', 'Brown'],
            luckyNumbers: [2, 5, 8],
            image: './images/zodiac/pig.png',
            icon: './images/icons/pig-icon.png'
        }
    };

    revealBtn.addEventListener('click', function() {
        const year = parseInt(yearSelect.value);
        const month = parseInt(monthSelect.value);
        const day = parseInt(daySelect.value);

        if (!year || !month || !day) {
            alert('Please select your complete birth date');
            return;
        }

        // 先显示结果区域，再滚动
        resultSection.style.display = 'block';
        // 添加一个短暂延迟以确保 display:block 已经生效
        setTimeout(() => {
            resultSection.classList.add('visible');
        }, 10);
        
        showResult(year, month, day);
        resultSection.scrollIntoView({ behavior: 'smooth' });
    });

    function showResult(year, month, day) {
        const zodiacSign = calculateZodiac(year);
        const zodiac = zodiacData[zodiacSign];
        
        const zodiacImage = document.querySelector('.zodiac-image');
        
        zodiacImage.innerHTML = '';
        zodiacImage.classList.add('loading');
        
        const img = document.createElement('img');
        img.src = zodiac.image;
        img.alt = zodiac.name;
        img.className = 'fade-in';
        
        img.onload = () => {
            zodiacImage.classList.remove('loading');
        };
        
        img.onerror = (e) => {
            img.src = DEFAULT_IMAGE;
            zodiacImage.classList.remove('loading');
        };
        
        zodiacImage.appendChild(img);
        
        // Update DOM elements
        const yearLabel = document.querySelector('.year-label');
        const zodiacName = document.querySelector('.zodiac-name');
        const yearRange = document.querySelector('.year-range');
        const element = document.querySelector('.element');
        const traits = document.querySelector('.personality-traits');
        const luckyInfo = document.querySelector('.lucky-info');
        
        // Update other information
        yearLabel.textContent = `${year} - Year of the ${zodiac.name}`;
        zodiacName.innerHTML = `<span class="chinese-name">${zodiac.chineseName}</span> ${zodiac.name}`;
        yearRange.innerHTML = `<strong>Years:</strong> ${zodiac.years.join(', ')}`;
        element.innerHTML = `<strong>Chinese Zodiac Element:</strong> ${zodiac.element}`;
        
        // Create personality traits display
        traits.innerHTML = `
            <h3>${zodiac.name} Chinese Zodiac Personality</h3>
            <div class="traits-container">
                ${zodiac.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
            </div>
        `;

        // Create lucky information display
        luckyInfo.innerHTML = `
            <div class="lucky-container">
                <div class="lucky-item">
                    <h4>Lucky Colors</h4>
                    <p>${zodiac.luckyColors.join(', ')}</p>
                </div>
                <div class="lucky-item">
                    <h4>Lucky Numbers</h4>
                    <p>${zodiac.luckyNumbers.join(', ')}</p>
                </div>
            </div>
        `;
    }

    function calculateZodiac(year) {
        const zodiacOrder = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 
                            'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
        return zodiacOrder[(year - 1900) % 12];
    }

    // 添加水墨动画效果
    function createInkDrop(x, y) {
        const inkDrop = document.createElement('div');
        inkDrop.className = 'ink-drop';
        inkDrop.style.left = x + 'px';
        inkDrop.style.top = y + 'px';
        inkDrop.style.width = Math.random() * 200 + 100 + 'px';
        inkDrop.style.height = inkDrop.style.width;
        
        document.getElementById('inkAnimation').appendChild(inkDrop);
        
        // 动画结束后移除元素
        inkDrop.addEventListener('animationend', () => {
            inkDrop.remove();
        });
    }

    // 随机生成水墨效果
    function generateRandomInk() {
        const container = document.querySelector('.hero-section');
        const rect = container.getBoundingClientRect();
        
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        
        createInkDrop(x, y);
    }

    // 定期生成水墨效果
    setInterval(generateRandomInk, 3000);

    // 添加生肖图标轮播
    function createZodiacCarousel() {
        const carousel = document.createElement('div');
        carousel.className = 'zodiac-carousel';
        
        Object.values(zodiacData).forEach((zodiac, index) => {
            const icon = document.createElement('img');
            icon.src = zodiac.icon;
            icon.alt = zodiac.name;
            icon.className = 'zodiac-icon';
            icon.onerror = function() {
                this.onerror = null;
                this.src = zodiac.image;
            };
            carousel.appendChild(icon);
        });
        
        document.querySelector('.hero-section').appendChild(carousel);
        
        // 轮播动画
        let currentIndex = 0;
        const icons = carousel.querySelectorAll('.zodiac-icon');
        
        function updateCarousel() {
            icons.forEach(icon => icon.classList.remove('active'));
            icons[currentIndex].classList.add('active');
            currentIndex = (currentIndex + 1) % icons.length;
        }
        
        updateCarousel();
        setInterval(updateCarousel, 2000);
    }

    // 初始化生肖轮播
    createZodiacCarousel();
}); 