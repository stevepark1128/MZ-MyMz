import { MenuItem } from "../enums/MenuItem";
import { MenuNode } from "../models/MenuNode";

export const menus: MenuNode[] = [
    {
        name: MenuItem.Home,
        ficon: ['far', 'star'],
        label: 'Home',
        link: 'home',
        level: 1
    },
    {
        name: MenuItem.REGISTER,
        ficon: ['far', 'star'],
        label: 'Register',
        level: 1,
        children: [
        {
            name: 'register-me',
            label: 'RegisterMe',
            link: 'register/me',
            level: 2
        }
        ]
    },
    {
        name: MenuItem.LESSONS,
        label: 'Lessons',
        link: 'lessons-user',
        ficon: ['fas', 'star'],
        level: 1
    },
    {
        name: 'simple-tools',
        label: 'Simple Tools',
        ficon: ['far', 'star'],
        level: 1,
        children: [
        {
            name: 'json-viewer',
            label: 'Json Viewer',
            link: 'json-viewer',
            level: 2,
        },
        {
            name: 'to-do-list',
            label: 'To do list',
            link: 'to-do-list',
            level: 2,
        },
        {
            name: '',
            label: 'weeklyExercise',
            level: 2,
            children: [
            {
                label: 'qnaHomiletics',
                name: 'leading_weekly_exercise_qna_homelitic',
                level: 3,
                link: 'lessons-user-homiletic/qna-homiletic',
            }
            ]
        }
        ]
    },
    {
        label: 'DIVIDER',
        link: 'DIVIDER',
        name: 'divider'
    },
    {
        level: 1,
        label: 'FindAGroup',
        link: 'https://bsf-mca-fcl-dev.bsfinternational.org',
        name: 'findAGroup',
        url: true
    }
    ];