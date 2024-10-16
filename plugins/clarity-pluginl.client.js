export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const ccCookie = getCookie('cc_cookie');
        if (ccCookie) {
            try {
                const ccCookieParsed = JSON.parse(ccCookie);
                if (ccCookieParsed.categories.includes('analytics')) {
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "oi58idapht");
                }
            } catch (error) {
                console.error('Failed to parse cc_cookie:', error);
            }
        }
    }
});
