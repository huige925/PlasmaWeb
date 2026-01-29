import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!apiKey || !databaseId) {
    res.status(500).json({ error: 'Missing NOTION_API_KEY or NOTION_DATABASE_ID' });
    return;
  }
  try {
    const notion = new Client({ auth: apiKey });
    const db = await notion.databases.retrieve({ database_id: databaseId });
    const ds = Array.isArray(db.data_sources) ? db.data_sources[0]?.id : null;
    if (!ds) {
      res.status(500).json({ error: 'No data_source found for database' });
      return;
    }
    const response = await notion.dataSources.query({
      data_source_id: ds,
      filter: {
        property: 'status',
        select: { equals: 'Published' },
      },
      sorts: [
        { property: 'Time', direction: 'descending' }
      ],
      page_size: 50,
    });
    const catMap = {
      Institutions: '机构',
      Developers: '开发者',
      Consumers: '消费者',
      Ecosystem: '生态系统',
      DeFi: '去中心化金融'
    };
    const newsList = (response.results || []).map((page) => {
      const props = page.properties || {};
      const title = (props.Name?.title?.[0]?.plain_text) || '';
      const rawCat = props.Sort?.select?.name || '';
      const category = catMap[rawCat] || rawCat || '';
      const link = props.URL?.url || '';
      const publishTime = props.Time?.date?.start || '';
      const summary = (props.Notes?.rich_text || []).map(t => t.plain_text).join('');
      return { id: page.id, title, category, link, publishTime, summary };
    });
    const categories = Array.from(new Set(newsList.map(n => n.category).filter(Boolean)));
    res.status(200).json({ newsList, categories });
  } catch (err) {
    res.status(500).json({ error: err?.message || String(err) });
  }
}
