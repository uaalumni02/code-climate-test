import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../server/server';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();

describe('App', () => {
    describe('/test', () => {
        it("should return 'Test is working'", (done) => {
            chai.request(app)
                .get('/test')
                .end((error, response) => {
                    response.should.have.status(200);
                    expect(response.text).to.equal("Test is working");
                    done();
                });
        });
    });
});