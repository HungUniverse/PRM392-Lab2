// Mechanical Markdown-to-HTML/PNG archive renderer. Does not capture or imitate chat UI.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { pathToFileURL } = require('node:url');

async function main() {
  const modulesPath = process.argv[2];
  const v1 = process.argv.includes('--v1');
  if (!modulesPath) throw new Error('Pass the directory containing playwright and marked.');
  const { chromium } = require(path.join(modulesPath, 'playwright'));
  const { marked } = await import(pathToFileURL(path.join(modulesPath, 'marked/lib/marked.esm.js')).href);
  const root = path.resolve(__dirname, '../../..');
  const imageRoot = path.join(root, 'assets/ai/2026-10-11');
  fs.mkdirSync(imageRoot, { recursive: true });
  const sha = data => crypto.createHash('sha256').update(data).digest('hex');
  const esc = text => text.replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
  const entries = v1 ? [
    ['08-v1-critique-prompt.md', '08-v1-critique-prompt', 'Yêu cầu phản biện V1', 'Người dùng → Codex · Nội dung từ tệp dán', true],
    ['08-v1-critique-response.md', '08-v1-critique-response', 'Phản biện V1 · 9 phát hiện', 'Codex → Người dùng · 9 ảnh V1; thiếu S06 V1; chưa kiểm thử', false],
  ] : [
    ['01-stitch-v0-prompt.md', '01-stitch-v0-prompt', 'Prompt tạo UI V0', 'Codex soạn · Sinh viên xác nhận dùng một lần trên Stitch', true],
    ['02-critique-user-prompt.md', '02-critique-user-prompt', 'Yêu cầu phản biện UX', 'Người dùng → Codex', false],
    ['03-critique-codex-response.md', '03-critique-codex-response', 'Phản biện UX · 12 phát hiện', 'Codex → Người dùng · Đánh giá ảnh tĩnh, chưa kiểm thử', false],
    ['04-next-steps-user-prompt.md', '04-next-steps-user-prompt', 'Câu hỏi sau phản biện', 'Người dùng → Codex', false],
    ['05-next-steps-codex-response.md', '05-next-steps-codex-response', 'Hướng dẫn sau phản biện', 'Codex → Người dùng · V1–V3 mới là hướng dẫn, chưa thực hiện', false],
  ];
  const css = `
    *{box-sizing:border-box}body{margin:0;background:#e8ebef;color:#243047;font:18px/1.5 Arial,sans-serif}
    .page{width:1080px;height:1520px;margin:32px auto;background:white;padding:34px 42px;display:flex;flex-direction:column;break-after:page}
    header{flex:none;border-bottom:2px solid #c93c13;padding-bottom:14px;margin-bottom:20px}
    .eyebrow{font-size:13px;font-weight:bold;letter-spacing:.8px;color:#c93c13}
    h1{font-size:28px;line-height:1.2;margin:8px 0}header p{font-size:15px;margin:5px 0}
    .disclosure{padding:9px 12px;background:#fff0e8;border-left:4px solid #c93c13;font-size:14px}
    main{flex:1;min-height:0;overflow:visible}footer{flex:none;border-top:1px solid #cbd2dc;padding-top:12px;margin-top:16px;font-size:12px;color:#526070;display:flex;justify-content:space-between}
    main h1{font-size:25px}h2{font-size:23px;line-height:1.3;margin:18px 0 10px}h3{font-size:20px;margin:16px 0 8px}
    p{margin:0 0 14px}ul,ol{margin:0 0 16px;padding-left:28px}li{margin:0 0 8px}li p{margin:0}
    strong{font-weight:700}a{color:#195b9e;overflow-wrap:anywhere}code{font:16px/1.5 Consolas,monospace;background:#f2f4f7;padding:1px 4px;overflow-wrap:anywhere}
    pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f4f6f8;padding:12px;font:16px/1.5 Consolas,monospace;margin:0 0 14px}pre code{padding:0;background:transparent}
    table{width:100%;border-collapse:collapse;margin:14px 0;font-size:16px}td,th{border:1px solid #cbd2dc;padding:8px;text-align:left;vertical-align:top}th{background:#fff0e8}
    .prompt-line{font:17px/1.4 Consolas,monospace;white-space:pre-wrap;overflow-wrap:anywhere;min-height:12px;margin:0;padding:0}
    .measure{position:absolute;left:-20000px;top:0;visibility:hidden}.cover{margin:32px auto;width:1080px;background:#fff;padding:40px}.cover h2{margin:16px 0}
    @media print{body{background:white}.page{margin:0}.cover{display:none}}
  `;
  const browser = await chromium.launch({headless:true, channel:'chrome'});
  try {
    const page = await browser.newPage({viewport:{width:1160,height:1600},deviceScaleFactor:1});
    // Render locally only. No external resources or remote page requests are needed.
    await page.route('**/*', route => route.abort());
    const records = [];
    const screenshotRecords = [];
    let allPages = '';
    for (const [file, slug, title, role, plain] of entries) {
      const source = fs.readFileSync(path.join(__dirname,file),'utf8');
      const body = plain ? source.trimEnd().split('\n').map(line=>`<div class="prompt-line">${esc(line)||'&#8203;'}</div>`).join('') : marked.parse(source);
      const header = `<header><div class="eyebrow">FAP ATTENDANCE · LAB 2 · SE193324 · LƯU NGÀY 11/10/2026</div><h1>${esc(title)}</h1><p>${esc(role)}</p><div class="disclosure">ẢNH CHỤP BẢN LƯU NỘI DUNG — KHÔNG PHẢI ẢNH CHAT GỐC. Không chứng minh đã gửi prompt hoặc đã kiểm thử giao diện.</div></header>`;
      const footer = `<footer><span>Nguồn: ${esc(file)}</span><span class="page-number"></span></footer>`;
      await page.setContent(`<!doctype html><html lang="vi"><head><meta charset="utf-8"><style>${css}</style></head><body><div id="source" hidden>${body}</div><div class="page measure">${header}<main></main>${footer}</div><div id="pages"></div></body></html>`);
      const stats = await page.evaluate(({header,footer})=>{
        const nodes = [...document.querySelector('#source').children];
        const originals = nodes.map(n=>n.textContent).join('');
        const container = document.querySelector('#pages');
        const measure = document.querySelector('.measure main');
        const available = measure.getBoundingClientRect().height;
        let article, main;
        const newPage=()=>{article=document.createElement('article');article.className='page';article.innerHTML=header+'<main></main>'+footer;container.append(article);main=article.querySelector('main');};
        const overflow=()=>main.scrollHeight>main.clientHeight+1;
        newPage();
        for(let index=0;index<nodes.length;index++){
          const node=nodes[index];
          // Keep headings with the next content block, unless the group itself is too tall.
          let item=node;
          if(/^H[1-6]$/.test(node.tagName)&&nodes[index+1]){
            const group=document.createElement('section');group.append(node,nodes[index+1]);
            measure.append(group.cloneNode(true));
            if(measure.scrollHeight<=available+1){item=group;index++;}
            else {group.removeChild(node);item=node;}
            measure.replaceChildren();
          }
          const wasEmpty=main.children.length===0;
          main.append(item);
          if(overflow()&&!wasEmpty){item.remove();newPage();main.append(item);}
          if(overflow())throw new Error('An indivisible block is larger than a page: '+item.tagName);
        }
        const articles=[...container.children];
        articles.forEach((p,i)=>p.querySelector('.page-number').textContent=`Trang ${i+1}/${articles.length}`);
        const copied=articles.map(p=>p.querySelector('main').textContent).join('');
        const clipping=articles.map(p=>({horizontal:p.querySelector('main').scrollWidth>p.querySelector('main').clientWidth+1,vertical:p.querySelector('main').scrollHeight>p.querySelector('main').clientHeight+1}));
        if(copied!==originals)throw new Error('Text integrity mismatch during pagination');
        if(clipping.some(p=>p.horizontal||p.vertical))throw new Error('Content clipping detected');
        return {count:articles.length,html:container.innerHTML,textPreserved:true,clipping};
      },{header,footer});
      const folder = path.join(imageRoot,slug);
      fs.mkdirSync(folder,{recursive:true});
      const imageLinks=[];
      for(let i=0;i<stats.count;i++){
        const name=`page-${String(i+1).padStart(2,'0')}.png`;
        const target=path.join(folder,name);
        await page.locator('#pages > .page').nth(i).screenshot({path:target,animations:'disabled'});
        const relative=path.relative(root,target).replace(/\\/g,'/');
        imageLinks.push(relative);
        screenshotRecords.push({file:relative,sha256:sha(fs.readFileSync(target)),width:1080,height:1520,source:file,page:i+1});
      }
      allPages+=stats.html;
      records.push({file,sha256:sha(Buffer.from(source,'utf8')),role,title,pages:stats.count,screenshots:imageLinks,textPreserved:stats.textPreserved});
      console.log(`${slug}: ${stats.count} pages; text preserved; no clipping`);
    }
    const status = v1 ? 'V1: đã nhận 9 ảnh, thiếu S06. Đã phản biện ảnh tĩnh; chưa sửa UI trong lượt đánh giá. Chưa xác minh hoàn tất vòng cải tiến; V2/V3 chưa có bằng chứng.' : 'V0: một prompt trên Stitch theo xác nhận của sinh viên. Phản biện: Codex đã đánh giá ảnh tĩnh. V1–V3: chưa thực hiện.';
    const cover=`<section class="cover"><h1>Bằng chứng AI · FAP Attendance Mobile${v1?' · Phản biện V1':''}</h1><p>SE193324 · Bản lưu nội dung ngày 11/10/2026 (Asia/Saigon).</p><p class="disclosure">Các trang dưới đây là bản trình bày lại từ Markdown đã lưu, không phải ảnh chụp giao diện chat ChatGPT hoặc Stitch. Không giả lập giao diện công cụ.</p><p>${status}</p><ul>${records.map(r=>`<li>${esc(r.title)} — ${r.pages} trang</li>`).join('')}</ul></section>`;
    fs.writeFileSync(path.join(__dirname,v1?'evidence-v1.html':'evidence.html'),`<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Bản lưu bằng chứng AI — SE193324${v1?' — V1':''}</title><style>${css}</style></head><body>${cover}${allPages}</body></html>`,'utf8');
    const fixtures=fs.readdirSync(path.join(root,'assets/stitch')).filter(n=>v1? /^v1-.*\.png$/.test(n):n.endsWith('.png')).map(file=>({file:'assets/stitch/'+file,sha256:sha(fs.readFileSync(path.join(root,'assets/stitch',file)))}));
    const manifest={schemaVersion:1,studentId:'SE193324',recordedDate:'2026-10-11',timezone:'Asia/Saigon',evidenceType:'rendered-content-archive-not-original-chat-screenshot',originalChatCaptured:false,stitchPromptCountConfirmedByStudent:1,critiqueTool:'Codex',critiqueType:'static-image-review',iterationsCompleted:0,disclosure:'PNG screenshots of a locally rendered content archive; not original ChatGPT/Stitch conversation screenshots. Hashes verify these saved files only, not their original time or delivery.',sources:records,screenshots:screenshotRecords,stitchV0:fixtures};
    if(v1){
      delete manifest.stitchV0;
      delete manifest.stitchPromptCountConfirmedByStudent;
      delete manifest.iterationsCompleted;
      manifest.reviewId='CRITIQUE-CODEX-V1-01';
      manifest.stitchV1=fixtures;
      manifest.missingScreens=['S06'];
      manifest.stitchV1PromptProvided=false;
      manifest.stitchV1TextResponseProvided=false;
      manifest.improvementIterationCompletionVerified=false;
      manifest.studentDecisionsFinalized=false;
      manifest.reviewDoesNotCountAsCompletedImprovement=true;
      manifest.inputDocuments=fs.readdirSync(path.join(__dirname,'v1-inputs')).filter(n=>n.endsWith('.md')).map(file=>({file:'ai/evidence/2026-10-11/v1-inputs/'+file,sha256:sha(fs.readFileSync(path.join(__dirname,'v1-inputs',file)))}));
      const originalPrompt='C:/Users/lenovo/.codex/attachments/27ef2e40-009b-4110-9dc7-350237d8e946/Pasted text.txt';
      manifest.originalPrompt={path:originalPrompt,sha256:sha(fs.readFileSync(originalPrompt)),comparison:'equal content after CRLF/LF and trailing-newline normalization'};
      const normalized=s=>s.replace(/\r\n/g,'\n').trimEnd();
      if(normalized(fs.readFileSync(originalPrompt,'utf8'))!==normalized(fs.readFileSync(path.join(__dirname,'08-v1-critique-prompt.md'),'utf8')))throw new Error('Saved prompt differs from pasted text');
    }
    fs.writeFileSync(path.join(__dirname,v1?'manifest-v1.json':'manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
    console.log(`Saved ${screenshotRecords.length} PNGs and an offline HTML archive.`);
  } finally {await browser.close();}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
