import Head from "next/head"
import Link from "next/link"
import styles from '../../styles/Users.module.css'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { createContext, useContext, useState } from 'react'

export async function getStaticProps() {
    //const url = 'https://jsonplaceholder.typicode.com/'
    const url = 'https://randomuser.me/api/'
    const res = await fetch(`${url}/?results=10`)
    const data = await res.json()
    const [gender, setGender] = useState()

    data.results.forEach((user, index) => {
        user.id = index + 1
    })

    const chooseGender = () => {
        gender = user.gender
        if (gender === "female")
            setGender("<td><BsGenderFemale/></td>")
        else {
            setGender("<td><BsGenderMale/></td>")
        }
    }

    return {
        props: {
            users: data.results,
        },
    }
}

const UsersList = ({ users }) => {

    return (
        <>
            <Head>
                <title>Relação de Usuários</title>
            </Head>
            <h1>Users List Page</h1>

            <table className={styles.zebra}>
                <thead>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Gender</td>
                    <td>Location</td>
                    <td>Country</td>
                </thead>

                {
                    users.map((user) => (
                        <tr key={user.login.uuid}>
                            <td >
                                <Link href="/profile">
                                    <a>
                                        {[user.name.first, " ", user.name.last]}
                                    </a>
                                </Link>
                            </td>
                            <td>{user.email}</td>
                            {() => { chooseGender }}
                            {/* <td>{
                               ()=>{chooseGender(gender)}
                            }</td> */}
                            <td>{user.location.city}</td>
                            <td>{user.location.country}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}
export default UsersList
