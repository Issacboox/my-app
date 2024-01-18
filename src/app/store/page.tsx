import Navbar from '@/components/head/navbar'
import { Fragment } from 'react'

export default function store() {
    return (
        <Fragment>
            <Navbar />
            <div className="content">
                store
            </div>
        </Fragment>
    )
}
