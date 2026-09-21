/* =========================================================
   ORION — REDE SOCIAL FICTÍCIA
   Todos os personagens, comentários e interações são fictícios.
   ========================================================= */


/* =========================================================
   UTILIDADES
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function createId(prefix = "id") {
  return prefix + "_" + Date.now() + "_" + Math.random().toString(36).slice(2, 9);
} 

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function saveData() {
  localStorage.setItem("orionPosts", JSON.stringify(posts));
}

function getImage(seed) {
  return `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=1000&q=85`;
}


/* =========================================================
   AVATARES FICTÍCIOS
   ========================================================= */

const avatars = {
  elise:
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",

  sophie:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",

  madison:
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",

  nick:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",

  lena:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",

  chloe:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",

  ethan:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
};

const fotoSalva =
  localStorage.getItem("orionProfileAvatar") || avatars.elise;

$("#sidebarAvatar").src = fotoSalva;
$("#profileAvatar").src = fotoSalva;
$("#commentAvatar").src = fotoSalva;


/* =========================================================
   PERSONAGENS FICTÍCIOS
   ========================================================= */

const fictionalUsers = [

  {
    username: "sofia_lee",
    name: "Sofia Lee",
    avatar: avatars.sophie
  },

  {
    username: "madisonb",
    name: "Madison Bennett",
    avatar: avatars.madison
  },

  {
    username: "lena",
    name: "Lena",
    avatar: avatars.lena,
    bio: "Lifestyle, viagens e momentos especiais. ✨",
    followers: 845000,
    following: 412
  },

  {
    username: "emma.w",
    name: "Emma Wilson",
    avatar: avatars.chloe
  },

  {
    username: "lucas_m",
    name: "Lucas Miller",
    avatar: avatars.ethan
  },

  {
    username: "olivia_k",
    name: "Olivia King",
    avatar: avatars.sophie
  },

  {
    username: "noah.r",
    name: "Noah Rivers",
    avatar: avatars.nick
  },

  {
    username: "ava.moon",
    name: "Ava Moon",
    avatar: avatars.lena
  },

  {
    username: "mia_s",
    name: "Mia Stone",
    avatar: avatars.madison
  },

  {
    username: "charlie_x",
    name: "Charlie Brooks",
    avatar: avatars.ethan
  },

  {
    username: "zoe_daily",
    name: "Zoe Carter",
    avatar: avatars.chloe
  },

  {
    username: "liam.art",
    name: "Liam Art",
    avatar: avatars.nick
  },

  {
    username: "ella.blue",
    name: "Ella Blue",
    avatar: avatars.sophie
  },

  {
    username: "nina.v",
    name: "Nina Vale",
    avatar: avatars.lena
  },

  {
    username: "james_01",
    name: "James Carter",
    avatar: avatars.nick
  },

  {
    username: "clara.sun",
    name: "Clara Sun",
    avatar: avatars.madison
  },

  {
    username: "ruby.notes",
    name: "Ruby Notes",
    avatar: avatars.chloe
  },

  {
    username: "max.travel",
    name: "Max Travel",
    avatar: avatars.ethan
  },

  {
    username: "isla.jpg",
    name: "Isla James",
    avatar: avatars.sophie
  },

  {
    username: "willowx",
    name: "Willow X",
    avatar: avatars.lena
  },

  {
    username: "daniel_r",
    name: "Daniel Reed",
    avatar: avatars.nick
  },

  {
    username: "grace.m",
    name: "Grace Morgan",
    avatar: avatars.madison
  },

  {
    username: "ivy_rose",
    name: "Ivy Rose",
    avatar: avatars.chloe
  },

  {
    username: "theo.lee",
    name: "Theo Lee",
    avatar: avatars.ethan
  }

];


/* =========================================================
   COMENTÁRIOS FICTÍCIOS
   ========================================================= */

const commentTexts = [
  "Essa foto ficou perfeita! 💙",
  "Meu Deus, Elise 😭✨",
  "Precisamos saber onde foi isso!",
  "Você está linda!",
  "Esse lugar é incrível.",
  "A estética desse post está impecável.",
  "Eu amei cada detalhe! 🥹",
  "Isso parece cena de filme.",
  "Amei a legenda também!",
  "Como você consegue deixar tudo tão bonito?",
  "Esse look ficou maravilhoso!",
  "Volta para esse lugar algum dia! 🌊",
  "Estou obcecada nessa foto.",
  "Que energia boa! ✨",
  "Essa composição ficou linda.",
  "Ok, mas precisamos de mais fotos desse dia.",
  "A iluminação está perfeita.",
  "Você sempre entrega tudo!",
  "Isso aqui merece milhões de curtidas.",
  "Meu novo post favorito.",
  "Que cenário surreal!",
  "Amei essa vibe.",
  "Você pode fazer um vlog desse lugar?",
  "Amei o detalhe do céu.",
  "Essa foto tem uma energia diferente.",
  "Que memória linda!",
  "Estou salvando essa inspiração.",
  "Precisamos de uma segunda parte!",
  "Muito lindo, Elise!",
  "Essa publicação ficou especial. 💫"
];


/* =========================================================
   GERADOR DE COMENTÁRIOS
   ========================================================= */

