'use strict';
/* ============================================
   CHEF'S PRIDE — OPTIMIZED JS v2
   No custom cursor | Mega menu | Performance
   ============================================ */

// ── VERIFIED IMAGE URLS (all tested Unsplash) ──────────────────────────────

const IMG = {
  // Hero & story
  hero:       'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80&fit=crop&auto=format',
  kitchen:    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&fit=crop',
  dining:     'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&fit=crop',
  // Shawarma
  sw_chicken: 'https://images.unsplash.com/photo-1561050501-a570d18b84e8?w=600&q=80&fit=crop',
  sw_plate:   'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80&fit=crop',
  sw_beef:    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80&fit=crop',
  sw_beefp:   'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop',
  sw_roasted: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=600&q=80&fit=crop',
  sw_half:    'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600&q=80&fit=crop',
  sw_falafel: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80&fit=crop',
  // BBQ
  bbq_sekela: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&fit=crop',
  bbq_white:  'https://images.unsplash.com/photo-1604909052743-cd1de4de5562?w=600&q=80&fit=crop',
  bbq_skewer: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop',
  bbq_chang:  'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80&fit=crop',
  bbq_boneless:'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?w=600&q=80&fit=crop',
  bbq_mutton: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&fit=crop&sat=-20',
  bbq_shash:  'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80&fit=crop',
  bbq_fish:   'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80&fit=crop',
  bbq_grill:  'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80&fit=crop',
  bbq_wings:  'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80&fit=crop',
  bbq_gib:    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&fit=crop',
  bbq_prawns: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80&fit=crop',
  bbq_kfish:  'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600&q=80&fit=crop',
  bbq_banana: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80&fit=crop',
  bbq_morocco:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop',
  // Italian
  it_carb:    'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80&fit=crop',
  it_pizza:   'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80&fit=crop',
  it_seafood: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80&fit=crop',
  it_chkparm: 'https://images.unsplash.com/photo-1615348968624-1e61c38c1c91?w=600&q=80&fit=crop',
  it_tira:    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&fit=crop',
  // Chinese/Indian
  ci_butter:  'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80&fit=crop',
  ci_biryani: 'https://images.unsplash.com/photo-1563379091339-03246963d668?w=600&q=80&fit=crop',
  ci_kungpao: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80&fit=crop',
  ci_frice:   'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80&fit=crop',
  ci_paneer:  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80&fit=crop',
  ci_chow:    'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80&fit=crop',
  // Seafood
  sf_lobster: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80&fit=crop',
  sf_coconut: 'https://images.unsplash.com/photo-1626509653291-18d9a934b9db?w=600&q=80&fit=crop',
  sf_calam:   'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80&fit=crop',
  sf_bass:    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80&fit=crop',
  sf_platter: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80&fit=crop',
  // Salads
  sal_caesar: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?w=600&q=80&fit=crop',
  sal_prawn:  'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80&fit=crop',
  sal_greek:  'https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=600&q=80&fit=crop',
  // Starters
  st_tomato:  'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop',
  st_chicken: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80&fit=crop',
  st_samosa:  'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80&fit=crop',
  st_brusch:  'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80&fit=crop',
  // Snacks
  sn_fries:   'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&fit=crop',
  sn_onion:   'https://images.unsplash.com/photo-1598215747591-12c9d5b2a1fb?w=600&q=80&fit=crop',
  sn_popcorn: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80&fit=crop',
  sn_mozz:    'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=600&q=80&fit=crop',
};

// ── MENU DATA ──────────────────────────────────────────────────────────────

