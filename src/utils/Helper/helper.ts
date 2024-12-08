import { NavList } from "../Type/type";
import {Poppins,Creepster} from '@next/font/google';
export const rubikBuble = Creepster({ subsets: ['latin'], weight: ['400'],display: 'swap',  });
export const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
});
export const navList:NavList[] = [
    {
        name:'home',
        link:'/'
    },
    {
        name:'Shop',
        link:'/product'
    },
    {
        name:'About',
        link:'/about'
    },
    {
        name:'contact',
        link:'/contact'
    },
    {
        name:'Team',
        link:'team'
    },
    {
        name:'pricing',
        link:'/pricing'
    }
];
