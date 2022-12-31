import { useState } from 'react'


interface NaamProps {
    name: string,
    age: number,
    year: number
}
const Filtering = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [sort, setSort] = useState<string>("name");

    const namen: NaamProps[] = [
        { name: "Jan", age: 24, year: 1 },
        { name: "Jacob", age: 21, year: 2 },
        { name: "Joris", age: 22, year: 3 },
        { name: "Piet", age: 23, year: 2 },
        { name: "Mathias", age: 22, year: 3 },
        { name: "Muhammad", age: 20, year: 1 },
        { name: "Perneel", age: 22, year: 3 },
        { name: "Joris", age: 20, year: 3 },
        { name: "Korneel", age: 21, year: 4 }
    ];

    namen.sort((a, b) => {
        if (sort === "name") {
            return a.name.localeCompare(b.name);
        } else if (sort === "age") {
            return a.age - b.age;
        } else if (sort === "year") {
            return a.year - b.year;
        }
        else {
            return 0
        }
    })

    return (
        <>
            <div>
                <label>Search:
                    <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{ fontWeight: sort === "name" ? "bold" : "normal" }} onClick={() => setSort("name")}>Name</th>
                        <th style={{ fontWeight: sort === "age" ? "bold" : "normal" }} onClick={() => setSort("age")}>Age</th>
                        <th style={{ fontWeight: sort === "year" ? "bold" : "normal" }} onClick={() => setSort("year")}>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {namen.filter((student => student.name.toUpperCase().startsWith(searchText.toUpperCase()))).map((student) => (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.year}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table >
        </>
    )
}

export default Filtering