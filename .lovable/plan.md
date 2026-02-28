

# Rails Frontend Instructions: Match the React Mockup

These instructions tell your Rails team exactly what to change in each ERB partial and in `transaction_show.css` so the production app matches the React prototype at `https://id-preview--2a425762-9cb1-4f12-8e63-c46d96d03b30.lovable.app`.

Reference the live preview at `/listing/1` (Listing page) and `/transaction/2297` (Transaction page).

---

## LISTING PAGE (`/listing/:id`)

The listing page mockup is the most complete reference. Here's what each partial needs to become:

---

### `_hero_header.html.erb` — Match the v4 desktop layout

**Current:** Title is transaction ID or address with varying layouts between mobile/desktop.

**Target (from React mockup):**

```text
┌──────────────────────────────────────────────────────────────────┐
│ ← Listings                                                       │
│                                                                    │
│ 2847 Oak Hill Dr                    $675,000  18   8    3         │
│ [Active] Listing · Sale  MLS# 2026-048291    List Price DOM Show Leads │
│ Park Family  Anthony Gibson                                       │
│                                                                    │
│ [Edit listing] [MLS] [Transaction] [Drive]                        │
│                                                                    │
│ ●───●───●───●───●───●───●───◐───○                                │
│ Photos Staging Pricing Sign Lockbox TextCode Marketing Video Zillow│
└──────────────────────────────────────────────────────────────────┘
```

**ERB changes for `_hero_header.html.erb`:**

1. **Back nav**: Simple text link `← Listings` (or `← Transactions` for transaction pages). Use class `back-link`. No button wrapper.

2. **Title**: Use the **street address** as `<h1>`, not transaction ID. Class `hero-v4-title`. CSS: `font-size: 20px; font-weight: 700; color: var(--ink);`

3. **Chips row** (below title): Horizontal flex row with:
   - Status badge: `<span class="chip-outline">Active</span>` — green variant for active
   - Deal type: plain text `Listing · Sale`
   - MLS number: plain text `MLS# 2026-048291`
   - Client name: plain text
   - Agent name: plain text
   - Separate with `·` dot separators

4. **Metrics (right side)**: Use `hero-v4-right` grid with 4 columns:
   ```erb
   <div class="hero-v4-right">
     <div class="hero-v4-metric hero-v4-price">
       <span class="hero-v4-metric-value"><%= number_to_currency(transaction.list_price, precision: 0) %></span>
       <span class="hero-v4-metric-label">List Price</span>
     </div>
     <div class="hero-v4-metric">
       <span class="hero-v4-metric-value"><%= dom_count %></span>
       <span class="hero-v4-metric-label">DOM</span>
     </div>
     <div class="hero-v4-metric">
       <span class="hero-v4-metric-value"><%= @showings.count %></span>
       <span class="hero-v4-metric-label">Showings</span>
     </div>
     <div class="hero-v4-metric">
       <span class="hero-v4-metric-value"><%= @leads.count %></span>
       <span class="hero-v4-metric-label">Leads</span>
     </div>
   </div>
   ```
   - Price: `font-size: 24px; font-family: var(--font-mono); font-weight: 700;`
   - Other metrics: `font-size: 20px; font-family: var(--font-mono); font-weight: 700;`
   - Labels: `font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted);`

5. **Action buttons**: Horizontal row below chips. Primary button (Edit listing) uses `action-btn action-primary`. Secondary buttons (MLS, Transaction, Drive) use `action-btn`.

6. **Background**: The entire hero header must be `background: var(--card)` (white), with `border-bottom: 1px solid var(--border)`.

---

### `_milestone_bar.html.erb` — Pipeline dots with connectors

**Current:** Horizontal stepper with dots.

**Target:** Same concept but the mockup shows it **inside the header area**, not as a separate card. Each step is a small colored dot with a label below and connector lines between.