const MENU = {
  shawarma: {
    label: 'Shawarma Joint', icon: '🌯',
    items: [
      { id:'sw1', name:'Shawarma Chicken', price:7000, desc:'Tender marinated chicken in soft flatbread with garlic sauce, pickles & veggies', img:IMG.sw_chicken, badge:'Fan Fave', heat:2 },
      { id:'sw2', name:'Shawarma Chicken (Plate)', price:15000, desc:'Full plate with seasoned rice, fresh salad, hummus & garlic sauce', img:IMG.sw_plate, badge:null, heat:2 },
      { id:'sw3', name:'Shawarma Beef', price:7000, desc:'Slow-roasted beef with aromatic spices, tahini, tomato & crisp lettuce in warm pita', img:IMG.sw_beef, badge:'Bestseller', heat:3 },
      { id:'sw4', name:'Shawarma Beef (Plate)', price:15000, desc:'Generous beef shawarma platter with rice pilaf, grilled veggies & two sauces', img:IMG.sw_beefp, badge:null, heat:3 },
      { id:'sw5', name:'Roasted Chicken Full', price:20000, desc:'Whole chicken roasted to golden perfection with 7-spice marinade, pita & dips', img:IMG.sw_roasted, badge:'Premium', heat:2 },
      { id:'sw6', name:'Roasted Chicken Half', price:10000, desc:'Half roasted chicken, smoky & juicy with East African herb blend', img:IMG.sw_half, badge:null, heat:2 },
      { id:'sw7', name:'Falafel (6 Pcs)', price:5000, desc:'Crispy golden falafel, served with tahini dip & pickled veggies', img:IMG.sw_falafel, badge:'Vegan', heat:1 },
    ]
  },
  bbq: {
    label: "Chef's Pride BBQ", icon: '🔥',
    items: [
      { id:'bbq1', name:'BBQ Sekela Indian Style (Half)', price:9000, desc:'Chicken sekela marinated in vibrant Indian spices, flame-grilled to smoky perfection', img:IMG.bbq_sekela, badge:'Spicy', heat:3 },
      { id:'bbq2', name:'BBQ White Chicken (Half)', price:9000, desc:'Yogurt-marinated chicken with mild spices, grilled until charred & irresistible', img:IMG.bbq_white, badge:null, heat:1 },
      { id:'bbq3', name:'BBQ Chicken Skewer', price:10000, desc:'Juicy chicken pieces with peppers & onions grilled over open fire', img:IMG.bbq_skewer, badge:'Grillmaster', heat:2 },
      { id:'bbq4', name:'BBQ Chang (Whole)', price:15000, desc:'Whole chicken flattened & slow-grilled with our secret 12-spice BBQ rub', img:IMG.bbq_chang, badge:'Whole Bird', heat:2 },
      { id:'bbq5', name:'BBQ Boneless Chicken Skewer', price:11000, desc:'Tender boneless chicken chunks, marinated overnight & flame-kissed', img:IMG.bbq_boneless, badge:null, heat:2 },
      { id:'bbq6', name:'BBQ Mutton Skewer', price:8000, desc:'Succulent mutton pieces marinated in robust spices, chargrilled on skewers', img:IMG.bbq_mutton, badge:null, heat:3 },
      { id:'bbq7', name:'BBQ Beef Shashliky', price:6000, desc:'Russian-inspired beef shashlik, marinated in onion & herbs, grilled medium-rare', img:IMG.bbq_shash, badge:"Chef's Pick", heat:2 },
      { id:'bbq8', name:'BBQ Fish Fillet', price:15000, desc:'Fresh ocean fish seasoned with lemon, herbs & spices, grilled to flaky perfection', img:IMG.bbq_fish, badge:null, heat:1 },
      { id:'bbq9', name:'Grill Chicken (Whole)', price:20000, desc:'Signature whole grilled chicken: crispy skin, juicy meat, served with 3 sauces', img:IMG.bbq_grill, badge:'Signature', heat:2 },
      { id:'bbq10', name:'BBQ Chicken Wings', price:7000, desc:'Sticky, smoky wings glazed with our house BBQ sauce — finger-lickin good', img:IMG.bbq_wings, badge:'Party Hit', heat:3 },
      { id:'bbq11', name:'Chicken Giblets Skewer (Firigisi)', price:8000, desc:'Traditional Tanzanian firigisi — chicken giblets with local spices & chili', img:IMG.bbq_gib, badge:'Local Fave', heat:3 },
      { id:'bbq12', name:'BBQ Prawns Skewer', price:25000, desc:'Jumbo prawns in garlic butter & chili, grilled & served with lemon aioli', img:IMG.bbq_prawns, badge:'Premium', heat:2 },
      { id:'bbq13', name:'BBQ King Fish', price:15000, desc:'Whole king fish with East African spices, charcoal-grilled to perfection', img:IMG.bbq_kfish, badge:null, heat:2 },
      { id:'bbq14', name:'Fried Banana (Mzuzu)', price:1000, desc:'Sweet Mzuzu bananas, lightly fried & caramelized — the perfect side', img:IMG.bbq_banana, badge:'Vegan', heat:0 },
      { id:'bbq15', name:'Morocco Half', price:10000, desc:'Moroccan-spiced half chicken with ras el hanout, couscous & harissa', img:IMG.bbq_morocco, badge:'Exotic', heat:2 },
    ]
  },
  italian: {
    label: 'Italian Cuisine', icon: '🍝',
    items: [
      { id:'it1', name:'Spaghetti Carbonara', price:18000, desc:'Al dente pasta with creamy egg sauce, crispy pancetta, Pecorino Romano & black pepper', img:IMG.it_carb, badge:'Classic', heat:1 },
      { id:'it2', name:'Margherita Pizza', price:16000, desc:'Thin-crust pizza with San Marzano tomato, fresh mozzarella & basil', img:IMG.it_pizza, badge:'Bestseller', heat:0 },
      { id:'it3', name:'Seafood Linguine', price:28000, desc:'Linguine with prawns, calamari, clams & mussels in white wine garlic sauce', img:IMG.it_seafood, badge:"Chef's Pick", heat:1 },
      { id:'it4', name:'Chicken Parmigiana', price:22000, desc:'Breaded chicken, marinara sauce, melted mozzarella & garlic bread', img:IMG.it_chkparm, badge:null, heat:1 },
      { id:'it5', name:'Tiramisu', price:8000, desc:'Espresso-soaked ladyfingers, mascarpone cream & cocoa dusting', img:IMG.it_tira, badge:'Dessert', heat:0 },
    ]
  },
  chinese_indian: {
    label: 'Chinese & Indian', icon: '🍛',
    items: [
      { id:'ci1', name:'Butter Chicken', price:18000, desc:'Tender chicken in rich creamy tomato-butter sauce — north India classic', img:IMG.ci_butter, badge:'Bestseller', heat:2 },
      { id:'ci2', name:'Biryani (Chicken)', price:16000, desc:'Fragrant basmati layered with spiced chicken, caramelized onions & saffron', img:IMG.ci_biryani, badge:'Signature', heat:2 },
      { id:'ci3', name:'Kung Pao Chicken', price:16000, desc:'Stir-fried chicken with peanuts, chili peppers & vegetables in savory-sweet sauce', img:IMG.ci_kungpao, badge:'Spicy', heat:3 },
      { id:'ci4', name:'Fried Rice (Prawn)', price:14000, desc:'Wok-tossed jasmine rice with tiger prawns, egg & spring onions', img:IMG.ci_frice, badge:null, heat:1 },
      { id:'ci5', name:'Paneer Tikka Masala', price:16000, desc:'Charred cottage cheese in aromatic tomato-spice gravy, served with naan', img:IMG.ci_paneer, badge:'Vegetarian', heat:2 },
      { id:'ci6', name:'Chow Mein (Beef)', price:15000, desc:'Stir-fried egg noodles with tender beef strips, bok choy & oyster sauce', img:IMG.ci_chow, badge:null, heat:2 },
    ]
  },
  seafood: {
    label: 'Sea Foods', icon: '🦞',
    items: [
      { id:'sf1', name:'Grilled Lobster Thermidor', price:65000, desc:'Half lobster with cognac cream sauce, Gruyère & fresh herbs, grilled golden', img:IMG.sf_lobster, badge:'Luxury', heat:1 },
      { id:'sf2', name:'Coconut Prawn Curry', price:24000, desc:'Jumbo prawns in rich East African coconut curry with lemongrass & kaffir lime', img:IMG.sf_coconut, badge:'Local Twist', heat:2 },
      { id:'sf3', name:'Calamari Fritti', price:18000, desc:'Crispy battered calamari rings with marinara & lemon aioli', img:IMG.sf_calam, badge:null, heat:1 },
      { id:'sf4', name:'Grilled Sea Bass', price:32000, desc:'Whole sea bass with garlic, lemon & herbs, grilled over charcoal', img:IMG.sf_bass, badge:'Fresh Daily', heat:1 },
      { id:'sf5', name:'Seafood Platter', price:75000, desc:'Epic sharing platter: lobster, tiger prawns, king crab, oysters & grilled fish', img:IMG.sf_platter, badge:'For Two', heat:1 },
    ]
  },
  salad: {
    label: 'Salads', icon: '🥗',
    items: [
      { id:'sal1', name:'Caesar Salad', price:9000, desc:'Crisp romaine, house Caesar dressing, shaved Parmesan & croutons', img:IMG.sal_caesar, badge:'Classic', heat:0 },
      { id:'sal2', name:'Tropical Prawn Salad', price:14000, desc:'Grilled prawns on mixed greens, mango, avocado & passionfruit dressing', img:IMG.sal_prawn, badge:'Signature', heat:0 },
      { id:'sal3', name:'Greek Salad', price:10000, desc:'Cucumber, tomato, red onion, Kalamata olives & feta with oregano vinaigrette', img:IMG.sal_greek, badge:'Vegan', heat:0 },
    ]
  },
  starters: {
    label: 'Starters & Soups', icon: '🍲',
    items: [
      { id:'st1', name:'Soup ya Nyanya (Tomato)', price:7000, desc:'Velvety Tanzanian spiced tomato soup with coconut cream & coriander', img:IMG.st_tomato, badge:'Local', heat:1 },
      { id:'st2', name:'Chicken Noodle Soup', price:9000, desc:'Slow-simmered chicken broth with tender noodles, vegetables & herbs', img:IMG.st_chicken, badge:'Comfort', heat:0 },
      { id:'st3', name:'Samosa Plate (4 Pcs)', price:6000, desc:'Crispy beef & vegetable samosas with tamarind chutney & mint dip', img:IMG.st_samosa, badge:'Fan Fave', heat:2 },
      { id:'st4', name:'Bruschetta Trio', price:11000, desc:'Three bruschetta: tomato-basil, mushroom-truffle & smoked salmon cream cheese', img:IMG.st_brusch, badge:null, heat:0 },
    ]
  },
  snacks: {
    label: 'Snacks', icon: '🍟',
    items: [
      { id:'sn1', name:'Loaded Fries', price:9000, desc:'Crispy fries loaded with melted cheese, jalapeños, sour cream & chives', img:IMG.sn_fries, badge:'Loaded', heat:2 },
      { id:'sn2', name:'Onion Rings', price:6000, desc:'Beer-battered onion rings, golden crispy with smoky paprika ranch dip', img:IMG.sn_onion, badge:null, heat:0 },
      { id:'sn3', name:'Chicken Popcorn', price:8000, desc:'Bite-sized crispy chicken pieces with house seasoning & hot dip', img:IMG.sn_popcorn, badge:'Crispy', heat:2 },
      { id:'sn4', name:'Mozzarella Sticks', price:10000, desc:'Stretchy mozzarella in crispy breadcrumbs with marinara dipping sauce', img:IMG.sn_mozz, badge:null, heat:0 },
    ]
  }
};

