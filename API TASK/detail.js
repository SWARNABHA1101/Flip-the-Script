const BACKEND_URL = 'https://rampant-arm.us-west-2.aws.cloud.dgraph.io/graphql';

async function fetchGraphQL(operationsDoc, variables) {
	const result = await axios({
		method: 'POST',

		url: BACKEND_URL,

		headers: {
			'Content-Type': 'application/json'
		},

		data: JSON.stringify({
			query: operationsDoc,

			variables
		})
	});

	return result.data;
}

const query = `

query {

  queryBook {

    title

    isbn

    author {

      firstname

      lastname
    }

  }

}


`;

app.get('/', jsonParser, async (req, res) => {
	let gqlResponseData = await fetchGraphQL(query, {});

	res.render('index', { books: gqlResponseData.data.queryBook });
});
