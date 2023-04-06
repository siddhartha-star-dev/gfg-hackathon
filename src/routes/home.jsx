
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
const Home = () => {
    const data = [
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        }
        , {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        },
        {
            disease: "skjd",
            category: "sdwed",
            date: "12/2/23"

        }
    ];
    return (
        <>
            <Stack className="mt-20 ml-10" spacing={4} direction="row">
                <Link to='/previousinfo'>
                    <Button variant="contained">previous info</Button>
                </Link>
                <Link to='/doctorform'>
                    <Button variant="contained">doctor form</Button>
                </Link>

            </Stack>

            <div className="flex flex-wrap gap-12 p-10 items-center justify-center text-gray-600">
                {data.map((d, i) => {
                    return (
                        <div key={i} className="w-[20rem]">
                            <Paper className="" elevation={15}>
                                <div><img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" className="rounded-t-md" /></div>
                                <div className="p-6">
                                <div>Disease: {d.disease}</div>
                                <div>category: {d.category} </div>
                                <div>date:{d.date}</div>
                                </div>
                            </Paper>
                        </div>
                    )
                })}

            </div>

        </>


    );

}
export default Home;