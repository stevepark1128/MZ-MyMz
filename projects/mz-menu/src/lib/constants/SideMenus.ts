import { MenuItem } from "../enums/MenuItem";
import { MenuNode } from "../models/MenuNode";

export const menus: MenuNode[] = [
    {
        name: MenuItem.Home,
        ficon: 'fal fa-tachometer-alt',
        label: 'Home',
        link: 'home',
        level: 1
    },
    {
        name: MenuItem.REGISTER,
        ficon: 'fal fa-plus-square',
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
        ficon: 'fal fa-bible',
        level: 1,
        children: [
        ]
    },
    {
        name: 'simple-tools',
        label: 'Simple Tools',
        ficon: 'fal fa-chalkboard-teacher',
        level: 1,
        children: [
        {
            name: 'leading_weekly_exercise',
            label: 'weeklyExercise',
            level: 2,
            children: [
            {
                label: 'qnaHomiletic',
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