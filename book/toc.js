// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Zero</li><li class="chapter-item expanded "><a href="zero/index.html"><strong aria-hidden="true">1.</strong> Zero</a></li><li class="chapter-item expanded affix "><li class="part-title">Part I</li><li class="chapter-item expanded "><a href="chapter-1/index.html"><strong aria-hidden="true">2.</strong> Chapter 1 - Making sense of AI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter-1/REALITY.html"><strong aria-hidden="true">2.1.</strong> Reality</a></li><li class="chapter-item expanded "><a href="chapter-1/RAMDONNESS.html"><strong aria-hidden="true">2.2.</strong> Randomness</a></li><li class="chapter-item expanded "><a href="chapter-1/FOOLED_BY_AI.html"><strong aria-hidden="true">2.3.</strong> Fooled by AI</a></li><li class="chapter-item expanded "><a href="chapter-1/VIBE_CODING.html"><strong aria-hidden="true">2.4.</strong> Vibe Coding</a></li><li class="chapter-item expanded "><a href="chapter-1/AI_INPUT.html"><strong aria-hidden="true">2.5.</strong> AI Input</a></li><li class="chapter-item expanded "><a href="chapter-1/MIRROR_ASTEROIDS.html"><strong aria-hidden="true">2.6.</strong> Mirror on Asteroids</a></li></ol></li><li class="chapter-item expanded "><a href="chapter-2/index.html"><strong aria-hidden="true">3.</strong> Chapter 2 - Traditional AI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter-2/WHAT.html"><strong aria-hidden="true">3.1.</strong> What is Traditional AI?</a></li><li class="chapter-item expanded "><a href="chapter-2/REGRESSION.html"><strong aria-hidden="true">3.2.</strong> Regression</a></li><li class="chapter-item expanded "><a href="chapter-2/CLASSIFICATION.html"><strong aria-hidden="true">3.3.</strong> Classification</a></li><li class="chapter-item expanded "><a href="chapter-2/CLUSTERING.html"><strong aria-hidden="true">3.4.</strong> Clustering</a></li><li class="chapter-item expanded "><a href="chapter-2/DIMENSIONALITY_REDUCTION.html"><strong aria-hidden="true">3.5.</strong> Dimenencionality Reduction</a></li></ol></li><li class="chapter-item expanded "><a href="chapter-3/index.html"><strong aria-hidden="true">4.</strong> Chapter 3 - Generative AI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter-3/WHAT.html"><strong aria-hidden="true">4.1.</strong> What is Generative AI?</a></li><li class="chapter-item expanded "><a href="chapter-3/TRANSFORMERS.html"><strong aria-hidden="true">4.2.</strong> Transformers</a></li><li class="chapter-item expanded "><a href="chapter-3/LLM.html"><strong aria-hidden="true">4.3.</strong> Large Language Models (LLMs)</a></li><li class="chapter-item expanded "><a href="chapter-3/EMBEDDINGS.html"><strong aria-hidden="true">4.4.</strong> Embeddings</a></li><li class="chapter-item expanded "><a href="chapter-3/TEXT_GENERATION.html"><strong aria-hidden="true">4.5.</strong> Text Generation</a></li><li class="chapter-item expanded "><a href="chapter-3/VECTOR_DBS.html"><strong aria-hidden="true">4.6.</strong> Vector Databases</a></li><li class="chapter-item expanded "><a href="chapter-3/RAG.html"><strong aria-hidden="true">4.7.</strong> RAG</a></li><li class="chapter-item expanded "><a href="chapter-3/SOUND_GENERATION.html"><strong aria-hidden="true">4.8.</strong> Sound Generation</a></li><li class="chapter-item expanded "><a href="chapter-3/IMAGE_GENERATION.html"><strong aria-hidden="true">4.9.</strong> Image Generation</a></li><li class="chapter-item expanded "><a href="chapter-3/VIDEO_GENERATION.html"><strong aria-hidden="true">4.10.</strong> Video Generation</a></li><li class="chapter-item expanded "><a href="chapter-3/FINE_TUNING.html"><strong aria-hidden="true">4.11.</strong> Fine Tuning</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Part II</li><li class="chapter-item expanded "><a href="chapter-4/index.html"><strong aria-hidden="true">5.</strong> Chapter 4 - Agents</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter-4/WHAT.html"><strong aria-hidden="true">5.1.</strong> What are Agents?</a></li><li class="chapter-item expanded "><a href="chapter-4/CONTEXT_WINDOW.html"><strong aria-hidden="true">5.2.</strong> Context Window</a></li><li class="chapter-item expanded "><a href="chapter-4/CODING_AGENTS.html"><strong aria-hidden="true">5.3.</strong> Coding Agents</a></li><li class="chapter-item expanded "><a href="chapter-4/AGENTS_PATTERNS.html"><strong aria-hidden="true">5.4.</strong> Agent Patterns</a></li><li class="chapter-item expanded "><a href="chapter-4/MCP.html"><strong aria-hidden="true">5.5.</strong> MCP</a></li><li class="chapter-item expanded "><a href="chapter-4/OTHER_APPROACHES.html"><strong aria-hidden="true">5.6.</strong> Other Apporaches</a></li><li class="chapter-item expanded "><a href="chapter-4/CONTEXT7.html"><strong aria-hidden="true">5.7.</strong> Context 7</a></li><li class="chapter-item expanded "><a href="chapter-4/MCP_SEC.html"><strong aria-hidden="true">5.8.</strong> Security and Agents/MCP</a></li><li class="chapter-item expanded "><a href="chapter-4/POPULAR_AGENTS.html"><strong aria-hidden="true">5.9.</strong> Popular Agents</a></li></ol></li><li class="chapter-item expanded "><a href="chapter-5/index.html"><strong aria-hidden="true">6.</strong> Chapter 5 - Claude Code</a></li><li class="chapter-item expanded "><a href="chapter-6/index.html"><strong aria-hidden="true">7.</strong> Chapter 6 - Testing with AI</a></li><li class="chapter-item expanded affix "><li class="part-title">Part III</li><li class="chapter-item expanded "><a href="chapter-7/index.html"><strong aria-hidden="true">8.</strong> Chapter 7 - Migrations with AI</a></li><li class="chapter-item expanded "><a href="chapter-8/index.html"><strong aria-hidden="true">9.</strong> Chapter 8 - Non-Obvious Use Cases</a></li><li class="chapter-item expanded "><a href="chapter-9/index.html"><strong aria-hidden="true">10.</strong> Chapter 9 - Learning from AI</a></li><li class="chapter-item expanded affix "><li class="part-title">Epilogue</li><li class="chapter-item expanded "><a href="epilogue/index.html"><strong aria-hidden="true">11.</strong> Epilogue</a></li><li class="chapter-item expanded "><a href="epilogue/REFERENCES.html"><strong aria-hidden="true">12.</strong> References</a></li><li class="chapter-item expanded "><a href="epilogue/GLOSSARY.html"><strong aria-hidden="true">13.</strong> Glossary</a></li><li class="chapter-item expanded "><a href="epilogue/INDEX.html"><strong aria-hidden="true">14.</strong> Index</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
