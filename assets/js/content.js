"use strict";

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const VC_CONTENT = [
  {
    collection: "Margabandhu Stotram",
    collectionTa: "மார்க்கபந்து ஸ்தோத்ரம்",
    text: "भूताधिनाथं भवानीकलत्रं भवापन्ननाथं भजे मार्गबन्धुम्",
    meaning: "Lord Shiva as the companion and protector for those in distress",
    url: "margabandhu_stotram.html#sloka-1"
  },
  {
    collection: "Margabandhu Stotram",
    collectionTa: "மார்க்கபந்து ஸ்தோத்ரம்",
    text: "சம்போ மஹாதேவ தேவேச சம்போ பக்தர்களின் துயரத்தை நீக்கும் சிவனே",
    meaning: "Shambho, Mahadeva, the remover of devotees' troubles",
    url: "margabandhu_stotram.html#sloka-2"
  }
];
