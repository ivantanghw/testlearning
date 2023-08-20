const swapi = require('./script2');
const fetch = require('node-fetch');

it('calls swapi to get people', (done) => {
  //expect.assertions(number) verifies that a
  // certain number of assertions are called during a
  // test. This is often useful when testing asynchronous
  //code, in order to make sure that assertions in a
  //callback actually got called.
  expect.assertions(1)
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87)
    done(); // until the done callback is called, the test is not finished
  })
})


it('calls swapi to get people with promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    })
  })