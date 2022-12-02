import React from 'react'
import { Container } from 'react-bootstrap'
const Chartpic = new URL("./images/chart.png", import.meta.url)
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
export const ROs = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div>

            <div className='box'>
                <img src={Chartpic} />
                <p > The Online Monitoring and Evaluation System for ICCR’s Regional Offices(ROs), the solution proposes to divide the activities in three different types.<br />
                    The activities would be classified as:<br />
                    • ICCR Annual Calendar Activity: Regional Office have to select minimum number of prescribed activities from annual calendar, conduct them and upload their report.<br />
                    • Self-Driven Activities: Regional Offices are situated in states with diverse cultures, thus regional offices are encouraged to conduct self-driven activities promoting regional culture.<br />
                    • ICCR HQ Driven Activities: The ICCR HQ at national level may also conduct activities different from Annual Calendar, RO’s will participate in those activities and upload its report.<br />
                </p>
            </div>
            <hr />
            <div>
                <button
                    onClick={() => {
                        setIsOpen(true)
                    }}
                >
                    Open
                </button>
                <DatePicker
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    defaultValue={new Date(2022, 8, 8)}
                    minDate={new Date(2022, 10, 10)}
                    maxDate={new Date(2023, 0, 10)}
                    headerFormat='DD, MM dd'
                />
            </div>

        </div>
    )
}

export default ROs
