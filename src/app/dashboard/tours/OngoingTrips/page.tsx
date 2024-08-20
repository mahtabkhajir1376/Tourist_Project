import React from 'react'
import HeaderAddtour from '@/components/addtour/HeaderAddtour'
import OngoingTrips from '@/components/addtour/OngoingTrips'
import Pagination from '@/components/dashboard/comments/Pagination'

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
