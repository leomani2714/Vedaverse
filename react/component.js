function getDailyVerse() {
    const today = new Date();

    const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 86400000
    );

    return verses[dayOfYear % verses.length];
}
function Header() {
    return React.createElement(
        "header",
        { className: "site-header" },

        React.createElement(
            "div",
            { className: "brand" },

            React.createElement(
                "div",
                { className: "logo" },
                "ॐ"
            ),

            React.createElement(
                "div",
                { className: "brand-text" },

                React.createElement(
                    "div",
                    null,
                    "Vedic Corner"
                ),

                React.createElement(
                    "div",
                    null,
                    "Living Tradition — Chant • Learn • Reflect"
                )
            )
        ),

        Navigation()
    );
}

function Navigation() {
    return React.createElement(
        "nav",
        { "aria-label": "Primary", className: "site-nav" },

        React.createElement(
            "a",
            { href: "#hero" },
            "Hero"
        ),

        React.createElement(
            "a",
            { href: "#scriptures" },
            "Scriptures"
        ),

        React.createElement(
            "a",
            { href: "#chants" },
            "Chants"
        ),

        React.createElement(
            "a",
            { href: "#sacred-verses" },
            "Sacred Verses"
        ),

        React.createElement(
            "a",
            { href: "#learn" },
            "Learn"
        ),

        React.createElement(
            "a",
            { href: "ayyappan.html" },
            "Ayyappan"
        ),

        React.createElement(
            "a",
            { href: "daily_mantra.html" },
            "Daily Mantra"
        )
    );
}
function Hero() {
    return React.createElement(
        "section",
        {
            id: "hero",
            className: "hero",
            role: "region",
            "aria-labelledby": "heroTitle"
        },

        // LEFT SIDE
        React.createElement(
            "div",
            null,

            React.createElement(
                "div",
                { className: "hero-kicker" },
                "Sanatana Dharma • Sacred Wisdom"
            ),

            React.createElement(
                "h1",
                { id: "heroTitle" },
                "Discover the Timeless Wisdom of Sanatana Dharma"
            ),

            React.createElement(
                "p",
                { className: "lead" },
                "Explore sacred scriptures, timeless philosophies, devotional hymns, and spiritual teachings through a beautifully curated digital experience."
            ),

            React.createElement(
                "div",
                { className: "cta" },

                React.createElement(
                    "a",
                    {
                        className: "btn btn-primary",
                        href: "#scriptures"
                    },
                    "Explore Scriptures"
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-outline",
                        href: "#chants"
                    },
                    "Listen to Chants"
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-secondary",
                        href: "verse.html",
                        target: "_blank"
                    },
                    "Read Daily Verse"
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-secondary",
                        href: "tamil_poems.html",
                        target: "_blank"
                    },
                    "Tamil Devotional Poems"
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-secondary",
                        href: "ayyappan.html"
                    },
                    "Ayyappan Mantras"
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-secondary",
                        href: "daily_mantra.html"
                    },
                    "Daily Mantra"
                )
            )
        ),

        // RIGHT SIDE
        React.createElement(
            "aside",
            null,

            React.createElement(
                "div",
                { className: "card" },

                React.createElement(
                    "div",
                    null,
                    "Daily Verse"
                ),

                React.createElement(DailyVerse)
            ),

            React.createElement(
                "div",
                { className: "card" },

                React.createElement(
                    "div",
                    {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }
                    },

                    React.createElement(
                        "span",
                        null,
                        // "Today"
                    ),

                    React.createElement(DateTime)
                )
            )
        )
    );
}
function DateTime() {
    const [dateTime, setDateTime] = React.useState("");

    React.useEffect(function () {

        function updateDateTime() {
            const now = new Date();

            const options = {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            };

            setDateTime(
                now.toLocaleString("en-GB", options)
            );
        }

        updateDateTime();

        const timer = setInterval(
            updateDateTime,
            1000
        );

        return function () {
            clearInterval(timer);
        };

    }, []);

    return React.createElement(
        "span",
        {
            id: "dateTime"
        },
        dateTime
    );
}

