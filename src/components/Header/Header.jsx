import React from 'react'
import Logo from './Logo/Logo'
import logo from '../../assets/svg/logo.svg';
import Navigate from './Navigate/Navigate';

const navs = [
    {
        link: '/',
        name: 'Главная'
    },
    {
        link: '/service',
        name: 'Об услуге'
    },
    {
        link: '/partners',
        name: 'Партнеры'
    },
    {
        link: '/garanty',
        name: 'Наша гарантия'
    },
    {
        link: '/contacts',
        name: 'Контакты'
    }
]

export default function Header() {
    return (
        <header>
            <Logo logo={logo} />

            <Navigate navs={navs} />
        </header>
    )
}
