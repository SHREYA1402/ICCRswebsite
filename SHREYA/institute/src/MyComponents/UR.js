import React from 'react'
export const UR = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>

            <div>
                <div className='table_ICCR'>
                    <table>
                        <thead>
                            <tr className='color'>
                                <th>Sr.No.</th>
                                <th>Events</th>
                                <th>     </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='t1'>
                                <td>1</td>
                                <td>Event 1:</td>

                                <td><button className="button1">Upload report</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>2</td>
                                <td>Event 2:</td>

                                <td><button className="button1">Upload report</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>3</td>
                                <td>Event 3:</td>

                                <td><button className="button1">Upload report</button></td>
                            </tr>


                        </tbody>
                    </table>
                </div>



            </div>

        </>
    )
}

export default UR