**ERB structure:**
```erb
<div class="milestone-bar" style="background: var(--card);">
  <div class="milestone-container">
    <% pipeline_steps.each_with_index do |step, i| %>
      <% unless i == 0 %>
        <div class="milestone-connector <%= 'done' if steps_before_done?(step, i) %>"></div>
      <% end %>
      <div class="milestone-step">
        <div class="milestone-dot <%= step_status_class(step) %>"></div>
        <span class="milestone-label"><%= step.label %></span>
      </div>
    <% end %>
  </div>
</div>
```

**Key visual rules:**
- Complete = green dot (`background: var(--success)`, 8px)
- Current/scheduled = amber/blue dot (10px)
- Future = gray dot (`background: var(--border)`, 8px)
- Connector line between dots: 2px height, 88px width. Green if preceding step done, gray otherwise.
- The whole bar sits inside the white header area, not as a separate card with its own border.

**For listing pages specifically**, the pipeline steps are: Photos → Staging → Pricing → Sign → Lockbox → Text Code → Marketing → Video → Zillow (pulled from the status columns on `core_transactions`).

---

### `_sidebar_people.html.erb` — Flat list, no collapsibles

**Current:** May have collapsible groups for Team, Clients, Marketing.

**Target:** Single flat card with section header "PEOPLE", then simple rows:

```erb
<div class="txn-side-card">
  <h4 class="txn-side-card-title">People</h4>
  <div class="sidebar-people-list">
    <% [primary_agent, primary_contact, coordinator, secondary_agent].compact.each do |person| %>
      <div class="sidebar-person-row">
        <div class="person-avatar"><%= person_initials(person) %></div>
        <div class="sidebar-person-meta">
          <span class="person-name"><%= person.name %></span>
          <span class="person-role"><%= person_role_label(person) %></span>
        </div>
      </div>
    <% end %>
  </div>
</div>
```

**CSS for this card:**
- `.txn-side-card-title`: `font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 12px;`
- `.sidebar-person-row`: `display: flex; align-items: center; gap: 12px; padding: 6px 0;` — NO border around each person, NO card wrapping each person
- `.person-avatar`: `width: 32px; height: 32px; border-radius: 999px; background: var(--info-bg); color: var(--info-text); font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center;`
- `.person-name`: `font-size: 13px; font-weight: 600; color: var(--ink);`
- `.person-role`: `font-size: 11px; color: var(--gray);`
- **No collapsible groups.** Just a flat list of all people in one card.

---

### `_sidebar_property.html.erb` — Label/value rows

**Current:** Collapsible sections with nav links.

**Target:** Flat card with label/value pairs:

```text
┌─────────────────────────┐
│ 🏠 PROPERTY DETAILS      │
│                           │
│ Address    2847 Oak Hill Dr│
│ City       Austin, TX 78745│
│ Neighborhood  Oak Hill    │
│ Beds/Baths    4 bd · 3 ba │
│ Sq Ft         2,526       │
│ Year Built    2018        │
│ Lot Size      0.28 acres  │
│ Type          single_family│
│                           │
│ View full property →      │
└─────────────────────────┘
```

**ERB structure:**
```erb
<div class="txn-side-card">
  <h4 class="txn-side-card-title">Property Details</h4>
  <div class="sidebar-prop-list">
    <div class="sidebar-prop-row">
      <span class="sidebar-prop-label">Address</span>
      <span class="sidebar-prop-value"><%= property.street_address %></span>
    </div>
    <div class="sidebar-prop-row">
      <span class="sidebar-prop-label">City</span>
      <span class="sidebar-prop-value"><%= [property.city, property.state, property.zip_code].compact.join(', ') %></span>
    </div>
    <!-- ... beds/baths, sqft, year_built, lot_size, property_type ... -->
  </div>
  <%= link_to "View full property →", core_property_path(property), class: "sidebar-mini-link" %>
</div>
```

**CSS additions needed:**
```css
.sidebar-prop-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
}
.sidebar-prop-label {
  font-size: 12px;
  color: var(--gray);
}
.sidebar-prop-value {
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
  text-align: right;
}
.sidebar-mini-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--ink);
  margin-top: 12px;
  text-decoration: none;
}
.sidebar-mini-link:hover { text-decoration: underline; }
```

---

### `_sidebar_financials.html.erb` — Price history + commission

**Target from mockup:**

