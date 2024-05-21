import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');
const mapiframe = document.getElementById('mapiframe1');
const mapiframeImg = document.getElementById('mapiframe1img');
const mapiframe2 = document.getElementById('mapiframe2');
const mapiframeImg2 = document.getElementById('mapiframe2img');
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.0477057448265!2d9.975218674080157!3d48.40670745280084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799642cb4d90a35%3A0x13346cbf666620bc!2sHotel%20Garni%20Lehrertal!5e0!3m2!1sde!2sde!4v1632236079233!5m2!1sde!2sde"
const mapSrc2 = "https://www.google.com/maps/embed?pb=!4v1638951492720!6m8!1m7!1sCAoSLEFGMVFpcE53T3JJSnJxUlMzZ3dfaHZsSUNwZ2VkMThlNXhmVkZwSVZEcTN4!2m2!1d48.406759710936!2d9.9753234818341!3f30.246679799829423!4f-16.94322799170385!5f0.4000000000000002";

CookieConsent.run({
    onConsent: function () {
        if (CookieConsent.acceptedCategory('analytics')) {
            if(mapiframe && mapiframe2){
            mapiframe.src = mapSrc;
            mapiframe.classList.remove('d-none');
            mapiframeImg.classList.add('d-none');

            mapiframe2.src = mapSrc;
            mapiframe2.classList.remove('d-none');
            mapiframeImg2.classList.add('d-none');
            }
        }

    },
    onChange: function ({ changedCategories }) {
        if (changedCategories.includes('analytics')) {

            if (CookieConsent.acceptedCategory('analytics')) {
                if(mapiframe && mapiframe2){
                    mapiframe.src = mapSrc;
                    mapiframe.classList.remove('d-none');
                    mapiframeImg.classList.add('d-none');
    
                    mapiframe2.src = mapSrc2;
                    mapiframe2.classList.remove('d-none');
                    mapiframeImg2.classList.add('d-none');
                }
            } else {
                if(mapiframe && mapiframe2){
                mapiframe.src = '';
                mapiframe.classList.add('d-none');
                mapiframeImg.classList.remove('d-none');

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
                    footer: "<a href=\"/datenschutz\">Datenschutzerklärung</a>\n<a href=\"/impressum\">Impressum</a>"
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