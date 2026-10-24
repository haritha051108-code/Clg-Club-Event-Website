/**
 * ==============================================================================
 * Celestius College Club Events Website — script.js
 * Vanilla JavaScript for dynamic rendering, filtering, searching, modal views,
 * accessible form validation, and interactive bubble enhancements.
 * ==============================================================================
 */

// Strict mode for cleaner and safer JavaScript execution
'use strict';

/* --------------------------------------------------------------------------
   1. Event Dataset (8 Comprehensive Sample Events Across Campus Clubs)
   -------------------------------------------------------------------------- */
const CAMPUS_EVENTS = [
  {
    id: 'bytehacks-2026',
    title: 'ByteHacks 2026: 24-Hour Code Sprint',
    club: 'ZeroOne Coding Club',
    clubCategory: 'coding',
    categoryLabel: 'Coding & Tech',
    date: 'Nov 14 - 15, 2026',
    dateRaw: '2026-11-14',
    time: '09:00 AM - 09:00 AM (24 Hours)',
    venue: 'Alan Turing Computing Complex, Lab 4',
    shortDescription: 'Form teams of up to 4, build real-world software solutions, win cash grants, and receive 1-on-1 mentorship from top tech engineers.',
    fullDescription: 'ByteHacks is our flagship annual collegiate hackathon! Over 24 energetic hours, student developers, UI designers, and problem solvers collaborate to prototype applications addressing sustainability, education, and health tech. Enjoy free meals, midnight pizza, energy drinks, chill gaming breaks, and technical guidance from senior alumni. Whether this is your first hackathon or your tenth, there is a beginner-friendly track waiting for you!',
    eligibility: 'Open to all undergraduate & postgraduate students (Any department)',
    teamSize: '1 to 4 Members per team',
    fee: '100% Free Entry & Meals',
    perks: ['₹40,000 Prize Pool', 'Official Verified Certificate', 'Hackathon Swag & Stickers', 'Industry Mentorship'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '🔥 Hot Flagship',
    spotsRemaining: '18 Spots Left'
  },
  {
    id: 'promptverse-ai',
    title: 'PromptVerse: Generative AI & LLM Workshop',
    club: 'NeuralPulse AI Guild',
    clubCategory: 'ai',
    categoryLabel: 'AI & Robotics',
    date: 'Nov 18, 2026',
    dateRaw: '2026-11-18',
    time: '02:00 PM - 05:30 PM',
    venue: 'Seminar Hall 2 & Hybrid Stream',
    shortDescription: 'Hands-on masterclass on building autonomous AI agents, fine-tuning open models, and modern prompt engineering workflows.',
    fullDescription: 'Unpack the mechanics of Large Language Models and Generative AI. In this interactive, laptop-required workshop, students will construct real conversational agents using Python, open-source Hugging Face models, and vector databases. You will also learn prompt optimization techniques, multi-modal vision synthesis, and safety guardrail fundamentals.',
    eligibility: 'Basic Python familiarity recommended (Beginners welcome)',
    teamSize: 'Individual Participation',
    fee: 'Free (Registration Required)',
    perks: ['Hands-on GitHub Project', 'Cloud GPU Compute Credits', 'Digital AI Certification', 'Resource Cheat-Sheet Pack'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '⭐ Trending Lab',
    spotsRemaining: '12 Spots Left'
  },
  {
    id: 'golden-hour-walk',
    title: 'Golden Hour Photo Walk & Portrait Class',
    club: 'Shutterbugs Society',
    clubCategory: 'photography',
    categoryLabel: 'Photography & Arts',
    date: 'Nov 21, 2026',
    dateRaw: '2026-11-21',
    time: '04:30 PM - 07:00 PM',
    venue: 'Campus Amphitheatre & Botanical Garden',
    shortDescription: 'Learn natural light portraiture, composition framing, and mobile photography tricks with award-winning alumni photographers.',
    fullDescription: 'Join Shutterbugs for an inspiring sunset photo expedition across scenic campus spots. Whether you shoot with a mirrorless camera, a traditional DSLR, or just your smartphone, our expert mentors will guide you through aperture control, visual storytelling, candid portraits, and Lightroom mobile color grading. The top 5 shots will be featured in the annual campus gallery exhibition!',
    eligibility: 'All students (DSLR, Mirrorless, or Smartphone welcome)',
    teamSize: 'Solo Photographers',
    fee: 'Free + Sunset Refreshments',
    perks: ['Campus Gallery Exhibition Feature', 'Pro Lightroom Preset Pack', 'Complimentary Refreshments', 'Mentor Portfolio Critique'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '📸 Sunset Session',
    spotsRemaining: '9 Spots Left'
  },
  {
    id: 'sunset-acoustic-jam',
    title: 'Crescendo Sunset Jam & Acoustic Open Mic',
    club: 'Crescendo Music Hub',
    clubCategory: 'music',
    categoryLabel: 'Music & Audio',
    date: 'Nov 25, 2026',
    dateRaw: '2026-11-25',
    time: '05:30 PM - 08:30 PM',
    venue: 'Student Activity Center (SAC) Rooftop',
    shortDescription: 'An evening of indie ballads, acoustic covers, beatboxing, and soul vibes under fairy lights with warm chai.',
    fullDescription: 'Unwind after classes with live acoustic music performed by your fellow students! Sing, play your instrument, beatbox, or simply lounge on beanbags under the fairy lights. Acoustic guitars, cajóns, and digital pianos will be provided on stage, but feel free to bring your own instruments.',
    eligibility: 'Open to all student performers and music fans',
    teamSize: 'Solo, Duet, or Band (up to 5)',
    fee: 'Free Entry & Free Chai',
    perks: ['Live Stage Experience', 'Pro Video & Audio Recording', 'Performer Certificate', 'Warm Chai & Cookies'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '🎵 Cozy Vibes',
    spotsRemaining: '15 Performer Slots'
  },
  {
    id: 'syncstep-dance-battle',
    title: 'SyncStep: Street Dance Cypher & Showcase',
    club: 'Groove Motion Crew',
    clubCategory: 'dance',
    categoryLabel: 'Dance & Motion',
    date: 'Nov 28, 2026',
    dateRaw: '2026-11-28',
    time: '04:00 PM - 07:30 PM',
    venue: 'Central Plaza Open Courtyard',
    shortDescription: 'Hip-hop, popping, lyrical, and freestyle dance battles with electrifying beats, crowd cheering, and custom trophies.',
    fullDescription: 'The stage is set for the most energetic dance showdown of the semester! Groove Motion Crew invites solo dancers and crews to showcase their best routines in 1v1 all-styles battles and choreographed crew showcases. Live DJ sets, hype emcees, and high-voltage energy throughout the evening!',
    eligibility: 'All collegiate dancers & audience cheering squads',
    teamSize: '1v1 Battle or Crew (3 to 8 dancers)',
    fee: 'Free Entry',
    perks: ['Custom Winner Trophies', 'Official Crew Streetwear Merch', 'Feature on Campus Media', 'Dance Certificate'],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '⚡ High Energy',
    spotsRemaining: '6 Crew Slots Left'
  },
  {
    id: 'campus-pitch-tank',
    title: 'Campus Pitch Tank: Student Startup Blitz',
    club: 'E-Cell Venture Guild',
    clubCategory: 'entrepreneurship',
    categoryLabel: 'Entrepreneurship',
    date: 'Dec 02, 2026',
    dateRaw: '2026-12-02',
    time: '10:00 AM - 03:00 PM',
    venue: 'Auditorium Main Stage & Incubation Lounge',
    shortDescription: 'Pitch your startup idea in 3 minutes to venture capitalists, angel investors, and incubators for seed grants.',
    fullDescription: 'Do you have an idea that could change campus or disrupt an industry? Campus Pitch Tank connects student entrepreneurs directly with seed investors, alumni founders, and incubators. Present your pitch deck, answer investor queries, and compete for equity-free micro-grants to build your prototype.',
    eligibility: 'Any student or team with an early-stage idea or prototype',
    teamSize: '1 to 5 Founders',
    fee: 'Free Participation',
    perks: ['₹50,000 Incubation Grant Pool', 'Angel Investor 1-on-1 Sessions', 'Free Legal & Cloud Setup Pack', 'Founder Recognition Certificate'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '💡 Seed Grants',
    spotsRemaining: '8 Pitch Slots Left'
  },
  {
    id: 'gamecrafter-sprint',
    title: 'GameCrafter: 48h Indie Game Jam',
    club: 'ZeroOne Coding Club',
    clubCategory: 'coding',
    categoryLabel: 'Coding & Tech',
    date: 'Dec 05 - 07, 2026',
    dateRaw: '2026-12-05',
    time: '05:00 PM Friday - 05:00 PM Sunday',
    venue: 'Interactive Media Lab 1 & Discord Hub',
    shortDescription: 'Create a playable indie game using Unity, Godot, or Unreal around a surprise mystery theme revealed at kickoff.',
    fullDescription: 'Join fellow programmers, pixel artists, 3D modellers, and chiptune sound composers to build a fun, original indie game from scratch! Whether it is a cozy farming simulator, an intense rogue-like, or a mind-bending puzzle game, this weekend jam lets you ship a playable game to the world.',
    eligibility: 'All students welcome — coders, artists, writers, audio designers',
    teamSize: '1 to 4 Members',
    fee: 'Free',
    perks: ['Itch.io Showcase Feature', 'Steam Gift Cards & Goodies', 'Game Jam Winner Trophy', 'Industry Dev Feedback'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '🎮 Game Jam',
    spotsRemaining: '10 Teams Left'
  },
  {
    id: 'designspark-ui-ux',
    title: 'DesignSpark: UI/UX & Micro-Interaction Sprint',
    club: 'Shutterbugs Society',
    clubCategory: 'photography',
    categoryLabel: 'Photography & Arts',
    date: 'Dec 10, 2026',
    dateRaw: '2026-12-10',
    time: '01:30 PM - 05:00 PM',
    venue: 'Design Studio B, Innovation Wing',
    shortDescription: 'Master Figma design systems, tactile micro-animations, glassmorphism, and user testing through hands-on sprints.',
    fullDescription: 'Great digital experiences combine intuitive usability with delightful aesthetic moments. In DesignSpark, learn how to craft buttery smooth micro-interactions, cohesive typography scales, and tactile UI components in Figma. We will critique live portfolios and rebuild a popular app interface from scratch.',
    eligibility: 'Beginners & aspiring product designers (No prior software needed)',
    teamSize: 'Solo or Pair',
    fee: 'Free',
    perks: ['Figma Pro Student License', 'Curated Design System UI Kit', 'Portfolio Review Session', 'Certificate of Completion'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    highlightBadge: '✨ Creative Lab',
    spotsRemaining: '14 Spots Left'
  }
];

/* --------------------------------------------------------------------------
   2. DOM Element Selectors
   -------------------------------------------------------------------------- */
const header = document.getElementById('header');
const eventsGrid = document.getElementById('eventsGrid');
const eventSearchInput = document.getElementById('eventSearchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const filterPills = document.querySelectorAll('.filter-pill');
const resultsCountText = document.getElementById('resultsCountText');
const eventSortSelect = document.getElementById('eventSortSelect');
const emptyState = document.getElementById('emptyState');
const emptyQueryText = document.getElementById('emptyQueryText');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

// Modals & Navigation
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

const detailsModal = document.getElementById('detailsModal');
const detailsModalBackdrop = document.getElementById('detailsModalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBackBtn = document.getElementById('modalBackBtn');
const modalBody = document.getElementById('modalBody');

// Registration Form Elements
const registrationForm = document.getElementById('eventRegistrationForm');
const selectedEventDropdown = document.getElementById('selectedEvent');
const submitRegBtn = document.getElementById('submitRegBtn');
const submitBtnText = document.getElementById('submitBtnText');
const btnSpinner = document.getElementById('btnSpinner');

// Success Modal Elements
const successModal = document.getElementById('successModal');
const successModalBackdrop = document.getElementById('successModalBackdrop');
const successCloseBtn = document.getElementById('successCloseBtn');
const successStudentName = document.getElementById('successStudentName');
const successEventName = document.getElementById('successEventName');
const successEventDate = document.getElementById('successEventDate');
const successEventVenue = document.getElementById('successEventVenue');
const successStudentEmail = document.getElementById('successStudentEmail');
const successTicketId = document.getElementById('successTicketId');

// FAQs & Back to top
const faqQuestions = document.querySelectorAll('.faq-question');
const backToTopBtn = document.getElementById('backToTopBtn');

/* --------------------------------------------------------------------------
   3. Application State
   -------------------------------------------------------------------------- */
const state = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  activeModalEventId: null
};

/* --------------------------------------------------------------------------
   4. Safe Fallback Image Generator (Guarantees zero broken image icons!)
   -------------------------------------------------------------------------- */
/**
 * Generates an inline SVG data URI with a cute bubble gradient and event initials
 * Used if network fails, user is offline, or external Unsplash image is blocked.
 */
function createFallbackImageUri(title, club) {
  const initials = title.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'CE';
  const cleanTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const cleanClub = club.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3D1C63"/>
        <stop offset="50%" stop-color="#EC4899"/>
        <stop offset="100%" stop-color="#7C3AED"/>
      </linearGradient>
      <radialGradient id="bubble1" cx="30%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bgGrad)"/>
    <circle cx="200" cy="120" r="140" fill="url(#bubble1)"/>
    <circle cx="680" cy="360" r="180" fill="url(#bubble1)"/>
    <circle cx="400" cy="225" r="70" fill="#FFFFFF" fill-opacity="0.18"/>
    <text x="400" y="240" font-family="Outfit, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF" text-anchor="middle">${initials}</text>
    <text x="400" y="320" font-family="Outfit, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle">${cleanTitle}</text>
    <text x="400" y="355" font-family="sans-serif" font-size="16" font-weight="600" fill="#FCE7F3" text-anchor="middle">${cleanClub}</text>
  </svg>`;

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* --------------------------------------------------------------------------
   5. Card Rendering & Filter Logic
   -------------------------------------------------------------------------- */
/**
 * Renders event cards based on current state (category, search, sorting)
 */
function renderEvents() {
  if (!eventsGrid) return;

  // Filter by category
  let filtered = CAMPUS_EVENTS.filter(event => {
    const matchesCategory = state.activeCategory === 'all' || event.clubCategory === state.activeCategory;
    
    // Filter by search query across title, club, venue, description
    const query = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      event.title.toLowerCase().includes(query) ||
      event.club.toLowerCase().includes(query) ||
      event.venue.toLowerCase().includes(query) ||
      event.shortDescription.toLowerCase().includes(query) ||
      event.categoryLabel.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Sort events
  if (state.sortBy === 'date-soon') {
    filtered.sort((a, b) => new Date(a.dateRaw) - new Date(b.dateRaw));
  } else if (state.sortBy === 'title-az') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } // 'featured' keeps original curated order

  // Update results count indicator
  if (resultsCountText) {
    resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> of ${CAMPUS_EVENTS.length} events`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    eventsGrid.innerHTML = '';
    if (emptyState) {
      emptyState.style.display = 'block';
      if (emptyQueryText) {
        emptyQueryText.textContent = state.searchQuery || state.activeCategory;
      }
    }
    return;
  }

  if (emptyState) {
    emptyState.style.display = 'none';
  }

  // Render cards HTML
  const cardsHtml = filtered.map(event => {
    const fallbackSrc = createFallbackImageUri(event.title, event.club);
    
    return `
      <article class="event-card" data-event-id="${event.id}">
        <div class="card-image-wrap">
          <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="card-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackSrc}';"
          >
          <span class="card-category-badge">${event.categoryLabel}</span>
          ${event.highlightBadge ? `<span class="card-highlight-badge">${event.highlightBadge}</span>` : ''}
        </div>

        <div class="card-content">
          <div class="card-club-row">
            <span class="club-pill">
              <span aria-hidden="true">✦</span> ${event.club}
            </span>
          </div>

          <h3 class="card-title">${event.title}</h3>

          <p class="card-description">${event.shortDescription}</p>

          <div class="card-meta-list">
            <div class="meta-item">
              <span class="meta-icon" aria-hidden="true">📅</span>
              <span class="meta-text">${event.date}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon" aria-hidden="true">⏰</span>
              <span class="meta-text">${event.time}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon" aria-hidden="true">📍</span>
              <span class="meta-text">${event.venue}</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="spots-tag">
              <span class="spots-dot" aria-hidden="true"></span>
              <span>${event.spotsRemaining}</span>
            </div>
            <button 
              type="button" 
              class="btn-card-action view-details-btn" 
              data-id="${event.id}"
              aria-label="View details for ${event.title}"
            >
              <span>View Details</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  eventsGrid.innerHTML = cardsHtml;

  // Attach click events to "View Details" buttons
  const detailButtons = eventsGrid.querySelectorAll('.view-details-btn');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const eventId = btn.getAttribute('data-id');
      openEventDetails(eventId);
    });
  });
}

/**
 * Updates counts on category filter pills based on total available events
 */
function updateCategoryPillCounts() {
  const counts = {
    all: CAMPUS_EVENTS.length,
    coding: CAMPUS_EVENTS.filter(e => e.clubCategory === 'coding').length,
    ai: CAMPUS_EVENTS.filter(e => e.clubCategory === 'ai').length,
    photography: CAMPUS_EVENTS.filter(e => e.clubCategory === 'photography').length,
    music: CAMPUS_EVENTS.filter(e => e.clubCategory === 'music').length,
    dance: CAMPUS_EVENTS.filter(e => e.clubCategory === 'dance').length,
    entrepreneurship: CAMPUS_EVENTS.filter(e => e.clubCategory === 'entrepreneurship').length
  };

  const countAll = document.getElementById('countAll');
  if (countAll) countAll.textContent = counts.all;

  const countCoding = document.getElementById('countCoding');
  if (countCoding) countCoding.textContent = counts.coding;

  const countAi = document.getElementById('countAi');
  if (countAi) countAi.textContent = counts.ai;

  const countPhoto = document.getElementById('countPhotography');
  if (countPhoto) countPhoto.textContent = counts.photography;

  const countMusic = document.getElementById('countMusic');
  if (countMusic) countMusic.textContent = counts.music;

  const countDance = document.getElementById('countDance');
  if (countDance) countDance.textContent = counts.dance;

  const countEcell = document.getElementById('countEntrepreneurship');
  if (countEcell) countEcell.textContent = counts.entrepreneurship;
}

/**
 * Populates the Registration Form event dropdown with options
 */
function populateRegistrationDropdown() {
  if (!selectedEventDropdown) return;

  // Preserve the placeholder
  const placeholder = selectedEventDropdown.options[0];
  selectedEventDropdown.innerHTML = '';
  if (placeholder) {
    selectedEventDropdown.appendChild(placeholder);
  }

  CAMPUS_EVENTS.forEach(event => {
    const option = document.createElement('option');
    option.value = event.id;
    option.textContent = `${event.title} — (${event.club})`;
    selectedEventDropdown.appendChild(option);
  });
}

/* --------------------------------------------------------------------------
   6. Dedicated Event Details View / Modal
   -------------------------------------------------------------------------- */
/**
 * Opens the dedicated event details modal with full information
 */
function openEventDetails(eventId) {
  const event = CAMPUS_EVENTS.find(e => e.id === eventId);
  if (!event || !detailsModal || !modalBody) return;

  state.activeModalEventId = eventId;
  const fallbackSrc = createFallbackImageUri(event.title, event.club);

  const perksListHtml = event.perks.map(perk => `
    <span class="perk-tag-item">
      <span aria-hidden="true">🎁</span> ${perk}
    </span>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-banner-wrap">
      <img 
        src="${event.image}" 
        alt="${event.title}" 
        class="modal-banner-img"
        onerror="this.onerror=null; this.src='${fallbackSrc}';"
      >
      <div class="modal-banner-overlay">
        <div class="modal-header-info">
          <span class="modal-category-pill">${event.categoryLabel}</span>
          <h2 class="modal-event-title" id="modalEventTitle">${event.title}</h2>
        </div>
      </div>
    </div>

    <div class="modal-content-inner">
      <div class="modal-quick-meta-grid">
        <div class="quick-meta-box">
          <span class="q-icon" aria-hidden="true">🎪</span>
          <div>
            <span class="q-label">Organized By</span>
            <span class="q-val">${event.club}</span>
          </div>
        </div>

        <div class="quick-meta-box">
          <span class="q-icon" aria-hidden="true">📅</span>
          <div>
            <span class="q-label">Date & Time</span>
            <span class="q-val">${event.date} • ${event.time}</span>
          </div>
        </div>

        <div class="quick-meta-box">
          <span class="q-icon" aria-hidden="true">📍</span>
          <div>
            <span class="q-label">Campus Venue</span>
            <span class="q-val">${event.venue}</span>
          </div>
        </div>

        <div class="quick-meta-box">
          <span class="q-icon" aria-hidden="true">🎟️</span>
          <div>
            <span class="q-label">Registration Fee</span>
            <span class="q-val text-green">${event.fee}</span>
          </div>
        </div>
      </div>

      <div class="modal-main-details">
        <h3 class="modal-section-title">
          <span aria-hidden="true">✨</span> About This Event
        </h3>
        <p class="modal-description-text">${event.fullDescription}</p>

        <h3 class="modal-section-title">
          <span aria-hidden="true">🎯</span> Eligibility & Format
        </h3>
        <p class="modal-description-text">
          <strong>Eligibility:</strong> ${event.eligibility}<br>
          <strong>Participation Format:</strong> ${event.teamSize}
        </p>

        <h3 class="modal-section-title">
          <span aria-hidden="true">🎁</span> Perks, Awards & Certificates
        </h3>
        <div class="modal-perks-tags">
          ${perksListHtml}
        </div>
      </div>

      <div class="modal-footer-action-bar">
        <div class="spots-tag">
          <span class="spots-dot" aria-hidden="true"></span>
          <span><strong>${event.spotsRemaining}</strong> remaining for this session</span>
        </div>
        <button 
          type="button" 
          class="btn btn-primary btn-lg" 
          id="modalRegisterBtn"
          data-event-id="${event.id}"
        >
          <span class="btn-bubble-shine"></span>
          <span>Register Now For Free</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  `;

  // Attach listener to "Register Now" inside the modal
  const modalRegisterBtn = document.getElementById('modalRegisterBtn');
  if (modalRegisterBtn) {
    modalRegisterBtn.addEventListener('click', () => {
      closeEventDetails();
      selectEventAndScrollToForm(event.id);
    });
  }

  // Show modal
  detailsModal.classList.add('active');
  detailsModal.setAttribute('aria-hidden', 'false');
  if (detailsModalBackdrop) {
    detailsModalBackdrop.classList.add('active');
    detailsModalBackdrop.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';

  // Set URL hash for shareable event links
  history.replaceState(null, '', `#event-${event.id}`);

  // Trap focus or focus modal close
  if (modalBackBtn) modalBackBtn.focus();
}

/**
 * Closes the event details modal
 */
function closeEventDetails() {
  if (!detailsModal) return;
  detailsModal.classList.remove('active');
  detailsModal.setAttribute('aria-hidden', 'true');
  if (detailsModalBackdrop) {
    detailsModalBackdrop.classList.remove('active');
    detailsModalBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
  state.activeModalEventId = null;

  // Clear hash cleanly
  if (window.location.hash.startsWith('#event-')) {
    history.replaceState(null, '', '#events');
  }
}

/**
 * Pre-selects the event in the registration form and smoothly scrolls to it
 */
function selectEventAndScrollToForm(eventId) {
  if (selectedEventDropdown) {
    selectedEventDropdown.value = eventId;
    
    // Trigger visual pulse on the select field to show it was auto-selected
    selectedEventDropdown.classList.add('is-focused-pulse');
    setTimeout(() => {
      selectedEventDropdown.classList.remove('is-focused-pulse');
    }, 1500);
  }

  const regSection = document.getElementById('register');
  if (regSection) {
    regSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Focus name input after scrolling
    setTimeout(() => {
      const nameInput = document.getElementById('fullName');
      if (nameInput) nameInput.focus();
    }, 600);
  }
}

/* --------------------------------------------------------------------------
   7. Registration Form Validation & Submission
   -------------------------------------------------------------------------- */
/**
 * Helper to show validation error message
 */
function showFieldError(fieldId, errorId, message) {
  const inputEl = document.getElementById(fieldId);
  const errorEl = document.getElementById(errorId);
  if (inputEl) {
    inputEl.classList.add('is-invalid');
    inputEl.setAttribute('aria-invalid', 'true');
  }
  if (errorEl) {
    errorEl.textContent = message;
  }
}

/**
 * Helper to clear validation error message
 */
function clearFieldError(fieldId, errorId) {
  const inputEl = document.getElementById(fieldId);
  const errorEl = document.getElementById(errorId);
  if (inputEl) {
    inputEl.classList.remove('is-invalid');
    inputEl.removeAttribute('aria-invalid');
  }
  if (errorEl) {
    errorEl.textContent = '';
  }
}

/**
 * Validate student email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Real-time input validation listeners for pleasant user feedback
 */
function setupFormValidation() {
  if (!registrationForm) return;

  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('studentEmail');
  const deptInput = document.getElementById('department');
  const yearSelect = document.getElementById('yearOfStudy');
  const eventSelect = document.getElementById('selectedEvent');
  const termsCheckbox = document.getElementById('agreeTerms');

  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      if (fullNameInput.value.trim().length >= 2) {
        clearFieldError('fullName', 'fullNameError');
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (isValidEmail(emailInput.value)) {
        clearFieldError('studentEmail', 'emailError');
      }
    });
  }

  if (deptInput) {
    deptInput.addEventListener('input', () => {
      if (deptInput.value.trim().length > 0) {
        clearFieldError('department', 'departmentError');
      }
    });
  }

  if (yearSelect) {
    yearSelect.addEventListener('change', () => {
      if (yearSelect.value) {
        clearFieldError('yearOfStudy', 'yearError');
      }
    });
  }

  if (eventSelect) {
    eventSelect.addEventListener('change', () => {
      if (eventSelect.value) {
        clearFieldError('selectedEvent', 'eventSelectError');
      }
    });
  }

  if (termsCheckbox) {
    termsCheckbox.addEventListener('change', () => {
      if (termsCheckbox.checked) {
        clearFieldError('agreeTerms', 'termsError');
      }
    });
  }

  // Handle Form Submission
  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Full Name
    const nameVal = fullNameInput ? fullNameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 2) {
      showFieldError('fullName', 'fullNameError', 'Please enter your full name (at least 2 letters).');
      isValid = false;
    } else {
      clearFieldError('fullName', 'fullNameError');
    }

    // Validate Email
    const emailVal = emailInput ? emailInput.value.trim() : '';
    if (!emailVal) {
      showFieldError('studentEmail', 'emailError', 'Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(emailVal)) {
      showFieldError('studentEmail', 'emailError', 'Please enter a valid email address (e.g. name@campus.edu).');
      isValid = false;
    } else {
      clearFieldError('studentEmail', 'emailError');
    }

    // Validate Department
    const deptVal = deptInput ? deptInput.value.trim() : '';
    if (!deptVal) {
      showFieldError('department', 'departmentError', 'Please enter your college or department.');
      isValid = false;
    } else {
      clearFieldError('department', 'departmentError');
    }

    // Validate Year
    const yearVal = yearSelect ? yearSelect.value : '';
    if (!yearVal) {
      showFieldError('yearOfStudy', 'yearError', 'Please select your current year of study.');
      isValid = false;
    } else {
      clearFieldError('yearOfStudy', 'yearError');
    }

    // Validate Event Selection
    const eventVal = eventSelect ? eventSelect.value : '';
    if (!eventVal) {
      showFieldError('selectedEvent', 'eventSelectError', 'Please choose the event you wish to attend.');
      isValid = false;
    } else {
      clearFieldError('selectedEvent', 'eventSelectError');
    }

    // Validate Terms
    const termsVal = termsCheckbox ? termsCheckbox.checked : false;
    if (!termsVal) {
      showFieldError('agreeTerms', 'termsError', 'Please check the box to confirm your attendance guidelines.');
      isValid = false;
    } else {
      clearFieldError('agreeTerms', 'termsError');
    }

    if (!isValid) {
      // Focus first error field for accessibility
      const firstInvalid = registrationForm.querySelector('.is-invalid, input:invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate instant frontend submission with playful spinner
    if (submitRegBtn && btnSpinner && submitBtnText) {
      submitRegBtn.disabled = true;
      btnSpinner.style.display = 'inline-block';
      submitBtnText.textContent = 'Generating Pass...';
    }

    setTimeout(() => {
      // Restore button
      if (submitRegBtn && btnSpinner && submitBtnText) {
        submitRegBtn.disabled = false;
        btnSpinner.style.display = 'none';
        submitBtnText.textContent = 'Complete Free Registration →';
      }

      // Find chosen event details
      const chosenEvent = CAMPUS_EVENTS.find(ev => ev.id === eventVal) || CAMPUS_EVENTS[0];

      // Populate Success Modal
      if (successStudentName) successStudentName.textContent = nameVal;
      if (successEventName) successEventName.textContent = chosenEvent.title;
      if (successEventDate) successEventDate.textContent = `${chosenEvent.date} (${chosenEvent.time})`;
      if (successEventVenue) successEventVenue.textContent = chosenEvent.venue;
      if (successStudentEmail) successStudentEmail.textContent = emailVal;

      // Generate playful confirmation ticket ID
      const randomCode = Math.floor(100 + Math.random() * 900);
      if (successTicketId) successTicketId.textContent = `CLST-2026-B${randomCode}`;

      // Open Success Modal
      openSuccessModal();

      // Trigger Confetti / Bubble celebration
      triggerCelebrationEffect();

      // Reset form
      registrationForm.reset();
    }, 600);
  });
}

function openSuccessModal() {
  if (!successModal) return;
  successModal.classList.add('active');
  successModal.setAttribute('aria-hidden', 'false');
  if (successModalBackdrop) {
    successModalBackdrop.classList.add('active');
    successModalBackdrop.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
  if (successCloseBtn) successCloseBtn.focus();
}

function closeSuccessModal() {
  if (!successModal) return;
  successModal.classList.remove('active');
  successModal.setAttribute('aria-hidden', 'true');
  if (successModalBackdrop) {
    successModalBackdrop.classList.remove('active');
    successModalBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

/**
 * Creates temporary floating celebration particles when registration succeeds
 */
function triggerCelebrationEffect() {
  const container = document.body;
  const colors = ['#EC4899', '#A855F7', '#FDE047', '#38BDF8', '#F472B6'];

  for (let i = 0; i < 20; i++) {
    const bubble = document.createElement('div');
    const size = Math.floor(12 + Math.random() * 24);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = window.innerWidth / 2 + (Math.random() * 200 - 100);
    const startY = window.innerHeight / 2 + (Math.random() * 200 - 100);

    bubble.style.position = 'fixed';
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${startX}px`;
    bubble.style.top = `${startY}px`;
    bubble.style.borderRadius = '50%';
    bubble.style.background = color;
    bubble.style.boxShadow = `0 0 10px ${color}`;
    bubble.style.pointerEvents = 'none';
    bubble.style.zIndex = '150';
    bubble.style.opacity = '1';
    bubble.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';

    container.appendChild(bubble);

    requestAnimationFrame(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 120 + Math.random() * 200;
      const targetX = startX + Math.cos(angle) * distance;
      const targetY = startY + Math.sin(angle) * distance;

      bubble.style.transform = `translate(${targetX - startX}px, ${targetY - startY}px) scale(0)`;
      bubble.style.opacity = '0';
    });

    setTimeout(() => {
      bubble.remove();
    }, 1100);
  }
}

/* --------------------------------------------------------------------------
   8. Search & Category Filter Event Listeners
   -------------------------------------------------------------------------- */
function setupSearchAndFilters() {
  // Category Filter Pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      state.activeCategory = pill.getAttribute('data-category') || 'all';
      renderEvents();
    });
  });

  // Search Input (Real-time live filtering)
  if (eventSearchInput) {
    eventSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery.length > 0 ? 'flex' : 'none';
      }
      renderEvents();
    });
  }

  // Search Clear Button
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (eventSearchInput) {
        eventSearchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        eventSearchInput.focus();
        renderEvents();
      }
    });
  }

  // Sort Dropdown
  if (eventSortSelect) {
    eventSortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderEvents();
    });
  }

  // Reset Filters Button in Empty State
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.activeCategory = 'all';
      state.searchQuery = '';
      if (eventSearchInput) {
        eventSearchInput.value = '';
      }
      if (searchClearBtn) {
        searchClearBtn.style.display = 'none';
      }

      filterPills.forEach(p => {
        const isAll = p.getAttribute('data-category') === 'all';
        p.classList.toggle('active', isAll);
        p.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });

      renderEvents();
    });
  }

  // Club cards filter triggers ("View Club Events ->")
  const clubFilterButtons = document.querySelectorAll('.btn-club-filter');
  clubFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-club-filter');
      if (cat) {
        // Activate matching pill
        filterPills.forEach(p => {
          const isMatch = p.getAttribute('data-category') === cat;
          p.classList.toggle('active', isMatch);
          p.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        });

        state.activeCategory = cat;
        renderEvents();

        // Scroll to events section
        const eventsSection = document.getElementById('events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Footer Category Link Triggers
  const footerCatLinks = document.querySelectorAll('[data-footer-filter]');
  footerCatLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-footer-filter');
      if (cat) {
        filterPills.forEach(p => {
          const isMatch = p.getAttribute('data-category') === cat;
          p.classList.toggle('active', isMatch);
          p.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        });
        state.activeCategory = cat;
        renderEvents();

        const eventsSection = document.getElementById('events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Mobile Navigation Drawer & Sticky Header
   -------------------------------------------------------------------------- */
function setupNavigation() {
  // Mobile Drawer Toggle
  if (mobileMenuToggle && mobileDrawer && mobileDrawerBackdrop) {
    const toggleDrawer = (open) => {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('active');
      mobileDrawer.classList.toggle('active', isOpen);
      mobileDrawerBackdrop.classList.toggle('active', isOpen);
      mobileMenuToggle.classList.toggle('active', isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    mobileMenuToggle.addEventListener('click', () => toggleDrawer());
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', () => toggleDrawer(false));
    mobileDrawerBackdrop.addEventListener('click', () => toggleDrawer(false));

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // Sticky Header Scroll Shadow
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // Active link highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   10. FAQ Accordion Component
   -------------------------------------------------------------------------- */
function setupFaqAccordion() {
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other accordions for clean UX
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) {
            otherAns.style.maxHeight = null;
            otherAns.hidden = true;
          }
        }
      });

      // Toggle clicked item
      if (!isExpanded) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
        setTimeout(() => {
          answer.hidden = true;
        }, 300);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   11. Interactive Click-to-Bubble Generator (Delightful Micro-Interaction)
   -------------------------------------------------------------------------- */
function setupClickBubbles() {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  document.addEventListener('click', (e) => {
    // Avoid spawning bubbles when clicking interactive controls
    if (e.target.closest('button, input, select, a, textarea, .faq-question')) {
      return;
    }

    const bubble = document.createElement('span');
    const size = Math.floor(18 + Math.random() * 26);
    bubble.style.position = 'fixed';
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${e.clientX - size / 2}px`;
    bubble.style.top = `${e.clientY - size / 2}px`;
    bubble.style.borderRadius = '50%';
    bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(236, 72, 153, 0.35) 60%, rgba(168, 85, 247, 0.2) 100%)';
    bubble.style.boxShadow = '0 4px 12px rgba(236, 72, 153, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.9)';
    bubble.style.pointerEvents = 'none';
    bubble.style.zIndex = '999';
    bubble.style.transform = 'scale(0.4)';
    bubble.style.opacity = '0.9';
    bubble.style.transition = 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)';

    document.body.appendChild(bubble);

    requestAnimationFrame(() => {
      const offsetY = -(40 + Math.random() * 50);
      const offsetX = (Math.random() - 0.5) * 30;
      bubble.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`;
      bubble.style.opacity = '0';
    });

    setTimeout(() => {
      bubble.remove();
    }, 700);
  });
}

/* --------------------------------------------------------------------------
   12. Keyboard Accessibility & Global Event Listeners
   -------------------------------------------------------------------------- */
function setupGlobalAccessibility() {
  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (detailsModal && detailsModal.classList.contains('active')) {
        closeEventDetails();
      }
      if (successModal && successModal.classList.contains('active')) {
        closeSuccessModal();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        mobileDrawer.classList.remove('active');
        if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      }
    }
  });

  // Modal Backdrop Clicks
  if (detailsModalBackdrop) {
    detailsModalBackdrop.addEventListener('click', closeEventDetails);
  }
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeEventDetails);
  }
  if (modalBackBtn) {
    modalBackBtn.addEventListener('click', closeEventDetails);
  }

  // Success Modal Close
  if (successModalBackdrop) {
    successModalBackdrop.addEventListener('click', closeSuccessModal);
  }
  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', closeSuccessModal);
  }

  // Back to Top Button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Check URL Hash on initial page load (e.g., #event-bytehacks-2026)
  const currentHash = window.location.hash;
  if (currentHash && currentHash.startsWith('#event-')) {
    const eventId = currentHash.replace('#event-', '');
    setTimeout(() => {
      openEventDetails(eventId);
    }, 200);
  }
}

/* --------------------------------------------------------------------------
   13. Application Initialization
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderEvents();
  updateCategoryPillCounts();
  populateRegistrationDropdown();
  setupSearchAndFilters();
  setupNavigation();
  setupFormValidation();
  setupFaqAccordion();
  setupClickBubbles();
  setupGlobalAccessibility();

  console.log('🫧 Celestius College Club Events Platform Initialized Successfully!');
});
