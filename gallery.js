// 怪獣速報 裏記録保管庫 - JavaScript

// コンテンツデータを保存する配列
let contents = [
    {
        title: "サンプル作品1",
        caption: "ここに作品の説明やキャプションを入力してください。作品の背景やコンセプトなどを詳しく説明できます。",
        link: "#",
        image: null
    },
    {
        title: "サンプル作品2", 
        caption: "別の作品の説明です。それぞれの作品に個別のタイトル、説明、リンクを設定できます。",
        link: "#",
        image: null
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

    gallery.innerHTML = contents.map(content => `
        <div class="card">
            <div class="image-container">
                ${content.image ? 
                    `<img src="${content.image}" alt="${content.title}" style="width: 100%; height: 100%; object-fit: cover;">` :
                    '<div class="image-placeholder">🖼️</div>'
                }
            </div>
            <div class="card-content">
                <h3 class="card-title">${content.title}</h3>
                <p class="card-caption">${content.caption}</p>
                <a href="${content.link}" class="card-link" target="_blank" rel="noopener noreferrer">
                    <span>詳細を見る</span>
                    <span>→</span>
                </a>
            </div>
        </div>
    `).join('');
}

// 新しいコンテンツを追加する関数
function addContent(title, caption, link, image = null) {
    const newContent = {
        title: title,
        caption: caption,
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

// 初期表示
document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
});

// 使用例（コンソールで実行可能）:
/*
// 新しいコンテンツを追加
addContent(
    "ゴジラ未公開映像", 
    "1954年の撮影現場で発見された未公開のフィルム。ゴジラの咆哮シーンの別テイクが収録されている。",
    "https://example.com/godzilla-footage",
    "https://example.com/godzilla-image.jpg"
);

// モスラの秘密資料を追加
addContent(
    "モスラ幼虫期の生態記録",
    "インファント島で撮影されたモスラの幼虫期における行動パターンの詳細な記録。科学者たちの秘密報告書。",
    "https://example.com/mothra-larva",
    null
);

// キングギドラの目撃証言を追加
addContent(
    "三つ首怪獣の謎",
    "宇宙から飛来したとされる金色の怪獣についての目撃証言集。各地で報告された奇怪な現象についても詳述。",
    "https://example.com/king-ghidorah"
);

// コンテンツ一覧を確認
listContents();

// 特定のコンテンツを削除（インデックス0番を削除）
removeContent(0);
*/