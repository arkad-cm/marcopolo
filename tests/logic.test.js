const marcoPolo = require('../marcopolo')

describe("Marcopolo", () => {

    describe("Test for Correct Values", () => {
        it("In Range 30", async () => {
            const expected = "1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30,";
            let text = ""
            await marcoPolo({
                write: (t) => {
                    text += t
                },
                setHeader: (_, __) => {
                },
                status: (_) => {
                    return {
                        end: () => {
                        }
                    }
                }
            }, 30)
            expect(text).toBe(expected)
        });
    });
});