function createAutomaticComment(existingComments = []) {

  let available = commentTexts.filter(text => {
    return !existingComments.some(comment => comment.text === text);
  });

  if (available.length === 0) {
    available = commentTexts;
  }

  const text = available[Math.floor(Math.random() * available.length)];

  const user =
    fictionalUsers[
      Math.floor(Math.random() * fictionalUsers.length)
    ];

  return {
    id: createId("comment"),
    username: user.username,
    name: user.name,
    avatar: user.avatar,
    text,
    time: "agora"
  };
}


/* =========================================================
   FUNÇÃO SOLICITADA
   generateAutomaticComments()
   ========================================================= */

function generateAutomaticComments(postId, amount = 10) {

  const post = posts.find(p => p.id === postId);

  if (!post) return;

  for (let i = 0; i < amount; i++) {

    let comment = createAutomaticComment(post.comments);

    /*
      Evita comentários exatamente iguais
      dentro da mesma publicação.
    */

    let attempts = 0;

    while (
      post.comments.some(c =>
        c.username === comment.username &&
        c.text === comment.text
      ) &&
      attempts < 20
    ) {
      comment = createAutomaticComment(post.comments);
      attempts++;
    }

    post.comments.push(comment);
  }

  saveData();

  renderFeed();
  renderProfileGrid();

  if (currentCommentPost === postId) {
    renderComments(postId);
  }

  showToast(`${amount} comentários fictícios adicionados!`);
}


/* =========================================================
   PUBLICAÇÕES INICIAIS
   ========================================================= */

const initialPostData = [

  {
    image: getImage("1515886657613-9f3515b0c78f"),
    date: "20 de setembro de 2026",
    caption:
      "Uma tarde tranquila, um pouco de música e aquela sensação de que o mundo ficou em silêncio por alguns minutos. 💙",
    hashtags: "#elisesmith #lifestyle #daily"
  },

  {
    image: getImage("1524504388940-b1c1722653e1"),
    date: "18 de setembro de 2026",
    caption:
      "Dias de viagem sempre parecem passar rápido demais. Queria guardar cada detalhe desse lugar para sempre. ✈️",
    hashtags: "#travel #summer #memories"
  },

  {
    image: getImage("1500534623283-312aade485b7"),
    date: "16 de setembro de 2026",
    caption:
      "Nem todo dia precisa ser extraordinário. Às vezes, uma manhã bonita já é suficiente.",
    hashtags: "#morning #coffee #lifestyle"
  },

  {
    image: getImage("1490481651871-ab68de25d43d"),
    date: "14 de setembro de 2026",
    caption:
      "Alguns looks simplesmente combinam com a energia do dia. ✨",
    hashtags: "#fashion #style #elisesmith"
  },

  {
    image: getImage("1507525428034-b723cf961d3e"),
    date: "12 de setembro de 2026",
    caption:
      "O som do mar, o vento e algumas horas sem olhar para o relógio. Era exatamente o que eu precisava.",
    hashtags: "#ocean #summer #travel"
  },

  {
    image: getImage("1500534623283-312aade485b7"),
    date: "10 de setembro de 2026",
    caption:
      "Pequenos momentos que não estavam planejados acabam virando os melhores.",
    hashtags: "#moments #photography #daily"
  },

  {
    image: getImage("1519681393784-d120267933ba"),
    date: "8 de setembro de 2026",
    caption:
      "Noite azul, cidade iluminada e uma playlist que não sai da cabeça.",
    hashtags: "#night #city #music"
  },

  {
    image: getImage("1500534623283-312aade485b7"),
    date: "6 de setembro de 2026",
    caption:
      "Existe alguma coisa especial em conhecer lugares novos sem pressa.",
    hashtags: "#explore #travel #life"
  },

  {
    image: getImage("1517841905240-472988babdf9"),
    date: "4 de setembro de 2026",
    caption:
      "Um daqueles dias simples que acabam virando uma memória favorita.",
    hashtags: "#memories #friends #lifestyle"
  },

  {
    image: getImage("1497366811353-6870744d04b2"),
    date: "2 de setembro de 2026",
    caption:
      "Começando um novo mês com novas ideias, novos projetos e muita vontade de criar.",
    hashtags: "#newchapter #creator #elisesmith"
  }

];


/* =========================================================
   CRIAÇÃO DAS PUBLICAÇÕES
   ========================================================= */

