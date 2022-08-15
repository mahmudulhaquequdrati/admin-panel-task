import calender from '../Assets/calendar.png';
import chat from '../Assets/chat.png';
import arrowIcon from '../Assets/d.png';
import dashboardIcon from '../Assets/dashboard.png';
// file ecommerce email invoice project contact auth utility ui form
import auth from '../Assets/auth.png';
import contact from '../Assets/contact.png';
import ecommerce from '../Assets/ecommerce.png';
import email from '../Assets/email.png';
import file from '../Assets/file.png';
import form from '../Assets/form.png';
import invoice from '../Assets/invoice.png';
import project from '../Assets/project.png';
import ui from '../Assets/ui.png';
import uitlity from '../Assets/utility.png';

export const menuItem = [
    {
        name: 'Dashbords',
        icon: dashboardIcon,
        arrow: arrowIcon,
        color: 'white',
    },
    {
        name: 'Ecommerce',
        icon: null,
        arrow: null,
        color: 'white',
    },
    {
        name: 'SASS',
        icon: null,
        arrow: null,
        color: 'lightgray',
    },
    {
        name: 'Cypto',
        icon: null,
        arrow: null,
        color: 'lightgray',
    },
];

export const menuApp = [
    {
        name: 'Calendar',
        icon: calender,
        arrow: null,
        text: null,
    },
    {
        name: 'Chat',
        icon: chat,

        arrow: null,
        text: 'Hot',
    },
    {
        name: 'File Manager',
        icon: file,

        arrow: null,
        text: null,
    },
    {
        name: 'Ecommerce',
        icon: ecommerce,

        arrow: arrowIcon,
        text: null,
    },
    {
        name: 'Email',
        icon: email,

        arrow: arrowIcon,

        text: null,
    },
    {
        name: 'Invoices',
        icon: invoice,

        arrow: arrowIcon,

        text: null,
    },
    {
        name: 'Projects',
        icon: project,

        arrow: arrowIcon,

        text: null,
    },
    {
        name: 'Contacts',
        icon: contact,

        arrow: arrowIcon,

        text: null,
    },
];
export const menuLaout = [
    {
        name: 'Authentication',
        icon: auth,
        number: 8,
        arrow: null,
    },
    {
        name: 'Utility',
        icon: uitlity,
        number: null,
        arrow: arrowIcon,
    },
];
export const menuComponents = [
    {
        name: 'UI Elements',
        icon: ui,
        arrow: arrowIcon,
    },
    {
        name: 'Forms',
        icon: form,
        arrow: arrowIcon,
    },
];
