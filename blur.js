var ebayIdsToBlur = ['gh-ug', 'gh-ui', 'gh-un', 'gh-uid', 'userid', 'user-info', 'pass'];
var ebayClassesToBlur = ['mbg-id'];
var amazonIdsToBlur = ['glow-toaster-body', 'authportal-center-section', 'glow-ingress-block', 'GLUXAddressBlock', 'ap_email'];
var amazonClassesToBlur = ['cvf-widget-container', 'auth-text-truncate', 'recipient-address', 'displayAddressDiv', 'normal-desktop-address-tile']
function applyBlurToElementById(id) {
    if (id !== undefined) {
        var element = document.getElementById(id);
        if (element != null) {
            element.style.webkitFilter = "blur(3px)";
        }
    }
}

function getCurrentLocation() {
    var windowLocation = window.location.href;
    blurTheThing(null, windowLocation);
}

const observer = new MutationObserver(mutations => {
    mutations.filter(m => {
        blurTheThing(window.location.href, m);
    });
});

const config = {
    attributes: false,
    characterData: true,
    childList: true,
    subtree: true
};
observer.observe(document.body, config);

getCurrentLocation();

function blurTheThing(site, m) {
    if (site === null) {
        return;
    }
    var site = site.includes('ebay') ? 'ebay' :
        site.includes('amazon') ? 'amazon' : undefined;

    switch (site) {
        case 'ebay':
            ebayIdsToBlur.map(eid => {
                applyBlurToElementById(eid);
            });
            //https://medium.com/@chuckdries/traversing-the-dom-with-filter-map-and-arrow-functions-1417d326d2bc

            ebayClassesToBlur.map(ec => {
                var childs = document.getElementsByClassName(ec);
                childs = Array.from(childs);
                child = childs.map(e => {
                    e.style.webkitFilter = "blur(3px)";

                });
            });
            if (m != null || m != undefined) {
                // if m is null then this might be first page load
                if (m.target['baseURI'].includes('ebay.co.uk')) {
                    ebayIdsToBlur.map(eid => {
                        if (m.target['id'] != "" && eid === m.target['id']) {
                            applyBlurToElementById(eid);
                        }
                    });
                }
            }
            break;
        case 'amazon':
            amazonIdsToBlur.map(eid => {
                applyBlurToElementById(eid);
            });
            amazonClassesToBlur.map(ec => {
                var childs = document.getElementsByClassName(ec);
                childs = Array.from(childs);
                child = childs.map(e => {
                    e.style.webkitFilter = "blur(3px)";

                });
            });
            // if m is null then this might be first page load
            if (m != null || m != undefined) {
                if (m.target['baseURI'].includes('amazon.co.uk')) {
                    amazonIdsToBlur.map(eid => {
                        if (m.target['id'] != "" && eid === m.target['id']) {
                            applyBlurToElementById(eid);
                        }
                    });
                }
            }
            break;
        default:
            return;
    }
}