// 怪獣速報 裏記録保管庫 - JavaScript (拡張版)

// コンテンツデータを保存する配列
let contents = [
    {
        title: "千葉工業新聞",
        caption: "冒頭のシーンで、男が見ているWebニュース",
        description: "映画の冒頭シーンに登場する架空のニュースサイト。筑波山山頂に建設される超電磁技術研究施設について報道している。リアルなニュースサイトの体裁を完全に再現している。このサイトは実際にウェブ上で閲覧可能で、作品の世界観を知る一つの指標になっている。なお作りこみが甘いのはご愛敬",
        link: "https://7500yenorange.github.io/ChibaTechNews/MtTsukuba.html",
        image: "Picture/ChibaTechNewsRogo.png"
    },
    {
        title: "緊急怪獣速報", 
        caption: "怪獣が出現した際、某A省から発表される速報",
        description: "怪獣出現時に政府機関から発表される緊急速報のデザイン。災害情報と同様の緊急性を持つレイアウト。赤色を基調とした警告色使いと、簡潔で分かりやすい情報提示が特徴。実際の緊急速報システムを参考にしたリアルなデザインとなっている。",
        link: "#",
        image: "Picture/Emergency.png"
    },
    {
        title:"怪獣が出現したことを知らせるニュース",
        caption:"✈エアポート快特NEWSのニュース映像(外側)",
        description:"架空のニュース番組「エアポート快特NEWS」で放送される怪獣出現のニュース映像。実際のテレビニュースの構成を忠実に再現し、背景のグラフィック、速報テロップなど細部まで作り込まれている。この作品では、怪獣が出現したことを知らせる大切な情報の一つである。",
        link:"#",
        image:"Picture/NewsImage.png"
    },
    {
        title:"怪獣が出現したことを知らせるニュース",
        caption:"✈エアポート快特NEWSの映像(full)",
        description:"架空のニュース番組「エアポート快特NEWS」で放送される怪獣出現のニュース映像。実際のテレビニュースの構成を忠実に再現し、背景のグラフィック、速報テロップなど細部まで作り込まれている。この作品では、怪獣が出現したことを知らせる大切な情報の一つである。",
        link:"https://www.youtube.com/watch?v=GbsxJTa4g4U",
        image:"Picture/NEWS.png"
    },
    {
        title:"miComet",
        caption:"🦊＜ﾔｯﾊﾟ,miCometなんすね",
        description:"本番前には消します。",
        link:"https://x.com/DDyumi364/status/1934677257408467149",
        image:"Picture/miComet.jpg"
    }
];

// ギャラリーを表示する関数
function renderGallery() {
    const gallery = document.getElementById('gallery');
    
    if (contents.length === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <h3>まだコンテンツがありません</h3>
                <p>コンテンツを追加してください</p>
            </div>
        `;
        return;
    }

    gallery.innerHTML = contents.map((content, index) => `
        <div class="card">
            <div class="image-container" onclick="openModal(${index})">
                ${content.image ? 
                    `<img src="${content.image}" alt="${content.title}">` :
                    '<div class="image-placeholder">🖼️</div>'
                }
            </div>
            <div class="card-content">
                <h3 class="card-title">${content.title}</h3>
                <p class="card-caption">${content.caption}</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <div class="card-link" onclick="openModal(${index})">
                        <span>詳細を見る</span>
                        <span>→</span>
                    </div>
                    ${(content.link && content.link !== '#') ? 
                        `<a class="card-link" href="${content.link}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
                            <span>サイトを見る</span>
                            <span>↗</span>
                        </a>` : ''
                    }
                </div>
            </div>
        </div>
    `).join('');
}

// モーダルを開く関数
function openModal(index) {
    const content = contents[index];
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCaption = document.getElementById('modalCaption');
    const modalLink = document.getElementById('modalLink');

    if (content.image) {
        modalImage.src = content.image;
        modalImage.alt = content.title;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }

    modalTitle.textContent = content.title;
    modalCaption.textContent = content.description || content.caption;
    modalLink.href = content.link;

    // リンクが有効でない場合は非表示
    if (content.link === '#' || !content.link) {
        modalLink.style.display = 'none';
    } else {
        modalLink.style.display = 'inline-flex';
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // スクロールを無効化
}

// モーダルを閉じる関数
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // スクロールを有効化
}

// 新しいコンテンツを追加する関数
function addContent(title, caption, link, image = null, description = null) {
    const newContent = {
        title: title,
        caption: caption,
        description: description,
        link: link,
        image: image
    };
    
    contents.push(newContent);
    renderGallery();
    console.log('新しいコンテンツが追加されました:', newContent);
}

// コンテンツを削除する関数（インデックス指定）
function removeContent(index) {
    if (index >= 0 && index < contents.length) {
        const removedContent = contents.splice(index, 1)[0];
        renderGallery();
        console.log('コンテンツが削除されました:', removedContent);
    } else {
        console.error('無効なインデックスです:', index);
    }
}

// 全コンテンツをクリアする関数
function clearAllContents() {
    contents = [];
    renderGallery();
    console.log('全てのコンテンツがクリアされました');
}

// コンテンツの一覧を表示する関数
function listContents() {
    console.log('現在のコンテンツ一覧:');
    contents.forEach((content, index) => {
        console.log(`${index}: ${content.title}`);
    });
    return contents;
}

// コンテンツを編集する関数
function editContent(index, newTitle, newCaption, newLink, newImage = null, newDescription = null) {
    if (index >= 0 && index < contents.length) {
        const oldContent = contents[index];
        contents[index] = {
            title: newTitle || oldContent.title,
            caption: newCaption || oldContent.caption,
            description: newDescription !== null ? newDescription : oldContent.description,
            link: newLink || oldContent.link,
            image: newImage !== null ? newImage : oldContent.image
        };
        renderGallery();
        console.log('コンテンツが編集されました:', contents[index]);
    } else {
        console.error('無効なインデックスです:', index);
    }
}

// 複数のコンテンツを一括追加する関数
function addMultipleContents(contentsArray) {
    contentsArray.forEach(content => {
        contents.push({
            title: content.title,
            caption: content.caption,
            description: content.description || null,
            link: content.link || '#',
            image: content.image || null
        });
    });
    renderGallery();
    console.log(`${contentsArray.length}件のコンテンツが追加されました`);
}

// コンテンツをJSONとしてエクスポート
function exportContents() {
    const jsonData = JSON.stringify(contents, null, 2);
    console.log('コンテンツデータ:', jsonData);
    return jsonData;
}

// JSONからコンテンツをインポート
function importContents(jsonData) {
    try {
        const importedContents = JSON.parse(jsonData);
        if (Array.isArray(importedContents)) {
            contents = importedContents;
            renderGallery();
            console.log('コンテンツがインポートされました');
        } else {
            console.error('無効なデータ形式です');
        }
    } catch (error) {
        console.error('JSONの解析に失敗しました:', error);
    }
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', function() {
    renderGallery();

    // モーダルを閉じるイベント
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.onclick = closeModal;

    // モーダル背景をクリックで閉じる
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