```text
┌─────────────────────────┐
│ PRICE HISTORY  [Audit log]│
│                           │
│ $675,000    [Current] Jan 21│
│ $695,000    [-$20K]  Jan 21│
│                           │
│ ─────────────────────── │
│ COMMISSION                │
│ Listing side      3.0%    │
│ Co-op             2.5%    │
│ ───────────             │
│ Total             5.5%    │
└─────────────────────────┘
```

**ERB changes:**
- Show price history as rows: current price (large, mono font) with `[Current]` badge + date, previous prices with delta badge (`-$20K` in red)
- Below a divider, show commission breakdown using `transaction.listing_commission` and `transaction.buyer_commission` formatted as percentages via `commission_percent()` method
- Price values: `font-size: 18px; font-family: var(--font-mono); font-weight: 600;`
- Commission values: `font-size: 14px; font-family: var(--font-mono); font-weight: 500;`
- Use `sidebar-fin-delta` class with `.is-down` (red) / `.is-up` (green) for price change badges

---

### Key Dates card — Upcoming shown, past collapsed

**New pattern not currently a separate partial.** Add to `_sidebar_property.html.erb` or create `_sidebar_key_dates.html.erb`:

```text
┌─────────────────────────┐
│ KEY DATES                 │
│                           │
│ Video       Feb 10 (sched)│ ← upcoming in amber/caution color
│                           │
│ ▸ 5 past dates            │ ← collapsed by default
│   Target Live   Jan 21    │
│   List Date     Jan 21    │
│   Photos        Jan 18    │
│   ...                     │
└─────────────────────────┘
```

**Implementation:**
- Split `key_dates` into upcoming (future dates) and past dates
- Show upcoming dates always visible, with date value in `color: var(--warning-text)` (amber)
- Past dates wrapped in a collapsible `<details>` or Stimulus toggle, collapsed by default
- Trigger text: `▸ {n} past dates`

---

### Left Column — Launch Checklist at TOP

**Current:** Checklist may be mixed in with other content.

**Target:** Launch Checklist is the **first card** in the left column, above Showings and Marketing Highlights.

**Structure:**
```text
┌──────────────────────────────────────────┐
│ ✓ LAUNCH CHECKLIST        7 of 9 complete │
│                                           │
│ ⏱ Video                                  │
│   Scheduled Feb 10 · Drone + walkthrough  │  [View details] →
│ ⏱ Zillow Showcase                        │
│   Submit after video delivery             │  [Schedule]    →
│                                           │
│ ▸ 7 completed                             │
│   ✓ Photos — Giraffe360 · 42 photos      │  Jan 18
│   ✓ Staging — Staged by Design · Full     │  Jan 16
│   ...                                     │
└──────────────────────────────────────────┘
```

**Key rules:**
- Pending/overdue items shown first, always visible
- Overdue items: red `AlertCircle` icon; Pending items: amber `Clock` icon
- Each item is clickable → opens a drawer (right slide panel)
- Completed items collapsed by default with toggle `▸ {n} completed`
- Each completed item: green `CheckCircle` icon, with completion date on right
- Action buttons (`View details`, `Schedule`) on the right side of pending items

---

### Left Column — Showings section

**Target:** Show only the **most recent showing** with a "View all" link that opens a drawer listing all showings.

```text
┌──────────────────────────────────────────┐
│ 👁 SHOWINGS  [3]              [View all]  │
│                                           │
│ ● Showing · Chen Family        Today 2p   │
│   Kim Realty · 2nd visit · 2 adults       │
│   "Very interested in the backyard..."    │ →
│                                           │
│ ─────────────────────────────────────── │
│ MOST RECENT LEAD                          │
│ [RJ] Rachel Johnson          [Nurturing]  │
│      Text HAUS2847 · $500K buyer        → │
└──────────────────────────────────────────┘
```

**Key rules:**
- Only show 1 most recent showing (not all)
- "View all" opens a Sheet/drawer with all showings listed
- Below showings, a divider, then "MOST RECENT LEAD" subsection with the latest lead
- Lead row: avatar circle (initials, colored background) + name + source + pipeline badge
- Clicking a showing or lead opens its own detail drawer
- **Remove**: Agent Inquiries, QR Scans, Leads count tiles from the left column. These stats live in the header metrics.

