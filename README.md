# Cat Image Repository

## Instructions

1. Clone repository
2. `npm install`
3. Create postgres db called `cats` and `npm run seed`
4. Start the server using `node server/index.js`

### View all cat images

You can query all cats by issuing an HTTP GET request to `http://localhost:3000/api/cats`

### Add cat image

You can add a cat image by issuing an HTTP POST request to `http://localhost:3000/api/cats` with a url encoded body containing a name and imgUrl eg. `curl --data "name=Gatito&imageUrl=example.com/kitty.jpg" http://localhost:3000/api/cats`

### Delete a cat image

You can add a cat image by issuing an HTTP DELETE request to `http://localhost:3000/api/catId` eg. `curl -X DELETE http://localhost:3000/api/5`