function buildInitialPosts() {

  const elisePosts = initialPostData.map((data, index) => {

    const post = {
      id: "initial_" + index,
      user: "Elise Smith",
      username: "@elisesmith",
      avatar: avatars.elise,
      image: data.image,
      date: data.date,
      caption: data.caption,
      hashtags: data.hashtags,
      likes: 1250000 - (index * 32117),
      liked: false,
      saved: false,
      comments: []
    };

    // 20 comentários para cada publicação da Elise
    for (let i = 0; i < 20; i++) {

      const user = fictionalUsers[i % fictionalUsers.length];

      post.comments.push({
        id: createId("initial_comment"),
        username: user.username,
        name: user.name,
        avatar: user.avatar,
        text: commentTexts[
          (index * 3 + i) % commentTexts.length
        ],
        time: `${(i % 9) + 1} h`
      });

    }

    return post;

  });


  /* =====================================================
     PUBLICAÇÕES DA LENA
     ===================================================== */

  const lenaPostData = [

    {
      image: getImage("1500534623283-312aade485b7"),
      date: "19 de setembro de 2026",
      caption:
        "Um daqueles dias em que tudo parece acontecer no ritmo certo. ✨",
      hashtags: "#lena #lifestyle #daily"
    },

    {
      image: getImage("1507525428034-b723cf961d3e"),
      date: "16 de setembro de 2026",
      caption:
        "Sol, mar e algumas horas longe da correria. 🌊☀️",
      hashtags: "#travel #summer #lena"
    },

    {
      image: getImage("1519681393784-d120267933ba"),
      date: "13 de setembro de 2026",
      caption:
        "Noite tranquila, cidade iluminada e uma playlist perfeita. 🌙",
      hashtags: "#night #city #lifestyle"
    },

    {
      image: getImage("1490481651871-ab68de25d43d"),
      date: "10 de setembro de 2026",
      caption:
        "Hoje foi dia de escolher um look e sair sem nenhum plano. ✨",
      hashtags: "#fashion #style #lena"
    },

    {
      image: getImage("1517841905240-472988babdf9"),
      date: "7 de setembro de 2026",
      caption:
        "Guardando pequenos momentos que quero lembrar depois. 🤍",
      hashtags: "#memories #photography #life"
    }

  ];


  const lenaPosts = lenaPostData.map((data, index) => {

    const post = {
      id: "lena_" + index,
      user: "Lena",
      username: "@lena",

      // IMPORTANTE:
      // Todas as publicações usam a identidade visual da Lena.
      avatar: avatars.lena,

      image: data.image,
      date: data.date,
      caption: data.caption,
      hashtags: data.hashtags,

      likes: 38400 - (index * 1732),

      liked: false,
      saved: false,

      comments: []
    };


    // 20 comentários para cada publicação da Lena
    for (let i = 0; i < 20; i++) {

      const user =
        fictionalUsers[(i + index) % fictionalUsers.length];

      post.comments.push({
        id: createId("lena_comment"),
        username: user.username,
        name: user.name,
        avatar: user.avatar,
        text: commentTexts[
          (index * 5 + i) % commentTexts.length
        ],
        time: `${(i % 8) + 1} h`
      });

    }

    return post;

  });


  // Junta os posts da Elise + Lena
  return [...elisePosts, ...lenaPosts];
}
/* =========================================================
   CARREGAR PUBLICAÇÕES
   ========================================================= */

let posts;

const storedPosts = localStorage.getItem("orionPosts");

if (storedPosts) {

  try {

    posts = JSON.parse(storedPosts);

    // Se o armazenamento estiver vazio ou inválido
    if (!Array.isArray(posts) || posts.length === 0) {
      posts = buildInitialPosts();
      saveData();
    }

  } catch (error) {

    posts = buildInitialPosts();
    saveData();

  }

} else {

  posts = buildInitialPosts();
  saveData();

}

/* =========================================================
   STORIES
   ========================================================= */

const stories = [

  {
    name: "Elise",
    avatar: localStorage.getItem("orionProfileAvatar") || avatars.elise,
    image: getImage("1515886657613-9f3515b0c78f"),
    caption: "Hoje foi um dia lindo. ✨"
  },

  {
    name: "Sophie",
    avatar: avatars.sophie,
    image: getImage("1492684223066-81342ee5ff30"),
    caption: "A gente saiu sem nenhum plano 😂"
  },

  {
    name: "Madison",
    avatar: avatars.madison,
    image: getImage("1497366754035-f200968a6e72"),
    caption: "Coffee break ☕"
  },

  {
    name: "Nick",
    avatar: avatars.nick,
    image: getImage("1500530855697-b586d89ba3ee"),
    caption: "Road trip."
  },

  {
    name: "Lena",
    avatar: avatars.lena,
    image: getImage("1470252649378-9c29740c9fa8"),
    caption: "Golden hour."
  },

  {
    name: "Chloe",
    avatar: avatars.chloe,
    image: getImage("1490730141103-6cac27aaab94"),
    caption: "Sunday mood."
  },

  {
    name: "Ethan",
    avatar: avatars.ethan,
    image: getImage("1464822759023-fed622ff2c3b"),
    caption: "Exploring."
  }

];


/* =========================================================
   RENDER STORIES
   ========================================================= */

function renderStories() {

  const container = $("#stories");

  container.innerHTML = "";

  stories.forEach((story, index) => {

    const element = document.createElement("div");

    element.className = "story";

    element.innerHTML = `
      <div class="story-avatar">
        <img src="${story.name === "Elise" ? (localStorage.getItem("orionProfileAvatar") || story.avatar) : story.avatar}" alt="${story.name}">
      </div>
      <span>${story.name}</span>
    `;

    element.addEventListener("click", () => {
      openStory(index);
    });

    container.appendChild(element);
  });
}


/* =========================================================
   RENDER FEED
   ========================================================= */

