// Hacker Codex. Every hacker, show and tool here is fictional, made up for this game.
// Any resemblance to real people is coincidental. The only real handle is the player's own.
// Groups: 'radio-host' / 'radio-guest' (Lantern Radio, a made-up show), 'legend', 'educator'.

export const PLAYER = {
  handle: 'onceuponahacker', name: '', group: 'you',
  contribution: 'A beginner at the very start of the journey, learning one bug at a time. Every name in this codex started right here.',
};

export const HACKERS = [
  // Lantern Radio (a calm, made-up show about bug hunting): hosts
  { handle: 'lanternlark', name: 'Mira Solvang', group: 'radio-host', contribution: 'Hosts Lantern Radio, a slow, kind weekly show about hunting habits and writing good reports.' },
  { handle: 'quietpacket', name: 'Theo Brannigan', group: 'radio-host', contribution: 'Co-hosts Lantern Radio and reads the listener mailbag full of first-bug stories.' },
  { handle: 'owl_in_the_stack', name: 'Juniper Okafor', group: 'radio-host', contribution: 'Co-host who shares the week\'s best beginner write-ups and why each one works.' },

  // Lantern Radio guests
  { handle: 'frostbyte_fox', name: 'Elin Varga', group: 'radio-guest', contribution: 'Talked about calm recon: mapping a target slowly, over coffee, before testing anything.' },
  { handle: 'nullpointer_nana', name: 'Rosa Delacroix', group: 'radio-guest', contribution: 'Shared how six months of patient note-taking led to her first critical.' },
  { handle: 'cobaltquill', name: 'Arjun Mehra', group: 'radio-guest', contribution: 'Explained how clear reproduction steps get reports triaged faster and kinder.' },
  { handle: 'mossyshell', name: 'Kaito Arakawa', group: 'radio-guest', contribution: 'Walked through his free API-testing checklist, one gentle step at a time.' },
  { handle: 'paperlantern', name: 'Ines Moreau', group: 'radio-guest', contribution: 'Talked about burnout and why rest belongs in every methodology.' },
  { handle: 'tinyterminal', name: 'Sam Okonkwo', group: 'radio-guest', contribution: 'Showed how small, odd behaviours can be chained into big findings.' },
  { handle: 'driftwood_dev', name: 'Lena Holm', group: 'radio-guest', contribution: 'Shared her move from developer to hunter, and how reading code reveals bugs.' },
  { handle: 'polarparser', name: 'Mateo Ruiz', group: 'radio-guest', contribution: 'Collects parser quirks and documents each one so others can learn from it.' },
  { handle: 'velvetvector', name: 'Aisha Rahman', group: 'radio-guest', contribution: 'Gave a friendly introduction to testing mobile apps for beginners.' },
  { handle: 'snowglobe_sec', name: 'Pieter de Wit', group: 'radio-guest', contribution: 'Covered disclosure etiquette and staying patient while a report is triaged.' },
  { handle: 'emberbyte', name: 'Noor Haddad', group: 'radio-guest', contribution: 'Talked about collaborating with other hunters and sharing credit fairly.' },
  { handle: 'willowwire', name: 'Hana Kowalski', group: 'radio-guest', contribution: 'Explained hardware hacking on a tiny budget with second-hand gadgets.' },
  { handle: 'glasswing_gil', name: 'Gil Aranda', group: 'radio-guest', contribution: 'Described how he keeps a "weird things" notebook that turns into bugs months later.' },

  // Legends of Wanderland
  { handle: 'northstar_nyx', name: 'Freya Lindqvist', group: 'legend', contribution: 'Wrote the Aurora Recon method, the map-first approach most Wanderland hunters start with.' },
  { handle: 'gl1tchgarden', name: 'Oscar Bellweather', group: 'legend', contribution: 'Grew the Seedbed wordlists that half of Wanderland uses for discovery.' },
  { handle: 'bramblebyte', name: 'Tove Eriksen', group: 'legend', contribution: 'Famous for patient, beautifully written reports that triagers frame on their walls.' },
  { handle: 'catalyst_cat', name: 'Ravi Anand', group: 'legend', contribution: 'Pioneered chaining humble Low bugs into Critical findings.' },
  { handle: 'saltwater_sudo', name: 'Maren Kjeldsen', group: 'legend', contribution: 'Found the legendary Frozen Lake bug and published the whole write-up for free.' },
  { handle: 'copperkettle', name: 'Felix Amari', group: 'legend', contribution: 'Runs the Copper Kettle meetups, where veterans mentor newcomers over tea.' },
  { handle: 'midnight_mallow', name: 'Clara Voss', group: 'legend', contribution: 'Celebrated across Wanderland for collaboration at live hacking gatherings.' },
  { handle: 'hexhollow', name: 'Diego Navarro', group: 'legend', contribution: 'Created the Hollow fuzzing method: try the boring inputs first, carefully.' },
  { handle: 'starlit_sigma', name: 'Yuki Tanabe', group: 'legend', contribution: 'Researched browser quirks and keeps an open cheat sheet for everyone.' },
  { handle: 'pinecone_payload', name: 'Ola Nwosu', group: 'legend', contribution: 'Keeps a public diary of every duplicate, turning each one into a lesson.' },
  { handle: 'quartz_quokka', name: 'Benji Harlow', group: 'legend', contribution: 'Built the cosy dashboards the Triage Lodges use to thank hunters faster.' },
  { handle: 'harborlight', name: 'Selma Aydin', group: 'legend', contribution: 'Organises the Harbor Light CTF, where nobody is too new to play.' },
  { handle: 'aurora_ash', name: 'Ash Moreland', group: 'legend', contribution: 'First hunter to visit every subnet, and left a lantern at every Triage Lodge.' },

  // Educators & toolsmiths
  { handle: 'chalkboard_crab', name: 'Priya Natarajan', group: 'educator', contribution: 'Teaches free beginner classes on how the web talks: requests, responses and cookies.' },
  { handle: 'tidecrawl', name: 'Jonah Pike', group: 'educator', contribution: 'Maintains Tidecrawl, an open-source subdomain finder with very friendly docs.' },
  { handle: 'gentle_grep', name: 'Ada Whitlock', group: 'educator', contribution: 'Writes cosy tutorials on reading JavaScript files for hidden endpoints.' },
  { handle: 'mapleproxy', name: 'Louis Tremblay', group: 'educator', contribution: 'Built Maple, a gentle intercepting proxy designed for learners.' },
  { handle: 'snowshoe_scripts', name: 'Ingrid Saether', group: 'educator', contribution: 'Shares tiny automation scripts with long, kind comments.' },
  { handle: 'lighthouse_lessons', name: 'Kofi Mensah', group: 'educator', contribution: 'Runs free practice labs with hints that nudge rather than tell.' },
  { handle: 'kind_triager', name: 'Beatrix Moll', group: 'educator', contribution: 'Publishes guides on writing the kind of reports triagers love to read.' },
  { handle: 'bluebell_bytes', name: 'Sofia Lund', group: 'educator', contribution: 'Hosts a Sunday study group where beginners solve one lab together.' },
];
