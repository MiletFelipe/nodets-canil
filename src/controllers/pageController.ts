import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        homem: 'active',
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    let user: string = 'dogs';
    res.render('pages/page', {
        user,
        dogsm: 'active',
        banner: {
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => {
    let user: string = 'cats';
    res.render('pages/page', {
        user,
        catsm: 'active',
        banner: {
            title: 'Todos os Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    let user: string = 'fishes';
    res.render('pages/page', {
        user,
        fishesm: 'active',
        banner: {
            title: 'Todos os Peixes',
            background: 'banner_fish.jpg'
        }
    });
}