function renderFeed() {

  const feed = $("#feed");

  feed.innerHTML = "";

  posts.forEach(post => {

    const article = document.createElement("article");

    article.className = "post";

    article.innerHTML = `

      <div class="post-header">

        <img
          class="post-avatar"
          src="${localStorage.getItem("orionProfileAvatar") || post.avatar}"
          alt="${post.username}"
        >

        <div class="post-user">

          <div class="post-user-info">

            <strong>${post.user}</strong>

            <span>
              ${post.username}
              · ${post.date}
            </span>

          </div>

          <span class="verified">✓</span>

        </div>

        <button
          class="post-menu"
          data-post-menu="${post.id}"
        >
          ⋯
        </button>

      </div>

      <img
        class="post-media"
        src="${post.image}"
        alt="Publicação fictícia de Elise Smith"
        loading="lazy"
      >

      <div class="post-actions">

        <button
          class="post-action like ${post.liked ? "liked" : ""}"
          data-like="${post.id}"
          title="Curtir"
        >
          ${post.liked ? "♥" : "♡"}
        </button>

        <button
          class="post-action"
          data-comment="${post.id}"
          title="Comentar"
        >
          ♧
        </button>

        <button
          class="post-action"
          data-share="${post.id}"
          title="Compartilhar"
        >
          ↗
        </button>

        <button
          class="post-action save ${post.saved ? "saved" : ""}"
          data-save="${post.id}"
          title="Salvar"
        >
          ${post.saved ? "★" : "☆"}
        </button>

      </div>

      <div class="post-body">

        <div class="likes">
          ${formatNumber(post.likes)} curtidas
        </div>

        <div class="caption">
          <strong>@elisesmith</strong>
          ${escapeHTML(post.caption)}
        </div>

        <div class="hashtags">
          ${escapeHTML(post.hashtags)}
        </div>

        <button
          class="comment-count"
          data-comment="${post.id}"
        >
          Ver todos os ${post.comments.length} comentários
        </button>

        <div class="date">
          Publicação fictícia · ORION
        </div>

      </div>
    `;

    feed.appendChild(article);
  });

  updatePostCount();
}


/* =========================================================
   SEGURANÇA BÁSICA PARA TEXTOS DO USUÁRIO
   ========================================================= */

function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* =========================================================
   FORMATADOR DE NÚMEROS
   ========================================================= */

function formatNumber(number) {

  return new Intl.NumberFormat("pt-BR").format(number);
}

/* =========================================================
   CURTIDAS / SALVAR / COMPARTILHAR
   ========================================================= */

document.addEventListener("click", event => {

  /* =======================================================
     CURTIR
     ======================================================= */

  const likeButton = event.target.closest("[data-like]");

  if (likeButton) {

    const id = likeButton.dataset.like;

    const post = posts.find(p => p.id === id);

    if (!post) return;

    post.liked = !post.liked;

    if (post.liked) {
      post.likes++;
    } else {
      post.likes--;
    }

    saveData();

    renderFeed();

    return;
  }


  /* =======================================================
     SALVAR
     ======================================================= */

  const saveButton = event.target.closest("[data-save]");

  if (saveButton) {

    const id = saveButton.dataset.save;

    const post = posts.find(p => p.id === id);

    if (!post) return;

    post.saved = !post.saved;

    saveData();

    renderFeed();

    renderProfileGrid();

    showToast(
      post.saved
        ? "Publicação salva!"
        : "Publicação removida dos salvos."
    );

    return;
  }


  /* =======================================================
     COMENTÁRIOS
     ======================================================= */

  const commentButton = event.target.closest("[data-comment]");

  if (commentButton) {

    openComments(commentButton.dataset.comment);

    return;
  }


  /* =======================================================
     COMPARTILHAR
     ======================================================= */

  const shareButton = event.target.closest("[data-share]");

  if (shareButton) {

    const id = shareButton.dataset.share;

    const post = posts.find(p => p.id === id);

    if (!post) return;

    if (navigator.share) {

      navigator.share({
        title: "ORION — Elise Smith",
        text: post.caption
      }).catch(() => {});

    } else {

      navigator.clipboard?.writeText(
        "Publicação fictícia de Elise Smith no ORION."
      );

      showToast("Link fictício copiado!");

    }

    return;
  }


  /* =======================================================
     MENU ⋯ DA PUBLICAÇÃO
     ======================================================= */

  const menuButton = event.target.closest("[data-post-menu]");

  if (menuButton) {

    const postId = menuButton.dataset.postMenu;

    const post = posts.find(
      post => String(post.id) === String(postId)
    );

    if (!post) return;


    const confirmar = confirm(
      "PUBLICAÇÃO\n\n" +
      "Deseja excluir esta publicação?\n\n" +
      "OK = Excluir\n" +
      "Cancelar = Manter publicação"
    );


    if (confirmar) {

      posts = posts.filter(
        post => String(post.id) !== String(postId)
      );

      saveData();

      renderFeed();

      renderProfileGrid();

      updatePostCount();

      showToast(
        "Publicação excluída com sucesso!"
      );

    }

    return;
  }

});

/* =========================================================
   COMENTÁRIOS
   ========================================================= */

let currentCommentPost = null;

function openComments(postId) {

  currentCommentPost = postId;

  renderComments(postId);

  $("#commentsModal").classList.add("open");

  setTimeout(() => {
    $("#commentInput").focus();
  }, 100);
}


