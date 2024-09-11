import {Box, Button} from "@chakra-ui/react"

const asyncFunc = async () => {
    // всегда вызывает промис
    return 'Success!'
}

console.log(asyncFunc()
    .then(value => console.log(value))
    .catch((error) => console.log(error.message))
)

const errorAsyncFunc = async() => {
    throw new Error('Error!')
}

console.log(errorAsyncFunc()
    .then(value => console.log(value))
    .catch((error) => console.log(error.message)))

const timerPromise = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve(), 2000))

const asyncFn2 = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer stops', endTime - startTime)
}

console.log(asyncFn2())


const Esercizio = () => {
    return (
        <Box p={10}>
            <Button>Button</Button>
        </Box>
    )
}

export default Esercizio