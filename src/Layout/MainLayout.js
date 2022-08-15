import React from 'react';
import Sidebar from '../components/sidebar/sidebar';

export default function MainLayout() {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-6 lg:col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-6 lg:col-span-10  px-2">world!</div>
            </div>
        </div>
    );
}
