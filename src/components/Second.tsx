import { Button } from "./ui/button"
import { BsPlusLg } from "react-icons/bs"
const Second = () => {
  return (
    <section className=" capitalize flex px-3 mt-8 justify-between">
        <aside className=" flex  flex-col">
            <div>
                 <h1 className=" font-bold text-3xl">good morning!</h1>
            </div>
            <div>
                <p>You got some tasks to do</p>
            </div>
        </aside> 
        <aside>
            <Button className="  flex gap-3">
                <div className="">
                    <BsPlusLg className="hover:animate-spin"/>
                </div>
                     <p className=" md:block hidden">Create new task</p>
                </Button>
        </aside>
    </section>
  )
}
export default Second