---

### Left Column — Marketing Highlights

```text
┌──────────────────────────────────────────┐
│ MARKETING HIGHLIGHTS                      │
│                                           │
│ School District    [Top Rated]             │
│ Location Strength  [Good Location]        │
│ Visual Appeal      [Standard]              │
│ Opportunity Type    Rental/Income Property │
│ Buyer Type         Family Home, First Time │
│ Services Comments   —                      │
└──────────────────────────────────────────┘
```

- 2-column grid layout
- Values shown as badges for ratings, plain text for others
- Data from `core_properties`: `school_district`, `location_strength`, `visual_appeal`
- Data from `core_transactions`: `buyer_type` (jsonb), `opportunity_type` (jsonb)

---

### Sidebar — Media card

```text
┌─────────────────────────┐
│ MEDIA          Giraffe360│
│                           │
│ ┌────┐ ┌────┐            │
│ │Photo│ │3D  │            │
│ │42   │ │Tour│            │
│ │Done │ │Live│            │
│ └────┘ └────┘            │
│ ┌────┐ ┌────┐            │
│ │Video│ │Imgs│            │
│ │Feb10│ │12  │            │
│ │Sched│ │Rdy │            │
│ └────┘ └────┘            │
│                           │
│ Last sync: 2h ago · Sync  │
└─────────────────────────┘
```

- 2-column grid of media type cards
- Each card: icon + label + detail + status badge
- Status badge colors: Done/Live/Ready = green, Scheduled = amber
- "Last Giraffe360 sync" text at bottom with "Sync now" action link
- Data from `@media` / `@images` / `@videos` / `@tour_3d` / `@g360_synced`

---

### Sidebar — Inventory card

```text
┌─────────────────────────┐
│ INVENTORY       [Manage] │
│                           │
│ 🔒 LB-2847              │
│   Supra · Code: 4821     │  [Assigned] →
│ 📋 Sign #S-0412          │
│   Deployed Jan 21         │  [Deployed] →
│ 📱 QR #QR-0847           │
│   Attached to Sign        │  [Active]   →
│ 💬 HAUS2847              │
│   3 leads captured        │  [Active]   →
└─────────────────────────┘
```

- Each row clickable → opens drawer with details + comment box
- Icon based on asset type (Lockbox, Sign/QR, TextCode)
- Status badge on right: green for Active/Assigned/Deployed
- Data from `@assets` (Core::Lockbox, Core::QrCode, Core::TextCode)

---

### Sidebar order (top to bottom)

1. **People** (agent + contact)
2. **Property Details** (address, beds/baths, sqft, etc.)
3. **Price History** (with commission breakdown)
4. **Key Dates** (upcoming visible, past collapsed)
5. **Media** (Giraffe360 grid)
6. **Inventory** (lockbox, sign, QR, text code)

---

### Drawer pattern (all drawers)

Every clickable item (showing, lead, checklist task, inventory item) opens a right slide-in panel:

```text
┌──────────────────────────────┐
│ Showing · Chen Family    [✕] │
│ Kim Realty · 2nd visit       │
│──────────────────────────────│
│                               │
│ Today 2p                      │
│ Agent: Kim Lee                │
│ (512) 555-0192                │
│                               │
│ "Very interested in the       │
│  backyard..."                 │
│                               │
│ ─────────────────────────── │
│ ADD COMMENT                   │
│ ┌────────────────────────┐   │
│ │                        │   │
│ │                        │   │
│ └────────────────────────┘   │
│ [Save]                        │
└──────────────────────────────┘
```

- Width: `max-width: 520px` (use existing `drawer-panel` CSS)
- Header: title + close button
- Body: detail rows + existing comment if any
- Bottom: "ADD COMMENT" section header (10px uppercase) + textarea + Save button
- For leads: add "Open in Lofty · LF-XXXXX" button

---

## TRANSACTION PAGE (`/transaction/:id`)

The transaction page uses the **same layout pattern** as the listing page. The main difference is in the tab content.

