/**
 * VC_CONTENT — searchable index for Vedic Corner.
 *
 * Each entry: { collection, collectionTa, text, meaning, url }
 *   collection    English name shown as the filter chip / result label
 *   collectionTa  Tamil name shown next to it (optional)
 *   text          The original verse (searched as-is)
 *   meaning       English gloss/theme (searched as-is; may be empty string)
 *   url           Page to link to, optionally with a #hash to the section
 *
 * Currently populated: Kantha Sasti Kavasam (full) and Kanthar Anuboothi (full, 51 verses).
 * NOT yet included: Thiruvasagam, Shiva Panchakshara Stotram, Sri Rudram, Soundarya Lahari,
 * Kanakadhara Stotram, Siva Vakkiyam, Bhagavad Gita — add entries in the same shape once
 * their page text is available, so the "All" filter and those chips return real results
 * instead of nothing.
 */

function vcNormalize(str) {
  return (str || "")
    .toString()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[^\p{L}\p{N}\s]/gu, " ") // strip punctuation, keep letters/numbers incl. Tamil
    .replace(/\s+/g, " ")
    .trim();
}

const VC_CONTENT = [
  // ---------- Kantha Sasti Kavasam ----------
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "துதிப்போர்க்கு வல்வினைபோம், துன்பம்போம்; நெஞ்சில் பதிப்போர்க்குச் செல்வம் பலித்துக் கதித்து ஓங்கும்; நிஷ்டையுங் கைகூடும்; நிமலர் அருள் கந்தர் சஷ்டி கவசந் தனை.",
    meaning: "Kaappu: for those who praise it, past karma and sorrow leave; for those who hold it in their heart, wealth and steadiness grow, by the grace of the pure Lord.",
    url: "kantha_sasti_kavasam.html#kaappu"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "அமரர் இடர் தீர அமரம் புரிந்த குமரனடி நெஞ்சே குறி.",
    meaning: "Mind, fix upon the feet of Kumara, who waged war to end the suffering of the celestials.",
    url: "kantha_sasti_kavasam.html#kaappu"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "சஷ்டியை நோக்கச் சரவண பவனார் சிஷ்டருக்குதவும் செங்கதிர் வேலோன் பாதம் இரண்டில் பண்மணிச் சதங்கை கீதம் பாடக் கிண்கிணியாட மைய நடஞ்செய்யும் மயில்வா கனனார்",
    meaning: "Invocation of Saravana Bhava, the red-rayed Vel-bearer who helps the virtuous, riding the peacock as anklets chime.",
    url: "kantha_sasti_kavasam.html#dhyanam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "கையில் வேலால் எனைக் காக்கவென்று உவந்து வரவர வேலாயுதனார் வருக வருக வருக மயிலோன் வருக இந்திரன் முதலா எண்டிசை போற்ற மந்திர வடிவேல் வருக வருக",
    meaning: "A call for the Vel-bearer to come and protect, praised by Indra and the eight directions.",
    url: "kantha_sasti_kavasam.html#dhyanam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "நன்னெறி நெற்றியில் நவமணிச்சுட்டியும் ஈராறு செவியில் இலங்குகுண்டலமும் ஆறிரு திண்புயத்து அழகிய மார்பில் பல்பூஷணமும் பதக்கமும் தரித்து நன்மணி பூண்ட நவரத்ன மாலையும்",
    meaning: "Description of Muruga's adornments — the nine-gem jewel on the brow, earrings, and jewelled garlands across his twelve shoulders.",
    url: "kantha_sasti_kavasam.html#kavasam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "பொடிபுனை நெற்றியைப் புனிதவேல் காக்க கதிர்வேல் இரண்டும் கண்ணினைக் காக்க விதிசெவி இரண்டும் வேலவர் காக்க நாசிகள் இரண்டும் நல்வேல் காக்க பேசிய வாய்தனைப் பெருவேல் காக்க",
    meaning: "The core armour verses — asking the Vel to guard the forehead, eyes, ears, nose, and mouth.",
    url: "kantha_sasti_kavasam.html#kavasam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "காக்க காக்க கனகவேல் காக்க நோக்க நோக்க நொடியினில் நோக்க தாக்க தாக்க தடையறத் தாக்க பார்க்க பார்க்க பாவம் பொடிபட பில்லிசூனியம் பெரும்பகை அகல",
    meaning: "Verses invoking the golden Vel against fear, black magic, and great enmity.",
    url: "kantha_sasti_kavasam.html#kavasam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "வல்ல பூதம் வாலாட்டிகப் பேய்கள் அல்லல் படுத்தும் அடங்கா முனியும் பிள்ளைகள் தின்னும் புழங்கடை முனியும் கொள்ளிவாப் பேய்களும் குறளைப்பேய்களும் பெண்களைத் தொடரும் பிரம ராட்சதரும்",
    meaning: "A list of malevolent spirits and afflictions the Vel is asked to ward off.",
    url: "kantha_sasti_kavasam.html#kavasam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "ஏறிய விஷங்கள் எளிதுடன் இறங்க ஒளிப்புஞ்சுளுக்கும் ஒருதலை நோயும் வாதஞ் சயித்தியம் வலிப்புப் பித்தம் சூலைசயம் குன்மம் சொக்குச் சிரங்கு குடைச்சல் சிலந்தி குடல்விப் பிரிதி",
    meaning: "A prayer for poisons to leave the body, and for various ailments and diseases to be cured.",
    url: "kantha_sasti_kavasam.html#kavasam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "உன்னைத் துதித்த உன்திரு நாமம் சரவண பவனே! சைலொளிபவனே! திரிபுர பவனே! திகழ்ஒளி பவனே! பரிபுர பவனே! பவமொழி பவனே! அரிதிரு மருகா அமரா பதியைக்",
    meaning: "Praise of Muruga's many sacred names, calling him nephew of Vishnu who protected Indra's realm.",
    url: "kantha_sasti_kavasam.html#kavasam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "கதிர்காமத்து உறை கதிர்வேல் முருகா! பழநிப் பதிவாழ் பால குமரா ஆவினன் குடிவாழ் அழகிய வேலா! செந்தின்மாமலையுறும் செங்கல்வராயா! சமரா புரிவாழ் சண்முகத்து அரசே",
    meaning: "Naming Muruga's shrines — Kathirgamam, Palani, Swamimalai, and Thiruchendur.",
    url: "kantha_sasti_kavasam.html#kavasam"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "சித்தி பெற்று அடியேன் சிறப்புடன் வாழ்க வாழ்க வாழ்க மயிலோன் வாழ்க வாழ்க வாழ்க வடிவேல் வாழ்க வாழ்க வாழ்க மலைக்குரு வாழ்க வாழ்க வாழ்க மலைக்குறமகளுடன்",
    meaning: "The closing benediction — 'may the peacock-rider live, may the Vel live, may the mountain-guru live.'",
    url: "kantha_sasti_kavasam.html#end"
  },
  {
    collection: "Kantha Sasti Kavasam",
    collectionTa: "கந்த சஷ்டி கவசம்",
    text: "மயில்நட மிடுவோய் மலரடி சரணம் சரணம் சரணம் சரவண பவ ஓம் சரணம் சரணம் சண்முகா சரணம்!",
    meaning: "Final surrender: 'I take refuge, refuge, refuge at the flower-feet of the peacock-dancer, Saravana Bhava, Shanmuga.'",
    url: "kantha_sasti_kavasam.html#end"
  },

  // ---------- Kanthar Anuboothi ----------
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "நெஞ்சக் கனகல்லு நெகிழ்ந் துருகத் தஞ்சத் தருள்சண் முகனுக் கியல்சேர் செஞ்சொற் புனைமாலை சிறந் திடவே பஞ்சக் கரவானை பதம் பணிவாம்.",
    meaning: "Kaappu — meditation on the sacred ash, bowing to Ganesha's feet before the hymn begins.",
    url: "kanthar_anuboothi.html"
  },
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "ஆடும் பணிவே லணிசே வலெனப் பாடும் பணிவே பணியா யருள்வாய் தேடுங் கயமா முகனைச் செருவிற் காடுந் தனியா னைசகோ தரனே.",
    meaning: "Verse 1 — to conquer the mad elephant (ego); calling on the brother of Ganesha who defeated the demon Gajamukhan.",
    url: "kanthar_anuboothi.html"
  },
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "மகமாயை களைந்திட வல்ல பிரான் முகமாறு மொழிந்து மொழிந் திலனே அகமாடை மடந்தைய ரென் றயருஞ் சகமாயையுள் நின்று தயங் குவதே.",
    meaning: "Verse 5 — to dispel illusion (maya); the six-faced Lord who alone can remove the great illusion.",
    url: "kanthar_anuboothi.html"
  },
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "பேராசை யெனும் பிணியிற் பிணிபட் டோ ரா வினையே னுழலந் தகுமோ வீரா முதுசூர் படவே லெறியுஞ் சூரா சுரலோக துரந் தரனே.",
    meaning: "Verse 16 — to remove great greed; a plea against being bound by the disease of endless craving.",
    url: "kanthar_anuboothi.html"
  },
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "சிந்தா குலவில் லொடுசெல் வமெனும் விந்தா டவியென்று விடப் பெறுவேன் மந்தா கினிதந்த வரோ தயனே கந்தா முருகா கருணா கரனே.",
    meaning: "Verse 33 — to end anguish; asking to be freed from the tangled forest of household and wealth.",
    url: "kanthar_anuboothi.html"
  },
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "தூசா மணியுந் துகிலும் புனைவாள் நேசா முருகா நினதன் பருளால் ஆசா நிகளந் துகளா யின்பின் பேசா அநுபூதி பிறந் ததுவே.",
    meaning: "Verse 43 — the moment of realization: 'by your loving grace, the bonds of desire turned to dust, and the wordless experience was born.'",
    url: "kanthar_anuboothi.html"
  },
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "தன்னந் தனிநின் றதுதா னறிய இன்னம் மொருவர்க் கிசைவிப் பதுவோ மின்னுங் கதிர்வேல் விகிர்தா நினைவார் கின்னங் களையும் க்ருபைசூழ் சுடரே.",
    meaning: "Verse 49 — to know oneself; a state so singular it cannot be explained to another.",
    url: "kanthar_anuboothi.html"
  },
  {
    collection: "Kanthar Anuboothi",
    collectionTa: "கந்தர் அனுபூதி",
    text: "உருவா யருவா யுளதா யிலதாய் மருவாய் மலராய் மணியா யொளியாய் க்கருவா யுயிராய்க் கதியாய் விதியாய்க்குருவாய் வருவா யருள்வாய் குகனே.",
    meaning: "Verse 51, the closing verse — 'form and formless, being and non-being... come as my guru and grant me grace, O Guha.'",
    url: "kanthar_anuboothi.html"
  }
];