function renderComments(postId) {

  const post = posts.find(p => p.id === postId);

  if (!post) return;

  const list = $("#commentsList");

  list.innerHTML = "";

  post.comments.forEach(comment => {

    const element = document.createElement("div");

    element.className = "comment";

    element.innerHTML = `

      <img
        src="${comment.avatar}"
        alt="${comment.username}"
      >

      <div class="comment-body">

        <strong>@${escapeHTML(comment.username)}</strong>

        <span>${escapeHTML(comment.text)}</span>

        <span class="comment-time">
          ${escapeHTML(comment.time)}
        </span>

      </div>

    `;

    list.appendChild(element);
  });
}


$("#sendComment").addEventListener("click", addUserComment);

$("#commentInput").addEventListener("keydown", event => {

  if (event.key === "Enter") {
    event.preventDefault();
    addUserComment();
  }

});


function addUserComment() {

  const input = $("#commentInput");

  const text = input.value.trim();

  if (!text) return;

  const post = posts.find(p => p.id === currentCommentPost);

  if (!post) return;

  post.comments.push({
    id: createId("user_comment"),
    username: "meu_perfil",
    name: "Meu Perfil",
    avatar: avatars.elise,
    text,
    time: "agora"
  });

  input.value = "";

  saveData();

  renderComments(post.id);
  renderFeed();

  const list = $("#commentsList");

  list.scrollTop = list.scrollHeight;

  showToast("Comentário adicionado!");
}


$("#generateCommentsBtn").addEventListener("click", () => {

  if (!currentCommentPost) return;

  generateAutomaticComments(currentCommentPost, 10);

});


/* =========================================================
   NAVEGAÇÃO SPA
   ========================================================= */

function navigate(pageName) {

  $$(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = $(`#page-${pageName}`);

  if (target) {
    target.classList.add("active");
  }

  $$(".nav-btn[data-page]").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );

  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageName === "profile") {
    renderProfileGrid();
  }

  if (pageName === "explore") {
    renderExplore();
  }

  if (pageName === "activity") {
    renderNotifications();
  }
}


$$(".nav-btn[data-page]").forEach(button => {

  button.addEventListener("click", () => {
    navigate(button.dataset.page);
  });

});

/* =========================================================
   PERFIL DA LENA
   ========================================================= */

function openLenaProfile() {

  // Esconde todas as páginas
  $$(".page").forEach(page => {
    page.classList.remove("active");
  });

  // Mostra o perfil da Lena
  const lenaPage = $("#page-lena");

  if (!lenaPage) return;

  lenaPage.classList.add("active");

  // Coloca a foto oficial da Lena
  $("#lenaProfileAvatar").src = avatars.lena;

  // Renderiza as publicações da Lena
  renderLenaPosts();

  // Vai para o topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderLenaPosts() {

  const grid = $("#lenaPostsGrid");

  if (!grid) return;

  const lenaPosts = posts.filter(post => {
    return post.username === "lena";
  });

  grid.innerHTML = "";

  lenaPosts.forEach(post => {

    const item = document.createElement("div");

    item.className = "profile-grid-item";

    item.innerHTML = `
      <img
        src="${post.image}"
        alt="Publicação de Lena"
      >
    `;

    item.addEventListener("click", () => {
      openPostModal(post);
    });

    grid.appendChild(item);

  });

  $("#lenaPostCount").textContent = lenaPosts.length;
}



/* =========================================================
   ABRIR MODAL DE CRIAÇÃO
   ========================================================= */

$$(".create-trigger").forEach(button => {

  button.addEventListener("click", () => {

    $("#createModal").classList.add("open");

  });

});


/* =========================================================
   FECHAR MODAIS
   ========================================================= */

$$("[data-close]").forEach(button => {

  button.addEventListener("click", () => {

    const modalId = button.dataset.close;

    $(`#${modalId}`).classList.remove("open");

  });

});


$$(".modal-overlay").forEach(overlay => {

  overlay.addEventListener("click", event => {

    if (event.target === overlay) {
      overlay.classList.remove("open");
    }

  });

});


/* =========================================================
   UPLOAD DE IMAGEM
   ========================================================= */

let selectedImage = null;

