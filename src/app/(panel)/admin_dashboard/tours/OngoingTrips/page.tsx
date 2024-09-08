import React from 'react'
import HeaderAddtour from '@/components/(panel)/admin_dashboard/addtour/HeaderAddtour'
import OngoingTrips from '@/components/(panel)/admin_dashboard/addtour/OngoingTrips'
import Pagination from '@/components/(panel)/admin_dashboard/comments/Pagination'

export default function page() {
    return (
        <>
            <div className='font-iransansNumber w-full'>
                <HeaderAddtour />
                <OngoingTrips />
                <div className='mt-3'>
                    <Pagination />
                </div>
            </div>

        </>
    )
}