function DailyVerse() {

    const [verse, setVerse] = React.useState({
        text: "",
        meaning: ""
    });

    React.useEffect(function () {

        const today = new Date();

        const dayOfYear = Math.floor(
            (today - new Date(today.getFullYear(), 0, 0)) /
            86400000
        );

        const verseIndex = dayOfYear % verses.length;

        setVerse(verses[verseIndex]);

    }, []);

    return React.createElement(
        "div",
        {
            className: "verse-text",
            "aria-label": "Daily Verse"
        },
        verse.text
            ? `${verse.text} — ${verse.meaning}`
            : "Loading today's verse..."
    );
}
const verses = [
    { text: "Karmanyevadhikaraste Ma Phaleshu Kadachana", meaning: "Focus on your actions, not on the results." },
    { text: "Yogastha Kuru Karmani", meaning: "Perform your duties with a calm and balanced mind." },
    { text: "Samatvam Yoga Uchyate", meaning: "Equanimity is true yoga." },
    { text: "Na Jayate Mriyate Va Kadachin", meaning: "The soul is never born and never dies." },
    { text: "Vasamsi Jirnani Yatha Vihaya", meaning: "The soul changes bodies like old clothes." },
    { text: "Nainam Chindanti Shastrani", meaning: "Weapons cannot harm the soul." },
    { text: "Nainam Dahati Pavakah", meaning: "Fire cannot burn the soul." },
    { text: "Uddhared Atmanatmanam", meaning: "Lift yourself through your own efforts." },
    { text: "Atmaiva Hy Atmano Bandhuh", meaning: "You are your own best friend." },
    { text: "Atmaiva Ripur Atmanah", meaning: "You can become your own worst enemy." },
    { text: "Niyatam Kuru Karma Tvam", meaning: "Perform your prescribed duties." },
    { text: "Yad Yad Acharati Shreshthah", meaning: "People follow the example of great leaders." },
    { text: "Yada Yada Hi Dharmasya", meaning: "Whenever righteousness declines, the Divine manifests." },
    { text: "Sambhavami Yuge Yuge", meaning: "The Divine appears age after age." },
    { text: "Paritranaya Sadhunam", meaning: "The righteous are always protected." },
    { text: "Dharmasamsthapanarthaya", meaning: "The purpose is to restore righteousness." },
    { text: "Janma Karma Cha Me Divyam", meaning: "Divine actions are beyond ordinary understanding." },
    { text: "Bahavo Jnana Tapasa Puta", meaning: "Knowledge purifies those who seek truth." },
    { text: "Aham Sarvasya Prabhavo", meaning: "Everything originates from the Divine." },
    { text: "Mattah Sarvam Pravartate", meaning: "All creation flows from the Supreme." },
    { text: "Mayi Sarvam Idam Protam", meaning: "Everything is connected to the Divine." },
    { text: "Raso Ham Apsu Kaunteya", meaning: "The Divine is the essence in water." },
    { text: "Pranavah Sarva Vedeshu", meaning: "Om is the essence of all sacred knowledge." },
    { text: "Jivanam Sarva Bhuteshu", meaning: "Life itself is divine." },
    { text: "Bijam Mam Sarva Bhutanam", meaning: "The Divine is the seed of all beings." },
    { text: "Balam Balavatam Chaham", meaning: "True strength comes from purity." },
    { text: "Yogi Yunjita Satatam", meaning: "Practice meditation regularly." },
    { text: "Yukta Ahara Viharasya", meaning: "Moderation leads to success." },
    { text: "Prasanta Atma Vigata Bhih", meaning: "A peaceful mind is free from fear." },
    { text: "Sukham Atyantikam Yat Tat", meaning: "True happiness comes from within." },
    { text: "Yasmin Sthito Na Duhkhena", meaning: "Spiritual stability overcomes sorrow." },
    { text: "Mayy Asakta Manah Partha", meaning: "Fix your mind on the Divine." },
    { text: "Jnaninas Tu Mam Eva", meaning: "The wise see the Divine everywhere." },
    { text: "Mattah Parataram Nanyat", meaning: "Nothing is higher than the Supreme." },
    { text: "Aham Atma Gudakesha", meaning: "The Divine resides in every heart." },
    { text: "Antakale Cha Mam Eva", meaning: "Remember the Divine at all times." },
    { text: "Yam Yam Vapi Smaran Bhavam", meaning: "Your thoughts shape your future." },
    { text: "Tasmat Sarveshu Kaleshu", meaning: "Remain spiritually aware always." },
    { text: "Ananyas Chintayanto Mam", meaning: "Constant devotion brings protection." },
    { text: "Yoga Ksemam Vahamyaham", meaning: "The Divine provides what devotees need." },
    { text: "Ye Yatha Mam Prapadyante", meaning: "The Divine responds according to devotion." },
    { text: "Aham Hi Sarva Yajnanam", meaning: "All worship ultimately reaches the Divine." },
    { text: "Bhaktya Mam Abhijanati", meaning: "The Divine is known through devotion." },
    { text: "Aham Adir Hi Devanam", meaning: "The Divine is the source of all celestial beings." },
    { text: "Buddhir Jnanam Asammohah", meaning: "Wisdom and clarity are divine gifts." },
    { text: "Ahimsa Samata Tushtih", meaning: "Non-violence and contentment are virtues." },
    { text: "Yajnanam Japa Yajnosmi", meaning: "Chanting the Divine Name is sacred worship." },
    { text: "Sthavaranam Himalayah", meaning: "The Himalayas symbolize divine grandeur." },
    { text: "Ashvatthah Sarva Vrikshanam", meaning: "The sacred Peepal tree represents divinity." },
    { text: "Pashya Me Partha Rupani", meaning: "See the Divine in countless forms." },
    { text: "Sarvato Ananta Rupam", meaning: "The Divine is infinite." },
    { text: "Tat Tvam Asi", meaning: "You are one with the Supreme Reality." },
    { text: "Aham Brahmasmi", meaning: "My true nature is Divine Consciousness." },
    { text: "Samam Sarveshu Bhuteshu", meaning: "Treat all beings equally." },
    { text: "Kshetrajnam Chapi Mam Viddhi", meaning: "The Divine is the knower within all." },
    { text: "Amanitvam Adambhitvam", meaning: "Humility is true greatness." },
    { text: "Ahimsa Kshantir Arjavam", meaning: "Practice non-violence, patience, and honesty." },
    { text: "Janma Mrityu Jara Vyadhi", meaning: "Birth, aging, and death are part of life." },
    { text: "Mayi Chananya Yogena", meaning: "Single-minded devotion leads to liberation." },
    { text: "Jneyam Yat Tat Pravaksyami", meaning: "Knowledge leads to immortality." },
    { text: "Anadi Mat Param Brahma", meaning: "The Supreme Reality has no beginning." },
    { text: "Sattvam Rajas Tamas Iti", meaning: "Nature functions through three qualities." },
    { text: "Sattvam Sukhe Sanjayati", meaning: "Purity leads to happiness." },
    { text: "Rajas Karmani Bharata", meaning: "Passion drives activity." },
    { text: "Tamas Ajnanam", meaning: "Ignorance creates confusion." },
    { text: "Urdhvam Mulam Adhah Sakham", meaning: "The world is like an upside-down tree." },
    { text: "Na Rupam Asyeha", meaning: "Reality is not always visible." },
    { text: "Tam Eva Chadyam Purusham", meaning: "Seek refuge in the Supreme Being." },
    { text: "Purushottama", meaning: "The Supreme Person transcends all." },
    { text: "Abhayam Sattva Samsuddhih", meaning: "Fearlessness is a divine virtue." },
    { text: "Danam Damas Cha", meaning: "Charity and self-control are noble qualities." },
    { text: "Ahimsa Satyam Akrodhah", meaning: "Practice truth and freedom from anger." },
    { text: "Daya Bhuteshu", meaning: "Show compassion to all beings." },
    { text: "Tejah Kshama Dhritih", meaning: "Strength, forgiveness, and courage are virtues." },
    { text: "Kama Krodha Tatha Lobha", meaning: "Lust, anger, and greed cause suffering." },
    { text: "Tasmat Trayam Tyajet", meaning: "Abandon these three destructive tendencies." },
    { text: "Sastram Pramanam Te", meaning: "Let wisdom guide your actions." },
    { text: "Aharah Tri Vidho Bhavati", meaning: "Food influences the mind and body." },
    { text: "Deva Dvija Guru Prajna Pujanam", meaning: "Respect teachers, elders, and the wise." },
    { text: "Anudvegakaram Vakyam", meaning: "Speak words that do not hurt others." },
    { text: "Satyam Priya Hitam Cha Yat", meaning: "Speak truth kindly and help others." },
    { text: "Manah Prasadah Saumyatvam", meaning: "Serenity is a sign of inner strength." },
    { text: "Tyagah Shantir Anantaram", meaning: "Renunciation brings peace." },
    { text: "Sarva Karmani Sannyasya", meaning: "Offer all actions to the Divine." },
    { text: "Ishvarah Sarva Bhutanam Hrddese", meaning: "The Divine resides in every heart." },
    { text: "Tam Eva Saranam Gaccha", meaning: "Seek refuge in the Divine." },
    { text: "Tat Prasadat Param Shantim", meaning: "Divine grace brings lasting peace." },
    { text: "Sarva Dharman Parityajya", meaning: "Surrender completely to the Divine." },
    { text: "Ma Shuchah", meaning: "Do not grieve or fear." },
    { text: "Yo Mam Evam Janati", meaning: "True understanding leads to freedom." },
    { text: "Etad Buddhva Buddhiman Syat", meaning: "Wisdom makes life fulfilling." },
    { text: "Om Tat Sat", meaning: "The Supreme Truth is eternal." },
    { text: "Dharma Rakshati Rakshitah", meaning: "Protect righteousness and it will protect you." },
    { text: "Adharma Vinashayati", meaning: "Unrighteousness leads to destruction." },
    { text: "Sarva Karman Api Sada", meaning: "Always perform your responsibilities." },
    { text: "Moksha Margam Adhigacchati", meaning: "Wisdom leads to liberation." },
    { text: "Atma Atmanam Yogena", meaning: "Self-realization comes through discipline." },
    { text: "Brahma Satyam Jagan Mithya", meaning: "Ultimate reality alone is eternal." },
    { text: "Jivo Brahmaiva Na Aparah", meaning: "The individual soul is divine in essence." },
    { text: "Lokah Samastah Sukhino Bhavantu", meaning: "May all beings be happy and free." }
];

