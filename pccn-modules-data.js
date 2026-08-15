
// PCCN Certificate Course — content for all 12 modules.
// Pillars: 1 Assessment & Acute Stabilisation (teal) · 2 Life Support & Interventions (magenta)
//          3 Specialised Systems (amber) · 4 Safety & Professionalism (blue)

var PCCN_PILLARS = {
  1: { name: 'Assessment & Acute Stabilisation', color: '#1B9E7E', tint: '#EBF8F4', deep: '#157A62' },
  2: { name: 'Life Support & Interventions', color: '#D4327A', tint: '#FBEAF2', deep: '#B0205E' },
  3: { name: 'Specialised Systems', color: '#D4882A', tint: '#FBF1E4', deep: '#B0661A' },
  4: { name: 'Safety & Professionalism', color: '#3AABCC', tint: '#E2F2F8', deep: '#2189A8' }
};

var PCCN_MODULES = [
  {
    n: 1, pillar: 1,
    title: 'Systematic Assessment<br>& Initial Recognition',
    short: 'Initial Assessment',
    subtitle: 'From the doorstep to the bedside — PAT, ABCDE and the DIRECT approach to identifying and managing the sick child.',
    framework: 'DIRECT · PAT · ABCDE',
    tools: 'PEWS · SAMPLE · EII',
    duration: '1 hr live + 2–3 hrs self-study',
    pat: true,
    courseOverview: {
      badges: [
        { n: '4', label: 'recorded lectures' },
        { n: '1', label: 'live webinar' },
        { n: '1', label: 'virtual simulation' },
        { n: '~85m', label: 'self-study time' }
      ],
      summary: '<strong>By the end of this module:</strong> spot why children crash differently → run a PAT + ABCDE assessment fast → apply DIRECT to keep a deteriorating child safe → set up a crash cart and think like a prepared unit, not a lucky one.',
      pathway: ['Pre-Test', 'Online lectures', 'Live webinar', 'Virtual simulation', 'Module quiz', 'Hands-on workshop'],
      pathwayNote: 'Every section of this course follows the same rhythm — work through the sessions and content above, take the module quiz, then the hands-on workshop. You can retake the quiz any time to improve your score.',
      cards: [
        { title: 'Certification', body: 'Course-end Final Exam: online MCQ, plus an OSCE where every station must be passed.' },
        { title: 'Attendance', body: 'Live webinars are Step 2 of this module\'s pathway — a recorded makeup is available if you miss the live session.' },
        { title: 'Hands-on', body: 'Workshops run zone-wise; most sections are 1-day skills labs.' }
      ],
      note: 'This module opens with a diagnostic Pre-Test below (ungraded) — its only job is to show you where to focus as you work through the sessions and content that follow.'
    },
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'Faculty-led case walkthroughs with a 3-month-old in respiratory distress, followed by panel discussion.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Short focused videos — PAT, ABCDE walkthrough, PEWS scoring, SAMPLE history. Watch at your own pace.', meta: '2–3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Scenario drills — identify the sick child, escalation drills, code-blue breakout, ISBAR handover practice.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'The DIRECT Approach — your systematic structure for every sick child',
      title: 'Detect · Intervene · Reassess · Effective Communication · Transport',
      items: [
        { letter: 'D', name: 'Detection', detail: 'PAT · ABCDE<br>PEWS scoring', color: '#1B9E7E' },
        { letter: 'I', name: 'Intervention', detail: 'Immediate life-saving<br>action when detected', color: '#D4327A' },
        { letter: 'R', name: 'Reassessment', detail: 'Ongoing EII cycle<br>Track response', color: '#3AABCC' },
        { letter: 'EC', name: 'Effective Communication', detail: 'ISBAR · Teamwork<br>70% errors = poor comm.', color: '#D4882A' },
        { letter: 'T', name: 'Transport', detail: 'Weigh benefits vs risks<br>Identify right centre', color: '#9B6BB5' }
      ],
      footnote: 'At any point during Detection — if a life-threatening problem is found → <strong style="color:rgba(255,255,255,0.65)">immediate Intervention</strong> before completing the assessment. Reassessment is ongoing, not a single step.'
    },
    physiology: {
      label: 'Step 1 · Why Children Are Different',
      intro: 'Children are not small adults. Their reserve across every system starts thinner — which is why they can look fine right up until they suddenly don\'t.',
      compareCards: [
        { title: 'Respiratory', color: '#1B9E7E', chips: ['Narrow airway', 'Low reserve', 'Low FRC', 'High oxygen use', 'Big dead space'], note: '→ early hypoxia, fast.' },
        { title: 'Circulatory', color: '#D4327A', chips: ['Rate-dependent output', 'Low vascular resistance', 'Low blood volume', 'Cools down fast', 'Low glycogen'], note: '→ hidden shock, underestimated losses.' }
      ],
      thermo: { title: 'Thermoregulation &amp; metabolic reserve', chips: ['Fast heat loss — high surface area for body weight', 'Low glycogen stores — faster hypoglycaemia in illness'] },
      gauges: [
        { label: 'Respiratory reserve', pct: 28, color: '#1B9E7E', note: 'Thin — tips into hypoxia fast' },
        { label: 'Circulatory reserve', pct: 32, color: '#D4327A', note: 'Thin — shock hides, then decompensates fast' },
        { label: 'Metabolic reserve', pct: 24, color: '#D4882A', note: 'Thin — heat and glucose drop quickly' }
      ],
      gaugeNote: 'Illustrative, not to clinical scale — the point is: children start with less margin across every system.',
      warnNote: '<strong>Vitals are the tip of the iceberg</strong> — compensation hides deterioration until it\'s almost too late. HR, BP, SpO₂, GCS can all look fine right up to collapse. Early read beats a late number.',
      pattern: {
        title: 'Spot the pattern — 3 kids, same day',
        cards: [
          { tag: '3 months', color: '#1B9E7E', body: 'Fever, fast breathing, chest indrawing, poor feed, drowsy' },
          { tag: '5 years', color: '#D4327A', body: 'Vomiting, pain abdomen, dehydrated, drowsy' },
          { tag: '1 year', color: '#D4882A', body: 'Fever, cough, poor feed, unresponsive' }
        ],
        note: 'Same "viral illness" story on the surface — each hides a red flag a rushed look would miss.'
      },
      bpTable: {
        title: 'Minimum acceptable blood pressure, by age',
        sub: 'The quick formula used elsewhere in this module ("70 + 2×age") only covers ages 1–10 — here is the full age band.',
        rows: [
          ['Term neonate (0–28 days)', '&lt; 60 mmHg'],
          ['Infant (1–12 months)', '&lt; 70 mmHg'],
          ['Children 1–10 years', '&lt; 70 + (age × 2) mmHg'],
          ['Children &gt; 10 years', '&lt; 90 mmHg']
        ],
        note: 'Easy mnemonic: <strong>60 – 70 – 80 – 90</strong> — the rough minimum systolic BP walking up through neonate → infant → toddler → older child.',
        source: 'Source: PALS 2021 Provider Handbook (Karl Disque), as cited in the PEERS Nurse Manual.'
      },
      miniCheck: {
        qid: 'mc1',
        question: 'Why do children deteriorate faster than adults in respiratory illness?',
        options: ['Their airways are proportionally wider than adults\'', 'Low FRC, high oxygen consumption and a narrow airway leave little reserve', 'They have higher glycogen stores, delaying deterioration'],
        correct: 1,
        correctFb: 'Correct — low FRC, high oxygen use and a narrow airway add up to a fast tip into hypoxia.',
        wrongFb: 'Not quite — look at the Respiratory differences above.'
      }
    },
    accordionLabel: 'Step 2 · Primary Assessment — ABCDE (hands-on, systematic)',
    accordion: [
      { letter: 'A', title: 'Airway', hint: 'Maintainable? Open? Obstructed?', color: '#1B9E7E',
        bullets: ['Look for chest/abdomen movement — is there normal rise?', 'Listen for airflow — normal vs gurgling, stridor, silence', '<strong>Maintainable:</strong> head tilt–chin lift (or jaw thrust in spinal injury)', '<strong>Secretions:</strong> suction — clear the airway before continuing', '<strong>Adjuncts:</strong> oropharyngeal (absent gag) or nasopharyngeal (semi-conscious) airway', '<strong>Non-maintainable:</strong> advanced airway — BVM, LMA, or RSI intubation'],
        callout: '<strong>SOAPME before intubation:</strong> Suction · Oxygen · Airway adjuncts · Positioning (tragus–manubrium in line) · Medications (ketamine + midazolam/fentanyl + rocuronium) · Equipment &amp; Monitoring (SpO₂, ECG, EtCO₂)' },
      { letter: 'B', title: 'Breathing — 5-point assessment', hint: 'Distress vs Failure?', color: '#D4327A',
        bullets: ['<strong>1. Respiratory rate</strong> — age-appropriate? &gt;60/min or &lt;10/min in any child is dangerous', '<strong>2. Air entry</strong> — equal bilateral? Decreased = localised pathology (pneumonia, effusion)', '<strong>3. Breath sounds</strong> — stridor (upper airway) · wheeze (lower airway) · crepitations/grunting (parenchymal)', '<strong>4. Work of breathing</strong> — ala nasi, subcostal/intercostal recessions, see-saw breathing, head bobbing', '<strong>5. SpO₂</strong> — &lt;94% in room air = supplemental O₂ required; target 95–98%'],
        compare: { cols: [
          { label: 'Respiratory Distress', color: '#D4882A', bg: '#FBF1E4', body: '↑ Respiratory rate<br>↑ Work of breathing<br>Retractions, ala nasi<br>SpO₂ may be normal<br><em>Child is compensating</em>' },
          { label: 'Respiratory Failure ⚠', color: '#D4327A', bg: '#FAE6EF', body: '↓ Effort, silent chest<br>See-saw breathing<br>Head bobbing, grunting<br>SpO₂ falling despite effort<br><em>Escalate immediately</em>' }
        ] } },
      { letter: 'C', title: 'Circulation — 5-point assessment', hint: 'Compensated vs hypotensive shock?', color: '#D4882A',
        bullets: ['<strong>1. Pulse rate &amp; rhythm</strong> — HR &lt;60 at any age is ominous', '<strong>2. Pulse volume</strong> — central vs peripheral difference (carotid vs radial) = first sign of shock', '<strong>3. Capillary refill time</strong> — press sternum 5 sec; normal ≤2 sec; &gt;2 sec = poor perfusion', '<strong>4. Skin</strong> — cool peripheries, mottling, colour change = early shock', '<strong>5. Blood pressure</strong> — minimum SBP rule 60–70–80–90 by age; MAP = 1.5 × age + 40'],
        compare: { cols: [
          { label: 'Compensated Shock', color: '#1B9E7E', bg: '#E9F6F2', body: 'Normal BP<br>Tachycardia<br>CRT &gt;2s · cold peripheries<br>Treat aggressively — may deteriorate fast' },
          { label: 'Decompensating →', color: '#D4882A', bg: '#FCF3E8', body: 'BP falling<br>Worsening tachycardia<br>Weak peripheral pulses<br>Altered mental status' },
          { label: 'Hypotensive Shock ⚠', color: '#D4327A', bg: '#FAE6EF', body: 'Low BP<br>Absent peripheral pulses<br>Metabolic acidosis<br>Fluid + inotropes now' }
        ], foot: 'Minimum SBP: 60 (neonate) → 70 → 80 → 90 (adolescent) · MAP = 1.5 × age + 40' } },
      { letter: 'D', title: 'Disability — neurological status', hint: 'AVPU · GCS · pupils · glucose', color: '#9B6BB5',
        bullets: ['<strong>AVPU:</strong> Alert · Voice · Pain · Unresponsive — P and U require emergency escalation', '<strong>GCS:</strong> eyes, verbal, motor — correlates with severity and duration of hypoxia', '<strong>Pupils:</strong> size, equality, reaction — unequal or dilated pupils is ominous', '<strong>Seizures:</strong> check for active seizure or post-ictal state', '<strong>Blood glucose:</strong> check every drowsy child — &lt;60 mg/dL needs immediate treatment'],
        callout: 'Disability signs are indicators of <em>brain perfusion</em> — they reflect the downstream effects of hypoxia and circulatory compromise. Treat the cause, not just the score.' },
      { letter: 'E', title: 'Exposure — full body inspection', hint: 'Do not miss what is hidden', color: '#3AABCC',
        bullets: ['Expose completely — remove all clothing and covers', '<strong>Trauma:</strong> bruising, bleeding, burns — document location and pattern', '<strong>Rashes:</strong> petechiae, purpura (HSP, ITP, meningococcaemia), urticaria (anaphylaxis)', '<strong>Temperature:</strong> prevent hypothermia — re-cover promptly after exposure', 'Note any non-accidental injury pattern — safeguarding awareness'],
        callout: 'Exposure is often rushed or skipped under time pressure — a missed petechial rash or abdominal compartment can change the diagnosis entirely.' }
    ],
    accordionMiniCheck: {
      qid: 'mc2',
      question: 'TICLS (Tone, Interactivity, Consolability, Look, Speech/cry) belongs to which PAT corner?',
      options: ['Work of breathing', 'Colour / circulation', 'Appearance'],
      correct: 2,
      correctFb: 'Correct — TICLS is Appearance.',
      wrongFb: 'Not quite — TICLS belongs to Appearance.'
    },
    panel: {
      label: 'PEWS · Paediatric Early Warning Score — ward-based deterioration detection',
      intro: 'PEWS is a simple bedside scoring system that gives nurses an <strong style="color:#1A1030">objective language</strong> to communicate concern to doctors — <em>"PEWS increased from 2 to 5"</em> carries far more weight than "the child doesn\'t look right." It captures subtle deterioration before obvious collapse.',
      cards: [
        { label: 'Behaviour / Neurology', color: '#1B9E7E', body: 'Level of consciousness<br>Responsiveness to environment<br>Agitation or irritability<br>Scored 0–3' },
        { label: 'Cardiovascular', color: '#D4882A', body: 'Heart rate<br>Perfusion / skin colour<br>Capillary refill time<br>Scored 0–3' },
        { label: 'Respiratory', color: '#D4327A', body: 'Respiratory rate<br>Effort / work of breathing<br>Oxygen requirement<br>Scored 0–3' }
      ],
      scale: [
        { label: 'Score 0–1', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Routine monitoring. Normal observation frequency.' },
        { label: 'Score 2–3', bg: '#FBF1E4', fg: '#D4882A', body: 'Increased monitoring. Inform nurse-in-charge.' },
        { label: 'Score 4–5', bg: '#FAE6EF', fg: '#D4327A', body: 'Urgent senior review. Rapid response activation.' },
        { label: 'Score ≥6', bg: '#2C1654', fg: '#C4A8D8', body: 'PICU transfer. Consider intubation. Call now.' }
      ],
      foot: '<strong style="color:#1A1030">ISBAR escalation:</strong> "PEWS increased from 2 to 5" is far more powerful than "the child doesn\'t look right." Parental concern also counts — a mother saying <em>"something is wrong"</em> should trigger reassessment even with a low score.',
      miniCheck: {
        qid: 'mc3',
        question: 'A ward nurse notices a child\'s PEWS has risen from 2 to 5. What should happen?',
        options: ['Recheck vitals at the next scheduled round', 'Document it and continue routine care', 'Escalate now — senior review / rapid response, consider PICU'],
        correct: 2,
        correctFb: 'Correct — a PEWS jump like this needs immediate escalation.',
        wrongFb: 'Not quite — a rising PEWS should trigger immediate escalation.'
      }
    },
    caseStudy: {
      quote: '"3-month-old infant — progressive abdominal distension ×20 days, cough ×1 week, intermittent fever ×1 week, irritable cry and decreased oral intake ×5 days. On arrival — irritable, febrile."',
      cards: [
        { label: 'A · Airway', color: '#1B9E7E', body: '<strong>Maintainable</strong><br>No stridor<br>No secretions' },
        { label: 'B · Breathing', color: '#D4327A', body: '<strong>RR 67/min</strong><br>Subcostal retractions +<br>B/L AE equal, crepitations +<br><strong>SpO₂ 96% on RA</strong>' },
        { label: 'C · Circulation', color: '#D4882A', body: '<strong>HR 165/min</strong><br>Peripheries cold<br>Pulses palpable<br><strong>CRT 4 sec</strong><br>NIBP 72/50 mmHg' }
      ],
      analysis: 'Respiratory distress — parenchymal (crepitations, high RR, retractions). Compensated septic shock (cold peripheries, CRT 4s, tachycardia, borderline BP). Underlying: metabolic liver disease.'
    },
    grid: {
      label: 'Step 3 · Secondary Assessment — SAMPLE history',
      intro: 'After the primary survey is complete and the child is stable — gather a focused history using SAMPLE.',
      items: [
        { key: 'S — Signs &amp; Symptoms', color: '#1B9E7E', body: 'Presenting complaint and onset' },
        { key: 'A — Allergies', color: '#9B6BB5', body: 'Drugs, foods, environment' },
        { key: 'M — Medications', color: '#D4327A', body: 'Current drugs, doses, recent changes' },
        { key: 'P — Past History', color: '#D4882A', body: 'Previous illness, hospitalisations, surgery' },
        { key: 'L — Last Meal', color: '#2189A8', body: 'Time and content — important for RSI' },
        { key: 'E — Events Leading To', color: '#8B7FA0', body: 'What happened just before presentation?' }
      ],
      foot: '<strong style="color:#1A1030">Investigations:</strong> blood glucose, CBC, CRP, electrolytes, liver/kidney function, blood gas, lactate. Add CXR (respiratory), ECG/ECHO (cardiac), USG (UTI/abdomen) as indicated.<br><br><strong style="color:#1A1030">Unexplained deterioration?</strong> Run the reversible causes — <strong>H\'s:</strong> hypovolaemia, hypoxia, H⁺/acidosis, hypo/hyperkalaemia, hypoglycaemia, hypothermia. <strong>T\'s:</strong> tension pneumothorax, tamponade, toxins, thrombosis.'
    },
    objectives: [
      'Apply the Paediatric Assessment Triangle within 30–60 seconds — no touch, no stethoscope',
      'Distinguish a life-threatening emergency from a non-life-threatening problem at the doorstep',
      'Perform a 5-point breathing assessment including distress vs failure differentiation',
      'Perform a 5-point circulation assessment and classify compensated vs hypotensive shock',
      'Use AVPU, pupils and blood glucose for rapid neurological assessment',
      'Score PEWS across three domains and trigger escalation at the correct threshold',
      'Complete a SAMPLE history and identify the relevant investigations to order',
      'Follow the DIRECT approach as a complete framework for the sick child'
    ],
    videoTopics: ['1. PAT', '2. ABCDE', '3. PEWS', '4. SAMPLE', '5. Live Case'],
    panel2: {
      label: 'Emergency Preparedness &amp; Triage — ready before the crisis',
      intro: 'A stocked crash cart, a trained team and a shared vocabulary are what let a unit perform under pressure — not luck. A simple checklist cut surgical complications by 36% and deaths by 47% across 8 hospitals in a WHO trial; every one of the 155 people aboard the 2009 Hudson River ditching survived because the crew had rehearsed the drill, not because they got lucky.',
      cards: [
        { label: 'Crash cart — 6 drawers', color: '#1B9E7E', body: 'Drawer 1 Airway (OPA/NPA, ETTs, BVM, suction) · 2 Breathing (masks, prongs, nebuliser, O₂) · 3 Circulation/Access (IV cannulas, fluids, IO kit) · 4 Drugs (adrenaline, atropine, amiodarone, dextrose) · 5 Defib/ECG · 6 Miscellaneous. Fastest-needed items sit on top; seals and expiry checked daily.' },
        { label: 'The 7 P\'s', color: '#D4327A', body: 'Staff · System · Supplies · Space · Speak Up · Subject · Self — what a unit checks before the crisis, not during it. "Self" means knowing your own limits and calling for help early.' },
        { label: 'SOAP ME', color: '#D4882A', body: 'Suction · Oxygen · Airway adjuncts · Protocols/Pharmacy · Monitors · Equipment — run this check at the start of every shift and before every procedure.' }
      ],
      scale: [
        { label: 'L1 — Resuscitation', bg: '#FAE6EF', fg: '#A81F5B', body: 'Arrest, hypotensive shock — immediate.' },
        { label: 'L2 — Emergent', bg: '#FBF1E4', fg: '#B0661A', body: 'Compensated shock, respiratory distress.' },
        { label: 'L3 — Urgent', bg: '#FBF1E4', fg: '#B0661A', body: 'Dehydration, post-ictal.' },
        { label: 'L4 — Less urgent', bg: '#EBF8F4', fg: '#157A62', body: 'Fever, no distress.' },
        { label: 'L5 — Non-urgent', bg: '#EBF8F4', fg: '#157A62', body: 'Minor injury.' }
      ],
      foot: 'That 5-level scale is <strong style="color:#1A1030">in-hospital</strong> triage — one sick child among many. <strong style="color:#1A1030">Mass-casualty triage (START/JumpSTART)</strong> is a different, faster system for when the goal shifts from saving <em>this</em> child to saving the <em>most</em> children with the resources on hand — sorted by colour, in seconds, with no equipment: <strong style="color:#B01A59">Red = Immediate</strong> · <strong style="color:#A9700B">Yellow = Delayed</strong> · <strong style="color:#157A62">Green = Minor</strong> · <strong style="color:#4A4458">Black = Expectant (non-survivable given resources)</strong>. Same four ethics every time — Justice, Beneficence, Non-maleficence, Transparency.',
      miniCheck: {
        qid: 'mc4',
        question: 'In START/JumpSTART disaster triage, which colour tag means "non-survivable given available resources"?',
        options: ['Red', 'Yellow', 'Green', 'Black'],
        correct: 3,
        correctFb: 'Correct — Black = Expectant.',
        wrongFb: 'Not quite — that\'s Black (Expectant).'
      }
    },
    simulation: {
      label: 'The Virtual Triage — breakout scenarios',
      intro: 'Run after you finish the lectures and content above.',
      cards: [
        { tag: 'Scenario A', title: '8-month-old, respiratory distress', body: 'Run PAT → ABCDE → triage in real time.' },
        { tag: 'Scenario B', title: '4-year-old, minor injury', body: 'Practise triaging down just as confidently.' }
      ]
    },
    reckoner: {
      label: 'Ready Reckoner — printable quick reference',
      chips: [
        'PAT: Appearance · Work of breathing · Colour',
        'Doorway red flags: not maintainable airway · RR&gt;60/&lt;10 · SpO₂&lt;94 · Pulse&lt;60 · CRT&gt;2s · AVPU=P/U · Glucose&lt;60',
        'Min SBP = 70 + 2×age',
        'DIRECT: Detect → Intervene → Reassess → Communicate → Transport',
        'Crash cart: 1 Airway · 2 Breathing · 3 Circulation · 4 Drugs · 5 Defib · 6 Misc',
        '7 P\'s: Staff · System · Supplies · Space · Speak Up · Subject · Self',
        'SOAP ME: Suction · O₂ · Airway · Protocols · Monitors · Equipment',
        'Disaster triage: Red-Immediate · Yellow-Delayed · Green-Minor · Black-Expectant'
      ]
    },
    pretest: [
      { answer: 1, text: 'The Pediatric Assessment Triangle has three corners: Appearance, Work of Breathing, and:',
        options: ['Blood pressure', 'Colour / circulation to skin', 'Temperature', 'Level of consciousness only'] },
      { answer: 1, text: 'True or false: physiologically, children behave essentially like small adults.',
        options: ['True', 'False'] },
      { answer: 1, text: 'What does the "D" in the DIRECT approach stand for?',
        options: ['Diagnosis', 'Detection', 'Discharge', 'Documentation'] },
      { answer: 2, text: 'A safe SpO₂ target in a sick child should generally be kept above:',
        options: ['85%', '90%', '94%', '100% at all times'] },
      { answer: 1, text: 'In the five-level triage system taught in this module, Level 1 means:',
        options: ['Non-urgent, routine OP care', 'Resuscitation — immediate life threat', 'Less urgent, can wait hours', 'Urgent, assessment within the hour'] },
      { answer: 2, text: 'Which vital sign tends to compensate LAST in a deteriorating child, and can look normal right up to collapse?',
        options: ['Heart rate', 'Respiratory rate', 'Blood pressure', 'Capillary refill'] },
      { answer: 1, text: 'On the AVPU scale, "V" means the child:',
        options: ['Is fully alert and Voluntary', 'Responds to Voice', 'Vomits on stimulation', 'Has Variable pupils'] },
      { answer: 1, text: 'In the standard 6-drawer crash cart layout used in this course, emergency drugs live in:',
        options: ['Drawer 1', 'Drawer 4', 'Drawer 5', 'Drawer 6'] },
      { answer: 2, text: 'Capillary refill time is used to assess which part of the primary survey?',
        options: ['Airway', 'Breathing', 'Circulation', 'Disability'] },
      { answer: 2, text: 'Before touching a sick child, the very first step taught in this module is to:',
        options: ['Attach a pulse oximeter', 'Take a full SAMPLE history', 'Perform the Pediatric Assessment Triangle from the doorway', 'Insert IV access'] }
    ],
    quiz: [
      { answer: 3, text: 'Which of these is NOT part of the TICLS assessment of Appearance?',
        options: ['Tone', 'Consolability', 'Speech or cry', 'Blood pressure'],
        why: 'TICLS covers Tone, Interactiveness, Consolability, Look/gaze and Speech/cry — a visual bedside check. Blood pressure is a hands-on vital sign, not part of the no-touch Appearance assessment.' },
      { answer: 1, text: 'Noting nasal flaring and intercostal retractions belongs to which PAT component?',
        options: ['Appearance', 'Work of breathing', 'Colour/circulation', 'Disability'],
        why: 'Nasal flaring and retractions are visual signs of increased respiratory effort — exactly what the Work of Breathing corner of the PAT is looking for.' },
      { answer: 1, text: 'From the doorway, a child is unresponsive and not breathing normally. Your immediate next step is to:',
        options: ['Auscultate the chest', 'Check for a pulse', 'Take a SAMPLE history', 'Attach a BP cuff'],
        why: 'An unresponsive child who is not breathing normally triggers the doorway life-threatening check — a pulse check comes next, ahead of history-taking or equipment.' },
      { answer: 1, text: 'An unresponsive, apnoeic child has a pulse of 40/min with poor perfusion. The correct action is to:',
        options: ['Give oxygen and reassess in 5 minutes', 'Start CPR', 'Wait for the doctor to arrive', 'Check blood glucose first'],
        why: 'A pulse below 60/min with poor perfusion in an unresponsive child is an indication to start CPR — in children, bradycardia this severe is treated as a pre-arrest rhythm.' },
      { answer: 0, text: 'A normal capillary refill time should be:',
        options: ['≤ 2 seconds', '4-5 seconds', 'Always exactly 3 seconds', 'Not clinically useful'],
        why: 'Press the sternum for 5 seconds and release — colour returning within 2 seconds is normal; longer suggests poor perfusion.' },
      { answer: 1, text: 'Using the rule of thumb taught in this module, the minimum acceptable systolic BP is approximately:',
        options: ['50 + age (years)', '70 + 2×age (years)', '100 - age (years)', '120 mmHg regardless of age'],
        why: 'Minimum systolic BP ≈ 70 + (2 × age in years) is the standard rule of thumb, underlying the 60–70–80–90 age-band figures used elsewhere in this module.' },
      { answer: 2, text: 'For an appropriately sized paediatric BP cuff, the bladder width should cover about what percentage of the arm circumference?',
        options: ['10%', '25%', '40%', '75%'],
        why: 'A bladder width of roughly 40% of the mid-upper-arm circumference is correct — too narrow overestimates BP, too wide underestimates it.' },
      { answer: 1, text: 'Under the five-level triage system, a child with compensated shock or respiratory distress is triaged as:',
        options: ['Level 1 - Resuscitation', 'Level 2 - Emergent', 'Level 4 - Less urgent', 'Level 5 - Non-urgent'],
        why: 'Compensated shock or respiratory distress is serious but not yet a full arrest, placing the child at Level 2 (Emergent) — one step below immediate resuscitation.' },
      { answer: 2, text: 'Which DIRECT pillar specifically asks "is the treatment given effective? Is there any new issue?"',
        options: ['Detection', 'Transport', 'Reassessment', 'Effective Communication'],
        why: 'That ongoing check on treatment response and new problems is exactly what Reassessment (R) means in DIRECT — a continuous Evaluate–Identify–Intervene cycle, not a single step.' },
      { answer: 3, text: 'Per the teaching in this module, what proportion of serious healthcare errors are attributed to faulty communication and disorganised teamwork?',
        options: ['10%', '30%', '50%', '70%'],
        why: 'Roughly 70% of serious healthcare errors trace back to breakdowns in communication and teamwork rather than knowledge gaps — why Effective Communication is one of the five DIRECT pillars.' },
      { answer: 1, text: 'A child\'s PEWS rises from 2 to 5 between ward rounds. This should prompt:',
        options: ['No action until the next scheduled round', 'Immediate senior review / rapid response activation', 'A note in the chart only', 'Discharge planning'],
        why: 'A rising PEWS score is an objective early-warning signal — jumping from 2 to 5 crosses into the urgent-review band and should trigger senior review or rapid response, not just documentation.' },
      { answer: 2, text: 'In the standard 6-drawer crash cart layout, emergency drugs such as adrenaline, atropine and amiodarone are kept in:',
        options: ['Drawer 1 (Airway)', 'Drawer 2 (Breathing)', 'Drawer 4 (Drugs)', 'Drawer 6 (Miscellaneous)'],
        why: 'Drawer 4 holds emergency drugs. Airway sits in Drawer 1 and Breathing in Drawer 2 — fastest-needed items are kept on top for the quickest reach.' },
      { answer: 1, text: 'In the 7 P\'s of emergency preparedness, "Self" mainly means:',
        options: ['Being the most senior person in the room', 'Knowing your own limits and what you don\'t know', 'Preparing only the equipment, not the team', 'Ignoring your own stress so you can work faster'],
        why: '"Self" in the 7 P\'s is about knowing your own limits and calling for help early — preparedness is about the team, not about being the most senior person present.' },
      { answer: 3, text: 'In START/JumpSTART disaster triage, the colour BLACK signifies:',
        options: ['Immediate, life-threatening', 'Delayed but stable', 'Walking wounded, minor injuries', 'Expectant — non-survivable given available resources'],
        why: 'Black marks Expectant — injuries judged non-survivable given the resources available, freeing resources for patients who can still be saved.' },
      { answer: 2, text: 'Which of the following is one of the reversible "H\'s" to consider in unexplained deterioration?',
        options: ['Hypertension', 'Hyperthermia', 'Hypoglycaemia', 'Hyperventilation'],
        why: 'Hypoglycaemia is one of the reversible H\'s (alongside Hypoxia, Hypovolaemia, Hypo/Hyperkalaemia and Hypothermia) — checked early because it is quick to correct.' },
      { answer: 1, text: 'In SAMPLE history taking, the "M" stands for:',
        options: ['Mechanism of injury', 'Medications', 'Medical team', 'Mobility status'],
        why: 'M stands for Medications — current drugs, doses and any recent changes, relevant to both diagnosis and drug interactions.' },
      { answer: 3, text: 'If a child on the ward is documented as clinically UNSTABLE, reassessment and documentation should occur at least every:',
        options: ['60 minutes', '30 minutes', '15 minutes', '5 minutes'],
        why: 'A clinically unstable child needs reassessment and charting at least every 5 minutes — frequent enough to catch rapid deterioration before it becomes a crisis.' },
      { answer: 1, text: 'SOAP ME is best described as a check performed:',
        options: ['Only once, at hospital orientation', 'At the start of every shift and before every procedure', 'Only after a code blue', 'By the pharmacy team alone'],
        why: 'SOAP ME (Suction, Oxygen, Airway adjuncts, Protocols/Pharmacy, Monitors, Equipment) is meant to be run routinely — at the start of every shift and before every procedure.' },
      { answer: 1, text: 'During a resuscitation, who should be operating the crash cart?',
        options: ['Whoever is nearest', 'One designated nurse running the cart', 'The most junior staff member, for training', 'No one — it should be self-service'],
        why: 'One designated nurse running the cart avoids the chaos of multiple hands in the same drawers — a clear role supports the closed-loop communication preparedness depends on.' },
      { answer: 1, text: 'The primary ethical principle behind sorting patients into disaster-triage colours (rather than treating whoever arrived first) is:',
        options: ['Autonomy — patient choice', 'Beneficence — maximising overall survival with limited resources', 'Confidentiality', 'Fidelity to the first patient seen'],
        why: 'Sorting by colour rather than order of arrival reflects Beneficence — maximising overall survival with the resources actually available, alongside Justice, Non-maleficence and Transparency.' }
    ]
  },

  {
    n: 2, pillar: 1,
    title: 'Respiratory Support<br>& Oxygen Therapy',
    short: 'Respiratory Support',
    subtitle: 'Recognising the child who is failing to breathe — and escalating oxygen delivery from nasal prongs to non-invasive ventilation.',
    framework: 'Escalation ladder · FiO₂ targets',
    tools: 'SpO₂ · ABG · HFNC · CPAP',
    duration: '1 hr live + 2 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'Escalating a bronchiolitic infant from prongs to HFNC to CPAP — what to change, when, and what to watch.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Oxygen delivery devices, FiO₂ ranges, humidification, HFNC circuit setup, NIV interface fitting.', meta: '2 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Device selection drills — pick the right interface for four deteriorating children and defend the choice.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'The Oxygen Escalation Ladder — step up when the child does not respond',
      title: 'Prongs → Face mask → NRBM → HFNC → CPAP/NIV → Invasive ventilation',
      items: [
        { letter: '1', name: 'Nasal prongs', detail: '0.5–4 L/min<br>FiO₂ 24–40%', color: '#1B9E7E' },
        { letter: '2', name: 'Face mask', detail: '5–10 L/min<br>FiO₂ 40–60%', color: '#3AABCC' },
        { letter: '3', name: 'Non-rebreathing', detail: '10–15 L/min<br>FiO₂ 90–100%', color: '#D4882A' },
        { letter: '4', name: 'HFNC', detail: '1–2 L/kg/min<br>Heated, humidified', color: '#D4327A' },
        { letter: '5', name: 'CPAP / NIV', detail: 'Recruits alveoli<br>Reduces work of breathing', color: '#9B6BB5' }
      ],
      footnote: 'Escalate on <strong style="color:rgba(255,255,255,0.65)">work of breathing and trend</strong>, not on SpO₂ alone. A child maintaining saturation at the cost of exhausting effort is failing — and will fail suddenly.'
    },
    accordionLabel: 'Core content · Device by device',
    accordion: [
      { letter: '1', title: 'Low-flow oxygen — prongs and masks', hint: 'First-line, awake, mild distress', color: '#1B9E7E',
        bullets: ['Nasal prongs: 0.5–2 L/min in infants, up to 4 L/min in older children', 'Above 2 L/min in infants, dry gas causes mucosal drying and epistaxis — humidify', 'Simple face mask needs a minimum 5 L/min to flush exhaled CO₂ from the mask', 'FiO₂ delivered is variable — it depends on the child\'s inspiratory flow and mouth breathing', 'Check prong position and nares hourly; secure without pressure on the philtrum'],
        callout: 'Low-flow devices give an <em>unpredictable</em> FiO₂. If you cannot say what FiO₂ the child is receiving, you cannot judge whether they are improving — move to a controlled device.' },
      { letter: '2', title: 'Non-rebreathing mask', hint: 'High FiO₂ for the acutely hypoxic child', color: '#D4882A',
        bullets: ['Requires 10–15 L/min to keep the reservoir bag inflated at all times', 'Inflate the reservoir bag fully before applying to the child', 'Delivers 90–100% FiO₂ — the highest achievable without positive pressure', 'A collapsing bag on inspiration means flow is too low — increase it immediately', 'Not a long-term device; it does not reduce work of breathing'],
        callout: 'The non-rebreathing mask treats <em>hypoxaemia</em>. It does nothing for <em>hypercapnia</em> or for the exhausted child — those need positive pressure.' },
      { letter: '3', title: 'High-flow nasal cannula (HFNC)', hint: 'Heated, humidified, flow-dependent PEEP', color: '#D4327A',
        bullets: ['Flow 1–2 L/kg/min for the first 10 kg, then titrate; max per unit protocol', 'Gas is heated to 34–37 °C and fully humidified — comfort and mucociliary function preserved', 'Generates a modest PEEP effect and washes out nasopharyngeal dead space', 'FiO₂ set independently of flow — you know exactly what you are delivering', 'Prong should occlude no more than half the nostril diameter — leak is intentional'],
        compare: { cols: [
          { label: 'HFNC responding', color: '#1B9E7E', bg: '#E9F6F2', body: 'RR falling within 1–2 hrs<br>Retractions reducing<br>FiO₂ requirement falling<br>Child settled, feeding' },
          { label: 'HFNC failing ⚠', color: '#D4327A', bg: '#FAE6EF', body: 'RR unchanged or rising<br>Persistent retractions<br>FiO₂ climbing<br>Rising CO₂, drowsiness<br><em>Escalate to NIV / intubation</em>' }
        ] } },
      { letter: '4', title: 'CPAP and non-invasive ventilation', hint: 'Positive pressure without a tube', color: '#9B6BB5',
        bullets: ['CPAP delivers a single continuous pressure — recruits alveoli, improves oxygenation', 'BiPAP adds an inspiratory pressure — helps ventilation and CO₂ clearance', 'Interface fit is the whole intervention: correct size, minimal leak, no pressure necrosis', 'Inspect nasal bridge, columella and cheeks every 2–4 hrs; use protective dressings', 'Contraindicated in a depressed conscious level, vomiting, or facial trauma'],
        callout: 'NIV failure is a <em>clinical</em> judgement made early, not a blood gas made late. Falling conscious level, rising CO₂ or persistent effort after 1–2 hrs means prepare for intubation.' },
      { letter: '5', title: 'Nursing the child on respiratory support', hint: 'What actually changes the outcome', color: '#3AABCC',
        bullets: ['Position: head up, nurse in the position of comfort — do not force supine', 'Suction only when clinically indicated, not by the clock', 'Feeding: NG feeds are usually safe on HFNC; withhold if effort is severe or gut is not working', 'Document RR, effort score, SpO₂, FiO₂ and flow together — a number without its FiO₂ is meaningless', 'Family presence reduces agitation, and agitation increases oxygen consumption'],
        callout: 'The single most useful chart entry you make is <strong>the trend</strong>: RR and FiO₂ side by side over hours. It predicts failure earlier than any single reading.' }
    ],
    panel: {
      label: 'Reading the blood gas — the four-step method',
      intro: 'You do not need to be the person who changes the ventilator to be the person who spots the problem. Read every gas in the same order, every time.',
      cards: [
        { label: 'Step 1 · pH', color: '#1B9E7E', body: 'Acidotic &lt;7.35<br>Alkalotic &gt;7.45<br>Normal 7.35–7.45<br><em>Is there a problem?</em>' },
        { label: 'Step 2 · PaCO₂', color: '#D4327A', body: 'Normal 35–45 mmHg<br>High = hypoventilation<br>Low = hyperventilation<br><em>Is it respiratory?</em>' },
        { label: 'Step 3 · HCO₃⁻ / Lactate', color: '#D4882A', body: 'Normal 22–26 mmol/L<br>Low = metabolic acidosis<br>Lactate &gt;2 = perfusion<br><em>Is it metabolic?</em>' }
      ],
      scale: [
        { label: 'Respiratory acidosis', bg: '#FAE6EF', fg: '#D4327A', body: '↓ pH with ↑ CO₂. Ventilation is inadequate.' },
        { label: 'Metabolic acidosis', bg: '#FBF1E4', fg: '#D4882A', body: '↓ pH with ↓ HCO₃⁻. Think perfusion, sepsis, DKA.' },
        { label: 'Compensating', bg: '#EBF8F4', fg: '#1B9E7E', body: 'pH near normal, both values shifted the same way.' },
        { label: 'Mixed picture', bg: '#2C1654', fg: '#C4A8D8', body: 'Both deranged against each other — sickest group.' }
      ],
      foot: '<strong style="color:#1A1030">Step 4 · Oxygenation:</strong> read PaO₂ against the FiO₂ the child was receiving. A PaO₂ of 80 mmHg on room air is normal; the same value on 100% oxygen is severe respiratory failure.'
    },
    caseStudy: {
      quote: '"7-month-old, day 4 of coryza — poor feeding for 24 hrs, working hard to breathe. Currently on nasal prongs 2 L/min. Called to review because the nurse feels she is tiring."',
      cards: [
        { label: 'A · Airway', color: '#1B9E7E', body: '<strong>Patent</strong><br>Nasal secretions +<br>Cleared with suction' },
        { label: 'B · Breathing', color: '#D4327A', body: '<strong>RR 72/min</strong><br>Marked subcostal recession<br>Widespread wheeze + creps<br><strong>SpO₂ 90% on 2 L</strong>' },
        { label: 'C · Circulation', color: '#D4882A', body: '<strong>HR 172/min</strong><br>CRT 2 sec<br>Warm peripheries<br>BP 84/52 mmHg' }
      ],
      analysis: 'Bronchiolitis with impending respiratory failure — the effort, not the saturation, is the emergency. Escalate directly to HFNC at 2 L/kg/min with FiO₂ titrated to SpO₂ 92–96%, NG tube for decompression, and reassess RR and effort at 1 hr. Prepare for CPAP.'
    },
    grid: {
      label: 'Quick reference · Device selection at a glance',
      intro: 'Match the device to the problem, not to what is nearest to the bedside.',
      items: [
        { key: 'Mild hypoxaemia, comfortable', color: '#1B9E7E', body: 'Nasal prongs 0.5–2 L/min' },
        { key: 'Moderate hypoxaemia', color: '#3AABCC', body: 'Face mask 5–10 L/min' },
        { key: 'Severe acute hypoxaemia', color: '#D4882A', body: 'Non-rebreathing mask 10–15 L/min' },
        { key: 'Increased work of breathing', color: '#D4327A', body: 'HFNC 1–2 L/kg/min' },
        { key: 'Alveolar collapse, poor oxygenation', color: '#9B6BB5', body: 'CPAP 5–8 cmH₂O' },
        { key: 'Hypercapnia with effort', color: '#2189A8', body: 'BiPAP — or prepare for intubation' }
      ],
      foot: '<strong style="color:#1A1030">Never step down two rungs at once</strong> and never wean device and FiO₂ simultaneously — change one variable, then reassess.'
    },
    objectives: [
      'Differentiate respiratory distress from respiratory failure at the bedside',
      'Select the appropriate oxygen delivery device for a given severity of hypoxaemia',
      'State the flow range and approximate FiO₂ delivered by each device',
      'Set up and monitor a child on high-flow nasal cannula, including flow by weight',
      'Recognise the clinical signs of HFNC and NIV failure early',
      'Prevent pressure injury from non-invasive interfaces',
      'Interpret a basic arterial blood gas using the four-step method',
      'Document respiratory observations so that trend, not snapshot, drives escalation'
    ],
    videoTopics: ['1. Devices', '2. HFNC', '3. NIV', '4. ABG', '5. Live Case'],
    quiz: [
      { answer: 2, text: 'A 6-kg infant is started on high-flow nasal cannula. Which flow rate is appropriate?',
        options: ['2 L/min', '4 L/min', '6–12 L/min', '25 L/min'],
        why: 'HFNC is dosed at 1–2 L/kg/min. For a 6-kg infant that is 6–12 L/min.' },
      { answer: 1, text: 'A child on a non-rebreathing mask has a reservoir bag that collapses on each breath. You should:',
        options: ['Reduce the flow to prevent barotrauma', 'Increase the flow rate until the bag stays inflated', 'Change to nasal prongs', 'Remove the reservoir bag'],
        why: 'A collapsing reservoir means flow is below the child\'s inspiratory demand. Increase the flow (usually 10–15 L/min) so the bag remains inflated throughout the breath.' },
      { answer: 2, text: 'Which finding most strongly suggests HFNC failure at the 2-hour review?',
        options: ['SpO₂ 94% on FiO₂ 0.35', 'Heart rate down from 175 to 150', 'Unchanged respiratory rate with rising FiO₂ requirement and new drowsiness', 'Infant now tolerating NG feeds'],
        why: 'Failure is a clinical trend: no fall in respiratory rate, escalating FiO₂ and a falling conscious level indicate the need to escalate to NIV or intubation.' },
      { answer: 0, text: 'pH 7.21, PaCO₂ 71 mmHg, HCO₃⁻ 25 mmol/L in a tiring asthmatic child indicates:',
        options: ['Acute respiratory acidosis — inadequate ventilation', 'Metabolic acidosis from dehydration', 'Respiratory alkalosis from hyperventilation', 'A normally compensated gas'],
        why: 'Low pH with a high PaCO₂ and a near-normal bicarbonate is an acute respiratory acidosis — the child is no longer ventilating adequately.' }
    ]
  },

  {
    n: 3, pillar: 1,
    title: 'Shock &<br>Haemodynamic Support',
    short: 'Shock & Hemodynamics',
    subtitle: 'Recognising shock before the blood pressure falls — fluid resuscitation, inotropes and the first golden hour.',
    framework: 'Golden hour bundle',
    tools: 'Lactate · CRT · ScvO₂ · Inotropes',
    duration: '1 hr live + 2–3 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'The septic shock golden hour, minute by minute — who does what, and what delays kill.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Shock types, fluid boluses by weight, inotrope preparation and double-checking, arterial line care.', meta: '2–3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Fluid-refractory shock drill — recognise, escalate, prepare adrenaline, hand over with ISBAR.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'The Golden Hour Bundle — every element within 60 minutes of recognition',
      title: 'Recognise · Access · Fluids · Antibiotics · Inotropes · Reassess',
      items: [
        { letter: '0', name: 'Recognise', detail: 'PAT + perfusion<br>Lactate, glucose', color: '#1B9E7E' },
        { letter: '5', name: 'Access', detail: 'Two large IVs<br>or IO within 5 min', color: '#3AABCC' },
        { letter: '15', name: 'Fluids', detail: '10–20 mL/kg boluses<br>Reassess after each', color: '#D4882A' },
        { letter: '30', name: 'Antibiotics', detail: 'Broad spectrum<br>after cultures', color: '#D4327A' },
        { letter: '60', name: 'Inotropes', detail: 'If fluid-refractory<br>Adrenaline peripherally', color: '#9B6BB5' }
      ],
      footnote: 'Delay to antibiotics and delay to inotropes are both independently associated with mortality. <strong style="color:rgba(255,255,255,0.65)">Do not wait for a central line</strong> to start adrenaline — dilute peripheral infusion is acceptable in the first hour.'
    },
    accordionLabel: 'Core content · Recognition to resuscitation',
    accordion: [
      { letter: '1', title: 'Recognising shock early', hint: 'Blood pressure is the last thing to change', color: '#1B9E7E',
        bullets: ['Shock is inadequate <em>tissue perfusion</em> — not a blood pressure number', 'Earliest signs: tachycardia, cool peripheries, prolonged CRT, narrowing pulse volume', 'Altered mental state and reduced urine output signal established organ hypoperfusion', 'Children maintain BP through vasoconstriction until 30–40% volume loss — then crash fast', 'Lactate &gt;2 mmol/L supports the diagnosis; a normal lactate does not exclude it'],
        callout: 'In paediatrics, <strong>hypotension is a late and pre-terminal finding</strong>. If you wait for the blood pressure to fall before escalating, you have waited too long.' },
      { letter: '2', title: 'The four types of shock', hint: 'The type dictates the treatment', color: '#D4327A',
        bullets: ['<strong>Hypovolaemic</strong> — gastroenteritis, haemorrhage, burns. Most common in children. Fluids.', '<strong>Distributive</strong> — sepsis, anaphylaxis, spinal. Vasodilated, warm or cold. Fluids + vasoactives.', '<strong>Cardiogenic</strong> — myocarditis, arrhythmia, congenital lesion. Fluids may worsen. Small boluses, inotropes.', '<strong>Obstructive</strong> — tamponade, tension pneumothorax, PE. Fluids will not fix it; relieve the obstruction.', 'Sepsis may present as <em>cold shock</em> (vasoconstricted, low output) or <em>warm shock</em> (vasodilated, bounding pulses)'],
        compare: { cols: [
          { label: 'Cold shock', color: '#2189A8', bg: '#E2F2F8', body: 'Cool peripheries<br>CRT &gt;2s, mottled<br>Narrow pulse pressure<br>Low cardiac output<br><em>Adrenaline</em>' },
          { label: 'Warm shock', color: '#D4327A', bg: '#FAE6EF', body: 'Warm, flushed<br>Bounding pulses<br>Wide pulse pressure<br>Low systemic resistance<br><em>Noradrenaline</em>' }
        ] } },
      { letter: '3', title: 'Fluid resuscitation', hint: 'Bolus, reassess, repeat — or stop', color: '#D4882A',
        bullets: ['Balanced crystalloid 10–20 mL/kg over 5–20 min depending on severity', 'Use 10 mL/kg boluses in cardiogenic shock, severe malnutrition and neonates', '<strong>Reassess after every bolus</strong> — HR, CRT, liver size, lung crepitations, conscious level', 'Signs of fluid overload: new crepitations, hepatomegaly, rising oxygen need, gallop rhythm', 'Fluid-refractory shock = shock persisting after 40–60 mL/kg — start inotropes now'],
        callout: 'Push-pull with a three-way tap and syringe delivers a bolus far faster than a gravity bag in a small child. Know where your rapid infusion kit is <em>before</em> you need it.' },
      { letter: '4', title: 'Inotropes and vasoactive drugs', hint: 'Preparation, safety, monitoring', color: '#9B6BB5',
        bullets: ['<strong>Adrenaline</strong> — first line in cold shock; increases contractility and heart rate', '<strong>Noradrenaline</strong> — first line in warm shock; raises systemic vascular resistance', '<strong>Dobutamine / milrinone</strong> — inodilators for myocardial dysfunction', 'All are high-alert drugs: independent double-check of drug, concentration, weight and rate', 'Never flush or bolus an inotrope line; never run it with incompatible drugs'],
        callout: 'Extravasation of adrenaline or noradrenaline causes tissue necrosis. Check the site <em>hourly</em>, document it, and escalate blanching or pain immediately — phentolamine is the antidote.' },
      { letter: '5', title: 'Monitoring the response', hint: 'What tells you it is working', color: '#3AABCC',
        bullets: ['Therapeutic goals: CRT ≤2 s, normal pulses, warm peripheries, urine output &gt;1 mL/kg/hr', 'Normal conscious level and falling lactate are the most reassuring markers of recovery', 'Hourly urine output via catheter is the cheapest continuous perfusion monitor you have', 'Arterial line: zero at the phlebostatic axis, check waveform before trusting the number', 'Escalate if goals are not met within 1 hr despite fluids and escalating inotropes'],
        callout: 'A rising urine output and a falling lactate together mean perfusion is genuinely restored. A "normal" blood pressure on high-dose vasopressors does not.' }
    ],
    panel: {
      label: 'Vascular access under pressure',
      intro: 'Access is the rate-limiting step of every resuscitation. The rule is simple: two attempts or 90 seconds, then intraosseous.',
      cards: [
        { label: 'Peripheral IV', color: '#1B9E7E', body: 'Two attempts maximum<br>Largest bore that will pass<br>Antecubital fossa preferred<br>Secure and splint' },
        { label: 'Intraosseous', color: '#D4327A', body: 'Proximal tibia, 1–2 cm below<br>and medial to tuberosity<br>Any drug, any fluid<br>Pressure bag needed' },
        { label: 'Central venous', color: '#9B6BB5', body: 'Not first-line in the crash<br>Enables high-dose inotropes<br>Full sterile bundle<br>Confirm tip position' }
      ],
      scale: [
        { label: 'Urine output', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Target &gt;1 mL/kg/hr. Hourly, catheterised.' },
        { label: 'Lactate', bg: '#FBF1E4', fg: '#D4882A', body: 'Clearance matters more than the single value.' },
        { label: 'CRT', bg: '#FAE6EF', fg: '#D4327A', body: 'Sternal, 5-second press. Target ≤2 seconds.' },
        { label: 'Conscious level', bg: '#2C1654', fg: '#C4A8D8', body: 'The most sensitive perfusion monitor of all.' }
      ],
      foot: '<strong style="color:#1A1030">Do not delay drugs for access route.</strong> An intraosseous needle takes under a minute and accepts adrenaline, fluids, blood and antibiotics at full dose.'
    },
    caseStudy: {
      quote: '"4-year-old, 16 kg — fever and vomiting ×2 days, now drowsy and not passing urine since morning. Purpuric rash noted on the shins. Triaged as urgent."',
      cards: [
        { label: 'A · Airway', color: '#1B9E7E', body: '<strong>Patent</strong><br>Responds to voice<br>No stridor' },
        { label: 'B · Breathing', color: '#D4327A', body: '<strong>RR 44/min</strong><br>Clear chest<br>Deep sighing breaths<br><strong>SpO₂ 97% on RA</strong>' },
        { label: 'C · Circulation', color: '#D4882A', body: '<strong>HR 178/min</strong><br>CRT 5 sec, mottled<br>Absent radial pulses<br><strong>BP 68/40 mmHg</strong><br>Lactate 5.8 mmol/L' }
      ],
      analysis: 'Hypotensive cold septic shock with purpura — likely meningococcaemia. Golden hour: IO or two IVs within 5 min, 20 mL/kg balanced crystalloid with reassessment, cultures then antibiotics within 30 min, and peripheral dilute adrenaline if still shocked after 40 mL/kg. Deep sighing breaths are compensating for metabolic acidosis, not a lung problem.'
    },
    grid: {
      label: 'Weight-based quick reference · 16-kg child',
      intro: 'Calculate once, write it on the board, and let the whole team work from the same numbers.',
      items: [
        { key: 'Fluid bolus 10 mL/kg', color: '#1B9E7E', body: '160 mL over 5–20 min' },
        { key: 'Fluid bolus 20 mL/kg', color: '#3AABCC', body: '320 mL over 5–20 min' },
        { key: 'Fluid-refractory threshold', color: '#D4882A', body: 'After 640–960 mL (40–60 mL/kg)' },
        { key: 'Minimum acceptable SBP', color: '#D4327A', body: '70 + (2 × age) = 78 mmHg' },
        { key: 'Target urine output', color: '#9B6BB5', body: '&gt;16 mL/hr' },
        { key: 'Adrenaline start dose', color: '#2189A8', body: '0.05–0.1 mcg/kg/min, titrate to effect' }
      ],
      foot: '<strong style="color:#1A1030">MAP target:</strong> 1.5 × age + 40 = 46 mmHg minimum for a 4-year-old. Below this, cerebral and renal perfusion are not protected.'
    },
    objectives: [
      'Recognise compensated shock before the blood pressure falls',
      'Classify shock as hypovolaemic, distributive, cardiogenic or obstructive',
      'Distinguish cold from warm septic shock and name the first-line vasoactive for each',
      'Deliver weight-based fluid boluses and reassess for both response and overload',
      'Identify fluid-refractory shock and the point at which inotropes must start',
      'Prepare and double-check high-alert vasoactive infusions safely',
      'Escalate to intraosseous access without delay when IV access fails',
      'Use urine output, lactate clearance and conscious level to judge response'
    ],
    videoTopics: ['1. Recognition', '2. Shock types', '3. Fluids', '4. Inotropes', '5. Live Case'],
    quiz: [
      { answer: 2, text: 'In a child, which of the following is the LAST sign of shock to appear?',
        options: ['Tachycardia', 'Prolonged capillary refill time', 'Hypotension', 'Cool peripheries'],
        why: 'Children compensate by vasoconstricting and increasing heart rate. Hypotension appears late and is a pre-terminal sign.' },
      { answer: 1, text: 'A 12-kg child remains shocked after 480 mL of crystalloid. The next priority is:',
        options: ['Give a further 500 mL bolus and reassess in an hour', 'Start an inotrope — this is fluid-refractory shock', 'Wait for the central line before any vasoactive drug', 'Repeat the lactate before making any change'],
        why: '480 mL is 40 mL/kg. Shock persisting beyond 40–60 mL/kg is fluid-refractory and requires inotropes — peripheral dilute adrenaline is acceptable while access is secured.' },
      { answer: 0, text: 'A septic child is warm and flushed with bounding pulses and a wide pulse pressure. The appropriate first-line vasoactive is:',
        options: ['Noradrenaline', 'Adrenaline', 'Dobutamine', 'Milrinone'],
        why: 'This is warm shock — low systemic vascular resistance. Noradrenaline is first line; adrenaline is first line in cold shock.' },
      { answer: 3, text: 'Peripheral IV access has failed after two attempts in a shocked 3-year-old. You should:',
        options: ['Attempt a third and fourth peripheral cannula', 'Give oral rehydration while waiting for the doctor', 'Wait for ultrasound-guided central access', 'Insert an intraosseous needle in the proximal tibia'],
        why: 'After two attempts or 90 seconds, intraosseous access is indicated. It accepts fluids, blood, antibiotics and inotropes at full dose.' }
    ]
  },

  {
    n: 4, pillar: 2,
    title: 'Arrhythmias<br>& Paediatric CPR',
    short: 'Arrhythmias & CPR',
    subtitle: 'Recognising the rhythm, delivering high-quality compressions, and running the shockable and non-shockable algorithms.',
    framework: 'PALS algorithms',
    tools: 'ECG · Defibrillator · CPR feedback',
    duration: '1 hr live + 3 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'Four monitor traces, four decisions — rhythm recognition drills with the faculty panel.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Compression mechanics, defibrillator setup, pad placement by age, drug doses in arrest.', meta: '3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Full code-blue run — VF arrest with role allocation, timed pauses and post-arrest handover.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'The Arrest Cycle — two minutes at a time, every time',
      title: 'Compress · Ventilate · Rhythm check · Shock or drug · Rotate',
      items: [
        { letter: 'C', name: 'Compress', detail: '100–120/min<br>⅓ chest depth', color: '#D4327A' },
        { letter: 'V', name: 'Ventilate', detail: '15:2 uncuffed<br>10/min if intubated', color: '#3AABCC' },
        { letter: 'R', name: 'Rhythm check', detail: 'Every 2 min<br>&lt;10 sec pause', color: '#D4882A' },
        { letter: 'S', name: 'Shock or drug', detail: '4 J/kg shockable<br>Adrenaline non-shockable', color: '#9B6BB5' },
        { letter: 'H', name: 'Reversible causes', detail: '4 Hs · 4 Ts<br>Search every cycle', color: '#1B9E7E' }
      ],
      footnote: 'Compression quality is the intervention that changes survival. <strong style="color:rgba(255,255,255,0.65)">Every second of pause costs coronary perfusion pressure</strong> that takes several compressions to rebuild.'
    },
    accordionLabel: 'Core content · Rhythm to resuscitation',
    accordion: [
      { letter: '1', title: 'High-quality CPR', hint: 'Depth · rate · recoil · no interruption', color: '#D4327A',
        bullets: ['Rate 100–120 compressions per minute — count aloud or use a metronome', 'Depth at least one third of the anteroposterior chest diameter (≈4 cm infant, ≈5 cm child)', '<strong>Full recoil</strong> between compressions — leaning prevents venous return', 'Hand position: two thumbs encircling (infant, two rescuers), heel of one or two hands (child)', 'Rotate the compressor every 2 minutes — quality falls measurably before fatigue is felt'],
        callout: 'Ratio 15:2 with a bag-valve-mask. Once an advanced airway is in place, compressions become <em>continuous</em> with 10 breaths per minute — no pausing to ventilate.' },
      { letter: '2', title: 'Shockable rhythms — VF and pulseless VT', hint: 'Defibrillate immediately', color: '#9B6BB5',
        bullets: ['Ventricular fibrillation: chaotic, no identifiable complexes, no pulse', 'Pulseless ventricular tachycardia: broad regular complexes, no pulse', 'Shock energy 4 J/kg, unsynchronised, then resume compressions <em>immediately</em>', 'Adrenaline after the second shock, then every 3–5 min; amiodarone 5 mg/kg after the third', 'Do not re-check the pulse straight after a shock — resume CPR for 2 minutes first'],
        callout: 'The pause around a shock should be under 5 seconds: charge <em>while compressions continue</em>, clear, shock, and hands back on the chest without checking the monitor.' },
      { letter: '3', title: 'Non-shockable rhythms — asystole and PEA', hint: 'CPR, adrenaline, find the cause', color: '#1B9E7E',
        bullets: ['Asystole: flat line — confirm leads, gain and connections before concluding', 'PEA: organised electrical activity with no palpable pulse', 'Adrenaline 10 mcg/kg IV or IO as soon as access allows, then every 3–5 min', 'No shock is indicated — defibrillating asystole causes harm and delays compressions', 'Outcome depends almost entirely on finding and treating the reversible cause'],
        compare: { cols: [
          { label: '4 Hs', color: '#1B9E7E', bg: '#E9F6F2', body: 'Hypoxia<br>Hypovolaemia<br>Hypo/hyperkalaemia &amp; metabolic<br>Hypothermia' },
          { label: '4 Ts', color: '#D4327A', bg: '#FAE6EF', body: 'Tension pneumothorax<br>Tamponade<br>Toxins<br>Thrombosis' }
        ] } },
      { letter: '4', title: 'Bradycardia and tachyarrhythmias with a pulse', hint: 'The pre-arrest window', color: '#D4882A',
        bullets: ['<strong>Bradycardia in children is usually hypoxic</strong> — oxygenate and ventilate first', 'HR &lt;60 with poor perfusion despite oxygenation → start CPR', 'Atropine only for vagally mediated or drug-induced bradycardia', 'SVT, stable: vagal manoeuvres, then adenosine 0.1 mg/kg rapid push with immediate flush', 'SVT or VT with poor perfusion: synchronised cardioversion 0.5–1 J/kg, escalating to 2 J/kg'],
        callout: 'Adenosine has a half-life of under 10 seconds. It must be given as a <em>rapid push immediately followed by a saline flush</em>, ideally through a proximal large-bore cannula, with the ECG running.' },
      { letter: '5', title: 'Defibrillator safety and the nurse\'s role', hint: 'Pads, energy, clearing, documentation', color: '#3AABCC',
        bullets: ['Paediatric pads under 10 kg or 1 year; adult pads above — anterolateral placement', 'Alternative anteroposterior placement if the chest is too small for separation', 'Dry the chest; remove transdermal patches; avoid pads over an implanted device', 'Announce "charging — stand clear", visually sweep the bed, then shock', 'Record time of each shock, energy, drug doses and rhythm at every cycle'],
        callout: 'The person recording times is not a spare pair of hands — <strong>accurate timing of adrenaline and shocks is a clinical intervention</strong> and determines the quality of the whole resuscitation.' }
    ],
    panel: {
      label: 'Post-arrest care — the first hour after ROSC',
      intro: 'Return of spontaneous circulation is the beginning of the treatment, not the end of it. Secondary injury happens in the hours that follow.',
      cards: [
        { label: 'Oxygenation', color: '#1B9E7E', body: 'Target SpO₂ 94–98%<br>Avoid hyperoxia<br>Wean FiO₂ deliberately<br>Normocapnia 35–45 mmHg' },
        { label: 'Haemodynamics', color: '#D4327A', body: 'Treat hypotension aggressively<br>Fluids + inotropes<br>MAP above age minimum<br>Watch for arrhythmia' },
        { label: 'Neuroprotection', color: '#9B6BB5', body: 'Avoid fever strictly<br>Normoglycaemia<br>Treat seizures early<br>Head up, neck midline' }
      ],
      scale: [
        { label: 'Avoid hyperoxia', bg: '#EBF8F4', fg: '#1B9E7E', body: '100% oxygen after ROSC worsens reperfusion injury.' },
        { label: 'Avoid hypocapnia', bg: '#FBF1E4', fg: '#D4882A', body: 'Over-ventilation reduces cerebral blood flow.' },
        { label: 'Avoid fever', bg: '#FAE6EF', fg: '#D4327A', body: 'Every degree above normal worsens brain injury.' },
        { label: 'Avoid hypoglycaemia', bg: '#2C1654', fg: '#C4A8D8', body: 'Check glucose early and hourly until stable.' }
      ],
      foot: '<strong style="color:#1A1030">Family and team:</strong> arrange a family update by a named person, and a team debrief within 24 hours. Both are part of the standard of care, not optional extras.'
    },
    caseStudy: {
      quote: '"9-year-old, 30 kg — collapsed during a school sports day. Bystander CPR started. On arrival unresponsive, no pulse. Monitor attached, defibrillator at the bedside."',
      cards: [
        { label: 'Rhythm', color: '#9B6BB5', body: '<strong>Ventricular fibrillation</strong><br>Chaotic, no complexes<br>No palpable pulse<br>Shockable' },
        { label: 'Immediate action', color: '#D4327A', body: '<strong>Shock 4 J/kg = 120 J</strong><br>Unsynchronised<br>Resume CPR at once<br>2-min cycle' },
        { label: 'Drugs', color: '#1B9E7E', body: '<strong>Adrenaline after shock 2</strong><br>300 mcg IV/IO<br>Amiodarone after shock 3<br>150 mg (5 mg/kg)' }
      ],
      analysis: 'Witnessed VF arrest — the highest-survival group if defibrillation is early and compression pauses are short. Charge during compressions, keep the peri-shock pause under 5 seconds, rotate compressors at every rhythm check, and search the 4 Hs and 4 Ts each cycle. Consider a primary cardiac channelopathy.'
    },
    grid: {
      label: 'Weight-based arrest doses · 30-kg child',
      intro: 'Write these on the board before the next cycle. Recalculating under pressure is where errors happen.',
      items: [
        { key: 'Defibrillation 4 J/kg', color: '#9B6BB5', body: '120 J, unsynchronised' },
        { key: 'Synchronised cardioversion', color: '#D4882A', body: '1 J/kg = 30 J, then 60 J' },
        { key: 'Adrenaline 10 mcg/kg', color: '#D4327A', body: '300 mcg (3 mL of 1:10,000)' },
        { key: 'Amiodarone 5 mg/kg', color: '#3AABCC', body: '150 mg after third shock' },
        { key: 'Adenosine 0.1 mg/kg', color: '#1B9E7E', body: '3 mg rapid push + flush' },
        { key: 'Fluid bolus 10 mL/kg', color: '#2189A8', body: '300 mL if hypovolaemia suspected' }
      ],
      foot: '<strong style="color:#1A1030">Compression targets:</strong> rate 100–120/min, depth ≥5 cm, full recoil, rotate every 2 minutes, and keep every pause under 10 seconds.'
    },
    objectives: [
      'Deliver compressions at the correct rate, depth and recoil for age',
      'Keep peri-shock and rhythm-check pauses under 10 seconds',
      'Distinguish shockable from non-shockable rhythms on the monitor',
      'State the correct defibrillation and cardioversion energies by weight',
      'Prepare and administer adrenaline, amiodarone and adenosine safely in arrest',
      'Recognise that paediatric bradycardia is usually hypoxic and treat accordingly',
      'Search the 4 Hs and 4 Ts systematically at every cycle',
      'Deliver post-ROSC care that avoids hyperoxia, hypocapnia, fever and hypoglycaemia'
    ],
    videoTopics: ['1. CPR quality', '2. Shockable', '3. Non-shockable', '4. Post-ROSC', '5. Live Case'],
    quiz: [
      { answer: 1, text: 'Which rhythm requires immediate defibrillation?',
        options: ['Asystole', 'Pulseless ventricular tachycardia', 'Pulseless electrical activity', 'Sinus bradycardia with a pulse'],
        why: 'VF and pulseless VT are shockable. Asystole and PEA are treated with CPR, adrenaline and correction of reversible causes.' },
      { answer: 2, text: 'A 20-kg child is in VF. The correct first shock energy is:',
        options: ['20 J', '40 J', '80 J', '200 J'],
        why: 'Defibrillation is 4 J/kg. For 20 kg that is 80 J, delivered unsynchronised with immediate resumption of compressions.' },
      { answer: 0, text: 'A 3-year-old has a heart rate of 48/min with poor perfusion despite effective oxygenation and ventilation. You should:',
        options: ['Start chest compressions', 'Give adenosine', 'Deliver a synchronised shock', 'Observe and repeat observations in 15 minutes'],
        why: 'A heart rate below 60 with poor perfusion that persists despite oxygenation and ventilation is an indication to start CPR.' },
      { answer: 3, text: 'After ROSC, which target is correct?',
        options: ['FiO₂ 1.0 maintained for 6 hours', 'Deliberate hyperventilation to a PaCO₂ of 25 mmHg', 'Permissive fever up to 39 °C', 'SpO₂ 94–98% with normocapnia and strict fever avoidance'],
        why: 'Post-arrest care avoids hyperoxia, hypocapnia and fever — all three worsen reperfusion and neurological injury.' }
    ]
  },

  {
    n: 5, pillar: 2,
    title: 'Procedures<br>& Airway Management',
    short: 'Procedures & Airway',
    subtitle: 'Assisting safely with intubation, lines and drains — preparation, positioning, monitoring and the nurse\'s checklist.',
    framework: 'SOAPME · Sterile bundles',
    tools: 'EtCO₂ · Laryngoscope · Ultrasound',
    duration: '1 hr live + 2–3 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'A rapid sequence intubation from the nurse\'s side of the bed — preparation, drugs, roles and rescue.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Tube sizing, SOAPME preparation, central line and arterial line bundles, chest drain care.', meta: '2–3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Difficult airway drill and a failed-intubation rescue sequence with closed-loop communication.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'SOAPME — the intubation checklist you complete before the drugs are drawn',
      title: 'Suction · Oxygen · Airway · Positioning · Medications · Equipment',
      items: [
        { letter: 'S', name: 'Suction', detail: 'Working, sized<br>Within reach', color: '#1B9E7E' },
        { letter: 'O', name: 'Oxygen', detail: 'Pre-oxygenate<br>BVM tested', color: '#3AABCC' },
        { letter: 'A', name: 'Airway', detail: 'Tube + 0.5 sizes<br>Blades, stylet, LMA', color: '#D4882A' },
        { letter: 'P', name: 'Positioning', detail: 'Tragus–manubrium<br>Shoulder roll if infant', color: '#D4327A' },
        { letter: 'ME', name: 'Meds &amp; Monitoring', detail: 'Induction, paralytic<br>SpO₂ · ECG · EtCO₂', color: '#9B6BB5' }
      ],
      footnote: 'The checklist is read <strong style="color:rgba(255,255,255,0.65)">out loud, by the nurse, before induction</strong> — including the plan if the first attempt fails and who will do what.'
    },
    accordionLabel: 'Core content · Procedure by procedure',
    accordion: [
      { letter: '1', title: 'Preparing for intubation', hint: 'Sizing, drugs, roles', color: '#1B9E7E',
        bullets: ['Uncuffed tube size = (age/4) + 4; cuffed = (age/4) + 3.5. Prepare half a size either side', 'Depth at lip ≈ tube size × 3 (e.g. size 4.0 → 12 cm)', 'Pre-oxygenate for 3 minutes; apply nasal oxygen during the attempt where possible', 'Draw induction agent, paralytic and a vasopressor — hypotension after induction is common', 'Assign roles aloud: intubator, airway assistant, drugs, monitor, timekeeper, documenter'],
        callout: '<strong>Positioning is the cheapest intervention with the largest effect.</strong> Align the tragus with the manubrium: a shoulder roll for older children, an occipital pad for infants with prominent occiputs.' },
      { letter: '2', title: 'During and after the attempt', hint: 'Confirming and securing', color: '#D4327A',
        bullets: ['Call out the SpO₂ and elapsed time every 15 seconds during the attempt', 'Stop and re-oxygenate if SpO₂ falls below 90% or 30 seconds elapse', '<strong>Confirm placement with waveform EtCO₂</strong> — auscultation and mist alone are insufficient', 'Note depth at the lip, secure the tube, and document the number at every handover', 'Post-intubation: chest X-ray, sedation infusion, NG tube, pressure area check'],
        compare: { cols: [
          { label: 'Correct placement', color: '#1B9E7E', bg: '#E9F6F2', body: 'Sustained EtCO₂ waveform<br>Equal bilateral air entry<br>Chest rise symmetrical<br>SpO₂ recovering' },
          { label: 'Oesophageal / dislodged ⚠', color: '#D4327A', bg: '#FAE6EF', body: 'No or fading EtCO₂<br>Gastric distension<br>No chest rise<br>Falling SpO₂<br><em>Remove and ventilate</em>' }
        ] } },
      { letter: '3', title: 'The DOPES check for sudden deterioration', hint: 'Any ventilated child who crashes', color: '#D4882A',
        bullets: ['<strong>D</strong>isplacement — tube out, too deep, or in the oesophagus. Check depth and EtCO₂.', '<strong>O</strong>bstruction — secretions, kinking, biting. Suction and inspect.', '<strong>P</strong>neumothorax — unequal air entry, tracheal shift, high pressures.', '<strong>E</strong>quipment — circuit disconnection, ventilator failure, empty oxygen.', '<strong>S</strong>tacked breaths — inadequate expiratory time causing gas trapping. Disconnect and allow exhalation.'],
        callout: 'When in doubt, <strong>disconnect from the ventilator and hand-ventilate with a bag</strong>. It converts an ambiguous alarm into direct information about compliance and resistance.' },
      { letter: '4', title: 'Central and arterial lines', hint: 'Insertion bundle and ongoing care', color: '#9B6BB5',
        bullets: ['Full insertion bundle: hand hygiene, maximal barrier precautions, chlorhexidine, sterile field, checklist', 'Position and drape the child; provide sedation and monitoring throughout', 'Confirm tip position on imaging before infusing vasoactive drugs', 'Arterial line: zero at the phlebostatic axis, assess the waveform, check distal perfusion hourly', 'Daily review of ongoing necessity — the line comes out the day it is no longer needed'],
        callout: 'The most effective CLABSI prevention is not the dressing — it is the <em>daily question</em>: does this child still need this line today?' },
      { letter: '5', title: 'Chest drains and other procedures', hint: 'Set-up, safety, troubleshooting', color: '#3AABCC',
        bullets: ['Keep the drainage system upright and below the level of the insertion site at all times', 'Swinging with respiration means the drain is patent; bubbling means an ongoing air leak', 'Never clamp a bubbling drain — tension pneumothorax can develop within minutes', 'Have clamps, sterile gauze and an occlusive dressing at the bedside for accidental disconnection', 'Record hourly drainage volume and character; escalate sudden high output or fresh blood'],
        callout: 'For lumbar puncture, arrange positioning, monitoring and analgesia — and remember that a child who cannot be positioned safely should not be punctured.' }
    ],
    panel: {
      label: 'Procedural sedation and analgesia',
      intro: 'Every invasive procedure in a child needs a plan for pain and distress. Untreated procedural pain has measurable long-term effects.',
      cards: [
        { label: 'Non-pharmacological', color: '#1B9E7E', body: 'Parental presence<br>Sucrose in infants<br>Distraction, play<br>Warmth and swaddling' },
        { label: 'Local &amp; topical', color: '#3AABCC', body: 'Topical anaesthetic cream<br>Buffered lidocaine<br>Cold spray<br>Plan the timing ahead' },
        { label: 'Systemic', color: '#D4327A', body: 'Ketamine, midazolam<br>Fentanyl, morphine<br>Airway skills mandatory<br>Full monitoring' }
      ],
      scale: [
        { label: 'Before', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Fasting status, consent, monitoring, resus trolley checked.' },
        { label: 'During', bg: '#FBF1E4', fg: '#D4882A', body: 'Continuous SpO₂ and ECG; a dedicated observer.' },
        { label: 'After', bg: '#FAE6EF', fg: '#D4327A', body: 'Recovery observations until baseline; discharge criteria.' },
        { label: 'Document', bg: '#2C1654', fg: '#C4A8D8', body: 'Drug, dose, times, pain score, adverse events.' }
      ],
      foot: '<strong style="color:#1A1030">One rule:</strong> the person giving procedural sedation must not be the person performing the procedure. If staffing does not allow that, the procedure waits.'
    },
    caseStudy: {
      quote: '"2-year-old, 12 kg — severe bronchopneumonia, now exhausted on CPAP with a rising CO₂. Decision made to intubate. You are the airway assistant."',
      cards: [
        { label: 'Tube &amp; depth', color: '#1B9E7E', body: '<strong>Uncuffed 4.5</strong><br>(2/4) + 4 = 4.5<br>Prepare 4.0 and 5.0<br>Depth ≈ 13.5 cm at lip' },
        { label: 'Drugs drawn', color: '#D4327A', body: '<strong>Ketamine 2 mg/kg</strong> = 24 mg<br>Fentanyl 1 mcg/kg = 12 mcg<br>Rocuronium 1 mg/kg = 12 mg<br>Adrenaline diluted, ready' },
        { label: 'Monitoring', color: '#9B6BB5', body: '<strong>SpO₂ · ECG · NIBP</strong><br>Waveform EtCO₂ attached<br>Suction on and tested<br>BVM with reservoir checked' }
      ],
      analysis: 'SOAPME read aloud before induction, with the failed-attempt plan stated: two attempts by the first intubator, then LMA and senior call. Pre-oxygenate 3 minutes, call SpO₂ and time every 15 seconds, confirm with waveform EtCO₂, secure, document depth, then chest X-ray and sedation infusion.'
    },
    grid: {
      label: 'Airway sizing quick reference',
      intro: 'Calculate and lay out three tube sizes before every intubation — the one you expect, and half a size either side.',
      items: [
        { key: 'Uncuffed tube size', color: '#1B9E7E', body: '(Age / 4) + 4' },
        { key: 'Cuffed tube size', color: '#3AABCC', body: '(Age / 4) + 3.5' },
        { key: 'Depth at lip (oral)', color: '#D4882A', body: 'Tube size × 3 cm' },
        { key: 'Suction catheter size', color: '#D4327A', body: 'Tube size × 2 (Fr)' },
        { key: 'Laryngoscope blade', color: '#9B6BB5', body: 'Straight in infants, curved in children' },
        { key: 'Attempt limit', color: '#2189A8', body: '30 sec or SpO₂ &lt;90% — stop, re-oxygenate' }
      ],
      foot: '<strong style="color:#1A1030">Always at the bedside:</strong> working suction, a tested bag-valve-mask with reservoir, an appropriately sized LMA, and a diluted vasopressor.'
    },
    objectives: [
      'Complete and read aloud a SOAPME checklist before intubation',
      'Calculate tube size and insertion depth for any age',
      'Position a child correctly for laryngoscopy, including infants',
      'Confirm tube placement using waveform capnography',
      'Apply the DOPES sequence to a ventilated child who deteriorates suddenly',
      'Assist with central and arterial line insertion using the full sterile bundle',
      'Manage a chest drain safely and recognise when not to clamp it',
      'Plan non-pharmacological and pharmacological analgesia for every procedure'
    ],
    videoTopics: ['1. SOAPME', '2. Intubation', '3. DOPES', '4. Lines & drains', '5. Live Case'],
    quiz: [
      { answer: 1, text: 'What is the correct uncuffed tube size for a 4-year-old?',
        options: ['4.0', '5.0', '6.0', '6.5'],
        why: 'Uncuffed size = (age/4) + 4 = (4/4) + 4 = 5.0. Prepare 4.5 and 5.5 as alternatives.' },
      { answer: 2, text: 'The most reliable bedside confirmation of endotracheal tube placement is:',
        options: ['Misting of the tube', 'Auscultation of both axillae', 'A sustained waveform end-tidal CO₂ trace', 'Chest rise on hand ventilation'],
        why: 'Sustained waveform capnography is the standard of confirmation. Misting, auscultation and chest rise can all be misleading.' },
      { answer: 0, text: 'A ventilated child suddenly desaturates with high airway pressures. Applying DOPES, your first actions are:',
        options: ['Disconnect and hand-ventilate while checking tube displacement and obstruction', 'Increase the FiO₂ and wait for the blood gas', 'Give a fluid bolus', 'Deepen sedation and re-check in ten minutes'],
        why: 'Disconnecting and hand-ventilating gives immediate information on compliance and resistance while displacement and obstruction are excluded.' },
      { answer: 3, text: 'A chest drain is bubbling continuously. You should:',
        options: ['Clamp the drain and inform the doctor', 'Milk the tubing to clear the leak', 'Raise the drainage bottle above the insertion site', 'Leave it unclamped, document the leak and escalate'],
        why: 'Bubbling indicates an ongoing air leak. Clamping risks a tension pneumothorax — leave it unclamped, document and escalate.' }
    ]
  },

  {
    n: 6, pillar: 2,
    title: 'Mechanical<br>Ventilation',
    short: 'Mechanical Ventilation',
    subtitle: 'Understanding modes, reading the numbers, protecting the lung and nursing the ventilated child through to extubation.',
    framework: 'Lung-protective ventilation',
    tools: 'PIP · PEEP · Vt · Graphics',
    duration: '1 hr live + 3 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'Reading the ventilator with the team — what each number means and which alarm needs you now.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Modes explained, lung-protective targets, ARDS strategy, weaning and extubation readiness.', meta: '3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Alarm triage drill — six alarms, six decisions, and one child who needs disconnecting now.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'Lung-protective ventilation — the targets that reduce ventilator-induced injury',
      title: 'Low volume · Limited pressure · Adequate PEEP · Permissive hypercapnia',
      items: [
        { letter: 'Vt', name: 'Tidal volume', detail: '5–7 mL/kg<br>Ideal body weight', color: '#1B9E7E' },
        { letter: 'ΔP', name: 'Driving pressure', detail: 'Plateau − PEEP<br>Keep &lt;15 cmH₂O', color: '#3AABCC' },
        { letter: 'P', name: 'Plateau pressure', detail: 'Target &lt;28–30<br>cmH₂O', color: '#D4882A' },
        { letter: 'PEEP', name: 'PEEP', detail: '5–8 baseline<br>Higher in ARDS', color: '#D4327A' },
        { letter: 'pH', name: 'Permissive hypercapnia', detail: 'Accept pH ≥7.20<br>Avoid over-ventilation', color: '#9B6BB5' }
      ],
      footnote: 'The ventilator does not cure the lung — it buys time while the lung heals. <strong style="color:rgba(255,255,255,0.65)">Every setting is a compromise</strong> between adequate gas exchange and avoiding further injury.'
    },
    accordionLabel: 'Core content · Settings, alarms and nursing care',
    accordion: [
      { letter: '1', title: 'Modes and what they control', hint: 'Volume, pressure, support', color: '#1B9E7E',
        bullets: ['<strong>Volume control</strong> — you set the tidal volume; pressure varies with compliance', '<strong>Pressure control</strong> — you set the pressure; volume varies with compliance. Watch the delivered Vt.', '<strong>SIMV</strong> — mandatory breaths synchronised with the child\'s own effort', '<strong>Pressure support</strong> — the child triggers every breath; the ventilator assists each one', 'Mode matters less than whether the delivered volume and pressure are within safe limits'],
        callout: 'Whatever the mode, ask the same three questions at every check: <em>what volume is being delivered, at what pressure, and is the child working with or against the machine?</em>' },
      { letter: '2', title: 'The numbers you record every hour', hint: 'And what a change in each means', color: '#3AABCC',
        bullets: ['<strong>PIP</strong> — rising means worsening compliance or increased resistance; investigate, do not just accept', '<strong>PEEP</strong> — keeps alveoli open; sudden loss means a leak or disconnection', '<strong>Tidal volume</strong> — falling Vt in pressure control is an early sign of deterioration', '<strong>Minute ventilation</strong> — the driver of CO₂ clearance', '<strong>FiO₂ and SpO₂ together</strong> — a saturation without its FiO₂ tells you nothing'],
        compare: { cols: [
          { label: 'Rising PIP, low Vt', color: '#D4882A', bg: '#FBF1E4', body: 'Worsening compliance<br>Secretions, collapse<br>Pneumothorax<br>Abdominal distension' },
          { label: 'Falling PIP, high Vt', color: '#3AABCC', bg: '#E2F2F8', body: 'Improving compliance<br>Or a circuit leak<br>Or tube dislodgement<br>Check EtCO₂ and chest rise' }
        ] } },
      { letter: '3', title: 'Alarms — triage in order', hint: 'Which alarms mean go now', color: '#D4327A',
        bullets: ['<strong>Apnoea / disconnection</strong> — immediate; check the child first, then the circuit', '<strong>High pressure</strong> — obstruction, secretions, biting, pneumothorax, stacked breaths', '<strong>Low pressure / low volume</strong> — leak, extubation, cuff deflation, disconnection', '<strong>High rate</strong> — pain, agitation, hypoxia, fever, inadequate support', 'Never silence an alarm you have not explained — silencing without diagnosis is the classic critical incident'],
        callout: 'The correct first response to a confusing ventilator alarm is to <strong>look at the child</strong>: chest movement, colour, saturation, EtCO₂ trace. The machine describes; the child decides.' },
      { letter: '4', title: 'Nursing the ventilated child', hint: 'The bundle that prevents harm', color: '#9B6BB5',
        bullets: ['Head of bed 30° unless contraindicated — reduces aspiration and VAP risk', 'Oral care with chlorhexidine or per unit protocol, 6–12 hourly', 'Suction only when clinically indicated; pre-oxygenate, limit to 10 seconds, closed system where available', 'Cuff pressure 20–25 cmH₂O; document tube depth at every handover', 'Daily sedation review, spontaneous breathing trial assessment, early mobilisation, VTE and ulcer prophylaxis'],
        callout: 'Ventilator-associated pneumonia is prevented by the <em>whole</em> bundle delivered every time — head elevation, oral care, sedation review and readiness assessment. Partial delivery is non-compliance.' },
      { letter: '5', title: 'Weaning and extubation', hint: 'Readiness, the trial, and what follows', color: '#D4882A',
        bullets: ['Readiness: cause resolving, FiO₂ ≤0.4, PEEP ≤5–6, haemodynamically stable, awake and triggering', 'Spontaneous breathing trial on minimal support for 30–120 min with close observation', 'Failure signs: rising RR, falling Vt, tachycardia, sweating, agitation, rising CO₂', 'Before extubation: NBM, suction, steroids if stridor risk, adrenaline nebuliser ready, resus trolley checked', 'Post-extubation: HFNC or CPAP support, watch for stridor, do not feed until swallow is safe'],
        callout: 'Extubation failure and reintubation carry real risk. A well-planned extubation with support ready is safer than an optimistic one — but <em>unnecessary delay</em> also causes harm.' }
    ],
    panel: {
      label: 'Reading the graphics — pressure, flow and volume',
      intro: 'You do not need to change settings to use the waveforms. They show you problems before the numbers or the alarms do.',
      cards: [
        { label: 'Pressure–time', color: '#1B9E7E', body: 'Shows PIP and plateau<br>A rising slope = resistance<br>Sudden spikes = coughing<br>Baseline = PEEP' },
        { label: 'Flow–time', color: '#D4882A', body: 'Expiratory flow not reaching<br>baseline = gas trapping<br>Sawtooth = secretions<br>Notching = asynchrony' },
        { label: 'Volume–time', color: '#D4327A', body: 'Expired &lt; inspired = leak<br>Rising baseline = trapping<br>Confirms delivered Vt<br>Cuff or circuit check' }
      ],
      scale: [
        { label: 'Gas trapping', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Expiratory flow cut short. Lengthen expiratory time.' },
        { label: 'Secretions', bg: '#FBF1E4', fg: '#D4882A', body: 'Sawtooth flow pattern. Suction and reassess.' },
        { label: 'Leak', bg: '#FAE6EF', fg: '#D4327A', body: 'Expired volume less than inspired. Check cuff and circuit.' },
        { label: 'Asynchrony', bg: '#2C1654', fg: '#C4A8D8', body: 'Child fighting the ventilator. Review support and sedation.' }
      ],
      foot: '<strong style="color:#1A1030">Escalate the waveform, not just the number.</strong> "Expiratory flow is not returning to baseline and the PIP is climbing" is a far more actionable handover than "the ventilator keeps alarming".'
    },
    caseStudy: {
      quote: '"5-year-old, 18 kg — ARDS following severe pneumonia, day 2 of ventilation. FiO₂ 0.65, PEEP 10, pressure control. The ventilator has begun alarming high pressure and the delivered volume has fallen."',
      cards: [
        { label: 'Settings', color: '#1B9E7E', body: '<strong>Vt target 5–7 mL/kg</strong><br>= 90–126 mL<br>Delivered now 68 mL<br>PEEP 10, FiO₂ 0.65' },
        { label: 'Findings', color: '#D4327A', body: '<strong>PIP risen 26 → 34</strong><br>Sawtooth flow trace<br>Coarse creps right side<br>SpO₂ 89%' },
        { label: 'Action', color: '#9B6BB5', body: '<strong>Hand-ventilate</strong><br>DOPES sequence<br>Suction — thick plug<br>Recruit, reassess Vt' }
      ],
      analysis: 'Falling tidal volume with rising PIP and a sawtooth flow trace points to airway obstruction from secretions rather than a lung problem. Suction resolves it; if the volume does not recover, exclude pneumothorax and tube displacement. Maintain lung-protective targets and accept permissive hypercapnia to pH 7.20.'
    },
    grid: {
      label: 'Target settings quick reference · 18-kg child',
      intro: 'Know the safe window for this child before the round starts, so a drift out of it is obvious.',
      items: [
        { key: 'Tidal volume 5–7 mL/kg', color: '#1B9E7E', body: '90–126 mL' },
        { key: 'Plateau pressure', color: '#3AABCC', body: 'Keep below 28–30 cmH₂O' },
        { key: 'Driving pressure', color: '#D4882A', body: 'Plateau − PEEP, below 15 cmH₂O' },
        { key: 'PEEP baseline', color: '#D4327A', body: '5–8 cmH₂O; higher in ARDS' },
        { key: 'Cuff pressure', color: '#9B6BB5', body: '20–25 cmH₂O, checked per shift' },
        { key: 'Suction catheter', color: '#2189A8', body: 'Tube size × 2 Fr, ≤10 seconds' }
      ],
      foot: '<strong style="color:#1A1030">Permissive hypercapnia:</strong> accept a raised PaCO₂ and a pH down to about 7.20 rather than injure the lung with higher volumes and pressures.'
    },
    objectives: [
      'Describe the common ventilation modes and what each one controls',
      'State lung-protective targets for tidal volume, plateau and driving pressure',
      'Record and interpret hourly PIP, PEEP, tidal volume and FiO₂ together',
      'Triage ventilator alarms and identify those requiring immediate action',
      'Recognise gas trapping, secretions, leak and asynchrony on the waveforms',
      'Deliver the full ventilator care bundle to prevent VAP',
      'Assess readiness for weaning and support a spontaneous breathing trial',
      'Prepare for extubation and recognise early post-extubation failure'
    ],
    videoTopics: ['1. Modes', '2. Numbers', '3. Alarms', '4. Weaning', '5. Live Case'],
    quiz: [
      { answer: 1, text: 'The lung-protective tidal volume target for a 20-kg child is approximately:',
        options: ['40–60 mL', '100–140 mL', '200–240 mL', '300 mL'],
        why: 'Lung-protective ventilation uses 5–7 mL/kg — for 20 kg that is 100–140 mL.' },
      { answer: 2, text: 'On pressure-control ventilation, the delivered tidal volume falls while PIP rises. This most likely indicates:',
        options: ['Improving lung compliance', 'A circuit leak', 'Worsening compliance or airway obstruction', 'Excessive sedation'],
        why: 'Rising pressure with falling volume means the lung or airway is harder to ventilate — secretions, collapse, pneumothorax or abdominal distension.' },
      { answer: 0, text: 'A ventilator alarms and you cannot immediately explain it. The correct first action is:',
        options: ['Look at the child — chest movement, colour, SpO₂ and EtCO₂', 'Silence the alarm and continue the medication round', 'Increase the FiO₂ to 1.0 and document', 'Change the ventilator circuit'],
        why: 'The machine describes; the child decides. Assess the child first, then work through the circuit. Never silence an unexplained alarm.' },
      { answer: 3, text: 'Which set of findings best indicates readiness for a spontaneous breathing trial?',
        options: ['FiO₂ 0.8, PEEP 12, deeply sedated', 'Rising noradrenaline requirement, PEEP 10', 'New fever with rising CRP and FiO₂ 0.6', 'FiO₂ 0.35, PEEP 5, haemodynamically stable, awake and triggering'],
        why: 'Readiness requires the cause to be resolving, low FiO₂ and PEEP, haemodynamic stability and an awake, triggering child.' }
    ]
  },

  {
    n: 7, pillar: 3,
    title: 'Neurological<br>Emergencies',
    short: 'Neuro Emergencies',
    subtitle: 'Status epilepticus, raised intracranial pressure and the coma work-up — protecting the brain that is still recoverable.',
    framework: 'Time-based seizure protocol',
    tools: 'GCS · AVPU · Pupils · ICP',
    duration: '1 hr live + 2–3 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'A status epilepticus timeline — what should have happened at 5, 10 and 20 minutes, and what actually did.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Seizure pharmacology by weight, ICP physiology, paediatric GCS, neuro-observation technique.', meta: '2–3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Raised ICP drill — recognise the triad, position, ventilate, escalate, prepare hyperosmolar therapy.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'Status epilepticus — a protocol driven by the clock, not by appearance',
      title: '0 min ABC · 5 min benzodiazepine · 10 min repeat · 20 min second line · 40 min anaesthesia',
      items: [
        { letter: '0', name: 'ABC + glucose', detail: 'Airway, oxygen<br>Check glucose now', color: '#1B9E7E' },
        { letter: '5', name: 'First benzo', detail: 'Midazolam or<br>lorazepam', color: '#3AABCC' },
        { letter: '10', name: 'Second benzo', detail: 'One repeat only<br>Prepare second line', color: '#D4882A' },
        { letter: '20', name: 'Second line', detail: 'Levetiracetam,<br>phenytoin, valproate', color: '#D4327A' },
        { letter: '40', name: 'Anaesthesia', detail: 'Intubate, infusion<br>PICU, EEG', color: '#9B6BB5' }
      ],
      footnote: 'Note the time the seizure started and <strong style="color:rgba(255,255,255,0.65)">call out elapsed minutes aloud</strong>. The commonest failure in status epilepticus is not the wrong drug — it is the right drug given late.'
    },
    accordionLabel: 'Core content · Emergency by emergency',
    accordion: [
      { letter: '1', title: 'Status epilepticus', hint: 'Stop the seizure, protect the brain', color: '#1B9E7E',
        bullets: ['Convulsive seizure lasting over 5 minutes, or recurrent seizures without recovery between', 'Airway, high-flow oxygen, position on the side, suction ready — do not force anything into the mouth', '<strong>Check blood glucose immediately</strong> — hypoglycaemia is a fully reversible cause', 'Midazolam 0.15 mg/kg IV or 0.3 mg/kg buccal; only one repeat dose of benzodiazepine', 'Monitor for respiratory depression after every dose — have the bag-valve-mask ready'],
        callout: 'Two benzodiazepine doses maximum. Beyond that, further benzodiazepines cause apnoea without stopping the seizure — <strong>move to the second-line agent</strong>.' },
      { letter: '2', title: 'Raised intracranial pressure', hint: 'Recognise, position, escalate', color: '#D4327A',
        bullets: ['Early: headache, vomiting, irritability, drowsiness, deteriorating conscious level', 'Cushing triad (late): hypertension, bradycardia, irregular breathing — impending herniation', 'Unequal or sluggish pupils, abnormal posturing, falling GCS are emergencies', 'Nurse head up 30°, neck midline, avoid neck-line compression and tight tapes', 'Cluster care carefully — every suction, turn and noise raises ICP transiently'],
        compare: { cols: [
          { label: 'Lowers ICP', color: '#1B9E7E', bg: '#E9F6F2', body: 'Head up 30°, neck midline<br>Normocapnia<br>Normothermia<br>Adequate sedation<br>Treat pain and seizures' },
          { label: 'Raises ICP ⚠', color: '#D4327A', bg: '#FAE6EF', body: 'Neck flexion or rotation<br>Coughing, straining<br>Fever, pain, agitation<br>Prolonged suctioning<br>Clustered heavy handling' }
        ] } },
      { letter: '3', title: 'Neurological observation', hint: 'Doing it consistently is the skill', color: '#D4882A',
        bullets: ['Use the paediatric GCS below 5 years — the verbal scale differs from the adult version', 'AVPU for rapid assessment; GCS for trending; both need the same observer technique', 'Pupils: size, equality, reaction to light — document actual size in millimetres', 'Limb power and tone, posturing, and any focal or asymmetric finding', 'A <strong>2-point fall in GCS is an emergency</strong> — escalate immediately, do not wait for the next round'],
        callout: 'Neuro observations are only useful if performed identically each time. Where possible, the same nurse repeats them across the shift and hands over technique as well as numbers.' },
      { letter: '4', title: 'The child with altered consciousness', hint: 'A structured work-up', color: '#9B6BB5',
        bullets: ['Immediate reversibles: glucose, oxygen, perfusion, temperature, opioid or toxin exposure', 'Infection: meningitis and encephalitis — do not delay antibiotics for imaging or lumbar puncture', 'Metabolic: sodium, ammonia, liver function, inborn errors in young infants', 'Trauma and non-accidental injury — examine fully and document findings carefully', 'Imaging before lumbar puncture where raised ICP is suspected'],
        callout: 'In an unexplained coma, <strong>hypoglycaemia and meningitis are the two diagnoses you cannot afford to miss</strong>, because both are treatable within minutes and both are commonly delayed.' },
      { letter: '5', title: 'Neuroprotective nursing care', hint: 'The bundle that preserves function', color: '#3AABCC',
        bullets: ['Strict normothermia — treat fever promptly and actively', 'Normoglycaemia — avoid both hypo- and hyperglycaemia', 'Normocapnia — over-ventilation reduces cerebral blood flow; under-ventilation raises ICP', 'Adequate analgesia and sedation, with a documented sedation score', 'Seizure watch, eye care, pressure area care, and family communication with an unresponsive child'],
        callout: 'Speak to the unresponsive child and support the family to do the same. Presence, familiar voices and touch are part of neurological care, not decoration around it.' }
    ],
    panel: {
      label: 'Paediatric GCS — what differs below 5 years',
      intro: 'The eye and motor scales are unchanged. The verbal scale is what changes, and getting it wrong falsely reassures the whole team.',
      cards: [
        { label: 'Eye opening (4)', color: '#1B9E7E', body: '4 Spontaneous<br>3 To speech<br>2 To pain<br>1 None' },
        { label: 'Verbal — infant (5)', color: '#D4327A', body: '5 Coos, babbles<br>4 Irritable cry<br>3 Cries to pain<br>2 Moans to pain<br>1 None' },
        { label: 'Motor (6)', color: '#9B6BB5', body: '6 Spontaneous / obeys<br>5 Localises pain<br>4 Withdraws<br>3 Flexion<br>2 Extension<br>1 None' }
      ],
      scale: [
        { label: 'GCS 13–15', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Mild. Continue regular observation.' },
        { label: 'GCS 9–12', bg: '#FBF1E4', fg: '#D4882A', body: 'Moderate. Increase frequency, senior review.' },
        { label: 'GCS ≤8', bg: '#FAE6EF', fg: '#D4327A', body: 'Airway at risk. Anticipate intubation.' },
        { label: 'Fall of ≥2', bg: '#2C1654', fg: '#C4A8D8', body: 'Emergency at any starting score. Escalate now.' }
      ],
      foot: '<strong style="color:#1A1030">Record the components, not just the total.</strong> A GCS of 9 made of E3 V2 M4 is a very different child from E1 V4 M4 — and the trend within components predicts deterioration first.'
    },
    caseStudy: {
      quote: '"3-year-old, 14 kg — brought in convulsing. Family report the seizure began about 12 minutes before arrival. Still convulsing on the trolley. One dose of buccal midazolam given at home."',
      cards: [
        { label: 'Immediate', color: '#1B9E7E', body: '<strong>Airway + O₂</strong><br>Left lateral, suction<br>Glucose 3.1 mmol/L<br>Treat hypoglycaemia now' },
        { label: 'Seizure drugs', color: '#D4327A', body: '<strong>1 benzo already given</strong><br>Midazolam 0.15 mg/kg<br>= 2.1 mg IV — final benzo<br>Prepare levetiracetam' },
        { label: 'Second line', color: '#9B6BB5', body: '<strong>Levetiracetam 40 mg/kg</strong><br>= 560 mg over 15 min<br>Anaesthetist alerted<br>PICU bed requested' }
      ],
      analysis: 'This is established status epilepticus at 12 minutes with a home dose already given — one further benzodiazepine only, then straight to the second-line agent while the anaesthetist is called. Hypoglycaemia is a coexisting reversible cause and must be corrected immediately. Someone must own the clock and call out elapsed time.'
    },
    grid: {
      label: 'Weight-based seizure doses · 14-kg child',
      intro: 'Have these calculated and drawn before the 10-minute mark, not after it.',
      items: [
        { key: 'Midazolam IV 0.15 mg/kg', color: '#1B9E7E', body: '2.1 mg (max 2 doses total)' },
        { key: 'Midazolam buccal 0.3 mg/kg', color: '#3AABCC', body: '4.2 mg if no IV access' },
        { key: 'Levetiracetam 40 mg/kg', color: '#D4882A', body: '560 mg over 15 min' },
        { key: 'Phenytoin 20 mg/kg', color: '#D4327A', body: '280 mg over 20 min, ECG monitoring' },
        { key: 'Dextrose 10% 2 mL/kg', color: '#9B6BB5', body: '28 mL for hypoglycaemia' },
        { key: '3% saline 3 mL/kg', color: '#2189A8', body: '42 mL for raised ICP, per protocol' }
      ],
      foot: '<strong style="color:#1A1030">Phenytoin must be given slowly with ECG monitoring</strong> — rapid infusion causes hypotension and arrhythmia. Never mix it with glucose-containing fluid.'
    },
    objectives: [
      'Define status epilepticus and initiate the time-based protocol from minute zero',
      'Limit benzodiazepines to two doses and move to second-line agents on time',
      'Check and treat hypoglycaemia as an immediate reversible cause',
      'Recognise early and late signs of raised intracranial pressure',
      'Position and handle a child to minimise intracranial pressure rises',
      'Perform paediatric GCS correctly and record component scores',
      'Escalate a fall of two or more GCS points immediately',
      'Deliver the neuroprotective bundle: normothermia, normoglycaemia, normocapnia, analgesia'
    ],
    videoTopics: ['1. Status', '2. Raised ICP', '3. Neuro obs', '4. Coma', '5. Live Case'],
    quiz: [
      { answer: 2, text: 'A child has received two doses of benzodiazepine and is still convulsing at 20 minutes. The next step is:',
        options: ['A third dose of midazolam', 'Buccal midazolam in addition', 'A second-line agent such as levetiracetam or phenytoin', 'Observe for a further 10 minutes'],
        why: 'Only two benzodiazepine doses are given. Further doses cause respiratory depression without terminating the seizure — move to a second-line agent.' },
      { answer: 1, text: 'Which nursing measure helps lower raised intracranial pressure?',
        options: ['Neck flexed and rotated to the side for line access', 'Head of bed elevated 30° with the neck midline', 'Clustering all care into a single long episode', 'Routine hourly deep suctioning'],
        why: 'Head-up 30° with a midline neck promotes venous drainage. Flexion, rotation, clustered handling and unnecessary suctioning all raise ICP.' },
      { answer: 3, text: 'A child\'s GCS falls from 13 to 10 over one hour. You should:',
        options: ['Document and reassess at the next scheduled round', 'Reduce the sedation and re-score in 4 hours', 'Record only the total score in the notes', 'Escalate immediately as a significant deterioration'],
        why: 'A fall of two or more GCS points is an emergency at any starting score and requires immediate escalation.' },
      { answer: 0, text: 'In an unexplained paediatric coma, which two diagnoses must be excluded first because both are rapidly treatable?',
        options: ['Hypoglycaemia and meningitis', 'Migraine and epilepsy', 'Anaemia and hypothyroidism', 'Constipation and dehydration'],
        why: 'Hypoglycaemia and CNS infection are both treatable within minutes and are the most commonly delayed diagnoses in altered consciousness.' }
    ]
  },

  {
    n: 8, pillar: 3,
    title: 'Renal, Fluid<br>& Metabolic Care',
    short: 'Renal & Metabolic',
    subtitle: 'Fluid balance done properly, acute kidney injury, electrolyte emergencies, DKA and the child on dialysis.',
    framework: 'Intake–output discipline',
    tools: 'Fluid chart · Electrolytes · CRRT',
    duration: '1 hr live + 2–3 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'A DKA admission hour by hour, and an AKI case where the fluid chart made the diagnosis.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Maintenance fluid calculation, AKI staging, potassium and sodium emergencies, dialysis basics.', meta: '2–3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Hyperkalaemia drill and a fluid-overload recognition exercise using real chart data.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'Fluid balance — the four questions you answer every shift',
      title: 'What went in · What came out · What is the balance · What does it mean',
      items: [
        { letter: 'IN', name: 'Total intake', detail: 'Feeds, fluids, drugs<br>flushes, blood', color: '#1B9E7E' },
        { letter: 'OUT', name: 'Total output', detail: 'Urine, drains, stool<br>vomit, losses', color: '#3AABCC' },
        { letter: 'Δ', name: 'Balance', detail: 'Per shift and<br>cumulative', color: '#D4882A' },
        { letter: 'kg', name: 'Weight', detail: 'Daily, same time<br>same scales', color: '#D4327A' },
        { letter: '?', name: 'Interpretation', detail: 'Overloaded, dry<br>or just right', color: '#9B6BB5' }
      ],
      footnote: '<strong style="color:rgba(255,255,255,0.65)">Drug and flush volumes are intake.</strong> In a small infant on multiple infusions they can exceed the prescribed maintenance fluid — and are the most commonly missed entry on the chart.'
    },
    accordionLabel: 'Core content · Fluids to dialysis',
    accordion: [
      { letter: '1', title: 'Maintenance fluids and adjustments', hint: 'Holliday–Segar and when to deviate', color: '#1B9E7E',
        bullets: ['4 mL/kg/hr for the first 10 kg, 2 mL/kg/hr for the next 10, 1 mL/kg/hr thereafter', 'Use isotonic fluid with glucose in most children — hypotonic fluid causes hyponatraemia', 'Increase for fever, burns and high losses; restrict in SIADH, cardiac and renal failure', 'Subtract the volume delivered by infusions and drugs from the prescribed maintenance', 'Recalculate whenever the weight, the losses or the clinical state changes'],
        callout: 'A 15-kg child needs 4×10 + 2×5 = <strong>50 mL/hr</strong>. If infusions already deliver 20 mL/hr, the maintenance bag runs at 30 mL/hr — not 50.' },
      { letter: '2', title: 'Recognising overload and dehydration', hint: 'The chart plus the child', color: '#D4327A',
        bullets: ['Overload: weight gain, periorbital and dependent oedema, new crepitations, rising oxygen need', 'Overload in the ventilated child shows first as a rising FiO₂ requirement, not as swelling', 'Dehydration: sunken eyes, dry mucosa, reduced skin turgor, tachycardia, low urine output', 'Estimate deficit from acute weight change where a recent weight is available', '<strong>Report a trend</strong> of positive balance early — do not wait for the shift total'],
        compare: { cols: [
          { label: 'Fluid overload', color: '#3AABCC', bg: '#E2F2F8', body: 'Weight up<br>Positive balance<br>Oedema, hepatomegaly<br>New crepitations<br>Rising FiO₂ need' },
          { label: 'Hypovolaemia', color: '#D4327A', bg: '#FAE6EF', body: 'Weight down<br>Negative balance<br>Dry mucosa, sunken eyes<br>Tachycardia, CRT &gt;2s<br>Urine &lt;1 mL/kg/hr' }
        ] } },
      { letter: '3', title: 'Acute kidney injury', hint: 'Staging, causes, nursing priorities', color: '#D4882A',
        bullets: ['Staged by rise in creatinine and fall in urine output over time', 'Pre-renal (hypoperfusion) is the commonest cause in PICU and is often reversible', 'Priorities: restore perfusion, stop nephrotoxins, review every drug dose for renal clearance', 'Strict hourly urine output, daily weight, meticulous balance charting', 'Watch for hyperkalaemia, acidosis, hypertension and overload as complications'],
        callout: 'Check every prescription against renal function. Aminoglycosides, NSAIDs, contrast and high-dose vancomycin are the usual culprits in worsening AKI.' },
      { letter: '4', title: 'Electrolyte emergencies', hint: 'Potassium, sodium, glucose, calcium', color: '#9B6BB5',
        bullets: ['<strong>Hyperkalaemia</strong> — ECG changes first: peaked T waves, wide QRS. Calcium, insulin-dextrose, salbutamol, then removal.', '<strong>Hypokalaemia</strong> — arrhythmia risk; never give a rapid potassium bolus, always dilute and infuse', '<strong>Hyponatraemia</strong> — correct slowly; rapid correction causes osmotic demyelination', '<strong>Hypernatraemia</strong> — correct slowly; rapid correction causes cerebral oedema', '<strong>Hypocalcaemia</strong> — tetany, seizures, prolonged QT; common after massive transfusion'],
        callout: 'The two absolute rules: <strong>potassium is never given as a rapid push</strong>, and <strong>sodium is never corrected quickly</strong> — no more than 8–10 mmol/L in 24 hours.' },
      { letter: '5', title: 'DKA and the child on dialysis', hint: 'High-risk, protocol-driven care', color: '#3AABCC',
        bullets: ['DKA: fluids first and cautiously, insulin infusion after, never an insulin bolus in children', 'Cerebral oedema is the leading cause of death in paediatric DKA — headache and falling GCS are red flags', 'Add glucose to the fluid once blood glucose falls below the protocol threshold; do not stop insulin', 'Peritoneal dialysis: strict asepsis, cloudy effluent means peritonitis, chart every cycle in and out', 'CRRT: circuit patency, filtration fluid balance to the millilitre, watch for hypothermia and hypocalcaemia'],
        callout: 'In DKA, a child who develops a headache and becomes drowsy several hours into treatment is developing <em>cerebral oedema</em> until proven otherwise. Escalate immediately.' }
    ],
    panel: {
      label: 'Hyperkalaemia — recognition and the sequence',
      intro: 'Hyperkalaemia kills through arrhythmia, and the ECG changes before the child looks unwell. The sequence is stabilise, shift, then remove.',
      cards: [
        { label: 'Stabilise the heart', color: '#1B9E7E', body: 'Calcium gluconate 10%<br>0.5 mL/kg slow IV<br>Protects the myocardium<br>Does not lower K⁺' },
        { label: 'Shift into cells', color: '#D4882A', body: 'Insulin with dextrose<br>Salbutamol nebulised<br>Sodium bicarbonate<br>Monitor glucose closely' },
        { label: 'Remove from body', color: '#D4327A', body: 'Diuretics if urine output<br>Binding resins<br>Dialysis / CRRT<br>Stop all K⁺ intake' }
      ],
      scale: [
        { label: 'Peaked T waves', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Earliest ECG change. Act now, do not wait.' },
        { label: 'Flat P, wide QRS', bg: '#FBF1E4', fg: '#D4882A', body: 'Progressive. Give calcium immediately.' },
        { label: 'Sine wave', bg: '#FAE6EF', fg: '#D4327A', body: 'Pre-arrest. Full treatment plus arrest readiness.' },
        { label: 'Stop all K⁺', bg: '#2C1654', fg: '#C4A8D8', body: 'Check every fluid, feed and drug for potassium.' }
      ],
      foot: '<strong style="color:#1A1030">Recheck after treatment.</strong> Insulin-dextrose and salbutamol only move potassium into cells for a few hours — without removal it will rebound, usually on the next shift.'
    },
    caseStudy: {
      quote: '"11-year-old, 34 kg — newly diagnosed type 1 diabetes. pH 7.08, glucose 31 mmol/L, ketones 5.8, drowsy but rousable. Four hours into the DKA protocol she reports a severe headache."',
      cards: [
        { label: 'On admission', color: '#1B9E7E', body: '<strong>pH 7.08</strong><br>Glucose 31 mmol/L<br>Na⁺ 129, K⁺ 5.2<br>Deep sighing breaths' },
        { label: 'Treatment', color: '#3AABCC', body: '<strong>Cautious fluids first</strong><br>Insulin infusion, no bolus<br>Hourly glucose &amp; neuro obs<br>Strict fluid balance' },
        { label: 'Hour 4 · red flag', color: '#D4327A', body: '<strong>Severe headache</strong><br>GCS 15 → 13<br>Rising BP, falling HR<br><em>Cerebral oedema</em>' }
      ],
      analysis: 'A headache with a falling GCS several hours into DKA treatment is cerebral oedema until proven otherwise — the leading cause of death in paediatric DKA. Escalate immediately, reduce fluid rate per protocol, head up, prepare hyperosmolar therapy, and do not delay for imaging.'
    },
    grid: {
      label: 'Maintenance fluid quick reference',
      intro: 'Holliday–Segar, then subtract what the infusions are already delivering.',
      items: [
        { key: 'First 10 kg', color: '#1B9E7E', body: '4 mL/kg/hr' },
        { key: 'Next 10 kg', color: '#3AABCC', body: '2 mL/kg/hr' },
        { key: 'Each kg above 20', color: '#D4882A', body: '1 mL/kg/hr' },
        { key: 'Example · 15 kg', color: '#D4327A', body: '40 + 10 = 50 mL/hr total' },
        { key: 'Example · 34 kg', color: '#9B6BB5', body: '40 + 20 + 14 = 74 mL/hr total' },
        { key: 'Target urine output', color: '#2189A8', body: '&gt;1 mL/kg/hr (&gt;2 in infants)' }
      ],
      foot: '<strong style="color:#1A1030">Use isotonic fluid.</strong> Hypotonic maintenance fluid is a recognised cause of hospital-acquired hyponatraemia, seizures and death in children.'
    },
    objectives: [
      'Calculate maintenance fluids using Holliday–Segar and adjust for clinical state',
      'Account for drug and flush volumes as intake on the fluid chart',
      'Recognise fluid overload and hypovolaemia from the chart and the child together',
      'Describe the causes and nursing priorities of acute kidney injury',
      'Identify hyperkalaemia on the ECG and follow the stabilise–shift–remove sequence',
      'State the safe rate of sodium correction and the risks of correcting too fast',
      'Deliver DKA care safely and recognise cerebral oedema early',
      'Support a child on peritoneal dialysis or CRRT with accurate balance charting'
    ],
    videoTopics: ['1. Fluids', '2. AKI', '3. Electrolytes', '4. DKA', '5. Live Case'],
    quiz: [
      { answer: 1, text: 'What is the maintenance fluid rate for a 26-kg child?',
        options: ['52 mL/hr', '66 mL/hr', '104 mL/hr', '130 mL/hr'],
        why: '4×10 + 2×10 + 1×6 = 40 + 20 + 6 = 66 mL/hr.' },
      { answer: 0, text: 'Which finding most suggests fluid overload in a ventilated child?',
        options: ['Rising oxygen requirement with new periorbital oedema and weight gain', 'Capillary refill of 2 seconds', 'Urine output of 1.5 mL/kg/hr', 'Serum sodium of 138 mmol/L'],
        why: 'A rising FiO₂ requirement with oedema and weight gain indicates a positive fluid balance affecting gas exchange — often the first sign in a ventilated child.' },
      { answer: 2, text: 'A child has a potassium of 7.4 mmol/L with peaked T waves. The first drug to give is:',
        options: ['Insulin with dextrose', 'Nebulised salbutamol', 'Calcium gluconate', 'A binding resin'],
        why: 'Calcium stabilises the myocardium immediately. It does not lower potassium — shifting and removal follow.' },
      { answer: 3, text: 'Four hours into DKA treatment a child develops a severe headache and the GCS falls by two points. This suggests:',
        options: ['Expected improvement as ketosis resolves', 'Hypoglycaemia from the insulin infusion', 'Simple dehydration headache', 'Cerebral oedema — escalate immediately'],
        why: 'Headache with falling GCS during DKA treatment indicates cerebral oedema, the leading cause of death in paediatric DKA. Treat without waiting for imaging.' }
    ]
  },

  {
    n: 9, pillar: 3,
    title: 'Polytrauma<br>& Massive Transfusion',
    short: 'Polytrauma & MBTP',
    subtitle: 'The primary trauma survey, damage control resuscitation, and running a massive blood transfusion protocol safely.',
    framework: 'ATLS-based primary survey',
    tools: 'Log roll · MBTP · Blood warmer',
    duration: '1 hr live + 2–3 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'A trauma reception from the nurse\'s perspective — roles, sequence and the errors that recur.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Primary survey, cervical spine protection, log roll technique, blood component ratios, tranexamic acid.', meta: '2–3 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Massive transfusion drill — activate, check, warm, deliver, monitor for complications, hand over.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'The primary trauma survey — with cervical spine protection throughout',
      title: 'cABCDE · Catastrophic haemorrhage first, then the usual order',
      items: [
        { letter: 'c', name: 'Catastrophic bleed', detail: 'Direct pressure<br>Tourniquet if needed', color: '#D4327A' },
        { letter: 'A', name: 'Airway + C-spine', detail: 'Manual in-line<br>stabilisation', color: '#1B9E7E' },
        { letter: 'B', name: 'Breathing', detail: 'Tension pneumothorax<br>Chest injury', color: '#3AABCC' },
        { letter: 'C', name: 'Circulation', detail: 'Access, blood<br>not crystalloid', color: '#D4882A' },
        { letter: 'DE', name: 'Disability + Exposure', detail: 'GCS, pupils<br>Log roll, keep warm', color: '#9B6BB5' }
      ],
      footnote: 'Children have a proportionally larger head, a more compliant chest wall and a higher surface-area-to-mass ratio. <strong style="color:rgba(255,255,255,0.65)">They compensate longer, crash faster, and get cold quicker</strong> than adults.'
    },
    accordionLabel: 'Core content · Reception to definitive care',
    accordion: [
      { letter: '1', title: 'Trauma reception and team roles', hint: 'Prepared before arrival', color: '#1B9E7E',
        bullets: ['Pre-alert: allocate roles aloud, calculate weight-based doses, warm the room and the fluids', 'Airway nurse, circulation nurse, drugs nurse, scribe — each states their role', 'Lay out sized equipment: tubes, cannulae, IO needle, cervical collar, blood warmer', 'Zero the monitor, prepare the rapid infuser, check suction and the resus trolley', 'Anticipate hypothermia from the first minute: warm blankets, warmed fluids, raise room temperature'],
        callout: 'The scribe is a clinical role. <strong>Times of drugs, blood units, imaging and observations</strong> determine both the resuscitation quality and the safety of the handover that follows.' },
      { letter: '2', title: 'Cervical spine and the log roll', hint: 'Protecting what cannot be seen', color: '#D4327A',
        bullets: ['Manual in-line stabilisation from the moment of arrival until cleared', 'Correctly sized collar; an ill-fitting collar is worse than none and raises ICP', 'Log roll needs a minimum of four people, with one controlling the head and calling the move', 'Inspect and palpate the whole spine and back during the roll — one opportunity, use it fully', 'Remove the child from a hard board as soon as safe — pressure injury develops within an hour'],
        callout: 'Children may have spinal cord injury <em>without</em> radiographic abnormality. A normal image does not clear the spine — clinical clearance follows a documented protocol.' },
      { letter: '3', title: 'Damage control resuscitation', hint: 'Blood, not crystalloid', color: '#D4882A',
        bullets: ['Limit crystalloid — it dilutes clotting factors and worsens the coagulopathy', 'Give blood components early in haemorrhagic shock; activate the protocol on clinical grounds', 'Permissive hypotension is <strong>not</strong> used in children with head injury — perfuse the brain', 'Tranexamic acid within 3 hours of injury per local protocol', 'Definitive control of bleeding is surgical or interventional — resuscitation buys time only'],
        compare: { cols: [
          { label: 'Lethal triad', color: '#D4327A', bg: '#FAE6EF', body: 'Hypothermia<br>Acidosis<br>Coagulopathy<br>Each worsens the others<br><em>Prevent, do not treat</em>' },
          { label: 'Nursing counters', color: '#1B9E7E', bg: '#E9F6F2', body: 'Warm everything<br>Restore perfusion early<br>Blood over crystalloid<br>Early TXA<br>Rapid surgical referral' }
        ] } },
      { letter: '4', title: 'Massive transfusion protocol', hint: 'Activation, checking, delivery', color: '#9B6BB5',
        bullets: ['Activate on clinical criteria — do not wait for a haemoglobin result', 'Balanced ratio of red cells, plasma and platelets per local protocol', 'All blood through a warmer; cold blood causes arrhythmia and worsens coagulopathy', 'Two-person positive identification for every single unit, every time, without shortcuts', 'Monitor for hypocalcaemia, hyperkalaemia, acidosis, hypothermia and TACO/TRALI'],
        callout: 'Citrate in stored blood binds calcium. <strong>Ionised calcium must be monitored and replaced</strong> during massive transfusion — hypocalcaemia causes hypotension and arrhythmia.' },
      { letter: '5', title: 'Neurotrauma and ongoing care', hint: 'Protecting the injured brain', color: '#3AABCC',
        bullets: ['Avoid hypoxia and hypotension — both independently worsen head injury outcome', 'Head up 30°, neck midline, collar not compressing venous drainage', 'Normocapnia, normothermia, normoglycaemia; treat seizures promptly', 'Paediatric GCS with component scores, pupils, and limb assessment at set intervals', 'Structured handover to imaging, theatre or PICU using the same tool as the ward'],
        callout: 'A single episode of hypotension or hypoxia measurably worsens outcome after paediatric head injury. Preventing both is the core nursing intervention, not an adjunct to it.' }
    ],
    panel: {
      label: 'Transfusion reaction — recognise and act',
      intro: 'Stop the transfusion first and assess second. Every reaction is treated as potentially serious until it is proven otherwise.',
      cards: [
        { label: 'Acute haemolytic', color: '#D4327A', body: 'Fever, loin pain<br>Dark urine, hypotension<br>Usually an ID error<br>Stop, resuscitate, report' },
        { label: 'Allergic / anaphylaxis', color: '#D4882A', body: 'Urticaria, wheeze<br>Facial swelling<br>Hypotension<br>Adrenaline if severe' },
        { label: 'TACO / TRALI', color: '#3AABCC', body: 'Dyspnoea, hypoxia<br>TACO: overload signs<br>TRALI: within 6 hrs<br>Stop, support, escalate' }
      ],
      scale: [
        { label: '1 · Stop', bg: '#FAE6EF', fg: '#D4327A', body: 'Stop the transfusion. Keep IV access with saline.' },
        { label: '2 · Assess', bg: '#FBF1E4', fg: '#D4882A', body: 'ABC, full observations, compare the identity details.' },
        { label: '3 · Escalate', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Call for help. Treat anaphylaxis or shock as needed.' },
        { label: '4 · Report', bg: '#2C1654', fg: '#C4A8D8', body: 'Return unit and set, send samples, complete the report.' }
      ],
      foot: '<strong style="color:#1A1030">The commonest cause of a fatal transfusion reaction is a patient identification error</strong> — which is why the two-person check at the bedside is never delegated, abbreviated or done from memory.'
    },
    caseStudy: {
      quote: '"7-year-old, 24 kg — pedestrian versus car. Pre-alert 8 minutes. Reported prolonged extrication, obvious femoral deformity, GCS 12 at scene, tachycardic."',
      cards: [
        { label: 'Preparation', color: '#1B9E7E', body: '<strong>Roles allocated</strong><br>Room and fluids warmed<br>Blood warmer primed<br>Doses pre-calculated' },
        { label: 'On arrival', color: '#D4327A', body: '<strong>HR 168, BP 82/44</strong><br>CRT 4 sec, cold<br>GCS 11 (E3 V3 M5)<br>Thigh swollen, tense' },
        { label: 'Actions', color: '#9B6BB5', body: '<strong>MBTP activated</strong><br>Blood not crystalloid<br>TXA within 3 hrs<br>Splint, warm, CT, theatre' }
      ],
      analysis: 'Haemorrhagic shock with a femoral fracture and a head injury. Activate the massive transfusion protocol on clinical grounds, give warmed blood components rather than crystalloid, and avoid permissive hypotension because of the head injury. Prevent the lethal triad from the first minute: warm everything, restore perfusion, give TXA early.'
    },
    grid: {
      label: 'Trauma quick reference · 24-kg child',
      intro: 'Pre-calculate on the pre-alert, write on the board, and work from one shared set of numbers.',
      items: [
        { key: 'Packed red cells 10 mL/kg', color: '#D4327A', body: '240 mL, warmed' },
        { key: 'Fresh frozen plasma 10 mL/kg', color: '#9B6BB5', body: '240 mL' },
        { key: 'Platelets 10 mL/kg', color: '#D4882A', body: '240 mL' },
        { key: 'Tranexamic acid', color: '#1B9E7E', body: '15 mg/kg = 360 mg, within 3 hrs' },
        { key: 'Calcium gluconate 10%', color: '#3AABCC', body: '0.5 mL/kg = 12 mL if ionised Ca²⁺ low' },
        { key: 'Minimum acceptable SBP', color: '#2189A8', body: '70 + (2 × 7) = 84 mmHg' }
      ],
      foot: '<strong style="color:#1A1030">Warm everything:</strong> blood, fluids, blankets, the room. Hypothermia is the entry point to the lethal triad and is entirely preventable by nursing action.'
    },
    objectives: [
      'Prepare a trauma reception with allocated roles and pre-calculated doses',
      'Perform the cABCDE primary survey with continuous cervical spine protection',
      'Log roll a child safely with adequate personnel and head control',
      'Explain damage control resuscitation and why crystalloid is limited',
      'Activate and run a massive transfusion protocol on clinical criteria',
      'Monitor for hypocalcaemia, hyperkalaemia, hypothermia and acidosis during transfusion',
      'Recognise and act on a transfusion reaction using the stop–assess–escalate–report sequence',
      'Protect the injured brain by preventing hypoxia and hypotension'
    ],
    videoTopics: ['1. Primary survey', '2. Log roll', '3. MBTP', '4. Neurotrauma', '5. Live Case'],
    quiz: [
      { answer: 2, text: 'In paediatric haemorrhagic shock, why is large-volume crystalloid limited?',
        options: ['It is more expensive than blood', 'It cannot be warmed', 'It dilutes clotting factors and worsens the coagulopathy', 'It causes hyperkalaemia'],
        why: 'Crystalloid dilutes clotting factors and contributes to acidosis and hypothermia — the lethal triad. Blood components are given early instead.' },
      { answer: 1, text: 'During massive transfusion, which electrolyte abnormality is caused by citrate in stored blood?',
        options: ['Hypernatraemia', 'Hypocalcaemia', 'Hypophosphataemia', 'Hypermagnesaemia'],
        why: 'Citrate binds ionised calcium, causing hypocalcaemia with hypotension and arrhythmia. Ionised calcium must be monitored and replaced.' },
      { answer: 0, text: 'A child develops fever, loin pain and dark urine 10 minutes into a red cell transfusion. Your first action is:',
        options: ['Stop the transfusion immediately and keep IV access with saline', 'Slow the transfusion and give paracetamol', 'Complete the unit then send samples', 'Give an antihistamine and continue'],
        why: 'This suggests acute haemolysis, usually from an identification error. Stop the transfusion first, maintain access, resuscitate, then escalate and report.' },
      { answer: 3, text: 'Which statement about permissive hypotension in children is correct?',
        options: ['It is the standard approach in all paediatric trauma', 'It applies only to children under 1 year', 'It replaces the need for blood products', 'It is avoided in children with head injury, where cerebral perfusion must be maintained'],
        why: 'Permissive hypotension is not used where there is a head injury — cerebral perfusion pressure must be preserved to avoid secondary brain injury.' }
    ]
  },

  {
    n: 10, pillar: 4,
    title: 'Infection Prevention<br>& Bundle Care',
    short: 'Infection Control',
    subtitle: 'Hand hygiene, care bundles, antimicrobial stewardship and waste segregation — the least glamorous work with the largest effect.',
    framework: 'Care bundles · 5 moments',
    tools: 'CLABSI · VAP · CAUTI audit',
    duration: '1 hr live + 2 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'Bundle audit results from real units — where compliance breaks down and what fixed it.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Five moments, PPE sequence, isolation categories, bundle elements, waste segregation, sharps safety.', meta: '2 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Breakout rooms — each group audits one bundle at a simulated bedside and reports back.', meta: '45 min · Breakout groups' }
    ],
    strip: {
      label: 'The five moments of hand hygiene — the single most effective intervention in the unit',
      title: 'Before patient · Before aseptic task · After body fluid · After patient · After surroundings',
      items: [
        { letter: '1', name: 'Before patient contact', detail: 'Protects the child<br>from your hands', color: '#1B9E7E' },
        { letter: '2', name: 'Before aseptic task', detail: 'Protects from<br>their own flora', color: '#3AABCC' },
        { letter: '3', name: 'After body fluid risk', detail: 'Protects you<br>and the unit', color: '#D4882A' },
        { letter: '4', name: 'After patient contact', detail: 'Protects the next<br>child you touch', color: '#D4327A' },
        { letter: '5', name: 'After surroundings', detail: 'The bed rail counts<br>as the patient', color: '#9B6BB5' }
      ],
      footnote: 'Alcohol rub for 20–30 seconds when hands are visibly clean; <strong style="color:rgba(255,255,255,0.65)">soap and water for 40–60 seconds</strong> when soiled, after body fluids, and for <em>C. difficile</em> and spore-forming organisms.'
    },
    accordionLabel: 'Core content · Bundle by bundle',
    accordion: [
      { letter: '1', title: 'Central line bundle — CLABSI prevention', hint: 'Insertion and daily maintenance', color: '#1B9E7E',
        bullets: ['Insertion: hand hygiene, maximal barrier precautions, chlorhexidine skin prep, sterile field, checklist', 'Scrub the hub for 15 seconds before every single access — every time, no exceptions', 'Dressing intact, dated, changed per protocol; document the site appearance each shift', 'Minimise line entries; use needle-free connectors correctly', '<strong>Daily review of ongoing necessity</strong> — remove the line the day it is not needed'],
        callout: 'Bundles are scored <strong>all-or-nothing</strong>. Four of five elements delivered is recorded as non-compliant, because the missing element is the one the organism uses.' },
      { letter: '2', title: 'Ventilator bundle — VAP prevention', hint: 'Every element, every shift', color: '#D4327A',
        bullets: ['Head of bed elevated 30–45° unless clinically contraindicated', 'Oral care with chlorhexidine or per protocol, 6–12 hourly, documented', 'Cuff pressure 20–25 cmH₂O checked each shift', 'Daily sedation interruption and assessment of extubation readiness', 'Closed suction system where available; suction only when clinically indicated'],
        callout: 'The bundle element most often missed is the <em>daily readiness assessment</em> — and it is the one that shortens ventilation days most, which is what actually prevents pneumonia.' },
      { letter: '3', title: 'Catheter bundle and other devices', hint: 'CAUTI prevention and device discipline', color: '#D4882A',
        bullets: ['Insert only for a clear indication; document that indication in the notes', 'Aseptic insertion, closed drainage system maintained at all times', 'Keep the bag below bladder level and off the floor; avoid dependent loops', 'Daily meatal hygiene with soap and water; no routine antiseptics or bladder washouts', 'Daily review of necessity — the catheter comes out as soon as the indication ends'],
        compare: { cols: [
          { label: 'Bundle compliant', color: '#1B9E7E', bg: '#E9F6F2', body: 'Every element delivered<br>Documented each shift<br>Daily necessity review<br>Audited and fed back' },
          { label: 'Non-compliant ⚠', color: '#D4327A', bg: '#FAE6EF', body: 'Any element missed<br>Undocumented care<br>Device left "just in case"<br>No feedback loop' }
        ] } },
      { letter: '4', title: 'PPE, isolation and outbreak response', hint: 'Right precautions, right order', color: '#9B6BB5',
        bullets: ['<strong>Contact</strong> precautions: gloves and gown; dedicated equipment; e.g. MRSA, <em>C. difficile</em>', '<strong>Droplet</strong> precautions: surgical mask within 1–2 m; e.g. influenza, pertussis', '<strong>Airborne</strong> precautions: N95/FFP2, negative pressure room; e.g. tuberculosis, measles', 'Donning and doffing order matters — doffing is where self-contamination happens', 'Cohort during outbreaks, restrict movement, escalate clusters to infection control the same day'],
        callout: 'Antimicrobial stewardship is a nursing role: <strong>send cultures before the first dose</strong>, give antibiotics on time, question duplicate cover, and prompt the review or de-escalation date.' },
      { letter: '5', title: 'Waste segregation and sharps safety', hint: 'Colour-coded, at the point of use', color: '#3AABCC',
        bullets: ['Segregate at the point of generation — never re-sort waste later', 'Follow the local colour code exactly; mixed waste multiplies cost and risk', 'Sharps into a puncture-proof container at the bedside, filled to the line only, never above', '<strong>Never recap a needle</strong>; never pass a sharp hand to hand; use the safety device', 'Needlestick: wash, encourage bleeding, report immediately, start the post-exposure protocol'],
        callout: 'Most sharps injuries happen during disposal, not during use. The container being <em>within arm\'s reach at the point of use</em> is the intervention — walking with a used sharp is the risk.' }
    ],
    panel: {
      label: 'Antimicrobial stewardship — the nurse\'s five actions',
      intro: 'Stewardship is not only a prescriber activity. Five nursing actions determine whether it works on the ward.',
      cards: [
        { label: 'Cultures first', color: '#1B9E7E', body: 'Send blood, urine, respiratory<br>samples <em>before</em> the first dose<br>Label accurately<br>Chase the results' },
        { label: 'On time, every time', color: '#D4882A', body: 'First dose within the hour<br>Correct interval maintained<br>Escalate missed doses<br>Document actual times' },
        { label: 'Prompt review', color: '#D4327A', body: 'Day 3 review date<br>Question duplicate cover<br>IV to oral switch<br>Stop date documented' }
      ],
      scale: [
        { label: 'Right drug', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Matches the guideline and the culture result.' },
        { label: 'Right dose', bg: '#FBF1E4', fg: '#D4882A', body: 'By weight, adjusted for renal function.' },
        { label: 'Right duration', bg: '#FAE6EF', fg: '#D4327A', body: 'A stop or review date on every prescription.' },
        { label: 'Right route', bg: '#2C1654', fg: '#C4A8D8', body: 'IV to oral as soon as the child can absorb.' }
      ],
      foot: '<strong style="color:#1A1030">Resistance is generated at the bedside</strong> — by missed doses, unnecessary duration and cultures never sent. Each of those is a nursing-controlled variable.'
    },
    caseStudy: {
      quote: '"Unit audit — three CLABSI events in eight weeks in a six-bed PICU. All three children had femoral central lines in place for more than seven days. Bundle compliance recorded as 88%."',
      cards: [
        { label: 'The finding', color: '#1B9E7E', body: '<strong>88% "compliant"</strong><br>Scored per element<br>not all-or-nothing<br>True compliance 46%' },
        { label: 'The gaps', color: '#D4327A', body: '<strong>Hub scrub inconsistent</strong><br>Dressings undated<br>No daily necessity review<br>Lines left "in case"' },
        { label: 'The change', color: '#9B6BB5', body: '<strong>All-or-nothing scoring</strong><br>Line necessity on the round<br>Weekly feedback to staff<br>Zero events in 12 weeks' }
      ],
      analysis: 'Element-level scoring hid the real failure: no single bedside had every element delivered. Recording bundles all-or-nothing, putting line necessity on the daily round and feeding results back weekly changed behaviour where an education session alone had not.'
    },
    grid: {
      label: 'Isolation precautions at a glance',
      intro: 'Match the precaution to the transmission route, and check before you enter — not after.',
      items: [
        { key: 'Standard', color: '#1B9E7E', body: 'All patients, all times. Hand hygiene, gloves for body fluids.' },
        { key: 'Contact', color: '#3AABCC', body: 'Gloves + gown. MRSA, VRE, C. difficile, scabies.' },
        { key: 'Droplet', color: '#D4882A', body: 'Surgical mask within 1–2 m. Influenza, pertussis, RSV.' },
        { key: 'Airborne', color: '#D4327A', body: 'N95/FFP2 + negative pressure. TB, measles, varicella.' },
        { key: 'Protective', color: '#9B6BB5', body: 'For the neutropenic child. Restrict visitors with infection.' },
        { key: 'Escalate a cluster', color: '#2189A8', body: 'Two or more linked cases — infection control the same day.' }
      ],
      foot: '<strong style="color:#1A1030">Doffing is the dangerous step.</strong> Practise the removal sequence until it is automatic — most PPE self-contamination happens on the way out, not on the way in.'
    },
    objectives: [
      'Apply the five moments of hand hygiene during routine PICU care',
      'Deliver the central line, ventilator and catheter bundles in full, every shift',
      'Explain why bundle compliance is scored all-or-nothing',
      'Perform a daily device-necessity review and act on it',
      'Select the correct isolation precautions for a given transmission route',
      'Don and doff PPE in the correct sequence without self-contamination',
      'Carry out the five nursing actions of antimicrobial stewardship',
      'Segregate clinical waste correctly and handle sharps safely at the point of use'
    ],
    videoTopics: ['1. Hand hygiene', '2. Bundles', '3. PPE', '4. Stewardship', '5. Live Case'],
    quiz: [
      { answer: 1, text: 'A central line bundle has four of its five elements delivered. This is recorded as:',
        options: ['80% compliant', 'Non-compliant', 'Compliant with exception', 'Not auditable'],
        why: 'Bundles are all-or-nothing. Unless every element is delivered the bundle is recorded as non-compliant.' },
      { answer: 2, text: 'Which agent is required for hand hygiene when caring for a child with Clostridioides difficile?',
        options: ['Alcohol rub only', 'Alcohol rub followed by gloves', 'Soap and water', 'Chlorhexidine spray'],
        why: 'Alcohol does not kill C. difficile spores. Soap and water with mechanical removal is required.' },
      { answer: 0, text: 'Which ventilator bundle element most directly shortens ventilation days?',
        options: ['Daily sedation interruption with assessment of extubation readiness', 'Changing the ventilator circuit every 24 hours', 'Routine deep suctioning every 2 hours', 'Prophylactic antibiotics for all ventilated children'],
        why: 'Daily sedation review and readiness assessment shortens ventilation duration — the main driver of VAP risk. Routine circuit changes and deep suctioning are not recommended.' },
      { answer: 3, text: 'Following a needlestick injury, the correct immediate sequence is:',
        options: ['Recap the needle, then report at the end of the shift', 'Apply antiseptic and squeeze the wound hard, then continue working', 'Complete the medication round, then attend occupational health', 'Wash the site, encourage bleeding, report immediately and start post-exposure protocol'],
        why: 'Wash, allow bleeding, report immediately and follow the post-exposure protocol. Delay reduces the effectiveness of prophylaxis.' }
    ]
  },

  {
    n: 11, pillar: 4,
    title: 'Medication Safety<br>in the PICU',
    short: 'Medication Safety',
    subtitle: 'Why paediatric medication errors happen, how the Swiss cheese model explains them, and the checks that actually stop them.',
    framework: 'Swiss cheese model',
    tools: 'Double check · High-alert list',
    duration: '1 hr live + 2 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'Four real error cases analysed as system failures rather than individual mistakes.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'Weight-based dosing, high-alert drugs, infusion calculation, smart pump use, reporting culture.', meta: '2 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'Breakout rooms — find the latent conditions in each case and add the missing defence.', meta: '45 min · Breakout groups' }
    ],
    strip: {
      label: 'The Swiss cheese model — errors reach the child only when every defence has a hole',
      title: 'Prescribing · Transcribing · Dispensing · Preparation · Administration · Monitoring',
      items: [
        { letter: 'Rx', name: 'Prescribing', detail: 'Wrong dose, weight<br>or drug choice', color: '#1B9E7E' },
        { letter: 'T', name: 'Transcribing', detail: 'Copy errors<br>Unclear units', color: '#3AABCC' },
        { letter: 'D', name: 'Dispensing', detail: 'Look-alike names<br>Wrong strength', color: '#D4882A' },
        { letter: 'P', name: 'Preparation', detail: 'Dilution and<br>calculation errors', color: '#D4327A' },
        { letter: 'A', name: 'Administration', detail: 'Wrong route, rate<br>patient or time', color: '#9B6BB5' }
      ],
      footnote: 'Children are the highest-risk group: <strong style="color:rgba(255,255,255,0.65)">every dose is calculated</strong> from weight, dilutions are non-standard, and the therapeutic margin in a 3-kg infant is unforgiving. The answer is system defences, not individual vigilance.'
    },
    accordionLabel: 'Core content · Where errors happen and what stops them',
    accordion: [
      { letter: '1', title: 'Why paediatric dosing is high risk', hint: 'The maths is the hazard', color: '#1B9E7E',
        bullets: ['Every dose is individually calculated — there is no standard adult tablet to fall back on', 'Weight-based dosing errors are the largest single category of paediatric medication error', 'Tenfold errors from a misplaced decimal point are the classic catastrophic mistake', 'Always write a leading zero (0.5 mg) and never a trailing zero (5 mg, not 5.0 mg)', 'Use the current documented weight — not an estimate, not last month\'s, not the parent\'s recollection'],
        callout: 'Never use "u" for units or a bare decimal point without a leading zero. <strong>10U reads as 100</strong>, and <strong>.5 mg reads as 5 mg</strong> — both have killed children.' },
      { letter: '2', title: 'High-alert drugs', hint: 'The drugs that cause harm when they go wrong', color: '#D4327A',
        bullets: ['Insulin, potassium chloride, heparin, opioids, neuromuscular blockers, concentrated electrolytes', 'Vasoactive infusions: adrenaline, noradrenaline, dopamine, milrinone', 'Chemotherapy and immunosuppressants; anticoagulants', 'Store separately, label distinctly, and restrict concentrated forms to protocol', 'Independent double-check for all of these, at preparation <em>and</em> at administration'],
        compare: { cols: [
          { label: 'True independent check', color: '#1B9E7E', bg: '#E9F6F2', body: 'Second nurse calculates alone<br>Compares result after<br>Checks drug, weight, dose,<br>concentration, rate, pump<br>Documents the check' },
          { label: 'Not a check ⚠', color: '#D4327A', bg: '#FAE6EF', body: 'Watching the first person<br>Being told the answer<br>Signing without recalculating<br>Checking after connection<br>Assuming the pump is right' }
        ] } },
      { letter: '3', title: 'Infusion calculation and pump safety', hint: 'Where the decimal point hides', color: '#D4882A',
        bullets: ['State every infusion in mcg/kg/min or mg/kg/hr — never as "mL/hr" alone in handover', 'Confirm the concentration and the total volume as well as the rate', 'Use standard concentrations wherever the unit protocol allows; non-standard needs a double-check', 'Use the drug library and soft limits on smart pumps; investigate every override', 'Label every line and every syringe at both ends — trace the line by hand before any bolus'],
        callout: 'Never flush or bolus down a line carrying a vasoactive or a neuromuscular blocker. <strong>Trace the line with your hand from syringe to child</strong> before you push anything.' },
      { letter: '4', title: 'Safe administration at the bedside', hint: 'The rights, and the ones people skip', color: '#9B6BB5',
        bullets: ['Right patient, drug, dose, route, time — plus right documentation, reason and response', 'Positively identify the child every time — two identifiers, not recognition', 'Minimise interruption during preparation; a "do not disturb" period reduces error measurably', 'Check allergies before every first dose and at every prescription change', 'Document immediately after administration, never in advance'],
        callout: 'The most frequently skipped "right" is <strong>right response</strong> — did the drug do what it was meant to do, and was that recorded? Monitoring is part of administration, not a separate task.' },
      { letter: '5', title: 'Reporting and learning culture', hint: 'A near miss reported is a defence added', color: '#3AABCC',
        bullets: ['Report near misses as well as errors that reached the child — the learning is identical', 'Reporting must be blame-free to be useful; blame produces silence, not safety', 'Look for latent conditions: staffing, look-alike packaging, unclear charts, interruption-heavy layout', 'Feed changes back to the staff who reported — otherwise reporting stops', 'Just culture distinguishes human error and system failure from genuine reckless behaviour'],
        callout: 'A unit with a rising incident report rate and a falling harm rate is <em>getting safer</em>. A unit with no reports is not safe — it is silent.' }
    ],
    panel: {
      label: 'The independent double check — how it is actually done',
      intro: 'The evidence for double-checking depends entirely on it being independent. Done as observation, it adds delay and no safety.',
      cards: [
        { label: 'Separately', color: '#1B9E7E', body: 'Second nurse reads the chart<br>and calculates alone<br>Without being told the answer<br>Then compares' },
        { label: 'Completely', color: '#D4882A', body: 'Drug, concentration, weight<br>Dose, volume, rate<br>Route, line traced<br>Pump programming' },
        { label: 'Before connection', color: '#D4327A', body: 'Check before it reaches<br>the child, not after<br>Both nurses document<br>Discrepancy = stop' }
      ],
      scale: [
        { label: 'Weight', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Current, documented, in kilograms.' },
        { label: 'Calculation', bg: '#FBF1E4', fg: '#D4882A', body: 'Performed independently by both nurses.' },
        { label: 'Concentration', bg: '#FAE6EF', fg: '#D4327A', body: 'Confirmed on the vial, not assumed.' },
        { label: 'Pump', bg: '#2C1654', fg: '#C4A8D8', body: 'Rate, volume and library entry verified.' }
      ],
      foot: '<strong style="color:#1A1030">If the two results differ, stop.</strong> Do not average, do not defer to seniority, do not proceed while it is sorted out — recalculate from the chart together.'
    },
    caseStudy: {
      quote: '"Night shift, two nurses short. A 3.4-kg infant is prescribed morphine 100 mcg/kg. The ampoule is 10 mg in 1 mL. The nurse prepares the dose, is interrupted twice by monitor alarms, and the second nurse signs the chart while walking past."',
      cards: [
        { label: 'Correct dose', color: '#1B9E7E', body: '<strong>100 mcg/kg × 3.4 kg</strong><br>= 340 mcg<br>= 0.34 mg<br>Needs dilution to measure' },
        { label: 'The holes', color: '#D4327A', body: '<strong>Understaffing</strong><br>Twice interrupted<br>High-alert drug<br>Check not independent<br>Undiluted concentrate' },
        { label: 'The defences', color: '#9B6BB5', body: '<strong>Standard dilution</strong><br>Protected preparation time<br>True independent check<br>Smart pump limits<br>Near-miss reporting' }
      ],
      analysis: 'Every element of the Swiss cheese lined up: an infant needing a sub-milligram dose from a concentrated ampoule, a distracted preparation, and a signature instead of a check. The fix is systemic — standard dilutions, an interruption-free preparation period, and a check that is genuinely independent.'
    },
    grid: {
      label: 'Safe practice quick reference',
      intro: 'These six rules prevent the majority of catastrophic paediatric medication errors.',
      items: [
        { key: 'Leading zero, no trailing zero', color: '#1B9E7E', body: '0.5 mg — never .5 mg or 5.0 mg' },
        { key: 'Write "units" in full', color: '#3AABCC', body: 'Never "u" — 10u reads as 100' },
        { key: 'Current documented weight', color: '#D4882A', body: 'In kilograms, never estimated' },
        { key: 'Independent double check', color: '#D4327A', body: 'Calculated separately, before connection' },
        { key: 'Trace the line by hand', color: '#9B6BB5', body: 'Syringe to child, before any bolus' },
        { key: 'State infusions by weight', color: '#2189A8', body: 'mcg/kg/min — never "mL/hr" alone' }
      ],
      foot: '<strong style="color:#1A1030">Report the near miss.</strong> The error that almost happened tells you exactly which defence is thin — and it costs nothing to fix before it reaches a child.'
    },
    objectives: [
      'Explain why paediatric patients are the highest-risk group for medication error',
      'Identify the six stages at which medication errors occur',
      'Name the high-alert drug groups used in the PICU',
      'Perform a genuine independent double check and describe what does not count as one',
      'Calculate weight-based doses and infusion rates without decimal-point error',
      'Apply safe writing conventions for doses, units and concentrations',
      'Trace and label lines to prevent wrong-route and wrong-line administration',
      'Report near misses and identify the latent conditions behind an error'
    ],
    videoTopics: ['1. Why children', '2. High-alert', '3. Infusions', '4. Reporting', '5. Live Case'],
    quiz: [
      { answer: 1, text: 'An "independent double check" of an infusion means:',
        options: ['A second nurse watches the first calculate', 'A second nurse calculates and verifies separately, then compares', 'The doctor signs the prescription chart', 'The smart pump confirms the rate'],
        why: 'The second checker must calculate independently. Observing the first person repeats their assumptions rather than testing them.' },
      { answer: 2, text: 'Which is the single largest category of paediatric medication error?',
        options: ['Wrong route administration', 'Omitted doses', 'Weight-based dose calculation errors', 'Allergy documentation failures'],
        why: 'Because every paediatric dose is calculated from weight, calculation errors — especially tenfold decimal errors — are the largest category.' },
      { answer: 0, text: 'Which way of writing a dose is safe?',
        options: ['0.5 mg', '.5 mg', '5.0 mg', '10u'],
        why: 'Always use a leading zero and never a trailing zero. ".5" can be read as 5, "5.0" as 50, and "10u" as 100.' },
      { answer: 3, text: 'A unit sees a rising number of incident reports and a falling rate of actual patient harm. This most likely indicates:',
        options: ['Deteriorating standards of care', 'A need to restrict reporting to serious events', 'Excessive documentation burden', 'A maturing safety culture where near misses are being reported and fixed'],
        why: 'Rising reports with falling harm is the signature of a functioning blame-free reporting culture — near misses are surfacing and defences are being added.' }
    ]
  },

  {
    n: 12, pillar: 4,
    title: 'Professionalism<br>& Crisis Resource Management',
    short: 'Professionalism & CRM',
    subtitle: 'Communication, teamwork, ethics, end-of-life care and looking after yourself — the skills that determine how the rest are delivered.',
    framework: 'CRM principles · ISBAR',
    tools: 'ISBAR · Debrief · Escalation',
    duration: '1 hr live + 2 hrs self-study',
    sessions: [
      { tag: 'Session A · Live', title: 'Live Webinar', body: 'Panel with PICU nurse leaders on speaking up, escalating past resistance, and surviving a bad shift.', meta: '1 hr · Attendance mandatory' },
      { tag: 'Session B · Recorded', title: 'Recorded Lectures', body: 'CRM principles, ISBAR structure, breaking bad news, end-of-life care, moral distress and resilience.', meta: '2 hrs · Self-paced' },
      { tag: 'Session C · Simulation', title: 'Virtual Simulation', body: 'ISBAR handover practice and a graded-assertiveness drill where the senior is wrong.', meta: '45 min · Scenario-based' }
    ],
    strip: {
      label: 'Crisis Resource Management — the non-technical skills that make technical skills work',
      title: 'Roles · Communication · Resources · Situation awareness · Support · Reassess',
      items: [
        { letter: 'R', name: 'Role clarity', detail: 'Say your role aloud<br>One leader', color: '#1B9E7E' },
        { letter: 'C', name: 'Closed-loop comms', detail: 'Name, task,<br>read back, confirm', color: '#3AABCC' },
        { letter: 'R', name: 'Resources', detail: 'Call for help early<br>Know what you have', color: '#D4882A' },
        { letter: 'S', name: 'Situation awareness', detail: 'Step back<br>Look at the whole', color: '#D4327A' },
        { letter: 'S', name: 'Speak up', detail: 'Graded assertiveness<br>Anyone can stop the line', color: '#9B6BB5' }
      ],
      footnote: 'Around <strong style="color:rgba(255,255,255,0.65)">70% of serious clinical incidents involve a communication failure</strong>, not a knowledge failure. These are trainable skills, and they are what this module examines.'
    },
    accordionLabel: 'Core content · Skill by skill',
    accordion: [
      { letter: '1', title: 'Closed-loop communication and role clarity', hint: 'The mechanics of a well-run crisis', color: '#1B9E7E',
        bullets: ['One clearly identified leader, who states that they are leading', 'Everyone states their own role out loud at the start — no assumed allocations', 'Direct every instruction to a <strong>named person</strong>, never to the room', 'The receiver reads the instruction back, then reports when it is complete', 'The leader keeps hands off where possible in order to maintain the overview'],
        callout: '"Someone get adrenaline" is not a instruction — it is a hope. <strong>"Priya, draw 300 micrograms of adrenaline and tell me when it is ready"</strong> is an instruction, and it closes the loop.' },
      { letter: '2', title: 'ISBAR handover and escalation', hint: 'Structure carries urgency', color: '#3AABCC',
        bullets: ['<strong>I</strong>dentify — you, the child, where you are calling from', '<strong>S</strong>ituation — what is happening now, in one sentence', '<strong>B</strong>ackground — the relevant history only, not the whole admission', '<strong>A</strong>ssessment — your interpretation, including scores and trends', '<strong>R</strong>ecommendation — what you want, and by when. State it explicitly.'],
        compare: { cols: [
          { label: 'Weak escalation', color: '#D4327A', bg: '#FAE6EF', body: '"The child in bed 4<br>doesn\'t look right,<br>can you come sometime?"<br><em>No data, no ask, no time</em>' },
          { label: 'Strong escalation', color: '#1B9E7E', bg: '#E9F6F2', body: '"PEWS 2 → 6 in an hour,<br>RR 62, CRT 4 sec,<br>I need you at the bedside<br>within 5 minutes."' }
        ] } },
      { letter: '3', title: 'Speaking up and graded assertiveness', hint: 'When you believe something is wrong', color: '#D4882A',
        bullets: ['<strong>Probe:</strong> "I\'m not sure the dose is right — can we check the weight together?"', '<strong>Alert:</strong> "I\'m concerned this dose is ten times higher than the guideline."', '<strong>Challenge:</strong> "I need you to stop and recheck this with me before we give it."', '<strong>Emergency:</strong> "Stop. I am not giving this drug." Then escalate above.', 'Anyone, at any grade, can stop the line — and must be supported for doing so'],
        callout: 'Escalate up the hierarchy without asking permission when a child is at risk. <strong>Being wrong about a concern costs a conversation.</strong> Being silent about a real one costs far more.' },
      { letter: '4', title: 'Ethics, family and end-of-life care', hint: 'The hardest part of the work', color: '#9B6BB5',
        bullets: ['Family-centred care: parents are partners in care, present and informed, not visitors', 'Breaking bad news: quiet space, senior clinician, nurse present, no interruptions, silence allowed', 'Withdrawal of life-sustaining treatment: comfort, dignity, privacy, family choice, cultural and religious needs', 'Symptom control, mouth care, positioning, presence — meticulous care does not stop', 'Organ donation, consent and documentation handled per local law and with specialist support'],
        callout: 'Bereavement care includes the paperwork, the belongings, the memory-making and the follow-up call. <strong>How a family is treated in those hours is remembered for the rest of their lives.</strong>' },
      { letter: '5', title: 'Looking after yourself and the team', hint: 'Sustainability is a safety issue', color: '#3AABCC',
        bullets: ['Moral distress: knowing the right action and being unable to take it. Name it — it is not weakness.', 'Hot debrief immediately after a critical event; structured debrief within 24–48 hours', 'Recognise burnout: exhaustion, depersonalisation, reduced sense of accomplishment', 'Peer support, supervision, and formal help are professional tools, not a last resort', 'Second victim: the staff involved in a serious incident need active support, not investigation alone'],
        callout: 'A depleted nurse is a patient safety risk. <strong>Rest, breaks, debriefs and support are clinical interventions</strong> — the unit\'s error rate depends on them as much as on any protocol.' }
    ],
    panel: {
      label: 'The debrief — three questions, ten minutes',
      intro: 'A hot debrief needs no facilitator training and no meeting room. It needs someone to ask three questions before the team disperses.',
      cards: [
        { label: 'What went well?', color: '#1B9E7E', body: 'Name it specifically<br>Reinforce the behaviour<br>Everyone contributes<br>Start here, always' },
        { label: 'What was difficult?', color: '#D4882A', body: 'Systems and process<br>not individuals<br>No blame, no defence<br>Write it down' },
        { label: 'What will change?', color: '#D4327A', body: 'One or two actions<br>Named owner<br>A date<br>Fed back to the team' }
      ],
      scale: [
        { label: 'Hot debrief', bg: '#EBF8F4', fg: '#1B9E7E', body: 'Immediately after. Ten minutes, at the bedside.' },
        { label: 'Cold debrief', bg: '#FBF1E4', fg: '#D4882A', body: 'Within 24–48 hrs. Structured, facilitated.' },
        { label: 'Individual support', bg: '#FAE6EF', fg: '#D4327A', body: 'Offered actively, not only on request.' },
        { label: 'Close the loop', bg: '#2C1654', fg: '#C4A8D8', body: 'Report back what changed. Otherwise it stops.' }
      ],
      foot: '<strong style="color:#1A1030">A debrief that produces no change is a conversation.</strong> One or two named actions with an owner and a date is what converts a difficult shift into a safer unit.'
    },
    caseStudy: {
      quote: '"You are the bedside nurse. A prescription reads adrenaline 1 mg/kg for a 6-kg infant in septic shock — ten times the standard dose. The consultant is busy at another bedside and has already said, sharply, that the chart is correct."',
      cards: [
        { label: 'Probe', color: '#1B9E7E', body: '<strong>"Can we check the</strong><br><strong>weight and units</strong><br><strong>together?"</strong><br>Curious, not accusing' },
        { label: 'Alert &amp; challenge', color: '#D4882A', body: '<strong>"I\'m concerned this is</strong><br><strong>10× the guideline dose."</strong><br>"I need you to stop and<br>recheck this with me."' },
        { label: 'Emergency', color: '#D4327A', body: '<strong>"Stop. I am not</strong><br><strong>giving this drug."</strong><br>Escalate above<br>Document contemporaneously' }
      ],
      analysis: 'Graded assertiveness gives you a script when the hierarchy is against you. You do not need to be certain to stop the line — you only need to be concerned. Escalate above without asking permission, document what you said and when, and expect the unit to support you for it.'
    },
    grid: {
      label: 'ISBAR escalation template',
      intro: 'Write the numbers down before you pick up the phone. Structure is what carries urgency across a hierarchy.',
      items: [
        { key: 'I — Identify', color: '#1B9E7E', body: 'Your name, role, ward, and the child\'s name and bed' },
        { key: 'S — Situation', color: '#3AABCC', body: 'One sentence: what is wrong right now' },
        { key: 'B — Background', color: '#D4882A', body: 'Relevant history only — diagnosis, day, key events' },
        { key: 'A — Assessment', color: '#D4327A', body: 'Observations, PEWS trend, your interpretation' },
        { key: 'R — Recommendation', color: '#9B6BB5', body: 'What you want, and by when — say it explicitly' },
        { key: 'Read back', color: '#2189A8', body: 'Confirm the plan and the timeframe before ending the call' }
      ],
      foot: '<strong style="color:#1A1030">Always state a timeframe.</strong> "Please come and see her" is a request; "I need you at the bedside within five minutes" is an escalation with an answer you can act on.'
    },
    objectives: [
      'Apply crisis resource management principles during a clinical emergency',
      'Use closed-loop communication with named individuals and read-back',
      'Escalate concern using ISBAR with an explicit recommendation and timeframe',
      'Use graded assertiveness to challenge an unsafe decision at any grade',
      'Support family-centred care, including presence during resuscitation',
      'Contribute to end-of-life and bereavement care with dignity and cultural sensitivity',
      'Run a hot debrief using three questions and produce named actions',
      'Recognise moral distress and burnout in yourself and colleagues, and seek support'
    ],
    videoTopics: ['1. CRM', '2. ISBAR', '3. Speaking up', '4. End of life', '5. Live Case'],
    quiz: [
      { answer: 1, text: 'Closed-loop communication during a crisis means:',
        options: ['Only the team leader speaks', 'The instruction is given to a named person who reads it back and confirms completion', 'Instructions are written before being given', 'Communication is restricted to the nurse in charge'],
        why: 'The receiver is named, repeats the instruction back and reports completion, so the leader knows it was heard and done.' },
      { answer: 2, text: 'Which is the strongest escalation to a busy senior?',
        options: ['"The child in bed 4 doesn\'t look right."', '"Could you come and see bed 4 when you get a chance?"', '"PEWS has risen from 2 to 6 in an hour, RR 62, CRT 4 seconds — I need you at the bedside within 5 minutes."', '"I\'m a bit worried about bed 4 but it can probably wait."'],
        why: 'A strong escalation states objective data, your assessment, an explicit request and a timeframe.' },
      { answer: 0, text: 'You believe a prescribed dose is ten times too high and the prescriber has dismissed your concern. Applying graded assertiveness, you should:',
        options: ['State clearly that you are not giving the drug and escalate above', 'Give the dose since the prescriber is more senior', 'Give half the dose as a compromise', 'Document your concern and give it as prescribed'],
        why: 'At the emergency stage of graded assertiveness you stop the line and escalate above. Anyone, at any grade, can stop an unsafe action.' },
      { answer: 3, text: 'What makes a hot debrief effective?',
        options: ['It is led by an external facilitator', 'It focuses on identifying who made the error', 'It is held several weeks later with written submissions', 'It happens immediately, is blame-free, and produces one or two named actions with a date'],
        why: 'A hot debrief is immediate, short, blame-free and action-producing. Without named actions and feedback, debriefing stops happening.' }
    ]
  }
];

