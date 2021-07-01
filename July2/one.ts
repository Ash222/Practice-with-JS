class State {

    private states: any;

    constructor() {

        this.states = {

            "delhi": {
                "cp": "foodie special",
                "janpath": "shopping spot",
                "sarojini": "cheap and best"
            },
            "bangalore": {
                "hsr layout": "pgs and hostels k lie bessst hai!",
                "kormangala": "soooo many startups!!",
            },
            "hyderabad": {
                "lb city": "cheap cheap",
                "electronic city": "msst msst offices"
            },
            "agra": {
                "landmark1": "NA",
                "landmark2": "NA"
            }

        }

    }

    // method to retrieve the landmark location with RTCSessionDescription.
    landmarkPicker(destination: string): string[] {

        let result: string[] = [];

        for (let place in this.states) {

            if (place === destination) {

                for (let landmark in this.states[place]) {

                    result.push(landmark);
                    result.push(this.states[place][landmark]);

                }

            }

        }

        return result;
    }

    // method to get the states which starts with vowels.
    getStateWithVowels(): string[] {

        let result: string[] = [];

        for (let x in this.states) {

            switch (x.toLowerCase().charAt(0)) {

                case 'a': result.push(x);
                    break;
                case 'e': result.push(x);
                    break;
                case 'i': result.push(x);
                    break;
                case 'o': result.push(x);
                    break;
                case 'u': result.push(x);
                    break;
                default: console.log("Not a vowel");
                    break;

            }

        }

        return result;

    }

}

const res: string[] = (new State).getStateWithVowels();

// for (let x in res) {
//     console.log(res[x]);
// }

console.log(res);