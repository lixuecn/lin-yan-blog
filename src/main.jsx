import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Bookmark, Clock3, GitBranch, Menu, Search, X } from 'lucide-react'
import './styles.css'

const posts = [
  {
    tag: '设计方法',
    title: '好的设计，是让复杂的事情变得简单',
    excerpt: '从信息架构到交互细节，聊聊我如何用减法思维做出更有温度、更易用的产品。',
    date: '2024.06.18',
    read: '8 min read',
    tone: 'blue',
    shape: '◇',
  },
  {
    tag: '生活随笔',
    title: '在城市里，寻找一点属于自己的留白',
    excerpt: '城市很吵，生活可以很安静。记录一些关于散步、阅读和与自己相处的时刻。',
    date: '2024.06.04',
    read: '6 min read',
    tone: 'cream',
    shape: '○',
  },
  {
    tag: '工具分享',
    title: '我的数字花园：一套顺手的知识管理系统',
    excerpt: '尝试过很多工具后，我终于留下了这套轻量、持续且不打扰思考的工作流。',
    date: '2024.05.21',
    read: '10 min read',
    tone: 'green',
    shape: '✦',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <div className="site-shell">
      <header className="header wrap">
        <a className="brand" href="#top" aria-label="回到首页">
          <span className="brand-mark">L</span>
          <span>LIN YAN</span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a className="active" href="#top" onClick={() => setMenuOpen(false)}>首页</a>
          <a href="#articles" onClick={() => setMenuOpen(false)}>文章</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于我</a>
          <a href="#newsletter" onClick={() => setMenuOpen(false)}>订阅</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setSearchOpen(!searchOpen)} aria-label="搜索"><Search size={18} strokeWidth={1.8} /></button>
          <a className="github-link" href="https://github.com" aria-label="GitHub"><GitBranch size={18} strokeWidth={1.8} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="打开菜单">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {searchOpen && <div className="search-bar wrap"><Search size={18} /><input autoFocus placeholder="搜索文章..." /><button onClick={() => setSearchOpen(false)}><X size={17} /></button></div>}

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> 记录思考，也记录生活</p>
            <h1>你好，我是林言<br /><em>设计师 &amp; 写作者</em></h1>
            <p className="hero-desc">在这里分享关于设计、技术与生活的<br className="desktop-only" />思考。希望文字能带来一点启发。</p>
            <a className="text-link" href="#about">了解更多 <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun"></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="planet planet-one"></div><div className="planet planet-two"></div><span className="art-star star-one">✦</span><span className="art-star star-two">✧</span>
            <div className="art-label">THINK<br />&amp; MAKE</div>
          </div>
        </section>

        <section className="content wrap" id="articles">
          <div className="section-heading"><div><p className="eyebrow">LATEST NOTES</p><h2>最新文章</h2></div><a className="all-link" href="#articles">查看全部 <ArrowUpRight size={16} /></a></div>
          <div className="article-grid">
            {posts.map((post) => <article className="post-card" key={post.title}>
              <div className={`post-visual ${post.tone}`}><span className="visual-shape">{post.shape}</span><span className="visual-index">0{posts.indexOf(post) + 1}</span></div>
              <div className="post-body"><p className="post-tag">{post.tag}</p><h3>{post.title}</h3><p className="excerpt">{post.excerpt}</p><div className="post-meta"><span>{post.date}</span><span className="dot">·</span><span><Clock3 size={14} /> {post.read}</span><button onClick={() => setSaved(!saved)} className={saved ? 'save saved' : 'save'} aria-label="收藏"><Bookmark size={17} fill={saved ? 'currentColor' : 'none'} /></button></div></div>
            </article>)}
          </div>
        </section>

        <section className="about wrap" id="about"><div className="about-mark">“</div><div><p className="eyebrow">A LITTLE ABOUT ME</p><p className="about-copy">我相信设计不仅是解决问题，<br />也是与世界建立连接的方式。</p></div><a className="circle-arrow" href="#newsletter" aria-label="继续阅读"><ArrowUpRight size={22} /></a></section>

        <section className="newsletter wrap" id="newsletter"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>偶尔寄一封信给你</h2><p>分享最近的阅读、灵感和一些不成熟的想法。</p></div><form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="你的邮箱地址" aria-label="邮箱地址" /><button type="submit">订阅 <ArrowUpRight size={17} /></button></form></section>
      </main>

      <footer className="footer wrap"><span>© 2024 LIN YAN</span><span>DESIGNED &amp; WRITTEN WITH <span className="heart">♥</span></span><a href="#top">回到顶部 ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