const FEATURED = [
  { name:'BBQ Prawns Skewer',    price:25000, img:IMG.bbq_prawns },
  { name:'Butter Chicken',       price:18000, img:IMG.ci_butter  },
  { name:'Grill Chicken (Whole)',price:20000, img:IMG.bbq_grill  },
  { name:'Seafood Platter',      price:75000, img:IMG.sf_platter },
  { name:'Margherita Pizza',     price:16000, img:IMG.it_pizza   },
  { name:'Lobster Thermidor',    price:65000, img:IMG.sf_lobster },
  { name:'Chicken Biryani',      price:16000, img:IMG.ci_biryani },
  { name:'BBQ Chicken Wings',    price:7000,  img:IMG.bbq_wings  },
];

const BENTO = [
  { img:IMG.bbq_skewer,  lbl:'Signature BBQ',    name:'Flame-Kissed Perfection', itemId:'bbq3'  },
  { img:IMG.ci_butter,   lbl:'Indian Cuisine',   name:'Butter Chicken',          itemId:'ci1'   },
  { img:IMG.it_pizza,    lbl:'Italian',          name:'Margherita Pizza',        itemId:'it2'   },
  { img:IMG.sf_lobster,  lbl:'Seafood',          name:'Lobster Thermidor',       itemId:'sf1'   },
  { img:IMG.bbq_wings,   lbl:'BBQ',              name:'Chicken Wings',           itemId:'bbq10' },
  { img:IMG.sal_prawn,   lbl:'Salads',           name:'Tropical Prawn Salad',    itemId:'sal2'  },
];

