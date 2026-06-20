(function () {
  const data = window.SITE_CONTENT;

  const $ = (selector) => document.querySelector(selector);
  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  $('#identity').textContent = data.profile.identity;
  $('#name').textContent = data.profile.name;
  $('#headline').textContent = data.profile.headline;

  const newsList = $('#newsList');
  data.news.forEach((item) => {
    const row = create('div', 'timeline-item');
    const dateElement = create('time', 'timeline-date', item.date);
    row.appendChild(dateElement);
    row.appendChild(create('p', 'timeline-text', item.text));
    newsList.appendChild(row);
  });

  $('#workCompany').textContent = data.work.company;
  $('#workRole').textContent = data.work.role;
  $('#workTime').textContent = data.work.time;

  const workList = $('#workList');
  data.work.items.forEach((item) => {
    const block = create('div', 'work-item');
    block.appendChild(create('p', 'work-period', item.period));
    block.appendChild(create('p', 'work-text', item.text));
    workList.appendChild(block);
  });

  const articleList = $('#articleList');
  data.articles.forEach((item) => {
    const link = create('a', 'article-item');
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = item.title;
    articleList.appendChild(link);
  });

  $('#githubLink').href = data.contacts.github;
  $('#xiaohongshuLink').href = data.contacts.xiaohongshu;
  $('#emailLink').href = `mailto:${data.contacts.email}`;
  $('#emailLink').textContent = '邮箱';
  $('#wechatImage').src = data.contacts.wechatImage;
  if ($('#updatedAt')) $('#updatedAt').textContent = data.updatedAt;

  const modal = $('#wechatModal');
  const openWechat = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  };
  const closeWechat = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  };

  $('#wechatButton').addEventListener('click', openWechat);
  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'modal') closeWechat();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeWechat();
  });
})();
