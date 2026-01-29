import React, { useMemo, useState, useEffect } from 'react';

type Category = '全部' | '去中心化金融' | '机构' | '消费者' | '开发者' | '生态系统';

type NewsItem = {
  id: string;
  title: string;
  category: Category;
  link: string;
  publishTime: string;
};

const baseCategories: Category[] = ['全部', '去中心化金融', '机构', '消费者', '开发者', '生态系统'];

const mockNews: NewsItem[] = [
  { id: '1', title: 'WisdomTree is bringing tokenized RWAs to USD1', category: '机构', link: 'https://example.com/news1', publishTime: '2026-01-28' },
  { id: '2', title: 'Uranium Digital is giving institutions access to tokenized physical uranium on USD1', category: '生态系统', link: 'https://example.com/news2', publishTime: '2026-01-27' },
  { id: '3', title: 'DeFi protocols integrate USD1 liquidity rails', category: '去中心化金融', link: 'https://example.com/news1', publishTime: '2026-01-26' },
  { id: '4', title: 'Consumer wallets add native USD1 settlement', category: '消费者', link: 'https://example.com/news2', publishTime: '2026-01-25' },
  { id: '5', title: 'Developers ship SDK for USD1 tokenization', category: '开发者', link: 'https://example.com/news1', publishTime: '2026-01-24' }
];

function tagColor(cat: Category) {
  if (cat === '机构') return 'text-green-400 bg-green-400/10 border-green-400/30';
  if (cat === '开发者') return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
  if (cat === '生态系统') return 'text-yellow-300 bg-yellow-300/10 border-yellow-300/30';
  if (cat === '去中心化金融') return 'text-cyan-300 bg-cyan-300/10 border-cyan-300/30';
  if (cat === '消费者') return 'text-purple-300 bg-purple-300/10 border-purple-300/30';
  return 'text-white/70 bg-white/5 border-white/10';
}

const Terminal: React.FC = () => {
  const [active, setActive] = useState<Category>('全部');
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [categories, setCategories] = useState<Category[]>(baseCategories);

  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(() => setLoading(false), 600);
    const fetchNews = async () => {
      try {
        const apiUrl = (import.meta as any).env?.VITE_USD1_NEWS_API_URL || '/api/usd1-news';
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error('bad response');
        const data = await res.json();
        const incoming: NewsItem[] = (data?.newsList || []).map((n: any) => ({
          id: n.id,
          title: n.title,
          category: (n.category || '全部') as Category,
          link: n.link,
          publishTime: n.publishTime || n.date || '',
        }));
        const cats: Category[] = Array.from(new Set(incoming.map(i => i.category))).filter(Boolean) as Category[];
        if (!cancelled && incoming.length) {
          setNews(incoming);
          setCategories(['全部', ...cats] as Category[]);
        }
      } catch {
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchNews();
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const list = active === '全部' ? news : news.filter(n => n.category === active);
    const byText = query.trim() ? list.filter(n => n.title.toLowerCase().includes(query.trim().toLowerCase())) : list;
    return byText.sort((a, b) => b.publishTime.localeCompare(a.publishTime));
  }, [active, query]);

  return (
    <section id="terminal" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight">此刻正在发生什么</h2>
          <a href="#" className="text-xs font-display tracking-[0.4em] uppercase text-primary hover:text-primary/80 transition-colors">查看全部</a>
        </div>
        <div className="flex items-center justify-end mb-8">
          <div className="w-full md:w-80">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="搜索或询问 AI"
              className="w-full bg-surface border border-white/10 text-white px-4 py-2 rounded-none outline-none focus:border-primary/60 placeholder:text-white/40"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
          <div className="hidden md:block">
            <ul className="space-y-2">
              {categories.map(c => (
                <li key={c}>
                  <button
                    onClick={() => setActive(c)}
                    className={`w-full text-left px-4 py-2 border transition-all ${active === c ? 'bg-white/5 border-primary/50 text-white' : 'bg-surface border-white/10 text-white/70 hover:bg-white/5'}`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <select
              value={active}
              onChange={e => setActive(e.target.value as Category)}
              className="w-full bg-surface border border-white/10 text-white px-4 py-2 rounded-none outline-none focus:border-primary/60"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            {loading ? (
              <div className="space-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-[60px_1fr_120px] gap-6 items-center bg-surface border border-white/10 animate-pulse">
                    <div className="px-6 py-4">
                      <div className="h-4 w-8 bg-white/10" />
                    </div>
                    <div className="px-6 py-4">
                      <div className="h-4 w-3/4 bg-white/10" />
                    </div>
                    <div className="px-6 py-4 flex justify-end">
                      <div className="h-6 w-20 bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="bg-surface border border-white/10 px-6 py-10 text-white/60">暂无相关新闻</div>
            ) : (
              <div className="divide-y divide-white/10 border border-white/10">
                {filtered.map((n, idx) => (
                  <a
                    key={n.id}
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[60px_1fr_160px] gap-6 items-center bg-black hover:bg-white/5 transition-colors"
                  >
                    <div className="px-6 py-4 text-white/70">{idx + 1}</div>
                    <div className="px-6 py-4 text-white">{n.title}</div>
                    <div className="px-6 py-4 flex justify-end">
                      <span className={`inline-flex items-center px-3 py-1 text-xs border ${tagColor(n.category)}`}>
                        {n.category}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