function Scriptures() {
    const [rigvedaOpen, setRigvedaOpen] = React.useState(false);
    const [brihadaranyakaOpen, setBrihadaranyakaOpen] =
        React.useState(false);
    const [gitaOpen, setGitaOpen] = React.useState(false);
    return React.createElement(
        "section",
        {
            id: "scriptures",
            "aria-labelledby": "scripturesTitle"
        },

        React.createElement(
            "h2",
            { id: "scripturesTitle" },
            "Scriptures & Sacred Excerpts"
        ),

        React.createElement(
            "p",
            { className: "meta" },
            "Journey through Vedic hymns, Upanishadic wisdom, and devotional insight."
        ),

        React.createElement(
            "div",
            { className: "grid" },

            React.createElement(
                "div",
                { className: "grid" },

                React.createElement(
                    "div",
                    { className: "scriptures" },
                    React.createElement(
                        "ul",
                        null,

                        React.createElement(
                            "li",
                            null,

                            React.createElement(
                                "div",
                                {
                                    className: "accordion-header",
                                    tabIndex: 0,
                                    role: "button",
                                    "aria-label": "Open Rigveda Agni Sukta",
                                    "aria-controls": "rigveda-content",
                                    "aria-expanded": rigvedaOpen,

                                    onClick: function () {
                                        setRigvedaOpen(function (previous) {
                                            return !previous;
                                        });
                                    },

                                    onKeyDown: function (event) {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            event.currentTarget.click();
                                        }
                                    }
                                },


                                React.createElement(
                                    "div",
                                    null,

                                    React.createElement(
                                        "div",
                                        { className: "accordion-title" },
                                        "Rigveda — Agni Sukta (Mandala 1.1)"
                                    ),

                                    React.createElement(
                                        "div",
                                        { className: "accordion-meta" },
                                        "Hymn to fire as sacred messenger"
                                    )
                                ),

                                React.createElement(
                                    "div",
                                    { className: "accordion-meta" },
                                    rigvedaOpen ? "Read ▲" : "Read ▼"
                                )
                            ),

                            React.createElement(
                                "div",
                                {
                                    className: "accordion-content",
                                    id: "rigveda-content",
                                    style: {
                                        display: rigvedaOpen ? "block" : "none"
                                    }
                                },

                                React.createElement(
                                    "p",
                                    null,
                                    "The Rigveda opens with praise to Agni, the divine priest of the sacrifice. Agni carries offerings and inspires the inner fire of transformation."
                                ),

                                React.createElement(
                                    "p",
                                    null,

                                    React.createElement(
                                        "b",
                                        null,
                                        "Sanskrit:"
                                    ),

                                    React.createElement("br"),

                                    "अग्निमीळे पुरोहितं यज्ञस्य देवम् ऋत्विजम् ।",

                                    React.createElement("br"),

                                    "होतारं रत्नधातमम् ॥"
                                ),

                                React.createElement(
                                    "p",
                                    null,

                                    React.createElement(
                                        "b",
                                        null,
                                        "Translation:"
                                    ),

                                    React.createElement("br"),

                                    "I invoke Agni, the sacred priest, the god of the ritual, the bestower of treasures."
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,

                            React.createElement(
                                "div",
                                {
                                    className: "accordion-header",
                                    tabIndex: 0,
                                    role: "button",
                                    "aria-label": "Open Brihadaranyaka Upanishad",
                                    "aria-controls": "brihadaranyaka-content",
                                    "aria-expanded": brihadaranyakaOpen,

                                    onClick: function () {
                                        setBrihadaranyakaOpen(function (previous) {
                                            return !previous;
                                        });
                                    },
                                    onKeyDown: function (event) {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            event.currentTarget.click();
                                        }
                                    }

                                },

                                React.createElement(
                                    "div",
                                    null,

                                    React.createElement(
                                        "div",
                                        { className: "accordion-title" },
                                        "Brihadaranyaka Upanishad"
                                    ),

                                    React.createElement(
                                        "div",
                                        { className: "accordion-meta" },
                                        "A prayer for light and liberation"
                                    )
                                ),

                                React.createElement(
                                    "div",
                                    { className: "accordion-meta" },
                                    brihadaranyakaOpen ? "Read ▲" : "Read ▼"
                                )
                            ),

                            React.createElement(
                                "div",
                                {
                                    className: "accordion-content",
                                    id: "brihadaranyaka-content"
                                    ,
                                    style: {
                                        display: brihadaranyakaOpen ? "block" : "none"
                                    }
                                },

                                React.createElement(
                                    "p",
                                    null,
                                    "This ancient Upanishad teaches that the Self is the ultimate reality and invites the seeker to move from darkness to light."
                                ),

                                React.createElement(
                                    "p",
                                    null,

                                    React.createElement(
                                        "b",
                                        null,
                                        "Verse:"
                                    ),

                                    React.createElement("br"),

                                    "असतो मा सद्गमय ।",

                                    React.createElement("br"),

                                    "तमसो मा ज्योतिर्गमय ।",

                                    React.createElement("br"),

                                    "मृत्योर्मामृतं गमय ॥"
                                ),

                                React.createElement(
                                    "p",
                                    null,

                                    React.createElement(
                                        "b",
                                        null,
                                        "Meaning:"
                                    ),

                                    React.createElement("br"),

                                    "Lead me from the unreal to the Real, from darkness to Light, from death to Immortality."
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,

                            React.createElement(
                                "div",
                                {
                                    className: "accordion-header",
                                    tabIndex: 0,
                                    role: "button",
                                    "aria-label": "Open Bhagavad Gita 2.47",
                                    "aria-controls": "gita-content",
                                    "aria-expanded": gitaOpen,
                                    onClick: function () {
                                        setGitaOpen(function (previous) {
                                            return !previous;
                                        });

                                    },
                                    onKeyDown: function (event) {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            event.currentTarget.click();
                                        }
                                    }
                                },

                                React.createElement(
                                    "div",
                                    null,

                                    React.createElement(
                                        "div",
                                        { className: "accordion-title" },
                                        "Bhagavad Gita 2.47"
                                    ),

                                    React.createElement(
                                        "div",
                                        { className: "accordion-meta" },
                                        "Action without attachment"
                                    )
                                ),

                                React.createElement(
                                    "div",
                                    { className: "accordion-meta" },
                                    gitaOpen ? "Read ▲" : "Read ▼"
                                )
                            ),

                            React.createElement(
                                "div",
                                {
                                    className: "accordion-content",
                                    id: "gita-content"
                                    , style: {
                                        display: gitaOpen ? "block" : "none"
                                    }
                                },

                                React.createElement(
                                    "p",
                                    null,
                                    "The Gita teaches equanimity in action: act with devotion, not with anxiety over the result."
                                ),

                                React.createElement(
                                    "p",
                                    null,

                                    React.createElement(
                                        "b",
                                        null,
                                        "Sanskrit:"
                                    ),

                                    React.createElement("br"),

                                    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",

                                    React.createElement("br"),

                                    "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥"
                                ),

                                React.createElement(
                                    "p",
                                    null,

                                    React.createElement(
                                        "b",
                                        null,
                                        "Meaning:"
                                    ),

                                    React.createElement("br"),

                                    "You have the right to work only, but never to its fruits. Let not the fruits of action be your motive."
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,

                        React.createElement(
                            "div",
                            { className: "card" },

                            React.createElement(
                                "div",
                                null,
                                "Daily Reflection"
                            ),

                            React.createElement(
                                "p",
                                null,
                                "\"Truth is one; the wise call it by many names.\""
                            ),

                            React.createElement(
                                "p",
                                { className: "meta" },
                                "Rigveda 1.164.46"
                            )
                        )
                    )
                )

            )));
}

function Chants() {
    return React.createElement(
        "section",
        {
            id: "chants",
            "aria-labelledby": "chantsTitle"
        },

        React.createElement(
            "h2",
            { id: "chantsTitle" },
            "Chants & Recordings"
        ),

        React.createElement(
            "p",
            { className: "meta" },
            "High-quality recitations for daily practice and contemplation."
        ),
        React.createElement(
            "div",
            { className: "resource-links" },

            React.createElement(
                "a",
                {
                    href: "gayatri_mantras.html",
                    className: "chant-link"
                },
                "Gayatri Mantras"
            )
        ),

        React.createElement(
            "div",
            { className: "chant-grid" },

            // Gayatri Mantra
            React.createElement(
                "div",
                { className: "chant" },

                React.createElement(
                    "h3",
                    null,
                    "Gayatri Mantra"
                ),

                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "i",
                        null,
                        "Om Bhur Bhuvaḥ Swaḥ, Tat Savitur Vareṇyaṃ, Bhargo Devasya Dhīmahi, Dhiyo Yo Naḥ Prachodayāt"
                    )
                ),

                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "i",
                        null,
                        "\"We meditate on the divine light of Savitar, may it inspire our intellect.\""
                    )
                )
            ),

            // Maha Mrityunjaya Mantra
            React.createElement(
                "div",
                { className: "chant" },

                React.createElement(
                    "h3",
                    null,
                    "Maha Mrityunjaya Mantra"
                ),

                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "i",
                        null,
                        "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat"
                    )
                ),

                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "i",
                        null,
                        "\"May Lord Shiva free us from the fear of death and guide us toward liberation.\""
                    )
                )
            )
        )
    );
}
function SacredVerses() {
    return React.createElement(
        "section",
        {
            id: "sacred-verses",
            "aria-labelledby": "sacredVersesTitle"
        },

        React.createElement(
            "h2",
            { id: "sacredVersesTitle" },
            "Featured Sacred Texts"
        ),

        React.createElement(
            "p",
            { className: "meta" },
            "Explore curated collections of divine wisdom, with Adi Shankaracharya's works gathered on their own dedicated page."
        ),
        React.createElement(
            "div",
            { className: "verse-cards-grid" },

            React.createElement(
                "div",
                { className: "verse-feature-card" },

                React.createElement(
                    "div",
                    { className: "verse-feature-icon" },
                    "🕉️"
                ),

                React.createElement(
                    "h3",
                    null,
                    "Adi Shankaracharya Works"
                ),

                React.createElement(
                    "p",
                    { className: "verse-feature-tamil" },
                    "ஆதிசங்கரர் படைப்புகள்"
                ),

                React.createElement(
                    "p",
                    { className: "verse-feature-note" },

                    React.createElement(
                        "strong",
                        null,
                        "Collection:"
                    ),

                    " Bhaja Govindam • Vivekachudamani • Atma Bodha"
                ),

                React.createElement(
                    "div",
                    { className: "verse-feature-meta" },

                    React.createElement(
                        "span",
                        { className: "meta-item" },

                        React.createElement(
                            "strong",
                            null,
                            "Theme:"
                        ),

                        " Wisdom, devotion, and self-knowledge"
                    ),

                    React.createElement(
                        "span",
                        { className: "meta-item" },

                        React.createElement(
                            "strong",
                            null,
                            "Focus:"
                        ),

                        " Study, reflection, and daily contemplation"
                    )
                ),

                React.createElement(
                    "p",
                    { className: "verse-feature-description" },
                    "Discover a curated collection of Adi Shankaracharya's most beloved teachings in one serene place, designed for deeper study and reflection."
                ),

                React.createElement(
                    "a",
                    {
                        href: "shankaracharya_works.html",
                        className: "btn btn-primary"
                    },
                    "Open Dedicated Page →"
                )
            ),
            React.createElement(
                "div",
                { className: "verse-feature-card" },

                React.createElement(
                    "div",
                    { className: "verse-feature-icon" },
                    "⚡"
                ),

                React.createElement(
                    "h3",
                    null,
                    "ஸ்ரீ ருத்ரம்"
                ),

                React.createElement(
                    "div",
                    { className: "verse-feature-tamil" },
                    "Sri Rudram"
                ),

                React.createElement(
                    "div",
                    { className: "verse-feature-meta" },

                    React.createElement(
                        "div",
                        { className: "meta-item" },

                        React.createElement(
                            "strong",
                            null,
                            "Source:"
                        ),

                        " Yajurveda"
                    ),

                    React.createElement(
                        "div",
                        { className: "meta-item" },

                        React.createElement(
                            "strong",
                            null,
                            "Parts:"
                        ),

                        " Namakam & Chamakam"
                    ),

                    React.createElement(
                        "div",
                        { className: "meta-item" },

                        React.createElement(
                            "strong",
                            null,
                            "Theme:"
                        ),

                        " Lord Shiva"
                    )
                ),

                React.createElement(
                    "div",
                    { className: "verse-feature-description" },
                    "The Śatarudrīya is a powerful litany dedicated to Lord Rudra (Shiva). It brings protection, healing, and spiritual transformation through sacred invocations."
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-primary",
                        href: "srirudram.html",
                        target: "_blank",
                        rel: "noopener"
                    },
                    "Explore Rudram"
                )
            ),
            React.createElement(
                "div",
                { className: "verse-feature-card" },

                React.createElement(
                    "div",
                    { className: "verse-feature-icon" },
                    "🌸"
                ),

                React.createElement(
                    "h3",
                    null,
                    "Shiva Vakkiyam"
                ),

                React.createElement(
                    "p",
                    { className: "verse-feature-tamil" },
                    "சிவவாக்கியம்"
                ),

                React.createElement(
                    "p",
                    { className: "verse-feature-note" },

                    React.createElement(
                        "strong",
                        null,
                        "Theme:"
                    ),

                    " Shiva's Grace"
                ),

                React.createElement(
                    "div",
                    { className: "verse-feature-meta" },

                    React.createElement(
                        "span",
                        { className: "meta-item" },

                        React.createElement(
                            "strong",
                            null,
                            "Author:"
                        ),

                        " Shiva Vakkiyae"
                    ),

                    React.createElement(
                        "span",
                        { className: "meta-item" },

                        React.createElement(
                            "strong",
                            null,
                            "Verses:"
                        ),

                        " 500 verses"
                    )
                ),

                React.createElement(
                    "p",
                    { className: "verse-feature-description" },

                    "A profound collection of mystical verses by the Siddhar Sivavakkiyar, challenging ritualistic practices and emphasizing inner realization of the Divine. Through powerful poetry and spiritual wisdom, this timeless work explores self-knowledge, universal truth, and the path to liberation beyond caste, creed, and outward forms of worship."
                ),

                React.createElement(
                    "a",
                    {
                        href: "https://leomani2714.github.io/siva_vakkiyam",
                        className: "btn btn-primary",
                        target: "_blank",
                        rel: "noopener"
                    },
                    "Explore Now →"
                )
            )
        )
    );
}
function Learn() {
    return React.createElement(
        "section",
        {
            id: "learn",
            "aria-labelledby": "learnTitle"
        },

        React.createElement(
            "h2",
            { id: "learnTitle" },
            "Learn — Explore & Reflect"
        ),

        React.createElement(
            "p",
            { className: "meta" },
            "Start here, whether you have five minutes or an evening to spend with these texts."
        ),
        React.createElement(
            "div",
            { className: "learn-grid" },

            React.createElement(
                "div",
                { className: "learn-card" },

                React.createElement(
                    "div",
                    null,
                    "🔍 Search Every Verse"
                ),

                React.createElement(
                    "p",
                    { className: "meta" },
                    "Look up a word or theme across the Gita, Shiva Panchakshara, Kantha Sasti Kavasam and more."
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-outline",
                        href: "search.html",
                        style: {
                            marginTop: "0.8rem",
                            display: "inline-block"
                        }
                    },
                    "Open Search →"
                )
            ),
            React.createElement(
                "div",
                { className: "learn-card" },

                React.createElement(
                    "div",
                    null,
                    "📖 Daily Verse"
                ),

                React.createElement(
                    "p",
                    { className: "meta" },
                    "A new Bhagavad Gita verse each day, in Sanskrit with its meaning."
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-outline",
                        href: "verse.html",
                        style: {
                            marginTop: "0.8rem",
                            display: "inline-block"
                        }
                    },
                    "Read Today's Verse →"
                )
            ),
            React.createElement(
                "div",
                { className: "learn-card" },

                React.createElement(
                    "div",
                    null,
                    "📜 Tamil Devotional Poems"
                ),

                React.createElement(
                    "p",
                    { className: "meta" },
                    "Thiruvasagam, Kantha Sasti Kavasam, Kanthar Anuboothi, and Sri Rudram in one place."
                ),

                React.createElement(
                    "a",
                    {
                        className: "btn btn-outline",
                        href: "tamil_poems.html",
                        style: {
                            marginTop: "0.8rem",
                            display: "inline-block"
                        }
                    },
                    "Browse Poems →"
                )
            )
        )
    );
}

