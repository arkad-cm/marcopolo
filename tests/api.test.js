const supertest = require("supertest");
const should = require('should')
const app = require('../app')

const server = supertest.agent(app, {});

jest.setTimeout(10 * 60 * 1000)

describe("Marcopolo", function () {

    it("Should handle multiple clients", function (done) {

        const client1 = new Promise((resolve, reject) => {
            try {
                server
                    .get("/")
                    .expect("Content-type", /json/)
                    .expect(200) // THis is HTTP response
                    .end(function (err, res) {
                        console.log("Received from Client 1")
                        res.status.should.equal(200);
                        resolve()
                    });
            } catch (e) {
                reject(e)
            }
        })
        console.log("Sent Request to Client 1")


        const client2 = new Promise((resolve, reject) => {
            try {
                server
                    .get("/")
                    .expect("Content-type", /json/)
                    .expect(200) // THis is HTTP response
                    .end(function (err, res) {
                        console.log("Received from Client 2")
                        res.status.should.equal(200);
                        resolve()
                    });
            } catch (e) {
                reject(e)
            }
        })
        console.log("Sent Request to Client 2")


        const client3 = new Promise((resolve, reject) => {
            try {
                server
                    .get("/")
                    .expect("Content-type", /json/)
                    .expect(200) // THis is HTTP response
                    .end(function (err, res) {
                        console.log("Received from Client 3")
                        res.status.should.equal(200);
                        resolve()
                    });
            } catch (e) {
                reject(e)
            }
        })
        console.log("Sent Request to Client 3")

        Promise.all([client1, client2, client3]).then(() => done())

    })
});