// export module
module.exports = function (tokenme, tokenid) {
    return `
  {
    "attributes": [
      {
        "trait_type": "SkinTone", 
        "value": "${tokenme.skintone}"
      },
      {
        "trait_type": "Era", 
        "value": "Testing"
      }
    ], 
    "description": "Token Me.", 
    "external_url": "https://github.com/abcoathup/tokenme", 
    "image": "https://abcoathup.github.io/tokenme/apisampledata/tokenme/${tokenid}.svg", 
    "name": "Token Me"
  }`
}