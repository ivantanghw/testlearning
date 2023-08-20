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

it('getPeople returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
          count: 86,
          results: [0,1,2,3,4,5]
      })
    }))

    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people');
      expect(data.count).toEqual(86);
      expect(data.results.length).toBeGreaterThan(5);
    })
    // done() 
})