### Header changes

Same `hero-v4-header` pattern as listing, but:
- Title = street address (from `@property.street_address`), not "Transaction #2173"
- Chips row: Status badge + Deal type badge + Transaction ID (`#2173`) + Agent name
- Metrics: Price + DOM + contract status (varies by deal type)
- Action buttons: `[View Intake Form]` `[Edit Transaction]`

### Tab system

Replace the current 3-tab radix TabsList (Activity/Tasks/Comments) with 5 plain text tabs matching the `tab-bar` CSS pattern:

```text
Overview   Tasks [129]   Assets [3]   Activity   Marketing
─────────────────────────────────────────────────────────
```

- Plain text tabs, not radix pill-style TabsList
- Active tab: `font-weight: 600; border-bottom: 2px solid var(--ink);`
- Inactive: `color: var(--gray);`
- Badge counts in mono font with border

### Sidebar changes

Replace collapsible groups (Transaction Team / Clients / Marketing / Property) with 4 flat cards:

1. **Financials** — 2-col grid: List Price, Contract Price, Commission rows with percentages
2. **People** — flat list (same pattern as listing)
3. **Property** — label/value rows (same pattern as listing)
4. **Task Summary** — progress bar + 3-stat grid (Done/Overdue/Blocked)

---

## CSS CHANGES SUMMARY

Add these missing rules to `transaction_show.css`:

```css
/* Sidebar card title — used by all sidebar cards */
.txn-side-card-title {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
  margin-bottom: 12px;
}

/* People list */
.sidebar-people-list { display: flex; flex-direction: column; gap: 4px; }
.sidebar-person-row { display: flex; align-items: center; gap: 12px; padding: 6px 0; }

/* Property rows */
.sidebar-prop-row { display: flex; justify-content: space-between; padding: 4px 0; }
.sidebar-prop-label { font-size: 12px; color: var(--gray); }
.sidebar-prop-value { font-size: 12px; font-weight: 500; color: var(--ink); }

/* Task summary */
.task-summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px; }
.task-summary-stat { text-align: center; }
.stat-number { font-family: var(--font-mono); font-size: 20px; font-weight: 700; }
.stat-label { font-size: 10px; color: var(--muted); text-transform: uppercase; }
.stat-success { color: var(--success); }
.stat-danger { color: var(--danger); }
.stat-warning { color: var(--warning); }

/* Commission */
.sidebar-fin-commission-row { display: flex; justify-content: space-between; padding: 4px 0; }
.sidebar-fin-commission-value { font-family: var(--font-mono); font-size: 14px; font-weight: 500; }

/* Price delta badges */
.sidebar-fin-delta { border-radius: 999px; padding: 2px 8px; font-size: 11px; font-weight: 700; }
.sidebar-fin-delta.is-down { background: var(--danger-bg); color: var(--danger-text); }
.sidebar-fin-delta.is-up { background: var(--success-bg); color: var(--success-text); }
```

**Critical global change:** The page background must be `var(--bg)` (#FAFAF8), NOT `var(--card)` (white). Cards use `var(--card)`. This creates the contrast that makes cards visible.

```css
.txn-show {
  background: var(--bg);  /* was var(--card) — THIS IS THE #1 VISUAL FIX */
}
```

---

## IMPLEMENTATION ORDER

1. Fix `.txn-show { background: var(--bg); }` — instant visual improvement
2. Update `_hero_header.html.erb` — address as title, metrics right, pipeline in header
3. Update `_sidebar_people.html.erb` — flat list, no collapsibles
4. Update `_sidebar_property.html.erb` — label/value rows + key dates with collapsed past
5. Update `_sidebar_financials.html.erb` — price history + commission percentages
6. Add sidebar media + inventory cards to `_sidebar_property.html.erb` or new partials
7. Restructure left column: Launch Checklist → Showings (most recent only + drawer) → Most Recent Lead → Marketing Highlights
8. Add drawer partials for showing detail, lead detail, checklist item, inventory item — all with comment textarea
9. Update `_tab_bar.html.erb` — plain text tabs with underline active state (for transaction page)