$("#imageInput").addEventListener("change", event => {

  const file = event.target.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {

    showToast("Escolha uma imagem válida.");

    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {

    selectedImage = e.target.result;

    $("#imagePreview").src = selectedImage;

    $("#uploadPlaceholder").classList.add("hidden");

    $("#imagePreviewContainer").classList.remove("hidden");

  };

  reader.readAsDataURL(file);

});


$("#removeImage").addEventListener("click", () => {

  selectedImage = null;

  $("#imageInput").value = "";

  $("#imagePreview").src = "";

  $("#uploadPlaceholder").classList.remove("hidden");

  $("#imagePreviewContainer").classList.add("hidden");

});


/* =========================================================
   PUBLICAR
   ========================================================= */

$("#publishBtn").addEventListener("click", () => {

  if (!selectedImage) {

    showToast("Escolha uma imagem antes de publicar.");

    return;
  }

  const caption = $("#captionInput").value.trim();

  const hashtags = $("#hashtagsInput").value.trim();

  const newPost = {

    id: createId("post"),

    user: "Elise Smith",

    username: "@elisesmith",

    avatar: avatars.elise,

    image: selectedImage,

    date: new Date().toLocaleDateString(
      "pt-BR",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    ),

    caption:
      caption ||
      "Uma nova publicação no ORION. ✨",

    hashtags:
      hashtags ||
      "#elisesmith #orion",

    likes: 0,

    liked: false,

    saved: false,

    comments: []
  };


  posts.unshift(newPost);

  saveData();

  renderFeed();
  renderProfileGrid();

  resetCreateModal();

  $("#createModal").classList.remove("open");

  navigate("home");

  showToast("Publicação criada com sucesso!");

});


function resetCreateModal() {

  selectedImage = null;

  $("#imageInput").value = "";

  $("#imagePreview").src = "";

  $("#captionInput").value = "";

  $("#hashtagsInput").value = "";

  $("#uploadPlaceholder").classList.remove("hidden");

  $("#imagePreviewContainer").classList.add("hidden");
}


/* =========================================================
   PERFIL
   ========================================================= */

function renderProfileGrid() {

  const grid = $("#profileGrid");

  grid.innerHTML = "";

  const activeTab =
    document.querySelector(".profile-tab.active")?.dataset.tab ||
    "posts";

  let profilePosts = posts;

  if (activeTab === "saved") {
    profilePosts = posts.filter(post => post.saved);
  }

  if (profilePosts.length === 0) {

    grid.innerHTML = `
      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:60px 20px;
        color:#8994a8;
      ">
        Nenhuma publicação salva ainda.
      </div>
    `;

    return;
  }

  profilePosts.forEach(post => {

    const item = document.createElement("div");

    item.className = "profile-grid-item";

    item.innerHTML = `
      <img
        src="${post.image}"
        alt="Publicação"
        loading="lazy"
      >
    `;

    item.addEventListener("click", () => {
      openPostModal(post);
    });

    grid.appendChild(item);
  });

  updatePostCount();
}


$$(".profile-tab").forEach(tab => {

  tab.addEventListener("click", () => {

    $$(".profile-tab").forEach(t =>
      t.classList.remove("active")
    );

    tab.classList.add("active");

    renderProfileGrid();

  });

});


function updatePostCount() {

  $("#profilePosts").textContent = posts.length;
}


/* =========================================================
   MODAL DE PUBLICAÇÃO
   ========================================================= */

function openPostModal(post) {

  $("#postModalImage").src = post.image;

 $("#postModalAvatar").src =
    localStorage.getItem("orionProfileAvatar") || post.avatar;

  $("#postModalCaption").textContent =
    post.caption + " " + post.hashtags;

  $("#postModal").classList.add("open");
}


/* =========================================================
   FOLLOW
   ========================================================= */

$("#followBtn").addEventListener("click", () => {

  const button = $("#followBtn");

  const following =
    button.classList.toggle("following");

  button.textContent =
    following
      ? "Seguindo"
      : "Seguir";

  showToast(
    following
      ? "Agora você segue Elise."
      : "Você deixou de seguir Elise."
  );

});


/* =========================================================
   MESSAGE
   ========================================================= */

$("#messageBtn").addEventListener("click", () => {

  showToast(
    "Mensagens fictícias: conversa com Elise aberta."
  );

});


/* =========================================================
   STORIES
   ========================================================= */

let currentStoryIndex = 0;
let storyTimer = null;

function openStory(index) {

  currentStoryIndex = index;

  $("#storyViewer").classList.remove("hidden");

  showCurrentStory();

}


function showCurrentStory() {

  const story = stories[currentStoryIndex];

  if (!story) return;

  $("#viewerStoryAvatar").src =
  story.name === "Elise"
    ? (localStorage.getItem("orionProfileAvatar") || story.avatar)
    : story.avatar;

  $("#viewerStoryName").textContent = story.name;

  $("#viewerStoryImage").src = story.image;
if (story.name === "Lena") {

  $("#viewerStoryAvatar").onclick = openLenaProfile;

  $("#viewerStoryName").onclick = openLenaProfile;

} else {

  $("#viewerStoryAvatar").onclick = null;

  $("#viewerStoryName").onclick = null;

}
  $("#viewerStoryCaption").textContent = story.caption;

  const progress = $("#storyProgressBar");

  progress.style.transition = "none";
  progress.style.width = "0%";

  clearTimeout(storyTimer);

  requestAnimationFrame(() => {

    progress.style.transition = "width 5s linear";

    progress.style.width = "100%";

  });

  storyTimer = setTimeout(() => {

    nextStory();

  }, 5000);
}


function nextStory() {

  if (currentStoryIndex < stories.length - 1) {

    currentStoryIndex++;

    showCurrentStory();

  } else {

    closeStory();

  }
}


function previousStory() {

  if (currentStoryIndex > 0) {

    currentStoryIndex--;

    showCurrentStory();

  }
}


function closeStory() {

  clearTimeout(storyTimer);

  $("#storyViewer").classList.add("hidden");

}


$("#storyNext").addEventListener("click", nextStory);

$("#storyPrevious").addEventListener("click", previousStory);

$("#storyClose").addEventListener("click", closeStory);


$("#storyAutoPlay").addEventListener("click", () => {

  openStory(0);

});


/* =========================================================
   TECLADO DO STORY
   ========================================================= */

document.addEventListener("keydown", event => {

  if ($("#storyViewer").classList.contains("hidden")) {
    return;
  }

  if (event.key === "ArrowRight") {
    nextStory();
  }

  if (event.key === "ArrowLeft") {
    previousStory();
  }

  if (event.key === "Escape") {
    closeStory();
  }

});


/* =========================================================
   EXPLORE
   ========================================================= */

const exploreItems = [

  {
    image: getImage("1500530855697-b586d89ba3ee"),
    category: "travel",
    title: "Travel"
  },

  {
    image: getImage("1515886657613-9f3515b0c78f"),
    category: "fashion",
    title: "Fashion"
  },

  {
    image: getImage("1507525428034-b723cf961d3e"),
    category: "nature",
    title: "Ocean"
  },

  {
    image: getImage("1519681393784-d120267933ba"),
    category: "lifestyle",
    title: "Lifestyle"
  },

  {
    image: getImage("1490481651871-ab68de25d43d"),
    category: "fashion",
    title: "Style"
  },

  {
    image: getImage("1470252649378-9c29740c9fa8"),
    category: "nature",
    title: "Golden Hour"
  },

  {
    image: getImage("1497366811353-6870744d04b2"),
    category: "lifestyle",
    title: "Workspace"
  },

  {
    image: getImage("1464822759023-fed622ff2c3b"),
    category: "travel",
    title: "Adventure"
  },

  {
    image: getImage("1490730141103-6cac27aaab94"),
    category: "nature",
    title: "Summer"
  },

  {
    image: getImage("1500534623283-312aade485b7"),
    category: "travel",
    title: "Road Trip"
  },

  {
    image: getImage("1524504388940-b1c1722653e1"),
    category: "fashion",
    title: "Portrait"
  },

  {
    image: getImage("1492684223066-81342ee5ff30"),
    category: "lifestyle",
    title: "Friends"
  }

];


let currentExploreCategory = "all";


function renderExplore() {

  const grid = $("#exploreGrid");

  const search =
    $("#exploreSearch").value
      .trim()
      .toLowerCase();

  grid.innerHTML = "";

  let filtered = exploreItems.filter(item => {

    const categoryMatch =
      currentExploreCategory === "all" ||
      item.category === currentExploreCategory;

    const searchMatch =
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });


  filtered.forEach((item, index) => {

    const element = document.createElement("div");

    element.className =
      "explore-item " +
      (index % 5 === 0 ? "tall" : "");

    element.innerHTML = `

      <img
        src="${item.image}"
        alt="${item.title}"
        loading="lazy"
      >

      <div class="explore-overlay">
        <strong>${item.title}</strong>
      </div>

    `;

    element.addEventListener("click", () => {

      $("#postModalImage").src = item.image;

      $("#postModalAvatar").src =
    localStorage.getItem("orionProfileAvatar") || avatars.elise;

      $("#postModalCaption").textContent =
        `${item.title} · Conteúdo fictício do ORION.`;

      $("#postModal").classList.add("open");

    });

    grid.appendChild(element);

  });

}


$$(".category").forEach(button => {

  button.addEventListener("click", () => {

    $$(".category").forEach(b =>
      b.classList.remove("active")
    );

    button.classList.add("active");

    currentExploreCategory =
      button.dataset.category;

    renderExplore();

  });

});


$("#exploreSearch").addEventListener(
  "input",
  renderExplore
);


/* =========================================================
   NOTIFICAÇÕES
   ========================================================= */

const notificationData = [

  {
    user: fictionalUsers[0],
    text: "Sofia curtiu sua publicação.",
    time: "há 2 min"
  },

  {
    user: fictionalUsers[1],
    text: "Madison começou a seguir você.",
    time: "há 8 min"
  },

  {
    user: fictionalUsers[2],
    text: "Alexandra comentou na sua publicação.",
    time: "há 15 min"
  },

  {
    user: fictionalUsers[3],
    text: "Emma mencionou você.",
    time: "há 31 min"
  },

  {
    user: fictionalUsers[4],
    text: "Lucas curtiu sua publicação.",
    time: "há 48 min"
  },

  {
    user: fictionalUsers[5],
    text: "Olivia começou a seguir você.",
    time: "há 1 h"
  },

  {
    user: fictionalUsers[6],
    text: "Noah compartilhou sua publicação.",
    time: "há 2 h"
  },

  {
    user: fictionalUsers[7],
    text: "Ava comentou: “Amei essa foto!”",
    time: "há 3 h"
  },

  {
    user: fictionalUsers[8],
    text: "Mia curtiu uma publicação sua.",
    time: "há 4 h"
  },

  {
    user: fictionalUsers[9],
    text: "Charlie começou a seguir você.",
    time: "há 5 h"
  }

];


function renderNotifications() {

  const container = $("#notifications");

  container.innerHTML = "";

  notificationData.forEach(notification => {

    const element = document.createElement("div");

    element.className = "notification";

    element.innerHTML = `

      <img
        src="${notification.user.avatar}"
        alt="${notification.user.name}"
      >

      <div class="notification-content">

        <p>
          <strong>
            @${notification.user.username}
          </strong>
          ${notification.text}
        </p>

        <span>${notification.time}</span>

      </div>

    `;

    container.appendChild(element);

  });

}


/* =========================================================
   FECHAR MODAIS COM ESC
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") return;

  $$(".modal-overlay.open").forEach(modal => {
    modal.classList.remove("open");
  });

});


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

renderStories();

renderFeed();

renderExplore();

renderNotifications();

renderProfileGrid();

updatePostCount();


/* =========================================================
   ATUALIZAÇÃO AUTOMÁTICA DA INTERFACE
   ========================================================= */

window.addEventListener("storage", event => {

  if (event.key !== "orionPosts") return;

  try {

    posts = JSON.parse(event.newValue);

    renderFeed();
    renderProfileGrid();

  } catch {
    // Mantém os dados atuais caso outra aba tenha dados inválidos.
  }

});


/* =========================================================
   CLIQUE DUPLO NA IMAGEM = CURTIR
   ========================================================= */

document.addEventListener("dblclick", event => {

  if (!event.target.classList.contains("post-media")) {
    return;
  }

  const postElement =
    event.target.closest(".post");

  if (!postElement) return;

  const buttons =
    postElement.querySelectorAll("[data-like]");

  if (!buttons.length) return;

  buttons[0].click();

});


/* =========================================================
   DRAG & DROP PARA IMAGEM
   ========================================================= */

const uploadArea = $("#uploadArea");

uploadArea.addEventListener("dragover", event => {

  event.preventDefault();

  uploadArea.style.borderColor =
    "rgba(93,162,255,.8)";

});


uploadArea.addEventListener("dragleave", () => {

  uploadArea.style.borderColor =
    "#39445a";

});


uploadArea.addEventListener("drop", event => {

  event.preventDefault();

  uploadArea.style.borderColor =
    "#39445a";

  const file = event.dataTransfer.files[0];

  if (!file || !file.type.startsWith("image/")) {

    showToast("Solte uma imagem válida.");

    return;
  }

  const reader = new FileReader();

  reader.onload = e => {

    selectedImage = e.target.result;

    $("#imagePreview").src = selectedImage;

    $("#uploadPlaceholder").classList.add("hidden");

    $("#imagePreviewContainer")
      .classList.remove("hidden");

  };

  reader.readAsDataURL(file);

});


/* =========================================================
   PREVENIR ENVIO ACIDENTAL
   ========================================================= */

document.addEventListener("submit", event => {

  event.preventDefault();

});


/* =========================================================
   DISPONIBILIZA A FUNÇÃO NO ESCOPO GLOBAL
   ========================================================= */

window.generateAutomaticComments =
  generateAutomaticComments;



document.getElementById("editProfileBtn").addEventListener("click", function () {

    document.getElementById("editProfileModal").classList.add("active");

    document.getElementById("editProfileName").value = "Elise Smith";
    document.getElementById("editProfileUsername").value = "@elisesmith";
    document.getElementById("editProfileBio").value =
        "Influencer, modelo e criadora de conteúdo.";
    document.getElementById("editProfileLink").value = "";

    document.getElementById("editProfileAvatar").src =
        document.getElementById("profileAvatar").src;
});
document.querySelector(".change-photo-button").addEventListener("click", function () {
    document.getElementById("profileImageInput").click();
});

document.getElementById("saveProfileBtn").addEventListener("click", function () {

    const nome = document.getElementById("editProfileName").value.trim();
    const usuario = document.getElementById("editProfileUsername").value.trim();
    const bio = document.getElementById("editProfileBio").value.trim();
    const link = document.getElementById("editProfileLink").value.trim();

    // Atualiza o perfil na tela
    document.querySelector(".profile-name h1").textContent = nome;
    document.querySelector(".username").textContent = usuario;
    document.querySelector(".bio").textContent = bio;

    // Pega a foto que está aparecendo no modal
    const novaFoto = document.getElementById("editProfileAvatar").src;

    // Atualiza a foto do perfil
    document.getElementById("profileAvatar").src = novaFoto;

    // Salva os dados
    localStorage.setItem("orionProfileName", nome);
    localStorage.setItem("orionProfileUsername", usuario);
    localStorage.setItem("orionProfileBio", bio);
    localStorage.setItem("orionProfileLink", link);
    localStorage.setItem("orionProfileAvatar", novaFoto);

    // Fecha a janela
    document.getElementById("editProfileModal").classList.remove("active");

    showToast("Perfil atualizado com sucesso!");
});

document.getElementById("profileImageInput").addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        showToast("Escolha uma imagem válida.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

    const novaFoto = e.target.result;

    // Mostra a nova foto no modal
    document.getElementById("editProfileAvatar").src = novaFoto;

    // Salva a NOVA foto
    localStorage.setItem("orionProfileAvatar", novaFoto);

    // Atualiza a foto do perfil
    document.getElementById("profileAvatar").src = novaFoto;

    // Atualiza a foto da barra lateral
    document.getElementById("sidebarAvatar").src = novaFoto;

    // Atualiza a foto usada nos comentários
    document.getElementById("commentAvatar").src = novaFoto;

    // Atualiza os avatares de todas as publicações
    document.querySelectorAll(".post-avatar").forEach(function (img) {
        img.src = novaFoto;
    });

};

        reader.readAsDataURL(file);

  

});


/* =========================================================
   FECHAR MODAL EDITAR PERFIL
   ========================================================= */

document.getElementById("closeEditProfile").addEventListener("click", function () {

    document.getElementById("editProfileModal").classList.remove("active");

});