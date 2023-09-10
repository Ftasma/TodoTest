import{useState, useEffect} from 'react'
import moment from "moment"
import { Calendar } from './ui/calendar'
const CalendarCom = () => {
const [date, setDate]= useState<Date | undefined> (new Date())
const [result, setResult]= useState<DateRes[] | undefined> ([])
const [year, setYear]= useState<number| undefined> ()
const [month, setMonth]= useState<number| undefined> ()
interface DateRes {
  date: string,
  dayOfWeek: string,
  dayOfWeekText: number,
}


    function getDaysInMonthWithWeekdays(
      year: number|undefined,
      month: number|undefined,
    ){
      const days: DateRes[]|null=[]
      const startDate =moment({year,month,day:1})
      const endDate = moment(startDate).endOf('month')

      while(startDate.isSameOrBefore(endDate,'day')){
        days.push({
          date: startDate.format('YYYY-MM-DD'),
          dayOfWeek: startDate.format('day'),
          dayOfWeekText: startDate.day()
        })
        startDate.add(1,'day')
      }
      setResult(days)
    }
      useEffect(
        ()=>{
          setYear(date?.getFullYear())
          setMonth(date?.getMonth())
          getDaysInMonthWithWeekdays(year, month)
        },[date]
      )
  return (
    <div className="flex gap-[40px] items-start justify-center">
    <section className=" w-[840px] overflow-x-auto"> 
        <div className=' w-full'>

        </div>
       </section>
    <aside className=' mt-3 px-4'>
     <Calendar
     mode="single"
     selected={date}
     onDayClick={setDate}
     className=" rounded-md border"/>
    </aside>
    </div>
    
  )
}
export default CalendarCom
