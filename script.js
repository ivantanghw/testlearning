const googleDatabse =  [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com'
  ]
  
  const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
      return website.includes(searchInput);
    })
    // Return top 3 results only
    return matches.length > 3 ? matches.slice(0, 3) : matches
  }
  
  console.log(googleSearch('com', googleDatabse));
  
  module.exports = googleSearch;