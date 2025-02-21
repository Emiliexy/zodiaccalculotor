// 修改默认图片路径
const DEFAULT_IMAGE = './images/zodiac/default.png';

const translations = {
    zh: {
        title: "中国生肖计算器",
        subtitle: "输入您的生日，了解您的生肖",
        // ... 其他翻译
    },
    en: {
        title: "Chinese Zodiac Calculator",
        subtitle: "Enter your birth date to discover your zodiac sign",
        // ... 其他翻译
    }
};

function setLanguage(lang) {
    const texts = translations[lang];
    // 更新页面文本
}

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
            unluckyColors: ['Yellow', 'Brown'],
            luckyNumbers: [2, 3],
            unluckyNumbers: [5, 9],
            image: './images/zodiac/rat.png',
            icon: './images/icons/rat-icon.png',
            story: "According to Chinese zodiac legend, the Rat came first in the race by riding on the Ox's back and jumping off at the last minute to cross the finish line first.",
            culturalFacts: [
                "Rats are seen as a sign of wealth and surplus in Chinese culture",
                "The Rat is the first animal of the zodiac cycle",
                "People born in the Year of the Rat are believed to be quick-witted and resourceful"
            ],
            luckyFlower: 'Lily'
        },
        ox: {
            name: 'Ox',
            chineseName: '牛',
            years: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
            element: 'Earth',
            traits: ['Honest', 'Diligent', 'Reliable', 'Strong', 'Patient', 'Kind'],
            luckyColors: ['Yellow', 'Green'],
            unluckyColors: ['Blue', 'White'],
            luckyNumbers: [1, 4],
            unluckyNumbers: [3, 6],
            image: './images/zodiac/ox.png',
            icon: './images/icons/ox-icon.png',
            story: "The hardworking Ox came second in the race, after being tricked by the clever Rat who rode on its back.",
            culturalFacts: [
                "The Ox represents diligence and honesty in Chinese culture",
                "Oxen were crucial in ancient Chinese agriculture",
                "People born in the Year of the Ox are known for their reliability and patience"
            ],
            luckyFlower: 'Tulip'
        },
        tiger: {
            name: 'Tiger',
            chineseName: '虎',
            years: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
            element: 'Wood',
            traits: ['Brave', 'Confident', 'Charismatic', 'Enthusiastic', 'Generous', 'Leader'],
            luckyColors: ['Blue', 'Orange'],
            unluckyColors: ['Brown', 'Black'],
            luckyNumbers: [1, 3, 4],
            unluckyNumbers: [6, 8],
            image: './images/zodiac/tiger.png',
            icon: './images/icons/tiger-icon.png',
            story: "The powerful Tiger arrived third, after swimming across a river and battling strong currents.",
            culturalFacts: [
                "Tigers are considered the king of all animals in Chinese culture",
                "The Tiger represents power and courage",
                "Tiger years are believed to be dynamic and unpredictable"
            ],
            luckyFlower: 'Plum Blossom'
        },
        rabbit: {
            name: 'Rabbit',
            chineseName: '兔',
            years: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
            element: 'Wood',
            traits: ['Gentle', 'Elegant', 'Alert', 'Quick', 'Skillful', 'Kind'],
            luckyColors: ['Red', 'Pink', 'Purple'],
            unluckyColors: ['Brown', 'Gray'],
            luckyNumbers: [3, 4, 9],
            unluckyNumbers: [1, 7],
            image: './images/zodiac/rabbit.png',
            icon: './images/icons/rabbit-icon.png',
            story: "The Rabbit came fourth in the race by cleverly hopping across stones and floating logs to cross the river.",
            culturalFacts: [
                "Rabbits symbolize elegance and grace in Chinese culture",
                "The Rabbit is considered one of the most fortunate zodiac signs",
                "People born in Rabbit years are believed to be artistic and refined"
            ],
            luckyFlower: 'Jasmine'
        },
        dragon: {
            name: 'Dragon',
            chineseName: '龙',
            years: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
            element: 'Earth',
            traits: ['Confident', 'Intelligent', 'Enthusiastic', 'Ambitious', 'Romantic', 'Artistic'],
            luckyColors: ['Gold', 'Silver'],
            unluckyColors: ['Blue', 'Green'],
            luckyNumbers: [1, 6, 7],
            unluckyNumbers: [3, 8],
            image: './images/zodiac/dragon.png',
            icon: './images/icons/dragon-icon.png',
            story: "The Dragon, despite being able to fly, arrived fifth. It had stopped to make rain for crops and help other creatures.",
            culturalFacts: [
                "Dragons are the only mythical creature in the Chinese zodiac",
                "The Dragon represents imperial power and good fortune",
                "Dragon years are considered particularly lucky for new beginnings"
            ],
            luckyFlower: 'Orchid'
        },
        snake: {
            name: 'Snake',
            chineseName: '蛇',
            years: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
            element: 'Fire',
            traits: ['Wise', 'Mysterious', 'Graceful', 'Charming', 'Lucky', 'Financial'],
            luckyColors: ['Black', 'Red', 'Yellow'],
            unluckyColors: ['White', 'Green'],
            luckyNumbers: [2, 8, 9],
            unluckyNumbers: [1, 6],
            image: './images/zodiac/snake.png',
            icon: './images/icons/snake-icon.png',
            story: "The Snake slithered onto the sixth place by wrapping itself around the Horse's leg and frightening it near the finish line.",
            culturalFacts: [
                "Snakes are seen as symbols of wisdom in Chinese culture",
                "The Snake represents transformation and healing",
                "Snake years are believed to bring mysterious changes"
            ],
            luckyFlower: 'Peony'
        },
        horse: {
            name: 'Horse',
            chineseName: '马',
            years: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
            element: 'Fire',
            traits: ['Energetic', 'Independent', 'Positive', 'Loyal', 'Adventurous', 'Warm-hearted'],
            luckyColors: ['Green', 'Yellow'],
            unluckyColors: ['Blue', 'White'],
            luckyNumbers: [2, 3, 7],
            unluckyNumbers: [1, 5],
            image: './images/zodiac/horse.png',
            icon: './images/icons/horse-icon.png',
            story: "The Horse arrived seventh, despite its speed, after being startled by the Snake near the finish line.",
            culturalFacts: [
                "Horses symbolize freedom and adventure in Chinese culture",
                "The Horse represents strength and nobility",
                "Horse years are known for their dynamic energy"
            ],
            luckyFlower: 'Sunflower'
        },
        goat: {
            name: 'Goat',
            chineseName: '羊',
            years: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
            element: 'Earth',
            traits: ['Gentle', 'Compassionate', 'Creative', 'Artistic', 'Kind-hearted', 'Persistent'],
            luckyColors: ['Brown', 'Red', 'Purple'],
            unluckyColors: ['Blue', 'Black'],
            luckyNumbers: [2, 7],
            unluckyNumbers: [4, 9],
            image: './images/zodiac/goat.png',
            icon: './images/icons/goat-icon.png',
            story: "The Goat reached eighth place by working together with the Monkey and Rooster, sharing a raft to cross the river.",
            culturalFacts: [
                "Goats represent peace and harmony in Chinese culture",
                "The Goat is known as the most artistic zodiac sign",
                "Goat years are considered peaceful and creative"
            ],
            luckyFlower: 'Carnation'
        },
        monkey: {
            name: 'Monkey',
            chineseName: '猴',
            years: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
            element: 'Metal',
            traits: ['Smart', 'Clever', 'Intelligent', 'Witty', 'Curious', 'Innovative'],
            luckyColors: ['White', 'Blue', 'Gold'],
            unluckyColors: ['Red', 'Pink'],
            luckyNumbers: [4, 9],
            unluckyNumbers: [2, 7],
            image: './images/zodiac/monkey.png',
            icon: './images/icons/monkey-icon.png',
            story: "The clever Monkey used its agility to help the Goat and Rooster cross the river, arriving in ninth place.",
            culturalFacts: [
                "Monkeys symbolize intelligence and wit in Chinese culture",
                "The Monkey is considered the most versatile zodiac sign",
                "Monkey years bring innovation and cleverness"
            ],
            luckyFlower: 'Chrysanthemum'
        },
        rooster: {
            name: 'Rooster',
            chineseName: '鸡',
            years: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
            element: 'Metal',
            traits: ['Honest', 'Bright', 'Communicative', 'Ambitious', 'Capable', 'Warm-hearted'],
            luckyColors: ['Gold', 'Brown', 'Yellow'],
            unluckyColors: ['White', 'Green'],
            luckyNumbers: [5, 7, 8],
            unluckyNumbers: [1, 3],
            image: './images/zodiac/rooster.png',
            icon: './images/icons/rooster-icon.png',
            story: "The Rooster found a raft and worked with the Monkey and Goat to cross the river, coming in tenth.",
            culturalFacts: [
                "Roosters represent punctuality and honesty in Chinese culture",
                "The Rooster is known for its confidence and pride",
                "Rooster years emphasize hard work and dedication"
            ],
            luckyFlower: 'Rose'
        },
        dog: {
            name: 'Dog',
            chineseName: '狗',
            years: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
            element: 'Earth',
            traits: ['Loyal', 'Honest', 'Friendly', 'Faithful', 'Smart', 'Straightforward'],
            luckyColors: ['Green', 'Red', 'Purple'],
            unluckyColors: ['Blue', 'White'],
            luckyNumbers: [3, 4, 9],
            unluckyNumbers: [1, 7],
            image: './images/zodiac/dog.png',
            icon: './images/icons/dog-icon.png',
            story: "The Dog, despite being a good swimmer, got distracted by playing in the water and finished eleventh.",
            culturalFacts: [
                "Dogs symbolize loyalty and protection in Chinese culture",
                "The Dog represents justice and honesty",
                "Dog years are associated with fairness and equality"
            ],
            luckyFlower: 'Daisy'
        },
        pig: {
            name: 'Pig',
            chineseName: '猪',
            years: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
            element: 'Water',
            traits: ['Diligent', 'Compassionate', 'Generous', 'Easy-going', 'Optimistic', 'Honest'],
            luckyColors: ['Yellow', 'Gray', 'Brown'],
            unluckyColors: ['Blue', 'Green'],
            luckyNumbers: [2, 5, 8],
            unluckyNumbers: [1, 7],
            image: './images/zodiac/pig.png',
            icon: './images/icons/pig-icon.png',
            story: "The Pig came last after stopping for a feast and a nap, but still completed the race with a positive attitude.",
            culturalFacts: [
                "Pigs symbolize wealth and abundance in Chinese culture",
                "The Pig represents honesty and good fortune",
                "Pig years are known for their prosperity"
            ],
            luckyFlower: 'Lotus'
        }
    };

    // 添加生肖兼容性数据
    const zodiacCompatibility = {
        rat: {
            bestMatch: ['dragon', 'monkey'],
            goodMatch: ['ox', 'snake', 'rooster'],
            poorMatch: ['horse', 'goat']
        },
        ox: {
            bestMatch: ['rat', 'snake', 'rooster'],
            goodMatch: ['monkey', 'pig'],
            poorMatch: ['goat', 'dragon', 'horse']
        },
        tiger: {
            bestMatch: ['dragon', 'horse'],
            goodMatch: ['rabbit', 'goat'],
            poorMatch: ['snake', 'rooster']
        },
        rabbit: {
            bestMatch: ['dragon', 'goat'],
            goodMatch: ['rat', 'snake'],
            poorMatch: ['tiger', 'horse']
        },
        dragon: {
            bestMatch: ['rat', 'snake'],
            goodMatch: ['tiger', 'goat'],
            poorMatch: ['rabbit', 'horse']
        },
        snake: {
            bestMatch: ['rat', 'goat'],
            goodMatch: ['dragon', 'monkey'],
            poorMatch: ['ox', 'horse']
        },
        horse: {
            bestMatch: ['dragon', 'dog'],
            goodMatch: ['rabbit', 'goat'],
            poorMatch: ['rat', 'snake']
        },
        goat: {
            bestMatch: ['rat', 'snake'],
            goodMatch: ['dragon', 'monkey'],
            poorMatch: ['ox', 'horse']
        },
        monkey: {
            bestMatch: ['rat', 'dragon'],
            goodMatch: ['ox', 'goat'],
            poorMatch: ['rabbit', 'snake']
        },
        rooster: {
            bestMatch: ['rat', 'dragon'],
            goodMatch: ['goat', 'monkey'],
            poorMatch: ['ox', 'snake']
        },
        dog: {
            bestMatch: ['horse', 'dragon'],
            goodMatch: ['rabbit', 'goat'],
            poorMatch: ['rat', 'snake']
        },
        pig: {
            bestMatch: ['rat', 'goat'],
            goodMatch: ['dragon', 'monkey'],
            poorMatch: ['ox', 'snake']
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
        const storySection = document.querySelector('.story-section');
        
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
                <div class="lucky-group">
                    <div class="lucky-item">
                        <h4>Lucky Colors</h4>
                        <p>${zodiac.luckyColors.join(', ')}</p>
                    </div>
                    <div class="lucky-item">
                        <h4>Lucky Numbers</h4>
                        <p>${zodiac.luckyNumbers.join(', ')}</p>
                    </div>
                    <div class="lucky-item">
                        <h4>Lucky Flower</h4>
                        <p>${zodiac.luckyFlower}</p>
                    </div>
                </div>
                <div class="unlucky-group">
                    <div class="lucky-item">
                        <h4>Unlucky Colors</h4>
                        <p>${zodiac.unluckyColors.join(', ')}</p>
                    </div>
                    <div class="lucky-item">
                        <h4>Unlucky Numbers</h4>
                        <p>${zodiac.unluckyNumbers.join(', ')}</p>
                    </div>
                </div>
            </div>
        `;

        // 添加兼容性信息
        const compatibility = `
            <div class="compatibility-section">
                <h3>Compatibility</h3>
                <div class="compatibility-container">
                    <div class="compatibility-item best">
                        <h4>Best Match</h4>
                        ${zodiacCompatibility[zodiacSign].bestMatch.map(sign => 
                            `<span class="zodiac-tag">${zodiacData[sign].name}</span>`
                        ).join('')}
                    </div>
                    <div class="compatibility-item poor">
                        <h4>Poor Match</h4>
                        ${zodiacCompatibility[zodiacSign].poorMatch.map(sign => 
                            `<span class="zodiac-tag">${zodiacData[sign].name}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;

        // 更新故事和文化背景部分
        if (zodiac.story && zodiac.culturalFacts) {
            storySection.innerHTML = `
                <h3>Story & Culture</h3>
                <div class="story-content">
                    <p>${zodiac.story}</p>
                    <div class="cultural-facts">
                        <h4>Cultural Facts</h4>
                        <ul>
                            ${zodiac.culturalFacts.map(fact => `<li>${fact}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        } else {
            storySection.style.display = 'none';
        }

        // 添加生肖年份预测
        const prediction = addYearPrediction(zodiacSign, year);
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
            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'zodiac-icon-wrapper';
            
            const icon = document.createElement('img');
            icon.src = zodiac.icon;
            icon.alt = zodiac.name;
            icon.className = 'zodiac-icon';
            icon.dataset.zodiac = Object.keys(zodiacData)[index];
            
            // 添加提示文字
            const tooltip = document.createElement('span');
            tooltip.className = 'zodiac-tooltip';
            tooltip.textContent = zodiac.name;  // 只显示英文名称
            
            // 添加点击事件
            icon.addEventListener('click', () => {
                showZodiacInfo(Object.keys(zodiacData)[index]);
            });
            
            iconWrapper.appendChild(icon);
            iconWrapper.appendChild(tooltip);
            carousel.appendChild(iconWrapper);
        });
        
        document.querySelector('.hero-section').appendChild(carousel);
    }

    // 初始化生肖轮播
    createZodiacCarousel();

    function addShareButtons() {
        const shareButtons = `
            <div class="share-section">
                <button onclick="shareOnFacebook()">Share on Facebook</button>
                <button onclick="shareOnTwitter()">Share on Twitter</button>
                <button onclick="shareOnWeChat()">Share on WeChat</button>
            </div>
        `;
    }

    function addYearPrediction(zodiacSign, currentYear) {
        const nextZodiacYear = findNextZodiacYear(zodiacSign, currentYear);
        return `
            <div class="prediction-section">
                <h3>Your Next ${zodiacSign} Year</h3>
                <p>Your next zodiac year will be ${nextZodiacYear}</p>
                <div class="fortune-prediction">
                    <!-- 添加运势预测 -->
                </div>
            </div>
        `;
    }

    function shareOnSocialMedia(platform) {
        const zodiacSign = calculateZodiac(yearSelect.value);
        const zodiac = zodiacData[zodiacSign];
        const shareText = `I discovered I'm a ${zodiac.name} (${zodiac.chineseName}) in Chinese Zodiac! Find out yours!`;
        const shareUrl = window.location.href;

        const shareLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            wechat: `weixin://dl/moments?text=${encodeURIComponent(shareText)}`
        };

        window.open(shareLinks[platform], '_blank');
    }

    function findNextZodiacYear(zodiacSign, currentYear) {
        const zodiac = zodiacData[zodiacSign];
        const lastYear = zodiac.years[zodiac.years.length - 1];
        return lastYear + 12;
    }

    function getZodiacPrediction(zodiacSign, year) {
        const predictions = {
            rat: {
                career: "Good opportunities for career advancement",
                love: "Potential for new romantic connections",
                health: "Focus on maintaining work-life balance"
            },
            // ... add for all zodiac signs
        };
        
        return predictions[zodiacSign];
    }

    // 添加直接显示生肖信息的函数
    function showZodiacInfo(zodiacSign) {
        const zodiac = zodiacData[zodiacSign];
        resultSection.style.display = 'block';
        setTimeout(() => {
            resultSection.classList.add('visible');
        }, 10);
        
        showResult(zodiac.years[zodiac.years.length - 1]);
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 添加兼容性计算功能
    function calculateCompatibility(date1, date2) {
        const zodiac1 = calculateZodiac(new Date(date1).getFullYear());
        const zodiac2 = calculateZodiac(new Date(date2).getFullYear());
        
        // 获取兼容性数据
        const compatibility = getCompatibilityResult(zodiac1, zodiac2);
        
        return {
            zodiac1: zodiacData[zodiac1],
            zodiac2: zodiacData[zodiac2],
            ...compatibility
        };
    }

    function getCompatibilityResult(zodiac1, zodiac2) {
        // 定义兼容性评分和描述
        const compatibilityData = {
            dragon: {
                monkey: {
                    score: 100,
                    description: "You are an ideal couple. Both are romantic while still being sensible. You have good interpersonal skills and are popular amongst your friends. The Dragon is enthusiastic and talented, while the Monkey is witty and charming. You admire each other and strive for common goals together."
                },
                // ... 添加其他生肖的兼容性数据
            },
            // ... 添加其他生肖组合
        };

        // 获取兼容性结果
        const result = compatibilityData[zodiac1]?.[zodiac2] || 
                      compatibilityData[zodiac2]?.[zodiac1] || {
            score: 60,
            description: "You have a moderate compatibility. While there may be some challenges, understanding and communication can help build a strong relationship."
        };

        return result;
    }

    // 在 DOMContentLoaded 事件中添加
    document.getElementById('testCompatibilityBtn').addEventListener('click', function() {
        const date1 = document.getElementById('person1Date').value;
        const date2 = document.getElementById('person2Date').value;

        if (!date1 || !date2) {
            alert('Please select both birth dates');
            return;
        }

        const result = calculateCompatibility(date1, date2);
        const resultDiv = document.getElementById('compatibilityResult');
        
        resultDiv.innerHTML = `
            <div class="zodiac-pair">
                <div class="zodiac-result-image">
                    <img src="${result.zodiac1.image}" alt="${result.zodiac1.name}">
                    <h5>${result.zodiac1.name}</h5>
                </div>
                <div class="compatibility-heart">❤</div>
                <div class="zodiac-result-image">
                    <img src="${result.zodiac2.image}" alt="${result.zodiac2.name}">
                    <h5>${result.zodiac2.name}</h5>
                </div>
            </div>
            <h4>${result.zodiac1.name} and ${result.zodiac2.name}'s Love Compatibility result:</h4>
            <div class="compatibility-score">
                <div>Compatibility Rating:</div>
                <div>${result.score}%</div>
            </div>
            <p class="compatibility-description">${result.description}</p>
        `;

        resultDiv.style.display = 'block';
        setTimeout(() => {
            resultDiv.classList.add('visible');
        }, 10);

        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
}); 