const REVIEWS = [
  { name:'Amina Hassan',   loc:'Kariakoo, Dar es Salaam', stars:5, text:'The Shawarma Beef is absolutely divine. I drive 30 minutes just for this. Best in Dar hands down!' },
  { name:'James Mwangi',   loc:'Masaki, Dar es Salaam',   stars:5, text:'Ordered the BBQ Prawns and the Seafood Platter for my team. Everyone was blown away. Will be back!' },
  { name:'Fatima Al-Said', loc:'Upanga, Dar es Salaam',   stars:5, text:'The Butter Chicken rivals any restaurant I\'ve visited in Mumbai. Outstanding quality.' },
  { name:'David Ochieng',  loc:'Mikocheni, Dar es Salaam',stars:5, text:'Firigisi is everything I needed in my life. The WhatsApp ordering is super convenient too.' },
  { name:'Sarah Kimani',   loc:'Oyster Bay, Dar es Salaam',stars:5, text:'Tiramisu for dessert after the Seafood Linguine was perfection. Date night sorted always.' },
  { name:'Mohammed Ally',  loc:'Kijitonyama, Dar es Salaam',stars:5, text:'Weekly BBQ Chicken Wings order. Consistent, crispy, smoky. Cannot stop ordering!' },
];

// ── WHATSAPP NUMBER ──────────────────────────────────────────────────────
const WA_NUMBER = '255698741459'; // ← Replace with real number

