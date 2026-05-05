const { Client } = require('@notionhq/client');
const fs = require('fs');

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const TAG_GROUPS_DB = '357ca93d844180dfb126ca16ed4eaea9';
const TAGS_DB = '357ca93d8441809fbf53f3b6e3c86e0c';

async function main() {
  console.log('Reading Tag Groups from Notion...');
  const groupsRes = await notion.databases.query({ database_id: TAG_GROUPS_DB });

  const groupMap = {};
  const groups = groupsRes.results.map(page => {
    const name = page.properties['Name'].title[0]?.plain_text || '';
    const id = name.toLowerCase().replace(/\s+/g, '-');
    const color = page.properties['Color']?.rich_text[0]?.plain_text || '#666';
    const bg = page.properties['Background']?.rich_text[0]?.plain_text || '#f5f5f5';
    const border = page.properties['Border']?.rich_text[0]?.plain_text || '#ccc';
    const number = page.properties['Number']?.number || 99;
    groupMap[page.id] = id;
    return { id, label: name, number, color, bg, border };
  });
  groups.sort((a, b) => a.number - b.number);
  console.log('Found ' + groups.length + ' groups');

  console.log('Reading Tags from Notion...');
  const tagsRes = await notion.databases.query({ database_id: TAGS_DB });

  const tags = tagsRes.results.map(page => {
    const name = page.properties['Name'].title[0]?.plain_text || '';
    const tagId = page.properties['ID']?.number || 0;
    const visible = page.properties['Visible']?.checkbox || false;
    const groupRelation = page.properties['Tag Groups']?.relation[0];
    const groupId = groupRelation ? groupMap[groupRelation.id] : 'other';
    return { id: tagId, label: name, group: groupId, visible };
  });
  tags.sort((a, b) => a.id - b.id);
  console.log('Found ' + tags.length + ' tags');

  const output = { groups, tags };
  fs.writeFileSync('tags.json', JSON.stringify(output, null, 2));
  console.log('tags.json generated successfully!');
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
