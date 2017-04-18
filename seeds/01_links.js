exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('link').del()
        .then(function() {
            // Inserts seed entries
            return knex('link').insert([
              {
                    id: 1,
                    votes: 35,
                    url: 'https://www.google.com',
                    title: 'hello google'
                },
                {
                    id: 2,
                    votes: 40,
                    url: 'https://www.google.com',
                    title: 'hi google'
                }
            ]);
        });
};