// ── STATE ──────────────────────────────────────────────────────────────────
const cart = [];
let activeCategory = 'shawarma';

// ── UTILS ──────────────────────────────────────────────────────────────────
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = n => `TZS ${n.toLocaleString()}/-`;
const findItem = id => { for(const c of Object.values(MENU)) { const f = c.items.find(i=>i.id===id); if(f) return f; } return null; };

// ── NAVBAR ────────────────────────────────────────────────────────────────
function initNavbar() {
  const nav = $('.navbar');
  const ham = $('.hamburger');
  const mobileNav = $('.mobile-nav');

  // Scroll behavior
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Hamburger
  ham?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    ham.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      ham.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── MEGA MENU BUILDER ─────────────────────────────────────────────────────

function buildMegaMenus() {
  // 1. FEATURED mega
  buildFeaturedMega();
  // 2. MENU mega (category grid)
  buildMenuMega();
  // 3. CUISINES mega (food previews)
  buildCuisinesMega();
  // 4. ABOUT & CONTACT are simple → handled in HTML
}

function buildFeaturedMega() {
  const el = $('#megaFeatured');
  if (!el) return;
  const topItems = [
    findItem('bbq3'), findItem('ci1'), findItem('sf1'), findItem('it2'),
    findItem('bbq12'), findItem('ci2'), findItem('bbq9'), findItem('sf2')
  ].filter(Boolean);
  let html = `<div class="mega-head"><span class="mega-head-title">✨ Today's Highlights</span><a href="#featured" class="mega-see-all">View all →</a></div><div class="mega-grid">`;
  topItems.slice(0,6).forEach(it => {
    html += `<div class="mpcard" onclick="goToMenu('${it.id}')">
      <img class="mpcard-img" src="${it.img}" alt="${it.name}" loading="lazy">
      <div><div class="mpcard-name">${it.name}</div><div class="mpcard-price">${fmt(it.price)}</div><div class="mpcard-cat">Quick Add ＋</div></div>
    </div>`;
  });
  html += '</div>';
  el.innerHTML = html;
}

function buildMenuMega() {
  const el = $('#megaMenu');
  if (!el) return;
  let html = `<div class="mega-head"><span class="mega-head-title">📋 All Categories</span><a href="#menu" class="mega-see-all">Full menu →</a></div><div class="mega-cat-grid">`;
  Object.entries(MENU).forEach(([key, cat]) => {
    html += `<a class="mcat" href="#menu" onclick="switchCategory('${key}')"><span class="mcat-icon">${cat.icon}</span><span class="mcat-name">${cat.label.split(' ')[0]}</span></a>`;
  });
  html += '</div>';
  // Most popular items
  const pop = [findItem('bbq10'), findItem('sw3'), findItem('sn1'), findItem('st3')].filter(Boolean);
  html += `<div style="margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,200,100,0.1);">
    <div style="font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,200,100,0.5);margin-bottom:0.7rem;">🔥 Popular Right Now</div>
    <div class="mega-grid">`;
  pop.forEach(it => {
    html += `<div class="mpcard" onclick="goToMenu('${it.id}')">
      <img class="mpcard-img" src="${it.img}" alt="${it.name}" loading="lazy">
      <div><div class="mpcard-name">${it.name}</div><div class="mpcard-price">${fmt(it.price)}</div></div>
    </div>`;
  });
  html += '</div></div>';
  el.innerHTML = html;
}

function buildCuisinesMega() {
  const el = $('#megaCuisines');
  if (!el) return;
  const showcases = [
    { key:'bbq', img:IMG.bbq_grill, feat:'Grill Chicken (Whole)' },
    { key:'italian', img:IMG.it_pizza, feat:'Margherita Pizza' },
    { key:'chinese_indian', img:IMG.ci_butter, feat:'Butter Chicken' },
    { key:'seafood', img:IMG.sf_lobster, feat:'Lobster Thermidor' },
    { key:'shawarma', img:IMG.sw_chicken, feat:'Shawarma Chicken' },
    { key:'salad', img:IMG.sal_prawn, feat:'Tropical Prawn Salad' },
  ];
  let html = `<div class="mega-head"><span class="mega-head-title">🌍 World Cuisines</span><a href="#cuisines" class="mega-see-all">Explore →</a></div><div class="mega-grid c3">`;
  showcases.forEach(s => {
    const cat = MENU[s.key];
    html += `<div class="mpcard" onclick="switchCategory('${s.key}')">
      <img class="mpcard-img" src="${s.img}" alt="${cat.label}" loading="lazy">
      <div><div class="mpcard-name">${cat.label}</div><div class="mpcard-cat">${cat.items.length} items</div><div class="mpcard-price" style="font-size:0.72rem;color:rgba(255,248,240,0.42);">from ${fmt(Math.min(...cat.items.map(i=>i.price)))}</div></div>
    </div>`;
  });
  html += '</div>';
  el.innerHTML = html;
}

// Global helpers called from HTML
window.goToMenu = function(itemId) {
  const item = findItem(itemId);
  if (!item) return;
  // Find which category it's in
  for (const [key, cat] of Object.entries(MENU)) {
    if (cat.items.find(i => i.id === itemId)) {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => switchCategory(key), 400);
      break;
    }
  }
};

