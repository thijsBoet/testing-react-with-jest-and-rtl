import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { name: 'Chocolate', imagePath: '/images/chocolate.png' },
                { name: 'Vanilla', imagePath: '/images/vanilla.png' },
            ])
        );
    }),

    rest.post('/http://localhost:3030/scoops', (req, res, ctx) => { 
        return res(
            ctx.status(201),
            ctx.json({ orderNumber: 1234567890 })
        );
    }),

];