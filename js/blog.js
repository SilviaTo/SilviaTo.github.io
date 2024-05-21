import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

function printResponse(response) {
    if (!response || !response.items) {
        return;
    }

    response.items.forEach(element => {
    
        const d = new Date(element.published);
        const dateString = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
       
        const dateHtml = "<div class='post-date'>"+ dateString+"</div>"
        document.getElementById("blog-content").innerHTML += "<div class='post-container' id='" + element.id + "'><h1>" + element.title + "</h1>" + element.content +dateHtml+ "</div>";

    });
}



function handleAction() {
    fetch('https://www.googleapis.com/blogger/v3/blogs/6914486980061360486/posts?key=AIzaSyA4YlEUmVINsjjyvw4DrL6fw7PZp-UPMBs')
        .then(res => res.json())
        .then(response => {
            printResponse(response);
        })
        .catch(error => console.error('Error:', error));

}
//window.onload = handleAction;

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');
const blog = document.getElementById('blog-content');
const blogPlaceholder = document.getElementById('blog-placeholder');

CookieConsent.run({
    onConsent: function () {
        if (CookieConsent.acceptedCategory('analytics')) {
            if(blog){
                blog.classList.remove('d-none');
                blogPlaceholder.classList.add('d-none');
                handleAction();
            }
        }

    },
    onChange: function ({ changedCategories }) {
        if (changedCategories.includes('analytics')) {

            if (CookieConsent.acceptedCategory('analytics')) {
                if(blog){
                    blog.classList.remove('d-none');
                    blogPlaceholder.classList.add('d-none');
                    handleAction();
                }
            } else {
                if(blog){
                    blog.classList.add('d-none');
                    blog.innerHTML = '';
                blogPlaceholder.classList.remove('d-none');

                mapiframe2.src = '';
                mapiframe2.classList.add('d-none');
                mapiframeImg2.classList.remove('d-none');
                }
            }


        }
    },
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "de",
        autoDetect: "browser",
        translations: {
            de: {
                consentModal: {
                    title: "Wir verwenden Cookies",
                    description: "Um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern, verwenden wir Cookies. Weitere Informationen erhalten Sie in unserer Datenschutzerklärung.",
                    acceptAllBtn: "Alle Akzeptieren",
                    acceptNecessaryBtn: "Technisch Notwendige Akzeptieren",
                    showPreferencesBtn: "Cookie Einstellungen",
                    footer: "<a href=\"/impressum-und-datenschutz#datenschutz\">Datenschutzerklärung</a>\n<a href=\"/impressum-und-datenschutz#impressum\">Impressum</a>"
                },
                preferencesModal: {
                    title: "Cookie Einstellungen",
                    acceptAllBtn: "Alle Akzeptieren",
                    acceptNecessaryBtn: "Technisch Notwendige Akzeptieren",
                    savePreferencesBtn: "Speichern",
                    closeIconLabel: "Schließen",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            // title: "Cookies",
                            description: `Um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern, verwenden wir Cookies. Bitte wählen Sie hier die Cookie Einstellungen aus. Cookies sind kleine Textdateien, die von Webseiten verwendet werden, um die Benutzererfahrung effizienter zu gestalten.`
                        },
                        {
                            title: "Technisch Notwendige Cookies <span class=\"pm__badge\">Immer Aktiv</span>",
                            description: "Diese Cookies sind erforderlich, um die grundlegenden Funktionen dieser Seite zu ermöglichen, wie die Bereitstellung einer sicheren Anmeldung oder das Speichern des Bestellfortschritts. Hierbei wird auf <a href='https://www.ibelsa.com/datenschutz/'>IBelsa</a> mit 'https://rooms.ibelsa.com' verwiesen.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytische Cookies",
                            description: "Statistik-Cookies helfen Webseiten-Besitzern zu verstehen, wie Besucher mit Webseiten interagieren, indem Informationen anonym gesammelt und gemeldet werden. Analytische Cookies werden bei Benutzung der <a href='https://business.safety.google/privacy/'>Google APIs</a> (Google Maps, Google Blogs) gesetzt. ",
                            linkedCategory: "analytics"
                        },
                        {
                            description: `Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese für den Betrieb dieser Seite unbedingt notwendig sind. Für alle anderen Cookie-Typen benötigen wir Ihre Erlaubnis.
                            
                            Diese Seite verwendet unterschiedliche Cookie-Typen. Einige Cookies werden von Drittparteien platziert, die auf unseren Seiten erscheinen.
                            
                            Sie können Ihre Einwilligung jederzeit von der Cookie-Erklärung auf unserer Website ändern oder widerrufen.
                            
                            Erfahren Sie in unserer <a href="/datenschutz"> Datenschutzrichtlinie mehr darüber, wer wir sind, wie Sie uns kontaktieren können und wie wir personenbezogene Daten verarbeiten.`
                        }
                    ]
                }
            }
        }
    }
},
);