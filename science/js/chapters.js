/* ============================================================
   CHAPTERS DATA — CBSE Class 10 Science (086) · 2026-27 syllabus
   16 chapters: 13 exam + 3 formative-only (re-added 2026-27)
   che1-4 exam + che5 formative; bio1-5; phy1-4 + phy5 formative; env1
   ============================================================ */
window.CHAPTERS = {
  /* ============ CHEMISTRY · Unit I (25 marks) ============ */
  che1: {
    sub: 'che', no: 1, slug: 'che1',
    title: 'Chemical Reactions and Equations',
    book: 'Science · Ch 1 · NCERT',
    tagline: 'equations, balancing and the six reaction types',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'A <b>chemical reaction</b> transforms reactants into new products with entirely new properties — shown by easily observed signs: change in state, colour, temperature, or evolution of a gas. Reactions are written as <b>word equations</b> and then <b>chemical equations</b>, which must be <b>balanced</b> (equal atoms of each element both sides) to obey the law of conservation of mass. Six reaction types cover almost everything: <b>combination, decomposition, displacement, double displacement, oxidation-reduction, and exothermic-endothermic</b>.' },
      { h: 'Chemical equations and balancing', b: 'Mg + O<sub>2</sub> → 2MgO is balanced by inspection: write formulae correctly, count atoms of each element on both sides, and add <b>coefficients</b> (never change subscripts). Balanced equations carry state symbols — (s), (l), (g), (aq) — and conditions like heat (Δ), light, catalyst, pressure over the arrow.' },
      { h: 'Combination reactions', b: 'Two or more reactants form <b>one</b> product: CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub> + heat (quicklime → slaked lime, used for whitewashing — the shiny finish appears 2-3 days later). Also CaCO<sub>3</sub>→ burnt to CaO in limestone kilns; burning of coal, Mg ribbon in air.' },
      { h: 'Decomposition reactions', b: 'One reactant splits into two or more products, driven by <b>heat</b> (ferrous sulphate crystals FeSO<sub>4</sub>·7H<sub>2</sub>O lose water, then decompose to Fe<sub>2</sub>O<sub>3</sub> + SO<sub>2</sub> + SO<sub>3</sub>), <b>light</b> (AgBr → Ag + Br<sub>2</sub>, used in black-and-white photography), or <b>electricity</b> (electrolysis of water: 2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub>, H<sub>2</sub> at cathode, O<sub>2</sub> at anode, twice as much H<sub>2</sub> by volume). All decomposition that absorbs heat are <b>endothermic</b>.' },
      { h: 'Displacement reactions', b: 'A more reactive element displaces a less reactive one from its compound: Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu (iron nail turns brown, blue colour fades). Driven by the <b>reactivity series</b>: K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au.' },
      { h: 'Double displacement reactions', b: 'Two compounds exchange ions: Na<sub>2</sub>SO<sub>4</sub> + BaCl<sub>2</sub> → BaSO<sub>4</sub>↓ (white) + 2NaCl. When an insoluble solid forms it is a <b>precipitation reaction</b>. Recognising the swapped ions is the exam skill.' },
      { h: 'Oxidation and reduction (redox)', b: '<b>Oxidation</b> = gain of oxygen or loss of hydrogen; <b>reduction</b> = loss of oxygen or gain of hydrogen. In CuO + H<sub>2</sub> → Cu + H<sub>2</sub>O, CuO is reduced and H<sub>2</sub> is oxidised — both happen together, hence <b>redox</b>. Corrosion (rusting: Fe + O<sub>2</sub> + H<sub>2</sub>O → hydrated Fe<sub>2</sub>O<sub>3</sub>) and rancidity (oxidation of fats — prevented by antioxidants, nitrogen flushing, refrigeration) are everyday oxidation.' },
      { h: 'Exothermic vs endothermic', b: '<b>Exothermic</b> releases heat (respiration, burning of fuels, quicklime + water, decomposition of vegetable matter into compost). <b>Endothermic</b> absorbs heat (decomposition of CaCO<sub>3</sub>, electrolysis of water, photosynthesis). The decomposition of vegetable matter into compost is exothermic — a favourite MCQ.' }
    ],
    dates: [],
    terms: [
      { w: 'Balanced equation', d: 'A chemical equation with equal numbers of atoms of each element on both sides — required by the law of conservation of mass.' },
      { w: 'Combination reaction', d: 'Two or more substances combine to form a single product: A + B → AB.' },
      { w: 'Decomposition reaction', d: 'A single compound breaks into two or more simpler substances: AB → A + B.' },
      { w: 'Displacement reaction', d: 'A more reactive element displaces a less reactive element from its compound: A + BC → AC + B.' },
      { w: 'Double displacement', d: 'Two compounds exchange their ions: AB + CD → AD + CB; if an insoluble product forms, it is also a precipitation reaction.' },
      { w: 'Redox reaction', d: 'Oxidation (gain of O / loss of H) and reduction (loss of O / gain of H) occurring together.' },
      { w: 'Exothermic reaction', d: 'A reaction that releases heat — products are more stable than reactants.' },
      { w: 'Rancidity', d: 'Oxidation of fats and oils in food, giving bad smell and taste; slowed by antioxidants and nitrogen flushing.' }
    ]
  },

  che2: {
    sub: 'che', no: 2, slug: 'che2',
    title: 'Acids, Bases and Salts',
    book: 'Science · Ch 2 · NCERT',
    tagline: 'pH, indicators and the five famous salts',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Acids furnish <b>H<sup>+</sup>(aq)</b> ions, bases furnish <b>OH<sup>–</sup>(aq)</b> ions — all acid-base chemistry flows from this. <b>Indicators</b> (litmus, methyl orange, phenolphthalein, turmeric, red cabbage) identify them; <b>pH</b> (0-14) measures strength. Their reaction — <b>neutralisation</b> — makes <b>salts</b>, five of which NCERT studies in detail: sodium hydroxide, bleaching powder, baking soda, washing soda and Plaster of Paris.' },
      { h: 'Reactions of acids and bases with metals and carbonates', b: 'Acid + metal → salt + H<sub>2</sub> (pop test with a burning splinter). Base + metal → salt + H<sub>2</sub> (only some bases, e.g. NaOH + Zn). Acid + metal carbonate/hydrogencarbonate → salt + H<sub>2</sub>O + CO<sub>2</sub> (turns lime water milky: Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub>). Acids neutralise bases: acid + base → salt + water.' },
      { h: 'Strength and the pH scale', b: 'Strong acids/bases ionise completely (HCl, H<sub>2</sub>SO<sub>4</sub>, HNO<sub>3</sub>; NaOH, KOH); weak ones partially (CH<sub>3</sub>COOH, H<sub>2</sub>CO<sub>3</sub>; Ca(OH)<sub>2</sub>, NH<sub>4</sub>OH). <b>pH = –log[H<sup>+</sup>]</b> but only the working rule matters: lower pH = more H<sup>+</sup> = stronger acid; higher pH = more OH<sup>–</sup> = stronger base; 7 is neutral. Universal indicator gives a colour for every pH.' },
      { h: 'pH in everyday life', b: '<b>Tooth decay</b> begins below pH 5.5 — bacteria act on sugar to make acid; toothpastes are basic. <b>Indigestion</b> → antacids (Mg(OH)<sub>2</sub> milk of magnesia). <b>Acidity in soil</b> → treated with quicklime/slaked lime. <b>Ant/nettle stings</b> (methanoic acid) → rubbed with baking soda or dock plant leaf. <b>Fish survival</b> needs river water pH near 7.' },
      { h: 'Common salt → sodium hydroxide (chlor-alkali)', b: 'Electrolysis of brine (NaCl solution) — the <b>chlor-alkali process</b>: H<sub>2</sub> at cathode, Cl<sub>2</sub> at anode, NaOH left in solution. Products: NaOH (soaps, detergents, paper, de-greasing), Cl<sub>2</sub> (PVC, water treatment, CFC-free disinfectants), H<sub>2</sub> (fuel, margarine, ammonia for fertilisers).' },
      { h: 'Bleaching powder', b: 'Ca(OH)<sub>2</sub> + Cl<sub>2</sub> → CaOCl<sub>2</sub> + H<sub>2</sub>O. Made at the factory by the action of chlorine on dry slaked lime. Uses: bleaching cotton and linen, wood pulp; disinfecting drinking water; making chloroform.' },
      { h: 'Baking soda', b: 'Sodium hydrogencarbonate NaHCO<sub>3</sub>, made from NaCl + H<sub>2</sub>O + CO<sub>2</sub> + NH<sub>3</sub>. On heating: 2NaHCO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub> — the CO<sub>2</sub> raises the dough (baking powder = NaHCO<sub>3</sub> + mild tartaric acid). Also an ingredient of antacids and soda-acid fire extinguishers.' },
      { h: 'Washing soda and Plaster of Paris', b: '<b>Washing soda</b> Na<sub>2</sub>CO<sub>3</sub>·10H<sub>2</sub>O (from heating baking soda, recrystallising): removes permanent hardness of water, used in glass, soap and paper industries. <b>Plaster of Paris</b> CaSO<sub>4</sub>·½H<sub>2</sub>O (from heating gypsum CaSO<sub>4</sub>·2H<sub>2</sub>O to 373 K) — sets to a hard solid with water (doctors\u2019 casts), making toys, smoothing walls.' },
      { h: 'Water of crystallisation', b: 'Fixed water molecules in salt crystals: CuSO<sub>4</sub>·5H<sub>2</sub>O (blue → white on heating, blue again on wetting), FeSO<sub>4</sub>·7H<sub>2</sub>O, Na<sub>2</sub>CO<sub>3</sub>·10H<sub>2</sub>O. The blue vitriol/copper sulphate colour-change demo is a classic practical question.' }
    ],
    dates: [],
    terms: [
      { w: 'Olfactory indicator', d: 'A substance whose smell changes in acid or base — onion, vanilla, clove oil.' },
      { w: 'pH scale', d: '0-14 measure of H⁺ ion concentration; <7 acidic, 7 neutral, >7 basic.' },
      { w: 'Neutralisation', d: 'Acid + base → salt + water.' },
      { w: 'Chlor-alkali process', d: 'Electrolysis of brine producing NaOH, Cl₂ and H₂.' },
      { w: 'Water of crystallisation', d: 'Fixed number of water molecules present in one formula unit of a salt.' },
      { w: 'Baking powder', d: 'NaHCO₃ mixed with a mild edible acid (tartaric acid) — releases CO₂ on heating.' }
    ]
  },

  che3: {
    sub: 'che', no: 3, slug: 'che3',
    title: 'Metals and Non-metals',
    book: 'Science · Ch 3 · NCERT',
    tagline: 'reactivity series, ionic bonds and metallurgy',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Of ~118 known elements, most are <b>metals</b> (left/middle of the periodic table) and ~22 are <b>non-metals</b>. Metals are lustrous, malleable, ductile, sonorous, good conductors; non-metals are mostly brittle insulators (graphite is the exception — conducts). Their contrast in <b>chemical reactivity</b> — with oxygen, water, acids and each other\u2019s salt solutions — builds the <b>reactivity series</b>, explains <b>ionic bonding</b>, and dictates how we extract them: <b>metallurgy</b> from ores, plus corrosion and its prevention.' },
      { h: 'Physical properties — and the exceptions', b: 'Metals: lustrous (except Na, K, Li cut easily), malleable, ductile, sonorous, conduct heat and electricity (silver best). Non-metals: iodine (shiny), graphite (conductor), diamond (hardest natural substance) are the exam-favourite exceptions. Mercury is the only liquid metal; bromine the only liquid non-metal. Sodium, potassium and calcium have low density and float.' },
      { h: 'Reaction with oxygen', b: 'Metals form <b>basic oxides</b> (some amphoteric: Al<sub>2</sub>O<sub>3</sub>, ZnO — react with both acids and bases); non-metals form <b>acidic or neutral oxides</b> (CO<sub>2</sub>, SO<sub>2</sub> acidic; CO, NO, H<sub>2</sub>O neutral). Mg burns with a dazzling white flame → MgO; Na/K react even in cold air, kept in kerosene; Cu darkens on heating; Au, Ag do not react.' },
      { h: 'Reaction with water and acids', b: 'With water: Na + cold water violently → NaOH + H<sub>2</sub>; Mg + hot water; Zn/Fe + steam; Cu/Ag never. With dilute acids: metal + acid → salt + H<sub>2</sub> — but <b>HNO<sub>3</sub> is the exception</b> (it oxidises the H<sub>2</sub> formed; no H<sub>2</sub> gas with HNO<sub>3</sub>). Na and K react explosively even with dilute acids.' },
      { h: 'The reactivity series', b: 'K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; (H) &gt; Cu &gt; Hg &gt; Ag &gt; Au. Higher metals displace lower ones from salt solutions (Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu) and from their oxide\u2019s compounds. This single ordering predicts displacement reactions, extraction method, and thermite feasibility.' },
      { h: 'Ionic (electrovalent) bonding', b: 'A metal <b>donates</b> electrons (→ cation), a non-metal <b>accepts</b> them (→ anion); electrostatic attraction = <b>ionic bond</b>. Na → Na<sup>+</sup> + e<sup>–</sup>; Cl + e<sup>–</sup> → Cl<sup>–</sup>; NaCl. Properties: crystalline solids, high melting/boiling points, conduct in solution/molten state, soluble in water — because of strong electrostatic forces between ions.' },
      { h: 'Occurrence and enrichment of ores', b: 'Reactive metals (Na, K, Ca, Mg, Al) occur as compounds (oxides, carbonates, sulphides — why: they combine readily with air/water); least reactive (Au, Pt, Ag) occur free/native. <b>Gangue</b> = rocky impurities. Enrichment methods: hydraulic washing (gravity — oxide ores), froth flotation (sulphide ores), magnetic separation (magnetic impurities/tinstone), leaching (chemical).' },
      { h: 'Extracting metals — the three tiers', b: '(1) <b>Heating alone</b> (low reactivity — Hg, Cu, Zn): cinnabar HgS + O<sub>2</sub> → Hg + SO<sub>2</sub>; ZnO + C → Zn. (2) <b>Roasting/calcination + reduction with carbon</b> (middle reactivity — Zn, Fe, Pb, Cu): sulphide ores roasted in air, carbonate ores calcined, then heated with coke. (3) <b>Electrolysis</b> (high reactivity — Na, Mg, Al): molten electrolyte, metal deposits at <b>cathode</b>. The <b>thermite reaction</b> (Fe<sub>2</sub>O<sub>3</sub> + Al → Fe + Al<sub>2</sub>O<sub>3</sub> + heat) joins railway tracks and cracks machine parts.' },
      { h: 'Corrosion and prevention', b: 'Rust = hydrated iron(III) oxide — needs both air and moisture (the control-tube experiment with boiled water + oil and anhydrous CaCl<sub>2</sub> proves it). Prevention: painting, oiling, greasing, galvanisation (Zn coating — Zn corrodes first, sacrificial), electroplating, alloying. Copper forms a green carbonate layer; silver blackens (sulphide).' },
      { h: 'Alloys', b: 'Homogeneous mixtures of a metal with other metals/non-metals — improved hardness, lustre, resistance. <b>Steel</b> (Fe + C), <b>Stainless steel</b> (Fe + Cr + Ni — no rust), <b>Brass</b> (Cu + Zn), <b>Bronze</b> (Cu + Sn), <b>Solder</b> (Pb + Sn — low m.p., joins wires), <b>Amalgam</b> (any + Hg). Alloying with Hg makes metals brittle.' }
    ],
    dates: [],
    terms: [
      { w: 'Malleability', d: 'The ability of metals to be beaten into thin sheets.' },
      { w: 'Ductility', d: 'The ability of metals to be drawn into wires.' },
      { w: 'Reactivity series', d: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au — arranges metals by their tendency to lose electrons.' },
      { w: 'Amphoteric oxide', d: 'An oxide that reacts with both acids and bases — Al₂O₃, ZnO.' },
      { w: 'Gangue', d: 'The rocky/earthy impurities present in an ore.' },
      { w: 'Roasting', d: 'Heating a sulphide ore strongly in excess air → metal oxide + SO₂.' },
      { w: 'Calcination', d: 'Heating a carbonate ore strongly in limited air → metal oxide + CO₂.' },
      { w: 'Galvanisation', d: 'Coating iron with a thin layer of zinc to prevent rusting.' },
      { w: 'Alloy', d: 'A homogeneous mixture of two or more metals, or a metal and a non-metal.' }
    ]
  },

  che4: {
    sub: 'che', no: 4, slug: 'che4',
    title: 'Carbon and its Compounds',
    book: 'Science · Ch 4 · NCERT',
    tagline: 'covalent bonds, homologous series, functional groups',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Carbon — 4 valence electrons — cannot lose or gain 4 electrons, so it always <b>shares</b>: the <b>covalent bond</b>. Sharing lets carbon bond with itself in chains and rings (<b>catenation</b>) and with almost every element (<b>tetravalency</b>) — hence millions of <b>organic compounds</b>. The chemistry is organised by <b>hydrocarbons</b> (saturated/unsaturated), the <b>homologous series</b>, <b>IUPAC nomenclature</b> and <b>functional groups</b>; it ends with ethanol, ethanoic acid, and the soap-vs-detergent story.' },
      { h: 'Covalent bonding', b: 'Shared electron pairs between atoms — H<sub>2</sub>, O<sub>2</sub> (double), N<sub>2</sub> (triple), CH<sub>4</sub>, H<sub>2</sub>O, NH<sub>3</sub>. Covalent compounds have low melting/boiling points (weak intermolecular forces, though the bonds themselves are strong) and do <b>not</b> conduct electricity (no ions) — except graphite, whose free delocalised electrons conduct.' },
      { h: 'Versatility of carbon', b: '<b>Catenation</b> — self-linking into straight chains, branched chains and rings (strong C–C bond, unique among elements). <b>Tetravalency</b> — bonds to H, O, N, S, Cl and more. Sizes from one-carbon CH<sub>4</sub> to macromolecules; the same skeleton can host different functional groups, giving wildly different compounds.' },
      { h: 'Hydrocarbons — saturated vs unsaturated', b: '<b>Alkanes</b> C<sub>n</sub>H<sub>2n+2</sub> — single bonds, saturated (methane, ethane, propane, butane). <b>Alkenes</b> C<sub>n</sub>H<sub>2n</sub> — one double bond (ethene). <b>Alkynes</b> C<sub>n</sub>H<sub>2n-2</sub> — one triple bond (ethyne/acetlyene). Test: unsaturated hydrocarbons decolourise bromine water (addition across the double bond); saturated ones don\u2019t.' },
      { h: 'Homologous series', b: 'A family with the same functional group, same general formula, adjacent members differing by <b>–CH<sub>2</sub>–</b> (14 u). Members show a gradation in physical properties (m.p./b.p. rise with size) and nearly identical chemical properties. Example: CH<sub>4</sub> (16), C<sub>2</sub>H<sub>6</sub> (30), C<sub>3</sub>H<sub>8</sub> (44)…' },
      { h: 'Nomenclature', b: 'IUPAC rules: count the longest carbon chain → root (meth-, eth-, prop-, but-, pent-…); identify the suffix (-ane/-ene/-yne or functional group: -ol, -al, -one, -oic acid); number for the lowest locant. Examples: butane → butan-2-ol? no — ethanol CH<sub>3</sub>CH<sub>2</sub>OH; propanone CH<sub>3</sub>COCH<sub>3</sub>; butanoic acid C<sub>3</sub>H<sub>7</sub>COOH; bromoethane C<sub>2</sub>H<sub>5</sub>Br. The exam gives a structure and asks the name — or the reverse.' },
      { h: 'Functional groups', b: 'The reactive atom-cluster that defines a family: <b>halo</b> (–X), <b>alcohol</b> (–OH), <b>aldehyde</b> (–CHO), <b>ketone</b> (–CO–), <b>carboxylic acid</b> (–COOH). Replacing H in a hydrocarbon by a group changes the whole family — ethane (fuel gas) vs ethanol (drink/solvent) vs ethanoic acid (vinegar).' },
      { h: 'Chemical properties of carbon compounds', b: '<b>Combustion</b> — clean flame for saturated (blue), sooty for unsaturated (limited air). <b>Oxidation</b> — alcohols → acids with alkaline KMnO<sub>4</sub>/acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>. <b>Addition</b> — hydrogenation of unsaturated oils with Ni catalyst → vanaspati ghee. <b>Substitution</b> — saturated compounds swap an atom (CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl, in sunlight).' },
      { h: 'Ethanol and ethanoic acid', b: '<b>Ethanol</b> C<sub>2</sub>H<sub>5</sub>OH: soluble in water, neutral to litmus; dehydrated with conc. H<sub>2</sub>SO<sub>4</sub> at 443 K → ethene; reacts with Na → sodium ethoxide + H<sub>2</sub>. <b>Ethanoic acid</b> CH<sub>3</sub>COOH (5-8% solution = vinegar): weak acid; with NaHCO<sub>3</sub>/Na<sub>2</sub>CO<sub>3</sub> → CO<sub>2</sub> briskly; <b>esterification</b> with alcohol + acid catalyst → sweet-smelling ester (used in perfumes) + water; ester + NaOH → soap + alcohol (<b>saponification</b>).' },
      { h: 'Soaps and detergents', b: 'Soap molecule = a long <b>hydrocarbon tail</b> (hydrophobic) + <b>ionic head</b> (hydrophilic, Na/K salt of fatty acid). Cleaning: tails embed in the oil/grease, heads stay in water → droplets surrounded by soap = <b>micelles</b>, rinsed away. <b>Hard water</b> (Ca<sup>2+</sup>/Mg<sup>2+</sup>) forms scum with soap — this is where <b>detergents</b> win: their ammonium/sulphonate heads work even in hard water; but soaps are biodegradable, many detergents are not.' }
    ],
    dates: [],
    terms: [
      { w: 'Covalent bond', d: 'A bond formed by the sharing of electron pairs between atoms.' },
      { w: 'Catenation', d: 'The self-linking property of carbon atoms forming chains and rings.' },
      { w: 'Hydrocarbon', d: 'A compound of carbon and hydrogen only — alkane, alkene or alkyne.' },
      { w: 'Homologous series', d: 'A family of compounds with the same functional group, consecutive members differing by –CH₂– (14 u).' },
      { w: 'Functional group', d: 'An atom or cluster (–OH, –CHO, –CO–, –COOH, –X) that determines a compound\u2019s chemical behaviour.' },
      { w: 'Hydrogenation', d: 'Addition of H₂ across a double bond using a nickel catalyst — unsaturated oil → saturated fat.' },
      { w: 'Esterification', d: 'Alcohol + carboxylic acid, with an acid catalyst and heating → ester + water.' },
      { w: 'Micelle', d: 'A soap-cluster structure in which hydrophobic tails trap oil while ionic heads face water.' },
      { w: 'Saponification', d: 'Alkaline hydrolysis of an ester — the reaction used to make soap.' }
    ]
  },

  che5: {
    sub: 'che', no: 5, slug: 'che5',
    title: 'Periodic Classification of Elements',
    book: 'Science · Reading Material 1 · CBSE 2026-27',
    tagline: 'triads, octaves, Mendeléev and the Modern Table',
    summative: false,
    points: [
      { h: 'FORMATIVE-ONLY chapter — 2026-27', b: 'Re-added by CBSE for 2026-27 but <b>excluded from the year-end exam</b>. Study it for Portfolio/Periodic Assessment credit. Content comes from the official CBSE <b>Reading Material</b> (NCERT textual material), not the printed textbook.' },
      { h: 'Why classify?', b: 'As elements kept being discovered (from ~31 in 1800 to 118 today), chemists needed order — classification reveals <b>periodic patterns</b> in properties, predicts missing elements and their behaviour, and systematises an otherwise unmanageable list.' },
      { h: 'Döbereiner\u2019s triads (1817)', b: 'Groups of three where the middle element\u2019s atomic mass ≈ the average of the other two: Li (7) Na (23) K (39); Ca, Sr, Ba; Cl, Br, I. Limitation: only a handful of elements fitted — the idea could not be generalised.' },
      { h: 'Newlands\u2019 Law of Octaves (1865)', b: 'Elements arranged by increasing atomic mass: every <b>8th</b> element repeats the properties of the 1st — like musical octaves (Li→Na, Be→Mg…). Worked well up to calcium; failed for heavier elements and ignored noble gases (not yet discovered).' },
      { h: 'Mendeléev\u2019s Periodic Table (1869)', b: 'Properties are a periodic function of <b>atomic mass</b>. He left deliberate <b>gaps</b> (predicted eka-boron = Sc, eka-aluminium = Ga, eka-silicon = Ge — stunningly accurate), corrected Be, In and Te atomic masses, and grouped 63 elements. <b>Achievements</b>: predicted elements, corrected masses, placed newly found noble gases without disturbing the table. <b>Anomalies</b>: hydrogen\u2019s fixed position could not be given, isotopes violated the mass rule, some mass-order pairs (Co-Ni, Te-I) sat reversed by properties.' },
      { h: 'The Modern Periodic Table', b: 'Moseley\u2019s work on atomic number fixed the basis: properties are a periodic function of <b>atomic number (Z)</b> = number of protons. 18 groups (vertical, same valence-electron count → similar chemistry), 7 periods (horizontal, same number of shells; period number = shells). Hydrogen still anomalous (resembles both alkali metals and halogens).' },
      { h: 'Trends across a period and down a group', b: 'Across a period (L→R): atomic radius <b>decreases</b> (nuclear charge pulls electrons in), metallic character <b>decreases</b>, electronegativity and non-metallic character <b>increase</b>. Down a group: radius increases (new shells), metallic character increases, electropositivity increases. Oxides: metallic → basic (Na<sub>2</sub>O); non-metallic → acidic (SO<sub>2</sub>, P<sub>2</sub>O<sub>5</sub>); silicon\u2019s sits on the borderline — the <b>metalloids</b> (B, Si, Ge, As, Sb, Te) run the zig-zag boundary.' }
    ],
    dates: [],
    terms: [
      { w: 'Periodic law (Mendeléev)', d: 'The properties of elements are a periodic function of their atomic masses.' },
      { w: 'Modern periodic law', d: 'The properties of elements are a periodic function of their atomic number.' },
      { w: 'Group', d: 'A vertical column of the Modern Table — elements with the same number of valence electrons.' },
      { w: 'Period', d: 'A horizontal row — elements with the same number of electron shells; period number = shell count.' },
      { w: 'Metalloids', d: 'Borderline elements (B, Si, Ge, As, Sb, Te) with properties between metals and non-metals.' },
      { w: 'Newlands\u2019 octaves', d: 'Every 8th element, when arranged by increasing atomic mass, resembles the 1st — like musical octaves.' }
    ]
  },

  /* ============ BIOLOGY · Unit II (25 marks) ============ */
  bio1: {
    sub: 'bio', no: 1, slug: 'bio1',
    title: 'Life Processes',
    book: 'Science · Ch 6 · NCERT',
    tagline: 'nutrition, respiration, transport and excretion',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'The processes that keep living beings alive — <b>nutrition, respiration, transportation and excretion</b> — work together to build and repair the body\u2019s molecular machinery. Single-celled organisms exchange materials directly with the environment by <b>diffusion</b>; multicellular life needed specialised <b>tissue/organ systems</b> because diffusion is too slow over distances. Plants and animals solve each problem differently — that comparison is this whole chapter.' },
      { h: 'Nutrition — autotrophic (photosynthesis)', b: 'Green plants take in CO<sub>2</sub> and H<sub>2</sub>O and build starch using sunlight trapped by <b>chlorophyll</b>. Two stages: (1) <b>light reaction</b> in thylakoids — light energy → chemical energy (ATP, NADPH), water is split and O<sub>2</sub> released; (2) <b>dark reaction</b> in the stroma — CO<sub>2</sub> is converted to glucose using that energy (not light-dependent). Chloroplasts sit mostly in mesophyll cells; CO<sub>2</sub> enters through <b>stomata</b> (pores guarded by guard cells). Other autotrophs: <b>chemosynthetic</b> bacteria use chemical energy instead of light.' },
      { h: 'Nutrition — heterotrophic strategies', b: '<b>Saprophytes</b> (fungi — bread mould) digest food outside the body and absorb it. <b>Parasites</b> (cuscuta, ticks, leech, roundworm, Plasmodium) take food from a host without killing it. <b>Holozoic</b> animals ingest, digest, absorb and egest — amoeba (pseudopodia, food vacuole), paramoecium (cilia sweep food into the oral groove).' },
      { h: 'Human digestive system — the journey', b: 'Mouth → <b>saliva (salivary amylase)</b> breaks starch in the buccal cavity → <b>oesophagus</b> (peristalsis — rhythmic muscle waves) → <b>stomach</b>: HCl (acidic medium, kills germs), <b>mucus</b> (protects the lining), <b>pepsin</b> (protein digestion). Then the <b>small intestine</b>: bile from the liver (emulsifies fats — no enzyme), <b>pancreatic juice</b> (trypsin for proteins, amylase for starch, lipase for fats), and intestinal juice completes digestion. <b>Villi</b> (finger-like projections, rich blood supply) absorb nutrients; the <b>large intestine</b> reclaims water; undigested waste is egested via the rectum.' },
      { h: 'Respiration — the energy step', b: 'Food is broken down to release ATP energy — the cell\u2019s energy currency. <b>Aerobic</b>: glucose + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O + much ATP; final oxidation happens in the <b>mitochondria</b>. <b>Anaerobic (in yeast)</b>: glucose → ethanol + CO<sub>2</sub> + less ATP (fermentation — how ATP is made in bread/beer). <b>Anaerobic (in our muscles)</b>: glucose → lactic acid — the cramp after sprinting. Aerobic first breaks glucose to <b>pyruvate</b> in the <b>cytoplasm</b>, then routes to mitochondria.' },
      { h: 'Human respiratory system', b: 'Air: nostrils → pharynx → larynx → <b>trachea</b> (rings of cartilage keep it open) → bronchi → bronchioles → <b>alveoli</b> — balloon-like sacs wrapped in capillaries, where O<sub>2</sub> and CO<sub>2</sub> diffuse in and out of blood. <b>Breathing</b>: the diaphragm flattens and the rib cage lifts → chest volume rises → air rushes in (inhalation); relaxation exhales. Residual air in the lungs keeps the exchange surface from collapsing.' },
      { h: 'Transport in plants — xylem and phloem', b: 'Water and minerals: root hairs absorb from soil → <b>xylem</b> vessels lift it up — pushed by <b>root pressure</b> (night, guttation) and pulled by <b>transpiration pull</b> (evaporation from leaves creates suction; transpiration also cools the plant and moves minerals). Food: <b>phloem</b> moves sucrose both directions (<b>translocation</b>) from leaves (source) to storage/growing parts (sink), using energy from ATP.' },
      { h: 'Transport in humans — the double pump', b: 'The heart has 4 chambers — 2 atria, 2 ventricles. <b>Double circulation</b>: right side pumps deoxygenated blood to the lungs (pulmonary), left side pumps oxygenated blood to the body (systemic) — separation keeps oxygenated and deoxygenated blood apart, efficient for warm-blooded animals. Valves prevent backflow. Arteries (thick, elastic, carry blood away under high pressure), veins (thin, valves, return blood), <b>capillaries</b> (one cell thick — exchange). Blood = plasma + RBCs (haemoglobin carries O<sub>2</sub>), WBCs (immunity), platelets (clotting). Lymph: colourless fluid draining from tissue spaces.' },
      { h: 'Excretion — humans', b: 'The pair of kidneys holds ~a million <b>nephrons</b> each. Three steps inside the nephron: <b>glomerular filtration</b> (blood pressure filters water, glucose, salts, urea into the Bowman\u2019s capsule), <b>selective reabsorption</b> (glucose, amino acids, most water and salts reclaimed in the tubule), and <b>tubular secretion</b> (extra wastes pushed into the tubule). Output: dilute or concentrated <b>urine</b> → ureter → bladder → urethra. Artificial kidney (<b>dialysis</b>) filters blood outside the body when the kidneys fail.' },
      { h: 'Excretion — plants', b: 'Plants have no excretory organs: O<sub>2</sub> (photosynthesis) and CO<sub>2</sub> are by-products exchanged through stomata; excess water leaves by transpiration; nitrogenous wastes and resins/gums are stored in leaves that fall, bark, or old xylem (heartwood) — waste isolated, not eliminated.' }
    ],
    dates: [],
    terms: [
      { w: 'Photosynthesis', d: 'Autotrophic nutrition — chlorophyll traps light to convert CO₂ and water into glucose (starch), releasing O₂.' },
      { w: 'Peristalsis', d: 'Rhythmic wave-like contraction of the alimentary canal wall that pushes food along.' },
      { w: 'Emulsification', d: 'Bile salts breaking large fat globules into small droplets — increasing the surface area for lipase.' },
      { w: 'Aerobic respiration', d: 'Breakdown of glucose with oxygen in mitochondria → CO₂ + water + lots of energy (ATP).' },
      { w: 'Transpiration pull', d: 'Suction created by evaporation from leaf surfaces that draws water up the xylem.' },
      { w: 'Translocation', d: 'ATP-driven transport of food (sucrose) through the phloem, in both directions.' },
      { w: 'Double circulation', d: 'Blood passes through the heart twice per complete circuit — pulmonary and systemic loops.' },
      { w: 'Excretion', d: 'Removal of harmful nitrogenous metabolic wastes (like urea) from the body.' },
      { w: 'Nephron', d: 'The functional filtration unit of the kidney — glomerulus + tubule.' },
      { w: 'Dialysis', d: 'Artificial filtration of blood using a cellulose membrane in a dialysis machine — the artificial kidney.' }
    ]
  },

  bio2: {
    sub: 'bio', no: 2, slug: 'bio2',
    title: 'Control and Coordination',
    book: 'Science · Ch 7 · NCERT',
    tagline: 'stimulus, reflex arc, hormones',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Every organism must <b>sense</b> change (stimulus) and <b>respond</b> — this is control and coordination, done chemically in plants (growth-regulating <b>hormones</b>, tropic movements) and electrically + chemically in animals (the <b>nervous system</b> and <b>endocrine system</b>). One theme runs through it all: detection → transmission → response.' },
      { h: 'Plant movements — tropisms', b: 'Directional growth responses to a stimulus: <b>phototropism</b> (shoot bends to light — tip-produced auxin diffuses to the shaded side and elongates cells there), <b>geotropism/gravitropism</b> (root down, shoot up), <b>hydrotropism</b> (roots to water), <b>chemotropism</b> (pollen tube to the ovule). The <b>plant "nervous system"</b> experiment: the tendril\u2019s touched side grows slower (auxin away from contact) — the tendril coils around the support.' },
      { h: 'Plant hormones', b: '<b>Auxin</b> — cell elongation, phototropism (synthesised at shoot tips). <b>Gibberellin</b> — stem elongation, germination. <b>Cytokinin</b> — promotes cell division (in fruits/seeds, delays leaf ageing). <b>Abscisic acid (ABA)</b> — growth inhibitor, wilts leaves, closes stomata under stress. Ethylene — ripens fruit. The balance of promoters and inhibitors is the real controller.' },
      { h: 'The neuron and the nerve impulse', b: 'The nervous tissue\u2019s unit: cell body + <b>dendrites</b> (receive) + <b>axon</b> (transmits) ending in nerve terminals. A stimulus triggers an <b>electro-chemical wave</b> along the membrane; at the synapse, the signal converts to a <b>neurotransmitter chemical</b> that crosses the gap and fires the next neuron. This chemical step is why impulses are slower across synapses.' },
      { h: 'Reflex action and the reflex arc', b: 'Sudden, pre-planned responses — touching something hot — run through the <b>reflex arc</b>: receptors → sensory neuron → <b>spinal cord (relay neuron)</b> → motor neuron → effector (muscle). The brain is bypassed — <b>the spinal cord decides</b> to save time. This is why you withdraw your hand before you feel the pain. The arc structure also protects the body from harm even when the brain is busy.' },
      { h: 'The human nervous system', b: 'Central: <b>brain</b> (in the skull: cerebrum — thinking, memory, voluntary action; cerebellum — posture, balance, precision; medulla/brain stem — involuntary: heartbeat, BP, breathing, vomiting, salivation) + <b>spinal cord</b> (reflexes, signal highway in the vertebral column). Peripheral: cranial + spinal nerves. <b>Voluntary</b> actions are willed and brain-driven; <b>involuntary</b> actions run the vital organs; <b>reflex</b> actions are the fastest automatic class.' },
      { h: 'How tissues protect the brain and nerve', b: 'A bony skull and vertebral column; three <b>meninges</b>; and <b>cerebrospinal fluid</b> cushioning shocks. Nerves are bundles of neurons wrapped in a sheath — a cut or compression (as in injury) blocks conduction.' },
      { h: 'Animal hormones — chemical coordination', b: 'The <b>thyroid</b> (iodine-dependent thyroxin — regulates carbohydrate/protein/fat metabolism; deficiency = goitre). <b>Pancreas</b> — insulin controls blood sugar; failure = diabetes. <b>Adrenal</b> — adrenaline: the emergency hormone (heartbeat up, breathing faster, more blood to muscles — the "fight or flight" feeling). <b>Growth hormone</b> (pituitary) — too little = dwarfism, too much = gigantism. <b>Testosterone/oestrogen</b> — puberty changes in boys/girls. Feedback: hormone levels are self-regulated (e.g. insulin is released when glucose rises).' }
    ],
    dates: [],
    terms: [
      { w: 'Stimulus', d: 'Any change in the environment — light, touch, heat, chemicals — that an organism detects and responds to.' },
      { w: 'Tropism', d: 'Directional growth movement of a plant part in response to an external stimulus (photo-, geo-, hydro-, chemo-).' },
      { w: 'Auxin', d: 'Plant hormone synthesised at shoot tips — elongates cells; responsible for phototropism.' },
      { w: 'Synapse', d: 'The microscopic gap between two neurons, crossed by neurotransmitter chemicals.' },
      { w: 'Reflex arc', d: 'The receptor → spinal cord → effector pathway that mediates reflex actions without the brain.' },
      { w: 'Cerebellum', d: 'Hind-brain part controlling posture, balance and precision of voluntary movements.' },
      { w: 'Medulla', d: 'Brain stem part controlling involuntary actions — heartbeat, breathing, blood pressure, vomiting.' },
      { w: 'Adrenaline', d: 'The emergency hormone from the adrenal gland — prepares the body for fight or flight.' },
      { w: 'Goitre', d: 'Thyroid enlargement caused by iodine deficiency in the diet.' }
    ]
  },

  bio3: {
    sub: 'bio', no: 3, slug: 'bio3',
    title: 'How do Organisms Reproduce?',
    book: 'Science · Ch 8 · NCERT',
    tagline: 'asexual modes, the flower, and human reproduction',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Reproduction, unlike other life processes, is <b>not essential for survival</b> — but it is essential for the <b>continuity of species</b>. Because DNA copying during reproduction has slight errors (<b>variation</b>), no offspring is identical — variation is the raw material of evolution and gives populations insurance against changing environments. The modes split into <b>asexual</b> (one parent, clones) and <b>sexual</b> (two parents, gametes, more variation).' },
      { h: 'Why variation matters', b: 'If a population of identical organisms meets a new disease or a change in temperature/water, all die together. A varied population always has some survivors — reproduction\u2019s "body design" errors are a long-term survival strategy, and the method of reproduction (combining two DNAs, or not) determines how much variation each generation gets.' },
      { h: 'Asexual reproduction — the modes', b: '(1) <b>Fission</b>: binary — bacteria, amoeba, paramoecium (some along any plane, paramoecium transversely); multiple — Plasmodium (many daughter cells simultaneously). (2) <b>Fragmentation</b>: spirogyra breaks into pieces, each grows. (3) <b>Regeneration</b>: planaria/sponge — specialised cells regrow a whole organism from a piece. (4) <b>Budding</b>: yeast, hydra — a bud grows and detaches. (5) <b>Vegetative propagation</b>: rose, banana, sugarcane, jasmine — grown from stem cuttings/layering; potato\u2019s eyes (buds on the tuber) sprout; bryophyllum plantlets grow on leaf margins. (6) <b>Spore formation</b>: rhizopus — thick-walled spores in sporangia survive harsh conditions and germinate in moisture.' },
      { h: 'Sexual reproduction — the flower', b: 'Flower = the reproductive structure. Male: <b>stamen</b> — anther (pollen grains with the male gamete) + filament. Female: <b>pistil</b> — stigma (sticky landing pad), style, <b>ovary</b> containing ovules (each holds the egg). <b>Pollination</b> = pollen transfer, self or cross (cross brings more variation — agents: wind, water, insects). <b>Fertilisation</b>: pollen tube grows down the style, the male gamete fuses with the egg in the ovule → <b>zygote</b> → embryo. The ovule becomes the <b>seed</b>; the ovary ripens into the <b>fruit</b>; petals/sepals wither.' },
      { h: 'Human puberty and the reproductive systems', b: 'Puberty (girls ~10-12, boys ~13-14): the testes/ovaries begin producing gametes and <b>testosterone/oestrogen</b> — height spurt, body hair, voice change (boys), breast development and menstruation (girls). Male system: testes (outside the body in the <b>scrotum</b> — sperm need a temperature ~3 K lower) → vas deferens → urethra; seminal vesicles/prostate add seminal fluid (semen). Female system: <b>ovaries</b> (one egg released per cycle) → <b>fallopian tube</b> (fertilisation site) → <b>uterus</b> (implantation, development) → vagina (birth canal).' },
      { h: 'Fertilisation, implantation, gestation', b: 'During intercourse the male deposits semen in the vagina; sperm swim up to meet the egg in the fallopian tube — <b>internal fertilisation</b>. The nuclei fuse → zygote → cell divisions → <b>blastocyst implants</b> in the uterine lining. The <b>placenta</b> (villous disc) lets the foetus draw nutrition, oxygen and waste-exchange from the mother\u2019s blood — viruses and drugs can also cross it. Gestation ≈ <b>9 months</b> → labour → childbirth. The embryo\u2019s development is protected by amniotic fluid.' },
      { h: 'Reproductive health — contraception', b: 'Why: avoid unwanted pregnancy, space children, prevent sexually transmitted infections (<b>STIs</b>: HIV/AIDS, gonorrhoea, syphilis, warts — bacterial ones curable, viral ones not; condoms are the only method that also blocks STI spread). Methods — <b>barrier</b> (condoms, diaphragm), <b>hormonal</b> (oral pills change hormonal balance so eggs aren\u2019t released), <b>IUCD/CuT</b> (copper T in the uterus), <b>surgical</b> (vasectomy — vas deferens cut in males; tubectomy — fallopian tubes blocked in females). Female foeticide is a crime — it skews the child sex ratio.' },
      { h: 'Safe sex vs HIV/AIDS — and women\u2019s health', b: 'HIV spreads by sexual contact, infected blood/needles, and mother→child (placenta, delivery, breast milk) — <b>not</b> by touch, sharing food or insect bites. Using condoms and a single, uninfected partner = safe sex. Child bearing and women\u2019s health: early marriage and repeated pregnancies harm a girl\u2019s health and education — family planning (spacing, limiting) protects both mother and children.' }
    ],
    dates: [],
    terms: [
      { w: 'Variation', d: 'Differences between parents and offspring (and among offspring) — born from slight DNA-copying errors.' },
      { w: 'Regeneration', d: 'An organism regrows a complete individual from a cut piece — planaria, sponge (specialised cells do this).' },
      { w: 'Vegetative propagation', d: 'Asexual reproduction via vegetative parts — stem cuttings, layering, potato eyes, bryophyllum leaf plantlets.' },
      { w: 'Pollination', d: 'Transfer of pollen from anther to stigma — self (same flower) or cross (different flower/plant).' },
      { w: 'Placenta', d: 'The disc of villi in the uterus through which the foetus exchanges nutrients, oxygen and wastes with the mother\u2019s blood.' },
      { w: 'Vasectomy / Tubectomy', d: 'Surgical contraception — cutting the vas deferens (male) / blocking the fallopian tubes (female).' },
      { w: 'STI', d: 'Sexually transmitted infection — bacterial (gonorrhoea, syphilis) or viral (HIV, warts); condoms block their spread.' }
    ]
  },

  bio4: {
    sub: 'bio', no: 4, slug: 'bio4',
    title: 'Heredity',
    book: 'Science · Ch 9 · NCERT (rationalised: Heredity portion)',
    tagline: 'Mendel\u2019s laws, dominance and sex determination',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Heredity is the transmission of traits from parents to offspring through genes on <b>chromosomes</b>. <b>Mendel\u2019s pea-plant experiments</b> revealed the rules — segregation of paired factors, independent assortment of separate traits, and <b>dominance</b>. In humans, the <b>23rd chromosome pair</b> decides sex: XX = girl, XY = boy — and the father\u2019s gamete carries either X or Y, so the <b>father determines the child\u2019s sex</b>. (Evolution topics are formative-only this year — see the next chapter card.)' },
      { h: 'Mendel and the pea', b: 'Gregor Mendel (1856-63, monastery garden, Brno) chose garden pea — clear either/or traits, self-pollinating, fast generations. Seven contrasting pairs: tall/dwarf, round/wrinkled seeds, yellow/green seeds, violet/white flowers, inflated/constricted pods, green/yellow pods, axial/terminal flowers. He tracked one trait at a time across generations — statistics, not just observation, was his genius.' },
      { h: 'Monohybrid cross and the 3:1 ratio', b: 'Pure tall (TT) × pure dwarf (tt) → all F<sub>1</sub> <b>tall (Tt)</b>: tall is <b>dominant</b>, dwarf <b>recessive</b>. F<sub>1</sub> self-pollinated → F<sub>2</sub>: <b>3 tall : 1 dwarf</b> (genotypes 1 TT : 2 Tt : 1 tt — the 1:2:1 genotypic ratio hides beneath the 3:1 phenotypic one). The factors (now called genes) separate cleanly during gamete formation — <b>Mendel\u2019s law of segregation</b>.' },
      { h: 'Dihybrid cross and 9:3:3:1', b: 'Round-yellow (RRYY) × wrinkled-green (rryy) → F<sub>1</sub> all round-yellow. F<sub>2</sub>: <b>9 round-yellow : 3 round-green : 3 wrinkled-yellow : 1 wrinkled-green</b>. New combinations (round-green, wrinkled-yellow) prove the two trait-pairs are inherited <b>independently</b> — <b>Mendel\u2019s law of independent assortment</b>.' },
      { h: 'How traits are carried — genes, DNA, chromosomes', b: 'Each cell has two copies of every gene (one from each parent) on <b>homologous chromosome pairs</b> — humans have 23 pairs (46). Gametes get one copy each (meiosis halves the count). DNA is the molecule of inheritance; a gene is its functional stretch coding for a protein (e.g. the enzyme that makes plant-growth hormone — tall plants make enough of it, dwarf plants don\u2019t).' },
      { h: 'Acquired vs inherited traits', b: '<b>Inherited</b> — in the DNA of germ cells, passed on (eye colour, blood group, hair type). <b>Acquired</b> — gained in one\u2019s lifetime (a wrestler\u2019s muscles, a cut tail of mice across generations — Weismann\u2019s classic test) — <b>cannot be inherited</b>: changes to body cells don\u2019t touch the germ-cell DNA. This distinction matters again in Evolution (formative).' },
      { h: 'Sex determination in humans', b: 'All eggs carry <b>X</b>; sperm carry either <b>X</b> or <b>Y</b> (50-50). X-sperm + X-egg = <b>XX girl</b>; Y-sperm + X-egg = <b>XY boy</b>. So the <b>father\u2019s gamete determines sex</b> — blaming mothers is biologically wrong. Sex determination varies in nature: in some turtles, <b>temperature</b> decides it; in snails, an individual can change sex.' }
    ],
    dates: [],
    terms: [
      { w: 'Gene', d: 'A functional stretch of DNA coding for a protein; the unit of heredity.' },
      { w: 'Allele', d: 'Alternative forms of a gene for a trait — T (tall) and t (dwarf).' },
      { w: 'Genotype / Phenotype', d: 'Genotype = the allele pair (Tt); phenotype = the visible trait (tall).' },
      { w: 'Dominant / Recessive', d: 'The allele expressed even in a pair with the other (T); the allele expressed only when both copies match (tt).' },
      { w: 'Law of segregation', d: 'Paired alleles separate during gamete formation — each gamete carries only one.' },
      { w: 'Law of independent assortment', d: 'Genes for different traits are inherited independently of each other.' },
      { w: 'Acquired trait', d: 'A change in non-reproductive body cells, gained during a lifetime — not inherited.' }
    ]
  },

  bio5: {
    sub: 'bio', no: 5, slug: 'bio5',
    title: 'Evolution',
    book: 'Science · Reading Material 2 · CBSE 2026-27',
    tagline: 'variation, speciation, fossils, Darwin',
    summative: false,
    points: [
      { h: 'FORMATIVE-ONLY chapter — 2026-27', b: 'The Evolution half of the old Heredity & Evolution chapter is re-added by CBSE but <b>excluded from the year-end exam</b> — study it for Portfolio/Periodic Assessment. Source: official CBSE <b>Reading Material</b> (the NCERT textual material).' },
      { h: 'Micro-evolution by natural selection — the beetle story', b: 'NCERT\u2019s famous beetle parable: in a green-bush population of red beetles, variation throws up blue and then <b>green</b> beetles. Crows eat the visible red ones — green beetles survive and multiply (a plant spreading in the bushes gives green camouflage — no "will" involved). Later, an elephant-caused bush fire kills most beetles; the survivors\u2019 genes dominate by <b>accident</b> — genetic drift. Selection needs a trait to give a survival edge; drift is random change in small populations.' },
      { h: 'Acquired vs inherited — the mouse test', b: 'Cut the tails of mice for generations — every baby mouse is still born with a tail. Acquired changes (in body cells) never reach the germ cells\u2019 DNA, so <b>acquired traits cannot direct evolution</b>. Only inherited variations (born in the DNA of reproductive cells) can be selected and passed on.' },
      { h: 'Speciation', b: 'One species splits into two when gene flow stops: <b>geographical isolation</b> (a river splits a beetle population) → separate accumulation of <b>genetic drift</b> and <b>natural selection</b> → <b>reproductive isolation</b> (they can no longer interbreed even if reunited). Geographical isolation cannot cause speciation in a self-pollinating plant or an asexually reproducing organism — favourite trick question.' },
      { h: 'Evolution and classification — tracing relationships', b: 'Homologous structures (forelimbs of humans, bats, whales, birds — same basic design, different uses) prove <b>common ancestry with divergence</b>; analogous structures (bird wing vs insect wing — similar function, different design) are convergent look-alikes. Classification groups reflect evolutionary branching — the more recent the common ancestor, the closer the grouping.' },
      { h: 'Fossils', b: 'Preserved traces of ancient life. Dating: <b>deeper = older</b> (relative dating by depth); <b>carbon dating</b> (radioactive isotope decay) gives absolute ages. Archaeopteryx — feathered dinosaur with wings AND teeth, tail, claws — is the classic missing link between reptiles and birds.' },
      { h: 'Evolution by stages — and molecular phylogeny', b: 'Organs evolve stepwise: even a rudimentary eye (flatworm\u2019s light-sensitive spot) gives survival advantage. Feathers evolved for <b>warmth</b> first, flight later. <b>Molecular phylogeny</b>: compare DNA/protein sequences across species — more differences = more distant the common ancestor. All modern humans are one species; "races" differ only in superficial alleles.' },
      { h: 'Darwin\u2019s theory and human evolution', b: '<b>Charles Darwin</b> (On the Origin of Species, 1859): variation exists in every population; resources are limited; the best-adapted survive and reproduce — <b>natural selection</b>, evolution from simple to complex. Human evolution: all humans belong to a single species — <b>Homo sapiens</b> — that arose in <b>Africa</b> and spread worldwide, migrating in waves; skin/face differences are recent, minor adaptations — there are no biological "races".' }
    ],
    dates: [],
    terms: [
      { w: 'Genetic drift', d: 'Random change in gene frequencies in a small population — accident, not selection.' },
      { w: 'Natural selection', d: 'Environmental pressure that lets better-adapted variants survive and reproduce more.' },
      { w: 'Speciation', d: 'Origin of new species — geographical isolation + drift/selection → reproductive isolation.' },
      { w: 'Homologous organs', d: 'Same basic structure, different functions (forelimbs) — evidence of common ancestry.' },
      { w: 'Analogous organs', d: 'Different structures, similar function (bird wing vs insect wing) — convergent evolution.' },
      { w: 'Fossil', d: 'Preserved remains/traces of organisms from the past; deeper fossils are older.' },
      { w: 'Archaeopteryx', d: 'Fossil missing link between reptiles and birds — had feathers plus teeth, claws and a tail.' },
      { w: 'Homo sapiens', d: 'The single human species — arose in Africa and migrated worldwide.' }
    ]
  },

  /* ============ PHYSICS · Units III+IV (12+13 marks) ============ */
  phy1: {
    sub: 'phy', no: 1, slug: 'phy1',
    title: 'Light — Reflection and Refraction',
    book: 'Science · Ch 9 · NCERT',
    tagline: 'mirrors, lenses, formulas and the eye',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Light travels in straight lines and interacts with surfaces in two ways. <b>Reflection</b> at spherical mirrors obeys the mirror formula 1/v + 1/u = 1/f; <b>refraction</b> through lenses obeys the lens formula 1/v – 1/u = 1/f. With sign conventions and ray diagrams, these two formulas plus magnification m = h′/h answer every numerical. The same optics explains the <b>human eye</b>, its defects (myopia, hypermetropia, presbyopia) and their correction by lenses; prisms split white light by refraction — <b>dispersion</b> — and atmospheric scattering colours the sky.' },
      { h: 'Reflection basics and spherical mirrors', b: 'Angle of incidence = angle of reflection (both from the normal); image is laterally inverted. A concave mirror converges; a convex mirror diverges. Definitions: <b>pole (P)</b> centre of the mirror, <b>centre of curvature (C)</b> centre of the sphere, <b>principal axis</b> the line through P and C, <b>principal focus (F)</b> where parallel rays meet (concave) or appear to (convex), <b>focal length f = R/2</b>. A small aperture keeps the mirror "obeying" the formulas.' },
      { h: 'Ray diagrams — the four standard rules', b: 'A ray parallel to the axis reflects through F; through F reflects parallel; towards C reflects back along itself; towards the pole reflects symmetrically. Image positions to memorise for the <b>concave mirror</b>: beyond C → real inverted diminished (between F and C); at C → same size at C; between C and F → enlarged beyond C; at F → highly enlarged at infinity; between P and F → virtual erect enlarged behind the mirror (the shaving/dentist mirror use). <b>Convex mirror</b>: always virtual, erect, diminished — hence its use as a rear-view mirror (wide field of view, erect images).' },
      { h: 'Mirror formula and magnification', b: '<b>1/v + 1/u = 1/f</b>, with the <b>New Cartesian convention</b>: distances measured from the pole; towards the incident light (usually left) negative, along it positive; heights above the axis positive, below negative. <b>Magnification m = h′/h = –v/u</b> — negative m means an inverted (real) image. Numericals: watch the signs of u (negative for real objects) and f (negative for concave, positive for convex).' },
      { h: 'Refraction and refractive index', b: 'Light bends when passing between media of different optical density (the bent-pencil-in-water effect). Laws: the incident ray, refracted ray and normal lie in one plane; <b>sin i / sin r = constant</b> (Snell\u2019s law). <b>Refractive index n = c/v</b> — speed of light in vacuum over speed in the medium; optically denser = slower light = higher n. n<sub>21</sub> = n<sub>1</sub>/n<sub>2</sub> = v<sub>1</sub>/v<sub>2</sub>. Air→glass bends the ray towards the normal; glass→air away (and beyond the critical angle, total internal reflection).' },
      { h: 'Refraction by spherical lenses', b: 'Convex (converging) and concave (diverging) lens — same f = R/2-style definitions with two foci. Ray rules: parallel ray refracts through F<sub>2</sub>; through F<sub>1</sub> emerges parallel; through the optical centre passes undeviated. Convex lens images: object beyond 2F → real inverted diminished (camera); at 2F → same size; between F and 2F → enlarged (projector); at F → at infinity; inside F → virtual erect enlarged (magnifying glass). <b>Concave lens</b>: always virtual, erect, diminished.' },
      { h: 'Lens formula, magnification, power', b: '<b>1/v – 1/u = 1/f</b> (same sign convention; f positive for convex, negative for concave). <b>m = v/u</b> (no minus sign for lenses — v and u carry opposite signs for real images, giving negative m automatically). <b>Power P = 1/f (in metres)</b>, unit dioptre (D); converging lens positive, diverging negative. Powers in contact simply add: P = P<sub>1</sub> + P<sub>2</sub>.' },
      { h: 'Uses of mirrors and lenses', b: 'Concave mirror: torches/headlights (bulb at F → parallel beam), shaving mirrors, dentist’s mirrors, solar furnaces, satellite dishes. Convex mirror: rear-view/vehicle mirrors, security mirrors in shops. Convex lens: cameras, projectors, magnifying glasses, microscopes/telescopes. Concave lens: peepholes, correcting myopia.' }
    ],
    dates: [],
    terms: [
      { w: 'Principal focus', d: 'The point where rays parallel to the principal axis converge (concave/convex) or appear to diverge from (convex mirror/concave lens).' },
      { w: 'Focal length', d: 'Distance between pole/optical centre and the principal focus; f = R/2 for mirrors.' },
      { w: 'Magnification', d: 'm = h′/h; for mirrors also –v/u, for lenses v/u. Negative m = inverted real image.' },
      { w: 'Refractive index', d: 'n = c/v — the ratio of light\u2019s speed in vacuum to its speed in a medium.' },
      { w: 'Power of a lens', d: 'P = 1/f(metres), measured in dioptres; positive for convex, negative for concave.' },
      { w: 'New Cartesian convention', d: 'Distances measured from the pole/optical centre; against the incident light negative; heights above the axis positive.' }
    ]
  },

  phy2: {
    sub: 'phy', no: 2, slug: 'phy2',
    title: 'The Human Eye and the Colourful World',
    book: 'Science · Ch 10 · NCERT',
    tagline: 'the eye, vision defects, dispersion and scattering',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'The human eye is a living optical instrument — a convex lens focusing light onto the retina. Its power to change focus (<b>accommodation</b>) and its three common defects (<b>myopia, hypermetropia, presbyopia</b>) are corrected with lenses. Beyond the eye: a glass prism splits white light into a spectrum (<b>dispersion</b>), and tiny atmospheric particles redirect light (<b>scattering</b>) — the physics behind the blue sky (colour of the sun at sunrise/sunset is excluded from the 2026-27 exam).' },
      { h: 'The human eye — structure and working', b: 'Cornea (thin, transparent bulge — does most of the refraction) → <b>iris</b> (coloured diaphragm) controls the <b>pupil</b>’s size (small in bright light) → <b>eye lens</b> (jelly-like; its curvature is fine-tuned by <b>ciliary muscles</b>) → image on the <b>retina</b> — light-sensitive <b>rods</b> (dim light) and <b>cones</b> (bright light + colour), sharpest at the <b>yellow spot</b>. The optic nerve carries the signal to the brain; the retinal image is real, inverted and diminished — the brain reads it upright.' },
      { h: 'Accommodation, near and far points', b: '<b>Accommodation</b> — ciliary muscles change the lens’s curvature (and focal length) to focus objects at different distances: relaxed for distant objects, more curved for near ones. <b>Least distance of distinct vision</b> (near point) = <b>25 cm</b> for a normal adult eye; the <b>far point</b> is at infinity.' },
      { h: 'Myopia (near-sightedness)', b: 'Distant objects blur: the eyeball is too long or the lens too powerful — parallel rays focus <b>before</b> the retina. Far point comes closer than infinity. Correction: a <b>concave (diverging) lens</b>. Example: far point 80 cm → lens of power –1.25 D.' },
      { h: 'Hypermetropia (far-sightedness)', b: 'Near objects blur: the eyeball is too short or the lens too weak — rays from close objects would focus <b>behind</b> the retina; the near point recedes beyond 25 cm. Correction: a <b>convex (converging) lens</b>.' },
      { h: 'Presbyopia and bifocals', b: 'With age the lens <b>stiffens</b> and ciliary muscles weaken — accommodation is lost (distinct from hypermetropia though the correction direction is the same). <b>Bifocals</b>: upper half concave (distance, if needed), lower half convex (reading) — the standard fix when both defects coexist.' },
      { h: 'Dispersion through a prism', b: 'A triangular glass prism bends light twice, and different colours bend by different amounts — <b>violet most, red least</b> — so white light fans out into <b>VIBGYOR</b>: the spectrum. Newton’s two-prism experiment showed the colours belong to the light, not the prism — recombined, they make white again. A rainbow is nature’s dispersion (refraction + internal reflection in raindrops).' },
      { h: 'Atmospheric refraction and scattering', b: '<b>Atmospheric refraction</b>: varying air density bends starlight — stars twinkle (planets barely), and the Sun stays visible ~2 minutes before true sunrise/after sunset. <b>Scattering</b>: tiny particles redirect light; shorter wavelengths scatter more — the sky is blue, danger signals are red (red scatters least, stays visible furthest). The <b>Tyndall effect</b> — colloidal particles making a beam visible — is the same physics.' }
    ],
    dates: [],
    terms: [
      { w: 'Accommodation', d: 'The eye lens changing its focal length (via ciliary muscles) to focus objects at different distances.' },
      { w: 'Least distance of distinct vision', d: 'The nearest distance at which the eye can focus clearly — 25 cm for a normal adult.' },
      { w: 'Myopia', d: 'Near-sightedness — image forms before the retina; corrected with a concave lens.' },
      { w: 'Hypermetropia', d: 'Far-sightedness — image of near objects forms behind the retina; corrected with a convex lens.' },
      { w: 'Presbyopia', d: 'Age-related loss of accommodation — the lens stiffens; corrected with convex (often bifocal) lenses.' },
      { w: 'Dispersion', d: 'Splitting of white light into its seven colours by a prism — violet deviated most, red least.' },
      { w: 'Tyndall effect', d: 'Scattering of a light beam by colloidal particles, making the beam’s path visible.' }
    ]
  },

  phy3: {
    sub: 'phy', no: 3, slug: 'phy3',
    title: 'Electricity',
    book: 'Science · Ch 11 · NCERT',
    tagline: 'Ohm\u2019s law, resistance and heating',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'Electric circuits run on three measured quantities — <b>charge Q</b> (coulomb), <b>potential difference V</b> (volt, 1 V = 1 J/C) and <b>current I</b> (ampere, 1 A = 1 C/s). <b>Ohm\u2019s law</b> V = IR links them through <b>resistance</b> R, which depends on the conductor\u2019s length, cross-section, material (resistivity ρ) and temperature. Resistors in <b>series</b> add; in <b>parallel</b> they share current. Current\u2019s heating effect H = I<sup>2</sup>Rt powers geysers and fuses, and P = VI sets the electricity bill.' },
      { h: 'Charge, current and potential difference', b: 'A conductor\u2019s charge Q = n × e where e = 1.6 × 10<sup>-19</sup> C (an electron\u2019s charge). <b>Current I = Q/t</b> — the rate of flow of charge, measured by an <b>ammeter in series</b>. Work done per unit charge = <b>potential difference V = W/Q</b>, measured by a <b>voltmeter in parallel</b>. Current is conventionally drawn from + to − (electrons actually drift the other way — and their drift is slow; the signal travels fast).' },
      { h: 'Circuit diagrams and Ohm\u2019s law', b: 'Symbols: cell, battery, wire, switch, ammeter (A, series), voltmeter (V, parallel), resistor (zigzag). <b>Ohm\u2019s law</b>: at constant temperature, V ∝ I, so <b>V = IR</b> — verified by the ammeter-voltmeter experiment (a rheostat varies current; the V–I graph is a straight line through the origin with slope R). A <b>rheostat</b> is a variable resistor.' },
      { h: 'Resistance, resistivity, and factors', b: '<b>R = ρL/A</b> — resistance grows with length, shrinks with cross-sectional area; ρ (resistivity) is the material\u2019s signature (units Ω·m). Copper/aluminium (low ρ) make wires; nichrome (high ρ) makes heating elements; rubber and glass are insulators. Most metals: resistance rises with temperature. A wire stretched to double its length quadruples its resistance (L doubles AND A halves) — the classic trap.' },
      { h: 'Series combination', b: 'Same current everywhere; voltages add: V = V<sub>1</sub> + V<sub>2</sub> + …; <b>R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub> + …</b> — the equivalent is larger than any single resistor. Disadvantage: one appliance failing breaks the whole string — that\u2019s why homes use parallel wiring.' },
      { h: 'Parallel combination', b: 'Same voltage across each branch; currents add: I = I<sub>1</sub> + I<sub>2</sub> + …; <b>1/R<sub>p</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + …</b> — the equivalent is smaller than the smallest branch. Two equal resistors in parallel halve R. Household circuits are parallel so each appliance gets full voltage and works independently.' },
      { h: 'Heating effect and its applications', b: 'A current heats its conductor: <b>H = I<sup>2</sup>Rt</b> (Joule\u2019s law of heating — also VIt or V<sup>2</sup>t/R). Uses: <b>electric iron, geyser, toaster, immersion rod</b> (heating elements of high-resistivity nichrome); <b>electric bulb</b> (tungsten filament — high m.p., glows at ~3000 K in an inert/argon atmosphere); <b>fuse</b> (low-m.p. alloy wire that melts and breaks the circuit on overload — the safety device); and the working of an electric laundry iron\u2019s thermostat.' },
      { h: 'Electric power', b: '<b>P = VI = I<sup>2</sup>R = V<sup>2</sup>/R</b>, unit watt (1 W = 1 J/s); commercial unit <b>1 kWh = 3.6 × 10<sup>6</sup> J</b> ("unit" on the bill). Example: a 40 W bulb × 10 hours = 0.4 kWh. Rating plates ("220 V, 100 W") give both operating voltage and power — from which you can compute R and the current drawn.' }
    ],
    dates: [],
    terms: [
      { w: 'Potential difference', d: 'Work done to move a unit charge between two points, V = W/Q; unit volt.' },
      { w: 'One ampere', d: 'A current of 1 C flowing past a point in 1 s (1 A = 1 C/s).' },
      { w: 'Ohm\u2019s law', d: 'At constant temperature, V ∝ I — the V–I graph is a straight line; R = V/I.' },
      { w: 'Resistivity', d: 'ρ = RA/L — the resistance of a unit cube of the material; unit Ω·m. Temperature- and material-dependent.' },
      { w: 'Series circuit', d: 'Single path: current common, voltages add, R_s = R₁ + R₂ + …' },
      { w: 'Parallel circuit', d: 'Branching paths: voltage common, currents add, 1/R_p = 1/R₁ + 1/R₂ + …' },
      { w: 'Joule\u2019s law of heating', d: 'H = I²Rt — heat produced by a current in a resistor.' },
      { w: '1 kWh (unit)', d: 'Energy used by a 1 kW device in 1 hour = 3.6 × 10⁶ J — the electricity bill\u2019s "unit".' }
    ]
  },

  phy4: {
    sub: 'phy', no: 4, slug: 'phy4',
    title: 'Magnetic Effects of Electric Current',
    book: 'Science · Ch 12 · NCERT',
    tagline: 'field lines, solenoids, Fleming\u2019s rules, domestic circuits',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'A current always makes a <b>magnetic field</b> around it (Oersted\u2019s lucky compass discovery). Field patterns: straight wire → concentric circles (right-hand thumb rule); <b>loop</b> or <b>solenoid</b> → like a bar magnet (the electromagnet). A current-carrying conductor in a field feels a force — <b>Fleming\u2019s left-hand rule</b> — the motor principle. Currents can be induced by moving fields — <b>Fleming\u2019s right-hand rule</b> — but EMI, motor and generator are <b>formative-only in 2026-27</b>. Exam focus: field lines, solenoid, force rule, <b>AC vs DC, advantages of AC, and domestic circuits</b>.' },
      { h: 'Magnetic field and field lines', b: 'A compass needle is a tiny magnet that aligns with the field — its needle\u2019s direction defines the field direction (north to south outside a magnet). <b>Field lines</b> never intersect (a compass would need two directions at once); they\u2019re crowded where the field is strongest (near poles); they form closed curves. Iron filings sprinkled on a magnet trace them — each filing turns into a tiny magnet.' },
      { h: 'Field of a straight conductor — the right-hand thumb rule', b: 'Concentric circles around the wire, bigger circles as you move away (field weakens with distance, ∝ 1/r for a long straight wire). Direction from current: <b>right-hand thumb rule</b> — thumb with the current, curled fingers give the field\u2019s direction. Reversing the current reverses every circle.' },
      { h: 'Loop, solenoid and the electromagnet', b: 'A loop\u2019s field = one face a N-pole, the other a S-pole (clockwise current seen → S-pole). A <b>solenoid</b> (helical coil) makes a nearly-uniform field inside — a bar-magnet pattern, poles decided by the winding direction. Inserting a <b>soft-iron core</b> makes a strong <b>electromagnet</b> (cranes, electric bells, relays) — switch the current off and the magnetism vanishes, which is exactly the point.' },
      { h: 'Force on a conductor — Fleming\u2019s left-hand rule', b: 'A current-carrying wire in a magnetic field gets pushed — the field of the wire distorts the external field, and the wire moves away from the crowding. <b>Left-hand rule</b>: forefinger = Field, middle finger = Current, thumb = Force (all mutually perpendicular). Reversing current or field reverses the force. This principle (motor effect) underlies how a motor works — details formative this year.' },
      { h: 'Direct current and alternating current', b: '<b>DC</b> flows one way (batteries, cells). <b>AC</b> reverses direction periodically — in India <b>50 cycles/s, i.e. frequency 50 Hz</b>, changing polarity every 1/100 s. AC is what the grid supplies. <b>Advantages of AC over DC</b>: (1) it can be transmitted over long distances without much loss (voltage stepped up/down easily with transformers); (2) it can be "rectified" to DC when needed, not vice versa so easily.' },
      { h: 'Domestic electric circuits', b: 'From the street: insulated supply lines + earth wire enter the <b>main fuse and meter</b> → main switch → the house\u2019s <b>two separate circuits, each with its own fuse</b> — 15 A for high-power (geyser, AC, heater) and 5 A for bulbs and fans. Wiring is in <b>parallel</b> (equal voltage for all, independent switching). The <b>live wire</b> (red/brown, 220 V) and <b>neutral</b> (black/blue, ground potential) complete the loop; the <b>earth wire</b> (green) connects metal bodies of appliances to the earth — if live touches the body, current flows to the ground and the fuse blows, saving a shock. <b>Short circuit</b> (live meets neutral directly — current spikes, fuse melts) and <b>overloading</b> (too many appliances on one circuit) are the two accidents fuses protect against.' }
    ],
    dates: [],
    terms: [
      { w: 'Magnetic field line', d: 'A curve along which a compass needle aligns; never intersect, crowd near poles, form closed loops.' },
      { w: 'Right-hand thumb rule', d: 'Thumb points with the current; curled fingers show the direction of the field circles around a wire.' },
      { w: 'Solenoid', d: 'A coil of many circular turns — produces a uniform bar-magnet-like field inside; with a soft-iron core, an electromagnet.' },
      { w: 'Fleming\u2019s left-hand rule', d: 'Forefinger (Field), middle finger (Current), thumb (Force) — the motor principle\u2019s direction finder.' },
      { w: 'Alternating current', d: 'Current reversing direction periodically — in India at 50 Hz.' },
      { w: 'Earth wire', d: 'Green wire connecting appliance bodies to the earth — a safety path that blows the fuse on a live fault.' },
      { w: 'Short circuit', d: 'Live and neutral touching directly — near-zero resistance, huge current, fuse melts.' }
    ]
  },

  phy5: {
    sub: 'phy', no: 5, slug: 'phy5',
    title: 'Electric Motor, EMI and Generator',
    book: 'Science · Reading Material 3 · CBSE 2026-27',
    tagline: 'motor principle, induction, the dynamo',
    summative: false,
    points: [
      { h: 'FORMATIVE-ONLY chapter — 2026-27', b: 'Motor, <b>electromagnetic induction</b> and the <b>electric generator</b> are re-added by CBSE but <b>excluded from the year-end exam</b> — study for Portfolio/Periodic Assessment. Source: official CBSE <b>Reading Material 3</b>.' },
      { h: 'The electric motor — a current-loop in a field', b: 'A rectangular coil between the poles of a magnet, carrying current, feels equal-and-opposite forces on its opposite arms → rotation. The <b>split-ring commutator</b> reverses current direction every half-turn, so the torque never flips sign and the coil keeps spinning; <b>brushes</b> connect the battery to the rotating commutator. Uses: fans, washing machines, mixers, electric vehicles. Physics: Fleming\u2019s left-hand rule at every instant.' },
      { h: 'Electromagnetic induction — Faraday and Henry', b: 'A moving or changing magnetic field near a conductor induces a current — <b>electromagnetic induction (EMI)</b> (Faraday, Henry, 1831). Two ways to induce current: move a magnet inside a coil of wire, or change the current in a nearby coil (one circuit induces the other). More turns of the coil, stronger magnet, faster motion → larger induced current. No motion / no change → no current. Fleming\u2019s <b>right-hand</b> rule gives the induced current\u2019s direction (thumb = motion, forefinger = field, middle finger = induced current).' },
      { h: 'The electric generator', b: 'The motor run backwards: instead of current-in-motion-out, motion-in-current-out. A coil rotated in a magnetic field → induced current (Faraday\u2019s principle). <b>AC generator</b>: slip rings deliver alternating current. <b>DC generator</b>: a commutator delivers one-direction current. The energy chain: mechanical (turbine) → electrical. Big power-station generators work on exactly this principle; a bicycle dynamo is a small one.' },
      { h: 'The grid story — why AC wins', b: 'Power stations generate AC, stepped up to hundreds of kilovolts for transmission (high V = low I = low I<sup>2</sup>R line loss) and stepped down for homes. Transformers work only with AC — a key practical reason the grid is AC. Note for the exam proper: "advantage of AC over DC" and "frequency of AC in India = 50 Hz" are still summative (phy4).' }
    ],
    dates: [],
    terms: [
      { w: 'Commutator', d: 'Split-ring device that reverses current direction in a motor coil every half rotation — keeps it turning.' },
      { w: 'Electromagnetic induction', d: 'Production of electricity by a changing magnetic field around a conductor (Faraday, 1831).' },
      { w: 'Fleming\u2019s right-hand rule', d: 'Thumb (motion), forefinger (field), middle finger (induced current) — direction finder for generators.' },
      { w: 'Electric generator', d: 'Device converting mechanical energy into electrical energy by rotating a coil in a magnetic field.' },
      { w: 'Slip rings', d: 'Smooth rings in an AC generator that carry the alternating current out without reversing it.' }
    ]
  },

  /* ============ ENVIRONMENT · Unit V (5 marks) ============ */
  env1: {
    sub: 'env', no: 1, slug: 'env1',
    title: 'Our Environment',
    book: 'Science · Ch 15 · NCERT',
    tagline: 'ecosystems, food chains, ozone and waste',
    summative: true,
    points: [
      { h: 'The chapter in one paragraph', b: 'An <b>ecosystem</b> = a physical environment + its interacting organisms. Energy from the Sun is trapped by <b>producers</b> (green plants) and flows through the <b>food chain</b> — consumers at each level, <b>decomposers</b> recycling the rest. Non-biodegradable waste and <b>ozone depletion</b> are the two human-made problems this 5-mark unit focuses on.' },
      { h: 'Ecosystem and its components', b: 'Biotic: producers (autotrophs), consumers (herbivores → carnivores, the top carnivore last) and <b>decomposers</b> (saprophytic bacteria and fungi — they break down dead matter and return nutrients to the soil; no ecosystem can run without them). Abiotic: light, air, water, soil, temperature. Examples: a pond (algae/producers, zooplankton, small fish, big fish), a forest, a grassland — or an aquarium in your room.' },
      { h: 'Food chains and food webs', b: 'A food chain follows energy: <b>producers → herbivores → small carnivores → large carnivores</b>. Each step is a <b>trophic level</b>. Grass → grasshopper → frog → snake → eagle is the classic chain. Most ecosystems hold interlocking chains — a <b>food web</b>, where one species can eat (and be eaten by) many. Trophic levels limit chain length: only ~10% of energy passes upward (the <b>10% law</b>) — hence rarely more than 4-5 levels, and why big top-carnivore populations are naturally small. Man is at the top of most chains.' },
      { h: 'Biological magnification', b: 'Non-biodegradable pesticides (e.g. DDT) persist in the environment. Each consumer <b>accumulates</b> what its whole prey ate — concentration multiplies up the food chain. Top carnivores (and humans) end up with the highest doses — that is why DDT in water, at levels harmless to fish, can reach dangerous levels in the fish-eating birds and in us.' },
      { h: 'Ozone depletion', b: 'The <b>ozone layer</b> (upper atmosphere) absorbs harmful UV radiation. CFCs (chlorofluorocarbons — old refrigerants and spray propellants) break ozone down; a thinning layer lets more UV through → skin cancer, cataracts, crop damage. The fix: the 1987 <b>Montreal Protocol</b> phased out CFCs worldwide — proof that global environmental problems need global agreements.' },
      { h: 'Waste — biodegradable vs non-biodegradable', b: 'Biodegradable: paper, cotton, wool, kitchen waste — broken down by decomposers into simple, harmless substances. Non-biodegradable: plastics, glass, DDT — persist. Handling: <b>segregating waste at source</b> so biodegradables can be composted (into biogas or manure) while non-biodegradables are recycled — mixing them makes both useless. Reduce-reuse-recycle is the underlying logic.' }
    ],
    dates: [],
    terms: [
      { w: 'Ecosystem', d: 'All interacting organisms in an area together with their physical environment.' },
      { w: 'Decomposer', d: 'Saprophytic organism that breaks down dead plant/animal matter and returns nutrients to the soil.' },
      { w: 'Trophic level', d: 'Each step of a food chain — producer, herbivore, carnivore, top carnivore.' },
      { w: 'Ten percent law', d: 'Only ~10% of the energy at one trophic level transfers to the next — limits chain length.' },
      { w: 'Biological magnification', d: 'The increase in concentration of non-biodegradable chemicals at successive trophic levels.' },
      { w: 'Ozone (O₃)', d: 'Upper-atmosphere molecule that absorbs the Sun\u2019s harmful UV radiation; depleted by CFCs.' },
      { w: 'Biodegradable waste', d: 'Waste that decomposers can break down — kitchen scraps, paper, cotton, wool.' }
    ]
  }
};

/* subject metadata */
window.SUBJECTS = {
  che: { name: 'Chemistry', book: 'Chemical Substances — Nature and Behaviour', chapters: ['che1','che2','che3','che4','che5'], color: 'var(--amber)', chip: 'c-che' },
  bio: { name: 'Biology', book: 'World of Living', chapters: ['bio1','bio2','bio3','bio4','bio5'], color: 'var(--emerald)', chip: 'c-bio' },
  phy: { name: 'Physics', book: 'Natural Phenomena + Effects of Current', chapters: ['phy1','phy2','phy3','phy4','phy5'], color: 'var(--cyan)', chip: 'c-phy' },
  env: { name: 'Environment', book: 'Natural Resources', chapters: ['env1'], color: 'var(--rose)', chip: 'c-env' }
};
