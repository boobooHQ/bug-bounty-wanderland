// Hacker Codex: a thank-you to real hackers whose public work taught the bug bounty community.
// Names, public handles and publicly known contributions only: no photos, no links.
// This is an unofficial fan tribute. Nobody listed here is affiliated with or has endorsed this game.
// Researched from public sources (podcast episode pages, publishers, project pages, official bios, news coverage).
// Groups: 'ct-host' / 'ct-guest' = Critical Thinking - Bug Bounty Podcast, 'legend', 'educator'.

export const PLAYER = {
  handle: 'onceuponahacker', name: '', group: 'you',
  contribution: 'A beginner at the very start of the journey, learning one bug at a time. Every name in this codex started right here.',
};

export const HACKERS = [
  // Critical Thinking - Bug Bounty Podcast: hosts
  { handle: 'Rhynorater', name: 'Justin Gardner', group: 'ct-host', contribution: 'Started the Critical Thinking - Bug Bounty Podcast and hunts full time, with two Most Valuable Hacker awards from live hacking events.' },
  { handle: 'rez0', name: 'Joseph Thacker', group: 'ct-host', contribution: 'Co-hosts Critical Thinking and focuses on AI security and AI red teaming alongside full-time bug bounty hunting.' },
  { handle: 'gr3pme', name: 'Brandyn Murtagh', group: 'ct-host', contribution: 'Wrote the show\'s HackerNotes, then joined Critical Thinking as a co-host and shared his note-taking methodology.' },
  { handle: 'teknogeek', name: 'Joel Margolis', group: 'ct-host', contribution: 'Co-hosted the early episodes of Critical Thinking alongside Justin, and has returned since as a guest.' },

  // Critical Thinking: guests
  { handle: '0xLupin', name: 'Roni Carta', group: 'ct-guest', contribution: 'Researches software supply chain security and dependency confusion, and is a recurring Critical Thinking guest.' },
  { handle: 'samm0uda', name: 'Youssef Sammouda', group: 'ct-guest', contribution: 'Client-side researcher who shared his postMessage and account-takeover research on Critical Thinking.' },
  { handle: 'inhibitor181', name: 'Cosmin Iordache', group: 'ct-guest', contribution: 'In 2020 became the first hacker to pass $2 million in bounty awards on HackerOne, and later guested on Critical Thinking.' },
  { handle: 'Sytten', name: 'Emile Fugulin', group: 'ct-guest', contribution: 'Co-founded Caido, the web security HTTP proxy he introduced to listeners on Critical Thinking.' },
  { handle: 'wunderwuzzi23', name: 'Johann Rehberger', group: 'ct-guest', contribution: 'Researches AI application security, including prompt injection and data exfiltration, and discussed it on Critical Thinking.' },
  { handle: 'brutecat', name: 'Arvin Shivram', group: 'ct-guest', contribution: 'Google VRP researcher whose write-ups on Google Cloud, YouTube and Google account bugs were featured on Critical Thinking.' },
  { handle: 'JorianWoltjer', name: 'Jorian Woltjer', group: 'ct-guest', contribution: 'Shares Practical CTF, a public book of hacking notes, and discussed his XS-Leaks research on Critical Thinking.' },
  { handle: 'ajxchapman', name: 'Alex Chapman', group: 'ct-guest', contribution: 'Moved from red teaming into bug bounty with a focus on a few high-impact bugs, as he shared on Critical Thinking.' },
  { handle: 'Kevin_Mizu', name: 'Kevin Mizu', group: 'ct-guest', contribution: 'Researches DOMPurify and its misconfigurations, and shared his sanitizer bypass techniques on Critical Thinking.' },
  { handle: 'renniepak', name: 'René de Sain', group: 'ct-guest', contribution: 'Full-time bug bounty hunter who shared his path from professional percussion into hacking on Critical Thinking.' },

  // Bug bounty legends
  { handle: 'jhaddix', name: 'Jason Haddix', group: 'legend', contribution: 'Created The Bug Hunter\'s Methodology, the talk series a generation of hunters learned recon from, and founded Arcanum Information Security.' },
  { handle: 'fransrosen', name: 'Frans Rosén', group: 'legend', contribution: 'Co-founded Detectify and published research like the "Dirty Dancing" OAuth sign-in flows and postMessage studies.' },
  { handle: 'GodfatherOrwa', name: 'Orwa Atyat', group: 'legend', contribution: 'Known for finding critical bugs through creative fuzzing, and co-wrote Intigriti\'s guide to web fuzzing for hackers.' },
  { handle: 'nahamsec', name: 'Ben Sadeghipour', group: 'legend', contribution: 'Creates content to help newcomers start in recon, web hacking and bug bounty, and co-founded HackingHub.' },
  { handle: 'STÖK', name: 'Fredrik Alexandersson', group: 'legend', contribution: 'Hacker and creator who makes bug bounty videos and talks, sharing educational content to inspire new hackers.' },
  { handle: 'samwcyo', name: 'Sam Curry', group: 'legend', contribution: 'Publishes detailed write-ups of his security research, including connected-car work on Subaru and Kia systems.' },
  { handle: 'shubs', name: 'Shubham Shah', group: 'legend', contribution: 'Co-founded Assetnote, an attack surface management company, and publishes deep research on enterprise software.' },
  { handle: 'albinowax', name: 'James Kettle', group: 'legend', contribution: 'Director of Research at PortSwigger, known for HTTP desync research and Burp extensions like HTTP Request Smuggler.' },
  { handle: 'garethheyes', name: 'Gareth Heyes', group: 'legend', contribution: 'PortSwigger researcher who wrote the book JavaScript for hackers and builds Burp extensions such as Hackvertor.' },
  { handle: 'orange_8361', name: 'Orange Tsai', group: 'legend', contribution: 'Principal Security Researcher at DEVCORE whose research has earned Pwnie Awards and Pwn2Own championships.' },
  { handle: 'try_to_hack', name: 'Santiago Lopez', group: 'legend', contribution: 'A largely self-taught hacker who in 2019 became the first to pass $1 million in bounty awards on HackerOne.' },
  { handle: 'securinti', name: 'Inti De Ceukelaire', group: 'legend', contribution: 'Known for creative show-and-tell bug reports and the "Ticket Trick" helpdesk research; works with hackers at Intigriti.' },
  { handle: 'ArchAngelDDay', name: 'Douglas Day', group: 'legend', contribution: 'Holds a record nine Best Collaboration awards at HackerOne live hacking events and ran Elastic\'s bug bounty program.' },
  { handle: 'dawgyg', name: 'Tommy DeVoss', group: 'legend', contribution: 'Long-time hunter who shared his story and Yahoo bug hunting on Critical Thinking, and first got Justin into bug bounty.' },
  { handle: '0xacb', name: 'André Baptista', group: 'legend', contribution: 'Co-founded Ethiack, coaches Portugal\'s ECSC team, and was named MVH at HackerOne\'s H1-202 live hacking event.' },

  // Educators & toolsmiths
  { handle: 'InsiderPhD', name: 'Katie Paxton-Fear', group: 'educator', contribution: 'API hacker and educator whose YouTube channel shares educational bug bounty content with a sense of fun.' },
  { handle: 'tomnomnom', name: 'Tom Hudson', group: 'educator', contribution: 'Open-source tool maker and trainer behind waybackurls, assetfinder, httprobe, gf and gron.' },
  { handle: 'zseano', name: '', group: 'educator', contribution: 'Built BugBountyHunter.com with free hands-on labs and shared his methodology to help people learn to hunt.' },
  { handle: 'hakluke', name: 'Luke Stephens', group: 'educator', contribution: 'Author of hakrawler, hakrevdns and other open-source tools for fast web reconnaissance.' },
  { handle: 'yaworsk', name: 'Peter Yaworski', group: 'educator', contribution: 'Wrote Real-World Bug Hunting: A Field Guide to Web Hacking, a No Starch Press book for aspiring hunters.' },
  { handle: 'vickieli7', name: 'Vickie Li', group: 'educator', contribution: 'Wrote Bug Bounty Bootcamp, a guide to finding and reporting web vulnerabilities.' },
  { handle: 'LiveOverflow', name: '', group: 'educator', contribution: 'Shares free IT security videos on YouTube, making the content he wished he had found when he started.' },
  { handle: 'danielmiessler', name: 'Daniel Miessler', group: 'educator', contribution: 'Co-maintains SecLists, the security tester\'s collection of lists, and talked about AI and hacking on Critical Thinking.' },
];
