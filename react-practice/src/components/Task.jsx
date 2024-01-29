import { useState } from "react"

const Task = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [address, setAddress] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '' && age === '' && address === '') return alert('All field required')
        let obj = {
            _name: name,
            _age: age,
            _address: address,
        }
        console.log(obj);
        //  Datatbase url
        alert('Form submitted successfully')
        setName('')
        setAge('')
        setAddress('')
    }
    return (
        <div>

            <div >
                <div className=" p-5 bg-purple-700 flex-col gap-2 w-1/2 mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col  gap-2 ">
                        <input type="text" value={name} onChange={handleChange} placeholder="name" />
                        <input type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
                        <input type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        contact
                        gender
                        <button className="bg-red-900 p-3" type="submit">Submit</button>
                    </form>
                </div>
                <div className="flex  flex-col border border-purple-900 rounded-lg w-1/2 mx-auto mt-2 items-center">
                    <div>Output</div>
                    <div className=' flex flex-col'>
                        <p>Name: {name}</p>
                        <p>AGe: {age}</p>
                        <p>Address: {address}</p>
                        <p>Contact: </p>
                        <p>Gender:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