window.switchCategory = function(key) {
  activeCategory = key;
  $$('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === key));
  renderMenuItems(key);
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
};

// ── FEATURED CAROUSEL ─────────────────────────────────────────────────────
function buildCarousel() {
  const track = $('#carouselTrack');
  if (!track) return;
  const all = [...FEATURED, ...FEATURED]; // doubled for infinite
  const frag = document.createDocumentFragment();
  all.forEach(item => {
    const div = document.createElement('div');
    div.className = 'fc';
    div.innerHTML = `
      <div class="fc-img-wrap"><img class="fc-img" src="${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="fc-body"><div class="fc-name">${item.name}</div><div class="fc-price">${fmt(item.price)}</div></div>`;
    frag.appendChild(div);
  });
  track.appendChild(frag);
}

// ── MENU ──────────────────────────────────────────────────────────────────
function buildCategoryNav() {
  const nav = $('#menuCatNav');
  if (!nav) return;
  const frag = document.createDocumentFragment();
  Object.entries(MENU).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (key === activeCategory ? ' active' : '');
    btn.dataset.cat = key;
    btn.textContent = `${cat.icon} ${cat.label}`;
    btn.addEventListener('click', () => window.switchCategory(key));
    frag.appendChild(btn);
  });
  nav.appendChild(frag);
}

function makeCard(item) {
  const div = document.createElement('div');
  div.className = 'mc reveal';
  const dots = [1,2,3].map(i=>`<div class="hd${i<=item.heat?' on':''}"></div>`).join('');
  div.innerHTML = `
    <div class="mc-img-wrap">
      <img class="mc-img" src="${item.img}" alt="${item.name}" loading="lazy">
      ${item.badge ? `<div class="mc-badge">${item.badge}</div>` : ''}
      <div class="mc-heat">${dots}</div>
    </div>
    <div class="mc-body">
      <div class="mc-name">${item.name}</div>
      <div class="mc-desc">${item.desc}</div>
      <div class="mc-foot">
        <div class="mc-price">${fmt(item.price)}</div>
        <button class="add-btn" aria-label="Add ${item.name}">+</button>
      </div>
    </div>`;
  div.querySelector('.add-btn').addEventListener('click', e => addToCart(item, e.currentTarget));
  return div;
}

