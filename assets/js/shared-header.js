(function () {
    const navigationItems = [
        { label: "Home", href: "index.html", pages: ["index.html"] },
        {
            label: "Scriptures",
            href: "shankaracharya_works.html",
            pages: ["bhaja_govindam.html", "shankaracharya_works.html"]
        },
        {
            label: "Tamil Poems",
            href: "tamil_poems.html",
            pages: [
                "tamil_poems.html",
                "thiruvasagam.html",
                "kantha_sasti_kavasam.html",
                "kanthar_anuboothi.html",
                "margabandhu_stotram.html",
                "shiva-panchakshara.html",
                "shiva_nama.html",
                "srirudram.html"
            ]
        },
        {
            label: "Mantras",
            href: "gayatri_mantras.html",
            pages: ["gayatri_mantras.html"]
        },
        {
            label: "Daily Mantra",
            href: "daily_mantra.html",
            pages: ["daily_mantra.html"]
        },
        { label: "Ayyappan", href: "ayyappan.html", pages: ["ayyappan.html"] },
        {
            label: "Daily Verse",
            href: "verse.html",
            pages: ["verse.html"]
        },
        { label: "Search", href: "search.html", pages: ["search.html"] }
    ];

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const header = document.createElement("header");
    header.className = "shared-site-header";

    const links = navigationItems.map(function (item) {
        const current = item.pages.includes(currentPage);
        return `<a href="${item.href}"${current ? ' aria-current="page"' : ""}>${item.label}</a>`;
    }).join("");

    header.innerHTML = `
        <div class="shared-site-header-inner">
            <a class="shared-site-brand" href="index.html">
                <img src="assets/images/logo.png" alt="" aria-hidden="true">
                <span>Vedic Corner</span>
            </a>
            <button class="shared-menu-toggle" type="button" aria-label="Open navigation" aria-controls="shared-site-nav" aria-expanded="false" title="Open navigation">
                <span class="shared-menu-icon" aria-hidden="true"></span>
            </button>
            <nav class="shared-site-nav" id="shared-site-nav" aria-label="Primary navigation">
                ${links}
            </nav>
        </div>
    `;

    const mount = document.getElementById("shared-site-header");
    const existing = mount || document.querySelector(
        ".page-topbar, header.vc-header, header.site-header, nav.site-nav, nav.vc-nav"
    ) || Array.from(document.querySelectorAll("header")).find(function (candidate) {
        return candidate.querySelector("nav");
    });

    if (existing) {
        existing.replaceWith(header);
    } else {
        document.body.insertBefore(header, document.body.firstChild);
    }

    const toggle = header.querySelector(".shared-menu-toggle");
    const nav = header.querySelector(".shared-site-nav");

    function setMenuOpen(open) {
        header.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        toggle.title = open ? "Close navigation" : "Open navigation";
    }

    toggle.addEventListener("click", function () {
        setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
        if (event.target.closest("a")) setMenuOpen(false);
    });

    document.addEventListener("click", function (event) {
        if (!header.contains(event.target)) setMenuOpen(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setMenuOpen(false);
    });
})();