function Footer() {
    return React.createElement(
        "footer",
        { className: "vc-footer" },

        React.createElement(
            "div",
            { className: "footer-ornament" },
            "✧ ॐ ✧"
        ),

        React.createElement(
            "div",
            { className: "footer-brand" },
            "Vedic Corner"
        ),

        React.createElement(
            "p",
            { className: "footer-tagline" },
            "Living Tradition — Chant • Learn • Reflect"
        ),

        React.createElement(
            "div",
            { className: "footer-grid" },

            React.createElement(
                "div",
                { className: "footer-column" },

                React.createElement("h3", null, "Explore"),

                React.createElement(
                    "a",
                    { href: "#scriptures" },
                    "Scriptures"
                ),

                React.createElement(
                    "a",
                    { href: "#chants" },
                    "Chants"
                ),

                React.createElement(
                    "a",
                    { href: "#sacred-verses" },
                    "Sacred Verses"
                )
            ),

            React.createElement(
                "div",
                { className: "footer-column" },

                React.createElement("h3", null, "Devotional"),

                React.createElement(
                    "a",
                    { href: "ayyappan.html" },
                    "Ayyappan"
                ),

                React.createElement(
                    "a",
                    { href: "gayatri_mantras.html" },
                    "Gayatri Mantras"
                ),

                React.createElement(
                    "a",
                    { href: "tamil_poems.html" },
                    "Tamil Devotional Poems"
                )
            ),

            React.createElement(
                "div",
                { className: "footer-column" },

                React.createElement("h3", null, "Resources"),

                React.createElement(
                    "a",
                    { href: "verse.html" },
                    "Daily Verse"
                ),

                React.createElement(
                    "a",
                    { href: "search.html" },
                    "Search Every Verse"
                ),

                React.createElement(
                    "a",
                    { href: "#learn" },
                    "Learn"
                )
            )
        ),

        React.createElement(
            "div",
            { className: "footer-divider" }
        ),

        React.createElement(
            "p",
            { className: "footer-quote" },
            "\"Knowledge • Devotion • Reflection\""
        ),

        React.createElement(
            "p",
            { className: "footer-copy" },

            "© ",

            React.createElement(
                "span",
                { id: "year" }
            ),

            " Vedic Corner • Built with care"
        )
    );
}