class JavaScriptTest {

    static main() {

        const n = 5;

        // Upper half
        for (let i = 1; i <= n; i++) {

            let line = "";

            // Leading spaces
            for (let j = i; j < n; j++) {
                line += " ";
            }

            // First star
            line += "*";

            // Inner spaces and second star
            if (i > 1) {
                for (let j = 1; j <= (2 * i - 3); j++) {
                    line += " ";
                }
                line += "*";
            }

            console.log(line);
        }

        // Lower half
        for (let i = n - 1; i >= 1; i--) {

            let line = "";

            // Leading spaces
            for (let j = n; j > i; j--) {
                line += " ";
            }

            // First star
            line += "*";

            // Inner spaces and second star
            if (i > 1) {
                for (let j = 1; j <= (2 * i - 3); j++) {
                    line += " ";
                }
                line += "*";
            }

            console.log(line);
        }
    }
}

JavaScriptTest.main();