function showSkeletons(grid, n = 6) {
  grid.innerHTML = Array(n).fill(`
    <div class="skel-card">
      <div class="skel-img shimmer"></div>
      <div class="skel-body">
        <div class="skel-line m shimmer"></div>
        <div class="skel-line shimmer"></div>
        <div class="skel-line s shimmer" style="margin-top:1rem"></div>
      </div>
    </div>`).join('');
}

function renderMenuItems(key) {
  const grid = $('#menuGrid');
  if (!grid) return;
  showSkeletons(grid);
  setTimeout(() => {
    const frag = document.createDocumentFragment();
    (MENU[key]?.items || []).forEach((item, i) => {
      const card = makeCard(item);
      card.style.transitionDelay = `${Math.min(i * 0.045, 0.3)}s`;
      frag.appendChild(card);
    });
    grid.innerHTML = '';
    grid.appendChild(frag);
    // Trigger animations after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        grid.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      });
    });
  }, 400);
}

// ── BENTO ─────────────────────────────────────────────────────────────────
function buildBento() {
  const grid = $('#bentoGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();
  BENTO.forEach((b, i) => {
    const item = findItem(b.itemId);
    const div = document.createElement('div');
    div.className = `bi bi-${i+1} reveal`;
    div.innerHTML = `
      <img class="bi-img" src="${b.img}" alt="${b.name}" loading="lazy">
      <div class="bi-overlay">
        <div class="bi-lbl">${b.lbl}</div>
        <div class="bi-name">${b.name}</div>
        ${item ? `<div class="bi-price">${fmt(item.price)}</div>` : ''}
      </div>
      ${item ? `<button class="bi-add" aria-label="Add ${b.name}">+</button>` : ''}`;
    if (item) {
      div.querySelector('.bi-add').addEventListener('click', e => { e.stopPropagation(); addToCart(item, e.currentTarget); });
    }
    frag.appendChild(div);
  });
  grid.appendChild(frag);
}

// ── REVIEWS ───────────────────────────────────────────────────────────────
function buildReviews() {
  const grid = $('#reviewsGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();
  REVIEWS.forEach(r => {
    const div = document.createElement('div');
    div.className = 'review reveal';
    div.innerHTML = `
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <div class="review-text">"${r.text}"</div>
      <div class="review-author">
        <div class="review-avatar">${r.name[0]}</div>
        <div><div class="review-name">${r.name}</div><div class="review-loc">📍 ${r.loc}</div></div>
      </div>`;
    frag.appendChild(div);
  });
  grid.appendChild(frag);
}

// ── CART ──────────────────────────────────────────────────────────────────
function addToCart(item, btn) {
  // Fly animation
  const cartEl = $('.cart-trigger');
  const b = btn.getBoundingClientRect();
  const c = cartEl.getBoundingClientRect();
  const dot = document.createElement('div');
  dot.className = 'fly-dot';
  dot.textContent = '🍽️';
  dot.style.cssText = `left:${b.left+b.width/2}px;top:${b.top+b.height/2}px;`;
  document.body.appendChild(dot);
  const dx = c.left + c.width/2 - (b.left + b.width/2);
  const dy = c.top + c.height/2 - (b.top + b.height/2);
  dot.animate([
    { opacity:1, transform:'scale(1) translate(0,0)' },
    { opacity:1, transform:`scale(0.8) translate(${dx*0.5}px,${dy*0.5}px)` },
    { opacity:0, transform:`scale(0) translate(${dx}px,${dy}px)` }
  ], { duration:520, easing:'cubic-bezier(0.4,0,0.2,1)', fill:'forwards' })
  .finished.then(() => dot.remove());

  // Badge bump
  $('.cart-badge')?.classList.add('bump');
  setTimeout(() => $('.cart-badge')?.classList.remove('bump'), 400);

  // State
  const ex = cart.find(c => c.id === item.id);
  ex ? ex.qty++ : cart.push({ ...item, qty: 1 });
  syncCart();
  renderCartItems();
}

function updateQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  syncCart();
  renderCartItems();
}

function syncCart() {
  const total = cart.reduce((s,c) => s+c.qty, 0);
  const amount = cart.reduce((s,c) => s+c.price*c.qty, 0);
  const badge = $('.cart-badge');
  const amountEl = $('#cartAmount');
  if (badge) badge.textContent = total;
  if (amountEl) amountEl.textContent = fmt(amount);
}

function renderCartItems() {
  const body = $('#cartBody');
  if (!body) return;
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty-state"><div class="ei">🛒</div><p>Your cart is empty.<br>Explore our menu and add your favourites!</p></div>`;
    return;
  }
  const frag = document.createDocumentFragment();
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <img class="cr-img" src="${item.img}" alt="${item.name}" loading="lazy">
      <div><div class="cr-name">${item.name}</div><div class="cr-price">${fmt(item.price * item.qty)}</div></div>
      <div class="qty">
        <button class="qty-btn" data-id="${item.id}" data-d="-1">−</button>
        <span class="qty-n">${item.qty}</span>
        <button class="qty-btn" data-id="${item.id}" data-d="1">+</button>
      </div>`;
    frag.appendChild(row);
  });
  body.innerHTML = '';
  body.appendChild(frag);
  body.querySelectorAll('.qty-btn').forEach(b => b.addEventListener('click', () => updateQty(b.dataset.id, +b.dataset.d)));
}

function openCart()  { $('.cart-overlay').classList.add('open'); $('.cart-panel').classList.add('open'); document.body.style.overflow='hidden'; renderCartItems(); }
function closeCart() { $('.cart-overlay').classList.remove('open'); $('.cart-panel').classList.remove('open'); document.body.style.overflow=''; }

function initCart() {
  $('.cart-trigger')?.addEventListener('click', openCart);
  $('.cart-close-btn')?.addEventListener('click', closeCart);
  $('.cart-overlay')?.addEventListener('click', closeCart);
  $('#checkoutBtn')?.addEventListener('click', () => {
    if (!cart.length) {
      alert('🛒 Your cart is empty! Add some delicious items first.');
      return;
    }
    const total = cart.reduce((s,c) => s+c.price*c.qty, 0);
    const now = new Date();
    const time = now.toLocaleTimeString('en-TZ', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('en-TZ', { weekday: 'short', day: 'numeric', month: 'short' });

    let msg = `🔥 *CHEF'S PRIDE RESTAURANT*%0A`;
    msg += `📍 Chagga Street, Dar es Salaam%0A`;
    msg += `🕐 ${date} at ${time}%0A`;
    msg += `──────────────────────────%0A%0A`;
    msg += `🛒 *ORDER DETAILS:*%0A%0A`;
    cart.forEach((i, idx) => {
      msg += `${idx + 1}. *${i.name}*%0A`;
      msg += `   Qty: ${i.qty}  ×  ${fmt(i.price)}  =  *${fmt(i.price * i.qty)}*%0A%0A`;
    });
    msg += `──────────────────────────%0A`;
    msg += `💰 *TOTAL: ${fmt(total)}*%0A`;
    msg += `──────────────────────────%0A%0A`;
    msg += `Please confirm my order and advise on delivery or collection. Asante sana! 🙏`;

    const url = `https://wa.me/${WA_NUMBER}?text=${msg}`;
    window.open(url, '_blank');
  });
}

