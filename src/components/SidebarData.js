import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FaIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/io'
import * as FaIcons from 'react-icons/ri'

export const SidebarData = [
    {   
        title: 'Overview',
        path: '/overview',
        icon: <AiIcon.AiFileHome/>,
        iconClosed: <RiIcon.RiArrowDownSFill/>,
        iconOpened: <RiIcon.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcon.IoIosPaper/>,                
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcon.IoIosPaper/>,                
            },
        ]
    },

    {   
        title: 'Reports',
        path: '/reports',
        icon: <AiIcon.AiFileHome/>,
        iconClosed: <RiIcon.RiArrowDownSFill/>,
        iconOpened: <RiIcon.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'reports',
                path: '/overview/reports1',
                icon: <IoIcon.IoIosPaper/>,                
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcon.IoIosPaper/>,                
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcon.IoIosPaper/>,                
            },            
        ]
    },

    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
    }
]   