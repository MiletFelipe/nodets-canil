import { Request, Response } from 'express';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        homem: 'active',
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    let user: string = 'dogs';
    res.render('pages/page', {
        user,
        dogsm: 'active',
        banner: {
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType("cat");

    let user: string = 'cats';
    res.render('pages/page', {
        user,
        catsm: 'active',
        banner: {
            title: 'Todos os Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    let user: string = 'fishes';
    res.render('pages/page', {
        user,
        fishesm: 'active',
        banner: {
            title: 'Todos os Peixes',
            background: 'banner_fish.jpg'
        },

        list
    });
}