// ── HERO PARALLAX (lightweight) ───────────────────────────────────────────
function initParallax() {
  const bg = $('.hero-bg');
  if (!bg) return;
  let raf;
  window.addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight) bg.style.transform = `translateY(${y * 0.28}px)`;
      raf = null;
    });
  }, { passive: true });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal, .reveal-l, .reveal-r').forEach(el => obs.observe(el));
}

// Re-observe after dynamic content added
function reObserve() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal:not(.in), .reveal-l:not(.in), .reveal-r:not(.in)').forEach(el => obs.observe(el));
}

// ── SMOOTH ANCHOR SCROLL ──────────────────────────────────────────────────
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const tgt = document.querySelector(a.getAttribute('href'));
    if (tgt) { e.preventDefault(); tgt.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  buildCarousel();
  buildCategoryNav();
  renderMenuItems('shawarma');
  buildBento();
  buildReviews();
  buildMegaMenus();
  initCart();
  initParallax();
  initSmoothScroll();

  // Observe static reveal elements
  setTimeout(initReveal, 100);

  // Watch menu grid for dynamic items
  new MutationObserver(() => setTimeout(reObserve, 50))
    .observe($('#menuGrid') || document.body, { childList: true });

  new MutationObserver(() => setTimeout(reObserve, 50))
    .observe($('#bentoGrid') || document.body, { childList: true });

  console.log('%c🔥 Chef\'s Pride loaded — fast & optimized!', 'color:#FFB800;font-weight:bold;font-size:14px');
});
